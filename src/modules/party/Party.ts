import { Computed } from 'knockout';
import App from '../App';
import { Feature } from '../DataStore/common/Feature';
import EffectEngineRunner from '../effectEngine/effectEngineRunner';
import OakItemType from '../enums/OakItemType';
import PokemonType from '../enums/PokemonType';
import { AlolaSubRegions, BASE_EP_YIELD, BattlePokemonGender, FLUTE_TYPE_ATTACK_MULTIPLIER, FluteItemType, PokemonStatisticsType, Pokerus, Region, SHADOW_EP_MODIFIER, ShadowStatus, SHINY_EP_MODIFIER, SubRegions } from '../GameConstants';
import GameHelper from '../GameHelper';
import FluteEffectRunner from '../gems/FluteEffectRunner';
import BattleItem from '../items/BattleItem';
import EVsGainedBonusHeldItem from '../items/heldItem/EvsGainedBonusHeldItem';
import { ItemList } from '../items/ItemList';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import Multiplier from '../multiplier/Multiplier';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import PokemonFactory from '../pokemons/PokemonFactory';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { pokemonMap } from '../pokemons/PokemonList';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import TypeHelper from '../types/TypeHelper';
import Weather from '../weather/Weather';
import WeatherType from '../weather/WeatherType';
import ClickAttackBreakdown from './ClickAttackBreakdown';
import PartyPokemon from './PartyPokemon';

class Party implements Feature {
    name = 'Pokemon Party';
    saveKey = 'party';

    private _caughtPokemon = ko.observableArray<PartyPokemon>([]);

    defaults = {
        caughtPokemon: [],
    };

    hasMaxLevelPokemon = ko.pureComputed(() => {
        return this.caughtPokemon.some(p => p.level === 100);
    }).extend({ rateLimit: 1000 });

    hasShadowPokemon = ko.computed(() => {
        return this.caughtPokemon.some(p => p.shadow === ShadowStatus.Shadow);
    }).extend({ rateLimit: 1000 });

    // This will be completely rebuilt each time a pokemon is caught.
    // Not ideal but still better than mutliple locations scanning through the list to find what they want
    private _caughtPokemonLookup = ko.computed(() => {
        return this.caughtPokemon.reduce((map, p) => {
            map.set(p.id, p);
            return map;
        }, new Map());
    });

    calculateBaseClickAttack = ko.computed(() => {
        // Base power
        // Shiny pokemon help with a 100% boost
        // Resistant pokemon give a 100% boost
        const partyClickBonus = this.activePartyPokemon.reduce((total, p) => total + p.clickAttackBonus(), 1);
        return Math.pow(partyClickBonus, 1.4);
    });

    public clickAttackBreakdown = ko.pureComputed((): ClickAttackBreakdown => {
        let numShiny = 0, numResistant = 0, numPurified = 0;
        this.activePartyPokemon.forEach((p) => {
            if (p.shiny) {
                numShiny += 1;
            }
            if (p.pokerus >= Pokerus.Resistant) {
                numResistant += 1;
            }
            if (p.shadow >= ShadowStatus.Purified) {
                numPurified += 1;
            }
        });

        return {
            caughtPokemon: this.activePartyPokemon.length,
            shinyPokemon: numShiny,
            resistantPokemon: numResistant,
            purifiedPokemon: numPurified,
            xClickModifier: EffectEngineRunner.isActive(ItemList.xClick.name)() ? (ItemList.xClick as BattleItem).multiplyBy : 1,
            blackFluteModifier: FluteEffectRunner.getFluteMultiplier(FluteItemType.Black_Flute),
            rockyHelmetModifier: App.game.oakItems.calculateBonus(OakItemType.Rocky_Helmet),
            baseClickAttack: Number(App.game.party.calculateBaseClickAttack().toFixed(4)),
        };
    });

    public pokemonAttackObservable: Computed<number> = ko.pureComputed(() => {
        return App.game.party.calculatePokemonAttack();
    }).extend({ rateLimit: 1000 });

    constructor(private multiplier: Multiplier) {}

    gainPokemonByName(name: PokemonNameType, shiny?: boolean, suppressNotification?: boolean, gender?: BattlePokemonGender, shadow?: ShadowStatus) {
        const pokemon = pokemonMap[name];
        this.gainPokemonById(pokemon.id, shiny, suppressNotification, gender, shadow);
    }

    gainPokemonById(id: number,
        shiny = false,
        suppressNewCatchNotification = false,
        gender: BattlePokemonGender = PokemonFactory.generateGenderById(id),
        shadow: ShadowStatus = ShadowStatus.None,
    ) {
        const isShadow = shadow === ShadowStatus.Shadow;
        PokemonHelper.incrementPokemonStatistics(id, PokemonStatisticsType.Captured, shiny, gender, shadow);

        const newCatch = !this.alreadyCaughtPokemon(id);
        const newShiny = shiny && !this.alreadyCaughtPokemon(id, true);
        const newShadow = isShadow && !this.alreadyCaughtPokemon(id, false, true);

        if (newCatch) {
            // Create new party pokemon
            this._caughtPokemon.push(PokemonFactory.generatePartyPokemon(id, shiny, gender, shadow));

            // Keep caughtPokemon array sorted by ID
            this._caughtPokemon.sort((a, b) => a.id - b.id);
        }

        // Update existing party pokemon
        const partyPokemon = this.getPokemon(id);
        if (newShiny) {
            partyPokemon.shiny = true;
        }
        if (newShadow) {
            partyPokemon.shadow = ShadowStatus.Shadow;
        }

        // Properties of the PartyPokemon used for notifications -- shininess, shadow status, etc. comes from this catch
        const { name, displayName } = partyPokemon;

        // Notifications
        if (newCatch && !suppressNewCatchNotification) {
            Notifier.notify({
                message: `You have captured ${GameHelper.anOrA(name)} ${displayName}!`,
                pokemonImage: PokemonHelper.getImage(id, shiny, gender, shadow),
                type: NotificationConstants.NotificationOption.success,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,
            });
        }
        if (newShiny) {
            Notifier.notify({
                message: `✨ You have captured a shiny ${displayName}! ✨`,
                pokemonImage: PokemonHelper.getImage(id, shiny, gender, shadow),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,
            });
        }
        if (newShadow) {
            Notifier.notify({
                message: `You have captured a shadow ${displayName}!`,
                pokemonImage: PokemonHelper.getImage(id, shiny, gender, shadow),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,
            });
        }

        // Logbook entries
        if (newCatch) {
            App.game.logbook.newLog(LogBookTypes.CAUGHT, createLogContent.captured({ pokemon: name }));
        }
        if (shiny) {
            // Both new and duplicate shinies get logged
            const shinyLogContent = newShiny ? createLogContent.capturedShiny : createLogContent.capturedShinyDupe;
            App.game.logbook.newLog(LogBookTypes.CAUGHT, shinyLogContent({ pokemon: name }));
        }
        if (newShadow) {
            App.game.logbook.newLog(LogBookTypes.CAUGHT, createLogContent.capturedShadow({ pokemon: name }));
        }
    }

    public removePokemonByName(name: PokemonNameType) {
        this._caughtPokemon.remove(p => p.name == name);
    }

    public gainExp(exp = 0, level = 1, trainer = false) {
        const multBonus = this.multiplier.getBonus('exp', true);
        const trainerBonus = trainer ? 1.5 : 1;
        const expTotal = Math.floor(exp * level * trainerBonus * multBonus / 9);
        let shadowExpGained = 0;

        for (const pokemon of this.caughtPokemon) {
            const expGained = pokemon.gainExp(expTotal);
            if (pokemon.shadow >= ShadowStatus.Shadow) {
                shadowExpGained += expGained;
            }
        }
        App.game.purifyChamber.gainFlow(shadowExpGained);
    }

    /**
     * Calculate the attack of all your Pokémon
     * @param type1
     * @param type2 types of the enemy we're calculating damage against.
     * @returns {number} damage to be done.
     */

    public calculatePokemonAttack(
        type1: PokemonType = PokemonType.None,
        type2: PokemonType = PokemonType.None,
        ignoreRegionMultiplier = false,
        region: Region = App.player.region,
        includeBreeding = false,
        useBaseAttack = false,
        overrideWeather?: WeatherType,
        ignoreLevel = false,
        includeTempBonuses = true,
        subregion: SubRegions = App.player.subregion,
    ): number {
        let attack = 0;
        const pokemon = this.partyPokemonActiveInSubRegion(region, subregion);
        const ignoreRegionMultiplierOrMKJ = ignoreRegionMultiplier || region == Region.alola && subregion == AlolaSubRegions.MagikarpJump;

        for (const p of pokemon) {
            attack += this.calculateOnePokemonAttack(p, type1, type2, region, ignoreRegionMultiplierOrMKJ, includeBreeding, useBaseAttack, overrideWeather, ignoreLevel, includeTempBonuses);
        }

        const bonus = this.multiplier.getBonus('pokemonAttack');
        return Math.round(attack * bonus);
    }

    public calculateOnePokemonAttack(
        pokemon: PartyPokemon,
        type1: PokemonType = PokemonType.None,
        type2: PokemonType = PokemonType.None,
        region: Region = App.player.region,
        ignoreRegionMultiplier = false,
        includeBreeding = false,
        useBaseAttack = false,
        overrideWeather?: WeatherType,
        ignoreLevel = false,
        includeTempBonuses = true,
    ): number {
        let multiplier = 1, attack = 0;
        const pAttack = useBaseAttack ? pokemon.baseAttack : (ignoreLevel ? pokemon.calculateAttack(ignoreLevel) : pokemon.attack);
        const nativeRegion = PokemonHelper.calcNativeRegion(pokemon.name);
        const dataPokemon = PokemonHelper.getPokemonByName(pokemon.name);

        // Check if the pokemon is in their native region
        if (!ignoreRegionMultiplier && nativeRegion != region && nativeRegion != Region.none) {
            // Check if the challenge mode is active
            if (App.game.challenges.list.regionalAttackDebuff.active()) {
                // Pokemon only retain a % of their total damage in other regions based on highest region.
                multiplier = this.getRegionAttackMultiplier();
            }
        }

        // Check if the Pokemon is currently breeding (no attack)
        if (includeBreeding || !pokemon.breeding) {
            if (type1 == PokemonType.None) {
                attack = pAttack * multiplier;
            } else {
                attack = pAttack * TypeHelper.getAttackModifier(dataPokemon.type1, dataPokemon.type2, type1, type2) * multiplier;
            }
        }

        // Weather boost
        const weather = Weather.weatherConditions[overrideWeather ?? Weather.currentWeather()];
        weather.multipliers?.forEach(value => {
            if (value.type == dataPokemon.type1) {
                attack *= value.multiplier;
            }
            if (value.type == dataPokemon.type2) {
                attack *= value.multiplier;
            }
        });

        // Should we take flute boost into account
        if (includeTempBonuses) {
            FluteEffectRunner.activeGemTypes().forEach((value: number) => {
                if (value == dataPokemon.type1) {
                    attack *= FLUTE_TYPE_ATTACK_MULTIPLIER;
                }
                if (value == dataPokemon.type2) {
                    attack *= FLUTE_TYPE_ATTACK_MULTIPLIER;
                }
            });
            attack *= App.game.zMoves.getMultiplier(dataPokemon.type1, dataPokemon.type2);
        }

        return attack;
    }

    public getRegionAttackMultiplier(highestRegion = App.player.highestRegion()): number {
        // between 0.2 -> 1 based on highest region
        return Math.min(1, Math.max(0.2, 0.1 + (highestRegion / 10)));
    }

    public calculateEffortPoints(pokemon: PartyPokemon, shiny: boolean, shadow: ShadowStatus, number = BASE_EP_YIELD, ignore = false): number {
        if (pokemon.pokerus < Pokerus.Contagious) {
            return 0;
        }

        if (ignore) {
            return 0;
        }

        let EPNum = number * App.game.multiplier.getBonus('ev');

        if (pokemon.heldItem() && pokemon.heldItem() instanceof EVsGainedBonusHeldItem) {
            EPNum *= (pokemon.heldItem() as EVsGainedBonusHeldItem).gainedBonus;
        }

        if (shiny) {
            EPNum *= SHINY_EP_MODIFIER;
        }

        if (shadow == ShadowStatus.Shadow) {
            EPNum *= SHADOW_EP_MODIFIER;
        }

        return Math.floor(EPNum);
    }

    public getPokemon(id: number): PartyPokemon | undefined {
        return this._caughtPokemonLookup().get(id);
    }

    public getPokemonByName(name: PokemonNameType): PartyPokemon | undefined {
        return this._caughtPokemonLookup().get(pokemonMap[name].id);
    }

    public partyPokemonActiveInSubRegion(region: Region, subregion: SubRegions): Array<PartyPokemon> {
        let caughtPokemon = this.caughtPokemon as Array<PartyPokemon>;
        if (region == Region.alola && subregion == AlolaSubRegions.MagikarpJump) {
            // Only magikarps can attack in magikarp jump subregion
            caughtPokemon = caughtPokemon.filter((p) => Math.floor(p.id) == 129);
        }
        return caughtPokemon;
    }

    alreadyCaughtPokemonByName(name: PokemonNameType, shiny = false) {
        return this.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(name).id, shiny);
    }

    alreadyCaughtPokemon(id: number, shiny = false, shadow = false, purified = false) {
        const pokemon = this.getPokemon(id);

        if (pokemon) {
            const shinyOkay = (!shiny || pokemon.shiny);
            const shadowOkay = (!shadow || (pokemon.shadow > ShadowStatus.None));
            const purifiedOkay = (!purified || (pokemon.shadow == ShadowStatus.Purified));
            return shinyOkay && shadowOkay && purifiedOkay;
        }
        return false;
    }

    calculateClickAttack(useItem = false): number {
        const clickAttack =  this.calculateBaseClickAttack();
        const bonus = this.multiplier.getBonus('clickAttack', useItem);
        return Math.floor(clickAttack * bonus);
    }

    canAccess(): boolean {
        return true;
    }

    fromJSON(json: Record<string, any>): void {
        if (json == null) {
            return;
        }

        const caughtPokemonSave = json.caughtPokemon;
        const caughtPokemon = caughtPokemonSave.map(caughtPoke => {
            const partyPokemon = PokemonFactory.generatePartyPokemon(caughtPoke.id);
            partyPokemon.fromJSON(caughtPoke);
            return partyPokemon;
        });
        this._caughtPokemon(caughtPokemon);
    }

    initialize(): void {
    }

    toJSON(): Record<string, any> {
        return {
            caughtPokemon: this._caughtPokemon().map(x => x.toJSON()),
        };
    }

    update(): void {
        // This method intentionally left blank
    }

    get caughtPokemon(): ReadonlyArray<PartyPokemon> {
        return this._caughtPokemon();
    }

    get activePartyPokemon(): ReadonlyArray<PartyPokemon> {
        return this.partyPokemonActiveInSubRegion(App.player.region, App.player.subregion);
    }

}

export default Party;
