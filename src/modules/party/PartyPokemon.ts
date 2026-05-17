import { Computed, Observable, ObservableArray } from 'knockout';
import { Saveable } from '../DataStore/common/Saveable';
import KeyItemType from '../enums/KeyItemType';
import PokemonType from '../enums/PokemonType';
import { BattlePokemonGender, BREEDING_ATTACK_BONUS, ConsumableType, EGG_CYCLE_MULTIPLIER, EP_CHALLENGE_MODIFIER, EP_EV_RATIO, Pokerus, Region, ShadowStatus, StoneType, VitaminType } from '../GameConstants';
import GameHelper from '../GameHelper';
import AttackGainConsumable from '../items/AttackGainConsumable';
import AttackBonusHeldItem from '../items/heldItem/AttackBonusHeldItem';
import ExpGainedBonusHeldItem from '../items/heldItem/ExpGainedBonusHeldItem';
import HeldItem from '../items/heldItem/HeldItem';
import HybridAttackBonusHeldItem from '../items/heldItem/HybridAttackBonusHeldItem';
import ItemHandler from '../items/ItemHandler';
import { ItemList } from '../items/ItemList';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import { EvoData, EvoTrigger, StoneEvoData } from '../pokemons/evolutions/Base';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { pokemonList, pokemonMap } from '../pokemons/PokemonList';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import SearchSetting from '../settings/SearchSetting';
import Settings from '../settings/Settings';
import Rand from '../utilities/Rand';
import PokemonCategories, { PokemonCategory } from './Category';
import EvolutionHandler from './evolutions/EvolutionHandler';
import { levelRequirements } from './LevelType';
import PartyHelper from './PartyHelper';

enum PartyPokemonSaveKeys {
    attackBonusPercent = 0,
    attackBonusAmount,
    vitaminsUsed,
    exp,
    breeding,
    shiny,
    category,
    levelEvolutionTriggered,
    pokerus,
    effortPoints,
    heldItem,
    defaultFemaleSprite,
    hideShinyImage,
    nickname,
    shadow,
    showShadowImage,
}

class PartyPokemon implements Saveable {
    saveKey = '';

    public exp = 0;
    public evs: Computed<number>;
    _attack: Computed<number>;
    private _canUseHeldItem: Computed<boolean>;

    defaults = {
        attackBonusPercent: 0,
        attackBonusAmount: 0,
        vitaminsUsed: {},
        exp: 0,
        breeding: false,
        shiny: false,
        category: [0],
        levelEvolutionTriggered: false,
        pokerus: Pokerus.Uninfected,
        effortPoints: 0,
        defaultFemaleSprite: false,
        hideShinyImage: false,
        nickname: '',
        shadow: ShadowStatus.None,
        showShadowImage: false,
    };

    // Saveable observables
    // Consider the Real evolution challenge before adding stuff here
    _breeding: Observable<boolean>;
    _shiny: Observable<boolean>;
    _level: Observable<number>;
    _attackBonusPercent: Observable<number>;
    _attackBonusAmount: Observable<number>;
    _category: ObservableArray<number>;
    _translatedName: Computed<string>;
    _nickname: Observable<string>;
    _displayName: Computed<string>;
    _pokerus: Observable<Pokerus>;
    vitaminsUsed: Record<VitaminType, Observable<number>>;
    _effortPoints: Observable<number>;
    heldItem: Observable<HeldItem>;
    defaultFemaleSprite: Observable<boolean>;
    hideShinyImage: Observable<boolean>;
    _shadow: Observable<ShadowStatus>;
    _showShadowImage: Observable<boolean>;

    public clickAttackBonus = ko.pureComputed((): number => {
        // Caught + Shiny + Resistant + Purified
        const bonus = 1 + +this.shiny + +(this.pokerus >= Pokerus.Resistant) + +(this.shadow == ShadowStatus.Purified);
        const heldItemMultiplier = this.heldItem() instanceof HybridAttackBonusHeldItem ? (this.heldItem() as HybridAttackBonusHeldItem).clickAttackBonus : 1;
        return bonus * heldItemMultiplier;
    });

    totalVitaminsUsed = ko.pureComputed((): number => {
        return Object.values(this.vitaminsUsed).reduce((sum, obs) => sum + obs(), 0);
    });

    vitaminUsesRemaining = ko.pureComputed((): number => {
        // Allow 5 for every region visited (including Kanto)
        return (player.highestRegion() + 1) * 5 - this.totalVitaminsUsed();
    });

    calculateEVAttackBonus = ko.pureComputed((): number => {
        if (this.pokerus < Pokerus.Contagious) {
            return 1;
        }
        return (this.evs() < 50) ? (1 + 0.01 * this.evs()) : (Math.pow(this.evs(), Math.log(1.5) / Math.log(50)));
    });

    getEggSteps = ko.pureComputed((): number => {
        const div = 300;
        const extraCycles = (this.vitaminsUsed[VitaminType.Calcium]() + this.vitaminsUsed[VitaminType.Protein]()) / 2;
        const steps = App.game.breeding.getSteps(this.eggCycles + extraCycles);
        return steps <= div ? steps : Math.round(((steps / div) ** (1 - this.vitaminsUsed[VitaminType.Carbos]() / 70)) * div);
    });

    getBreedingAttackBonus = ko.pureComputed((): number => {
        const attackBonusPercent = (BREEDING_ATTACK_BONUS + this.vitaminsUsed[VitaminType.Calcium]()) / 100;
        const proteinBoost = this.vitaminsUsed[VitaminType.Protein]();
        let attackBonus = (this.baseAttack * attackBonusPercent) + proteinBoost;
        if (Settings.getSetting('breedingEfficiencyAllModifiers').observableValue()) {
            attackBonus *= this.calculateEVAttackBonus() * this.heldItemAttackBonus() * this.shadowAttackBonus();
        }
        return attackBonus;
    });

    heldItemAttackBonus = ko.pureComputed((): number => {
        return this.heldItem && this.heldItem() instanceof AttackBonusHeldItem ? (this.heldItem() as AttackBonusHeldItem).attackBonus : 1;
    });

    shadowAttackBonus = ko.pureComputed((): number => {
        return this.shadow == ShadowStatus.Shadow ? 0.8 : (this.shadow == ShadowStatus.Purified ? 1.2 : 1);
    });

    breedingEfficiency = ko.pureComputed((): number => {
        const breedingAttackBonus = this.getBreedingAttackBonus();
        return (breedingAttackBonus / this.getEggSteps()) * EGG_CYCLE_MULTIPLIER;
    });

    public isHatchable = ko.pureComputed(() => {
        return !(this.breeding || this.level < 100);
    });

    public isHatchableFiltered = ko.pureComputed(() => {
        return this.isHatchable() && this.matchesHatcheryFilters();
    });

    public matchesHatcheryFilters = ko.pureComputed(() => {
        if (this.id <= 0) {
            return false;
        }
        // Check if search matches englishName or displayName
        const nameFilterSetting = Settings.getSetting('breedingNameFilter') as SearchSetting;
        if (nameFilterSetting.observableValue() != '') {
            if (!PokemonHelper.matchPokemonByNames(nameFilterSetting.regex(), this.name, this)) {
                return false;
            }
        }

        // Check if search matches species number
        const idFilter = Settings.getSetting('breedingIDFilter').observableValue();
        if (idFilter > -1 && idFilter != Math.floor(this.id)) {
            return false;
        }

        // Check based on categories
        const categoryFilter = Settings.getSetting('breedingCategoryFilter').observableValue();
        // Categorized only
        if (categoryFilter == -2 && this.isUncategorized()) {
            return false;
        }
        // Selected category
        if (categoryFilter >= 0 && !this.category.includes(categoryFilter)) {
            return false;
        }

        // Check based on shiny status
        const shinyFilter = Settings.getSetting('breedingShinyFilter').observableValue();
        if (shinyFilter >= 0 && +this.shiny !== shinyFilter) {
            return false;
        }

        // Check based on native region
        const unlockedRegionsMask = (2 << player.highestRegion()) - 1;
        const regionFilterMask = Settings.getSetting('breedingRegionFilter').observableValue() & unlockedRegionsMask;
        if (regionFilterMask !== unlockedRegionsMask) {
            const nativeRegion = PokemonHelper.calcNativeRegion(this.name);
            // With the region filter active, regionless pokemon should be shown only if no regions are selected
            const nativeRegionInFilter = nativeRegion !== Region.none ?
                (1 << nativeRegion) & regionFilterMask :
                regionFilterMask === 0;
            if (!nativeRegionInFilter) {
                return false;
            }
        }

        // Check based on Pokerus status
        const pokerusFilter = Settings.getSetting('breedingPokerusFilter').observableValue();
        if (pokerusFilter > -1 && this.pokerus !== pokerusFilter) {
            return false;
        }

        const uniqueTransformationFilter = Settings.getSetting('breedingUniqueTransformationFilter').observableValue();
        const pokemon = PokemonHelper.getPokemonById(this.id);
        // Only Base Pokémon with Mega available
        if (uniqueTransformationFilter == 'mega-available' && !PokemonHelper.hasMegaEvolution(pokemon.name)) {
            return false;
        }
        // Only Base Pokémon without Mega Evolution
        if (uniqueTransformationFilter == 'mega-unobtained' && !PokemonHelper.hasUncaughtMegaEvolution(pokemon.name)) {
            return false;
        }
        // Only Mega Pokémon
        if (uniqueTransformationFilter == 'mega-evolution' && !PokemonHelper.isMegaEvolution(pokemon.name)) {
            return false;
        }

        // Check to exclude alternate forms
        const hideAltFilter = Settings.getSetting('breedingHideAltFilter').observableValue();
        if (hideAltFilter && !Number.isInteger(pokemon.id)) {
            // Don't exclude alt forms native to a different region, as they're considered a main form for that region's progression
            const nativeRegion = PokemonHelper.calcNativeRegion(this.name);
            const hasBaseFormInSameRegion = pokemonList.some((p) => Math.floor(p.id) == Math.floor(pokemon.id) && p.id < pokemon.id && PokemonHelper.calcNativeRegion(p.name) == nativeRegion);
            if (hasBaseFormInSameRegion) {
                return false;
            }
        }

        // Check if either of the types match
        const type1: (PokemonType | null) = Settings.getSetting('breedingType1Filter').observableValue();
        const type2: (PokemonType | null) = Settings.getSetting('breedingType2Filter').observableValue();
        if (type1 !== null || type2 !== null) {
            const { type: types } = pokemonMap[this.name];
            if ([type1, type2].includes(PokemonType.None)) {
                const type = (type1 == PokemonType.None) ? type2 : type1;
                if (!PartyHelper.isPureType(this, type)) {
                    return false;
                }
            } else if ((type1 !== null && !types.includes(type1)) || (type2 !== null && !types.includes(type2))) {
                return false;
            }
        }

        return true;
    });

    public isUncategorized = ko.pureComputed(() => this.category[0] === 0 && this.category.length === 1);

    constructor(
        public id: number,
        public name: PokemonNameType,
        public evolutions: EvoData[],
        public baseAttack: number,
        public eggCycles: number,
        shiny: boolean,
        public gender: BattlePokemonGender,
        shadow: ShadowStatus,
    ) {
        this.vitaminsUsed = Object.fromEntries(GameHelper.enumNumbers(VitaminType).map((vitamin) => {
            return [vitamin, ko.observable(0).extend({ numeric: 0 })];
        })) as Record<VitaminType, Observable<number>>;
        this._breeding = ko.observable(false).extend({ boolean: null });
        this._shiny = ko.observable(shiny).extend({ boolean: null });
        this._level = ko.observable(1).extend({ numeric: 0 });
        this._attackBonusPercent = ko.observable(0).extend({ numeric: 0 });
        this._attackBonusAmount = ko.observable(0).extend({ numeric: 0 });
        this._category = ko.observableArray([0]);
        this._translatedName = PokemonHelper.displayName(name);
        this._pokerus = ko.observable(Pokerus.Uninfected).extend({ numeric: 0 });
        this._effortPoints = ko.observable(0).extend({ numeric: 0 });
        this.evs = ko.pureComputed(() => {
            return Math.floor(this.calculateEVs());
        });
        const resistantSub = this.evs.subscribe((newValue: number) => {
            // Change Pokerus status to Resistant when reaching 50 EVs
            if (this.pokerus && newValue >= 50) {
                // Only notify if not yet Resistant, i.e. not when game loads already-Resistant party members
                if (this.pokerus < Pokerus.Resistant) {
                    this.pokerus = Pokerus.Resistant;

                    // Log and notify player
                    Notifier.notify({
                        message: `${this.name} has become Resistant to Pokérus.`,
                        pokemonImage: PokemonHelper.getImage(this.id),
                        type: NotificationConstants.NotificationOption.info,
                        sound: NotificationConstants.NotificationSound.General.pokerus,
                        setting: NotificationConstants.NotificationSetting.General.pokerus,
                    });
                    App.game.logbook.newLog(LogBookTypes.NEW, createLogContent.resistantToPokerus({ pokemon: this.name }));
                }
                resistantSub.dispose();
            }
        });
        this.heldItem = ko.observable(undefined);
        this.defaultFemaleSprite = ko.observable(false);
        this.hideShinyImage = ko.observable(false);
        this._nickname = ko.observable();
        this._nickname.subscribe((value: string) => {
            if (value === this._translatedName()) {
                AchievementHandler.unlockAchievement('A cat named Cat');
            }
        });
        this._displayName = ko.pureComputed(() => this._nickname() ? this._nickname() : this._translatedName());
        this._shadow = ko.observable(shadow);
        this._showShadowImage = ko.observable(false);
        this._attack = ko.computed(() => this.calculateAttack());
        this._canUseHeldItem = ko.pureComputed(() => this.heldItem()?.canUse(this));
        this._canUseHeldItem.subscribe((canUse: boolean) => {
            if (!canUse && this.heldItem()) {
                this.addOrRemoveHeldItem(this.heldItem());
            }
        });
        this._category.subscribe((newValue: number[]) => {
            if (!newValue.length) {
                this._category.push(0); // add None category
            } else if (newValue.length > 1) {
                this.removeCategory(0); // remove None category
            }
        });
    }

    public calculateAttack(ignoreLevel = false): number {
        const attackBonusMultiplier = 1 + (this.attackBonusPercent / 100);
        const levelMultiplier = ignoreLevel ? 1 : this.level / 100;
        const evsMultiplier = this.calculateEVAttackBonus();
        const heldItemMultiplier = this.heldItemAttackBonus();
        const shadowMultiplier = this.shadowAttackBonus();
        return Math.max(1, Math.floor((this.baseAttack * attackBonusMultiplier + this.attackBonusAmount) * levelMultiplier * evsMultiplier * heldItemMultiplier * shadowMultiplier));
    }

    public canCatchPokerus(): boolean {
        return App.game.keyItems.hasKeyItem(KeyItemType.Pokerus_virus);
    }

    public calculatePokerusTypes(): Set<number> {
        // Egg can't hatch and valid Egg has pokerus
        const eggTypes: Set<number> = new Set();
        for (let i = 0; i < App.game.breeding.eggList.length; i++) {
            if (i > App.game.breeding.hatcheryHelpers.hired().length - 1) {
                const egg = App.game.breeding.eggList[i]();
                if (!egg.canHatch() && !egg.isNone()) {
                    const pokerus = App.game.party.getPokemon(pokemonMap[egg.pokemon].id)?.pokerus;
                    if (pokerus && pokerus >= Pokerus.Contagious) {
                        eggTypes.add(PokemonHelper.getPokemonByName(pokemonMap[App.game.breeding.eggList[i]().pokemon].name).type1);
                        eggTypes.add(PokemonHelper.getPokemonByName(pokemonMap[App.game.breeding.eggList[i]().pokemon].name).type2);
                    }
                }
            }
        }
        if (eggTypes.has(PokemonType.None)) {
            eggTypes.delete(PokemonType.None);
        }
        return eggTypes;
    }

    public calculatePokerus(index: number) {
        const eggTypes = this.calculatePokerusTypes();
        for (let i = index; i < App.game.breeding.eggList.length; i++) {
            const pokemon = App.game.breeding.eggList[i]().partyPokemon();
            if (pokemon && pokemon.pokerus == Pokerus.Uninfected) {
                const dataPokemon = PokemonHelper.getPokemonByName(pokemon.name);
                if (eggTypes.has(dataPokemon.type1) || eggTypes.has(dataPokemon.type2)) {
                    pokemon.pokerus = Pokerus.Infected;
                }
            }
        }
    }

    calculateLevelFromExp() {
        const levelType = PokemonHelper.getPokemonByName(this.name).levelType;
        for (let i = this.level - 1; i < levelRequirements[levelType].length; i++) {
            if (levelRequirements[levelType][i] > this.exp) {
                return Math.min(i, App.game.badgeCase.maxLevel());
            }
        }
        return this.level;
    }

    public calculateEVs(): number {
        const power = App.game.challenges.list.slowEVs.active.peek() ? EP_CHALLENGE_MODIFIER : 1;
        return this._effortPoints() / EP_EV_RATIO / power;
    }

    public gainExp(exp: number) : number {
        const expGained = exp * this.getExpMultiplier();
        if (this.level < App.game.badgeCase.maxLevel()) {
            this.exp += expGained;

            const oldLevel = this.level;
            const newLevel = this.calculateLevelFromExp();
            if (oldLevel !== newLevel) {
                this.level = newLevel;
                this.checkForLevelEvolution();
            }
        }
        return expGained;
    }

    private getExpMultiplier() {
        let result = 1;
        if (this.heldItem() && this.heldItem() instanceof ExpGainedBonusHeldItem) {
            result *= (this.heldItem() as ExpGainedBonusHeldItem).gainedBonus;
        }
        return result;
    }

    public gainLevels(amount: number): number {
        if (amount < 0) {
            throw new Error(`PartyPokemon ${this.name} cannot gain negative levels!`);
        }
        const oldLevel = this.level;
        const newLevel = Math.min(this.level + amount, App.game.badgeCase.maxLevel());
        if (oldLevel !== newLevel) {
            this.level = newLevel;
            // Adjust exp to match
            const levelType = PokemonHelper.getPokemonByName(this.name).levelType;
            this.exp = levelRequirements[levelType][newLevel - 1];
            // Just leveled up so...
            this.checkForLevelEvolution();
        }
        return newLevel - oldLevel;
    }

    public checkForLevelEvolution() {
        if (this.breeding || this.evolutions == null || this.evolutions.length == 0) {
            return;
        }

        for (const evo of this.evolutions) {
            if (evo.trigger === EvoTrigger.LEVEL && EvolutionHandler.isSatisfied(evo)) {
                EvolutionHandler.evolve(evo);
            }
        }
    }

    public canUseStone(stoneType: StoneType): boolean {
        return this.evolutions?.filter(
            (evo) => evo.trigger === EvoTrigger.STONE
                && (evo as StoneEvoData).stone == stoneType
                && EvolutionHandler.isSatisfied(evo),
        ).length > 0;
    }

    public useStone(stoneType: StoneType): boolean {
        const possibleEvolutions: EvoData[] = [];
        for (const evo of this.evolutions) {
            if (evo.trigger === EvoTrigger.STONE && (evo as StoneEvoData).stone == stoneType && EvolutionHandler.isSatisfied(evo)) {
                possibleEvolutions.push(evo);
            }
        }
        if (possibleEvolutions.length !== 0) {
            return EvolutionHandler.evolve(Rand.fromArray(possibleEvolutions));
        }
        return false;
    }

    public useVitamin(vitamin: VitaminType, amount: number): void {
        if (App.game.challenges.list.disableVitamins.active()) {
            Notifier.notify({
                title: 'Challenge Mode',
                message: 'Vitamins are disabled',
                type: NotificationConstants.NotificationOption.danger,
            });
            return;
        }

        if (this.breeding) {
            Notifier.notify({
                message: 'Vitamins cannot be modified for Pokémon in the hatchery or queue.',
                type: NotificationConstants.NotificationOption.warning,
            });
            return;
        }

        const usesRemaining = this.vitaminUsesRemaining();

        // If no more vitamins can be used on this Pokemon
        if (!usesRemaining) {
            Notifier.notify({
                message: 'This Pokémon cannot increase their power any higher!',
                type: NotificationConstants.NotificationOption.warning,
            });
            return;
        }

        // The lowest number of amount they want to use, total in inventory, uses remaining for this Pokemon
        amount = Math.min(amount, player.itemList[VitaminType[vitamin]](), usesRemaining);

        // Apply the vitamin
        if (ItemHandler.useItem(VitaminType[vitamin], amount)) {
            GameHelper.incrementObservable(this.vitaminsUsed[vitamin], amount);
        }
    }

    public removeVitamin(vitamin: VitaminType, amount: number): void {
        if (this.breeding) {
            Notifier.notify({
                message: 'Vitamins cannot be modified for Pokémon in the hatchery or queue.',
                type: NotificationConstants.NotificationOption.warning,
            });
            return;
        }

        const vitaminName = VitaminType[vitamin];
        amount = Math.min(amount, this.vitaminsUsed[vitamin]());

        if (amount <= 0) {
            Notifier.notify({
                message: `This Pokémon doesn't have any ${vitaminName} to remove!`,
                type: NotificationConstants.NotificationOption.warning,
            });
            return;
        }

        GameHelper.incrementObservable(this.vitaminsUsed[vitamin], -amount);
        GameHelper.incrementObservable(player.itemList[vitaminName], amount);
    }

    public setVitaminAmount(vitamin: VitaminType, amount: number) {
        if (this.breeding || isNaN(amount)) {
            return;
        }

        amount = Math.max(0, amount);
        const diff = Math.floor(amount) - this.vitaminsUsed[vitamin]();
        if (diff === 0) {
            return;
        } else if (diff > 0) {
            this.useVitamin(vitamin, diff);
        } else if (diff < 0) {
            this.removeVitamin(vitamin, Math.abs(diff));
        }
    }

    public useConsumable(type: ConsumableType, amount: number): void {
        const itemName = ConsumableType[type];
        if (!player.itemList[itemName]()) {
            return Notifier.notify({
                message : `You do not have any more ${ItemList[itemName].displayName}`,
                type : NotificationConstants.NotificationOption.danger,
            });
        }

        switch (type) {
            case ConsumableType.Rare_Candy:
            case ConsumableType.Magikarp_Biscuit:
                amount = Math.min(amount, player.itemList[itemName]());
                if (this.breeding) {
                    return Notifier.notify({
                        message : `You cannot use ${ItemList[itemName].displayName} on Pokémon in the hatchery.`,
                        type : NotificationConstants.NotificationOption.danger,
                    });
                }
                const curAttack = this.calculateAttack(true);
                const bonus = BREEDING_ATTACK_BONUS * ((ItemList[itemName] as AttackGainConsumable).bonusMultiplier ?? 1);
                GameHelper.incrementObservable(this._attackBonusPercent, bonus * amount);
                Notifier.notify({
                    message : `${this.displayName} gained ${this.calculateAttack(true) - curAttack} attack points`,
                    type : NotificationConstants.NotificationOption.success,
                    pokemonImage : PokemonHelper.getImage(this.id),
                });
                const levelsGained = this.gainLevels(amount);
                if (levelsGained === 0) {
                    // Rare Candies cause level evolutions even at max level
                    this.checkForLevelEvolution();
                }
                break;
            default :
        }
        GameHelper.incrementObservable(player.itemList[itemName], -amount);
        Notifier.notify({
            message : `You used ${amount} of ${ItemList[itemName].displayName}`,
            type : NotificationConstants.NotificationOption.success,
            image : ItemList[itemName].image,
        });
    }

    public giveHeldItem = (heldItem: HeldItem): void => {
        if (!this.heldItem() || heldItem.name != this.heldItem().name) {
            if (heldItem && !heldItem.canUse(this)) {
                Notifier.notify({
                    message: `This Pokémon cannot use ${heldItem.displayName}.`,
                    type: NotificationConstants.NotificationOption.warning,
                });
                return;
            }
            if (player.amountOfItem(heldItem.name) < 1) {
                Notifier.notify({
                    message: `You don't have any ${heldItem.displayName} left.`,
                    type: NotificationConstants.NotificationOption.warning,
                });
                return;
            }
        }

        if (this.heldItem() && Settings.getSetting('confirmChangeHeldItem').value) {
            Notifier.confirm({
                title: 'Remove held item',
                message: 'Held items are one time use only.\nRemoved items will be lost.\nAre you sure you want to remove it?',
                confirm: 'Remove',
                type: NotificationConstants.NotificationOption.warning,
            }).then((confirmed) => {
                if (confirmed) {
                    this.addOrRemoveHeldItem(heldItem);
                }
            });
        } else { // Notifier.confirm is async
            this.addOrRemoveHeldItem(heldItem);
        }
    };

    private addOrRemoveHeldItem(heldItem: HeldItem) {
        if (this.heldItem() && this.heldItem().name == heldItem.name) {
            this.heldItem(undefined);
        } else {
            player.loseItem(heldItem.name, 1);
            this.heldItem(heldItem);
        }
    }

    public addCategory(id: number) {
        if (id === 0) {
            this.resetCategory();
        } else if (!this.category.includes(id)) {
            this._category.push(id);
        }
    }

    public removeCategory(id: number) {
        if (id === 0 && this.category.length === 1) {
            // Can't remove None category without another category present
            return;
        }
        const index = this.category.indexOf(id);
        if (index > -1) {
            this._category.splice(index, 1);
        }
    }

    public toggleCategory(id: number) {
        if (this.category.includes(id)) {
            this.removeCategory(id);
        } else {
            this.addCategory(id);
        }
    }

    public resetCategory(): void {
        this.category = [...this.defaults.category];
    }

    public getCategorySortValues(): Array<number> {
        return (<PokemonCategory[]>PokemonCategories.categories()).map((c, i) => [c.id, i])
            .filter(([id]) => this.category.includes(id))
            .map(([, index]) => index);
    }

    public fromJSON(json: Record<string, any>): void {
        if (json == null) {
            return;
        }

        if (json.id == null) {
            return;
        }

        this.attackBonusPercent = json[PartyPokemonSaveKeys.attackBonusPercent] ?? this.defaults.attackBonusPercent;
        this.attackBonusAmount = json[PartyPokemonSaveKeys.attackBonusAmount] ?? this.defaults.attackBonusAmount;
        if (json[PartyPokemonSaveKeys.vitaminsUsed]) {
            Object.entries(json[PartyPokemonSaveKeys.vitaminsUsed]).forEach(([i, v]) => {
                this.vitaminsUsed[i](v ?? 0);
            });
        }
        this.exp = json[PartyPokemonSaveKeys.exp] ?? this.defaults.exp;
        this.breeding = json[PartyPokemonSaveKeys.breeding] ?? this.defaults.breeding;
        this.shiny = json[PartyPokemonSaveKeys.shiny] ?? this.defaults.shiny;
        this.category = json[PartyPokemonSaveKeys.category] ?? [...this.defaults.category];
        this.level = this.calculateLevelFromExp();
        this.pokerus = json[PartyPokemonSaveKeys.pokerus] ?? this.defaults.pokerus;
        this.effortPoints = json[PartyPokemonSaveKeys.effortPoints] ?? this.defaults.effortPoints;
        this.heldItem(
            json[PartyPokemonSaveKeys.heldItem] && ItemList[json[PartyPokemonSaveKeys.heldItem]] instanceof HeldItem
                ? ItemList[json[PartyPokemonSaveKeys.heldItem]] as HeldItem
                : undefined,
        );
        this.defaultFemaleSprite(json[PartyPokemonSaveKeys.defaultFemaleSprite] ?? this.defaults.defaultFemaleSprite);
        this.hideShinyImage(json[PartyPokemonSaveKeys.hideShinyImage] ?? this.defaults.hideShinyImage);
        this._nickname(json[PartyPokemonSaveKeys.nickname] || this.defaults.nickname);
        this.shadow = json[PartyPokemonSaveKeys.shadow] ?? this.defaults.shadow;
        this._showShadowImage(json[PartyPokemonSaveKeys.showShadowImage] ?? this.defaults.showShadowImage);
    }

    public toJSON() {
        const output = {
            id: this.id,
            [PartyPokemonSaveKeys.attackBonusPercent]: this.attackBonusPercent,
            [PartyPokemonSaveKeys.attackBonusAmount]: this.attackBonusAmount,
            [PartyPokemonSaveKeys.vitaminsUsed]: ko.toJS(this.vitaminsUsed),
            [PartyPokemonSaveKeys.exp]: this.exp,
            [PartyPokemonSaveKeys.breeding]: this.breeding,
            [PartyPokemonSaveKeys.shiny]: this.shiny,
            [PartyPokemonSaveKeys.category]: this.isUncategorized() ? undefined : this.category,
            [PartyPokemonSaveKeys.pokerus]: this.pokerus,
            [PartyPokemonSaveKeys.effortPoints]: this.effortPoints,
            [PartyPokemonSaveKeys.heldItem]: this.heldItem()?.name,
            [PartyPokemonSaveKeys.defaultFemaleSprite]: this.defaultFemaleSprite(),
            [PartyPokemonSaveKeys.hideShinyImage]: this.hideShinyImage(),
            [PartyPokemonSaveKeys.nickname]: this.nickname || undefined,
            [PartyPokemonSaveKeys.shadow]: this.shadow,
            [PartyPokemonSaveKeys.showShadowImage]: this._showShadowImage(),
        };

        // Don't save anything that is the default option
        Object.entries(output).forEach(([key, value]) => {
            const defaultValue = this.defaults[PartyPokemonSaveKeys[key]];
            if (Array.isArray(value) && Array.isArray(defaultValue)) {
                // Compare array contents
                if (value.length === defaultValue.length && value.every((v, i) => v === defaultValue[i])) {
                    delete output[key];
                }
            } else if (value === defaultValue) {
                delete output[key];
            }
        });

        return output;
    }

    // Knockout getters/setter
    get level(): number {
        return this._level();
    }

    set level(level: number) {
        this._level(level);
    }

    get attack(): number {
        return this._attack();
    }

    get attackBonusAmount(): number {
        return this._attackBonusAmount();
    }

    set attackBonusAmount(attackBonusAmount: number) {
        this._attackBonusAmount(attackBonusAmount);
    }

    get attackBonusPercent(): number {
        return this._attackBonusPercent();
    }

    set attackBonusPercent(attackBonusPercent: number) {
        this._attackBonusPercent(attackBonusPercent);
    }

    get breeding(): boolean {
        return this._breeding();
    }

    set breeding(bool: boolean) {
        this._breeding(bool);
    }

    get pokerus(): Pokerus {
        return this._pokerus();
    }

    set pokerus(index: Pokerus) {
        this._pokerus(index);
    }

    get effortPoints(): number {
        return this._effortPoints();
    }

    set effortPoints(amount: number) {
        this._effortPoints(amount);
    }

    get shiny(): boolean {
        return this._shiny();
    }

    set shiny(bool: boolean) {
        this._shiny(bool);
    }

    get category(): Array<number> {
        return this._category();
    }

    set category(value: Array<number>) {
        this._category(value);
    }

    get nickname(): string {
        return this._nickname();
    }

    set nickname(nickname: string) {
        this._nickname(nickname);
    }

    get displayName(): string {
        return this._displayName();
    }

    get shadow(): ShadowStatus {
        return this._shadow();
    }

    set shadow(value: ShadowStatus) {
        this._shadow(value);
    }

    get showShadowImage(): boolean {
        return this._showShadowImage();
    }

    set showShadowImage(value: boolean) {
        this._showShadowImage(value);
    }
}

export default PartyPokemon;
