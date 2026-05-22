import App from '../App';
import BattlePokemon from '../battles/BattlePokemon';
import DungeonBossPokemon from '../dungeons/DungeonBossPokemon';
import EffectEngineRunner from '../effectEngine/effectEngineRunner';
import EncounterType from '../enums/EncounterType';
import ItemType from '../enums/ItemType';
import MulchType from '../enums/MulchType';
import OakItemType from '../enums/OakItemType';
import PokemonType from '../enums/PokemonType';
import Berry from '../farming/Berry';
import Plot from '../farming/Plot';
import WandererPokemon from '../farming/WandererPokemon';
import { BASE_EP_YIELD, BattleItemType, BattlePokemonGender, CHRISTMAS_ITEM_CHANCE, clipNumber, Currency, DNA_ITEM_CHANCE, DUNGEON_BOSS_EP_MODIFIER, DUNGEON_BOSS_GEMS, DUNGEON_BOSS_HELD_ITEM_MODIFIER, DUNGEON_EP_MODIFIER, DUNGEON_GEMS, DUNGEON_HELD_ITEM_MODIFIER, GameState, Genders, GRISEOUS_ITEM_CHANCE, GYM_GEMS, HELD_CANDY_ITEM_CHANCE, HELD_ITEM_CHANCE, HELD_MAGIKARP_BISCUIT, HELD_UNDERGROUND_ITEM_CHANCE, LIGHT_ITEM_CHANCE, MANE_ITEM_CHANCE, Region, ROAMER_EP_MODIFIER, ROAMING_INCREASED_CHANCE, ROAMING_MAX_CHANCE, ROAMING_MIN_CHANCE, ROUTE_HELD_ITEM_MODIFIER, RUST_ITEM_CHANCE, SHADOW_ITEM_CHANCE, ShadowStatus, SHINY_CHANCE_BATTLE, SHINY_CHANCE_DUNGEON, SHINY_CHANCE_FARM } from '../GameConstants';
import GameHelper from '../GameHelper';
import Gym from '../gym/Gym';
import GymPokemon from '../gym/GymPokemon';
import BagItem from '../interfaces/BagItem';
import BagHandler from '../items/BagHandler';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import PartyPokemon from '../party/PartyPokemon';
import RegionRoute from '../routes/RegionRoute';
import Routes from '../routes/Routes';
import SubRegion from '../subRegion/SubRegion';
import TemporaryBattle from '../temporaryBattle/TemporaryBattle';
import Rand from '../utilities/Rand';
import Amount from '../wallet/Amount';
import RouteHelper from '../wildBattle/RouteHelper';
import MapHelper from '../worldmap/MapHelper';
import * as PokemonHelper from './PokemonHelper';
import { pokemonMap } from './PokemonList';
import { PokemonNameType } from './PokemonNameType';
import RoamingPokemonList from './RoamingPokemonList';

class PokemonFactory {

    /**
     * Generate a wild pokemon based on route, region and the dataList.
     * @param route route that the player is on.
     * @param region region that the player is in.
     * @returns {any}
     */
    public static generateWildPokemon(route: number, region: Region, subRegion: SubRegion): BattlePokemon {
        if (!MapHelper.validRoute(route, region)) {
            return new BattlePokemon('MissingNo.', 0, PokemonType.None, PokemonType.None, 0, 0, 0, 0, new Amount(0, Currency.money), false, 0, BattlePokemonGender.NoGender, ShadowStatus.None, EncounterType.route);
        }
        let name: PokemonNameType;

        const roaming = PokemonFactory.roamingEncounter(route, region, subRegion);
        if (roaming) {
            name = PokemonFactory.generateRoamingEncounter(region, subRegion);
        } else {
            name = Rand.fromArray(RouteHelper.getAvailablePokemonList(route, region));
        }
        const basePokemon = PokemonHelper.getPokemonByName(name);
        const id = basePokemon.id;
        const routeAvgHp = (() => {
            const poke = [...new Set(Object.values(Routes.getRoute(region, route).pokemon).flat().map(p => p.pokemon ?? p).flat())];
            const total = poke.map(p => pokemonMap[p].base.hitpoints).reduce((s, a) => s + a, 0);
            return total / poke.length;
        })();

        // TODO this monster formula needs to be improved. Preferably with graphs :D
        // Health has a +/- 10% variable based on base health stat compared to the average of the route
        const maxHealth: number = Math.round(PokemonFactory.routeHealth(route, region) * (0.9 + (basePokemon.hitpoints / routeAvgHp) / 10));
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        const exp: number = basePokemon.exp;
        const level: number = this.routeLevel(route, region);
        const money: number = this.routeMoney(route, region);
        const shiny: boolean = this.generateShiny(SHINY_CHANCE_BATTLE);
        const heldItem: BagItem = this.generateHeldItem(basePokemon.heldItem, ROUTE_HELD_ITEM_MODIFIER, shiny);
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        const encounterType = roaming ? EncounterType.roamer : EncounterType.route;

        if (shiny) {
            Notifier.notify({
                message: `✨ You encountered a shiny ${PokemonHelper.displayName(name)()}! ✨`,
                pokemonImage: PokemonHelper.getImage(id, shiny, basePokemon.gender, ShadowStatus.None),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.shiny_long,
                setting: NotificationConstants.NotificationSetting.General.encountered_shiny,
            });
        }
        if (roaming) {
            Notifier.notify({
                message: `You encountered a roaming ${name}!`,
                pokemonImage: PokemonHelper.getImage(id, shiny, basePokemon.gender, ShadowStatus.None),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.roaming,
                setting: NotificationConstants.NotificationSetting.General.encountered_roaming,
            });
            App.game.logbook.newLog(
                LogBookTypes.ROAMER,
                (shiny
                    ? App.game.party.alreadyCaughtPokemon(id, true)
                        ? createLogContent.roamerShinyDupe
                        : createLogContent.roamerShiny
                    : createLogContent.roamer
                )({
                    location: Routes.getRoute(App.player.region, App.player.route).routeName,
                    pokemon: name,
                }),
            );
        }
        const ep = BASE_EP_YIELD * (roaming ? ROAMER_EP_MODIFIER : 1);
        return new BattlePokemon(
            name,
            id,
            basePokemon.type1,
            basePokemon.type2,
            maxHealth,
            level,
            catchRate,
            exp,
            new Amount(money, Currency.money),
            shiny,
            1,
            gender,
            ShadowStatus.None,
            encounterType,
            heldItem,
            ep,
        );
    }

    public static routeLevel(route: number, region: Region): number {
        return Math.floor(20 * Math.pow(MapHelper.normalizeRoute(route, region), (1 / 2.25)));
    }

    public static routeHealth(route: number, region: Region): number {
        const regionRoute = Routes.regionRoutes.find((routeData) => routeData.region === region && routeData.number === route);
        if (regionRoute?.routeHealth) {
            return regionRoute.routeHealth;
        }
        route = MapHelper.normalizeRoute(route, region);
        const health: number = Math.max(20, Math.floor(Math.pow((100 * Math.pow(route, 2.2) / 12), 1.15) * (1 + region / 20))) || 20;
        return health;
    }

    public static routeMoney(route: number, region: Region, useRandomDeviation = true): number {
        route = MapHelper.normalizeRoute(route, region);
        //If it's not random, we take the mean value (truncated)
        const deviation = useRandomDeviation ? Rand.intBetween(-25, 25) : 12;
        const money: number = Math.max(10, 3 * route + 5 * Math.pow(route, 1.15) + deviation);

        return money;
    }

    public static routeDungeonTokens(route: number, region: Region): number {
        route = MapHelper.normalizeRoute(route, region);

        const tokens = Math.max(1, 6 * Math.pow(route * 2 / (2.8 / (1 + region / 3)), 1.08));

        return tokens;
    }

    /**
     * Calculate if a shiny has spawned.
     * @param chance Base chance, should be from SHINY_CHANCE.*
     * @returns {boolean}
     */
    public static generateShiny(chance: number, skipBonus = false): boolean {
        const bonus = skipBonus ? 1 : App.game.multiplier.getBonus('shiny');

        if (Rand.chance(chance / bonus)) {
            App.game.oakItems.use(OakItemType.Shiny_Charm);
            return true;
        }
        return false;
    }

    public static generatePartyPokemon(id: number, shiny = false, gender = BattlePokemonGender.NoGender, shadow = ShadowStatus.None): PartyPokemon {
        const dataPokemon = PokemonHelper.getPokemonById(id);
        return new PartyPokemon(dataPokemon.id, dataPokemon.name, dataPokemon.evolutions, dataPokemon.attack, dataPokemon.eggCycles, shiny, gender, shadow);
    }

    /**
     * Generate a Gym trainer pokemon based on gymName, index and the dataList.
     * @param gymName name of the gym that the player is fighting.
     * @param index index of the Pokémon that is being generated.
     * @returns {any}
     */
    public static generateGymPokemon(gym: Gym, index: number): BattlePokemon {
        const pokemon = gym.getPokemonList()[index];
        const basePokemon = PokemonHelper.getPokemonByName(pokemon.name);

        const exp: number = basePokemon.exp;
        const shiny = pokemon.shiny ? pokemon.shiny : this.generateShiny(SHINY_CHANCE_BATTLE);
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        const shadow = pokemon.shadow;
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        if (shiny && !pokemon.shiny) {
            GameHelper.incrementObservable(App.game.statistics.totalShinyTrainerPokemonSeen);
        }
        return new BattlePokemon(pokemon.name,
            basePokemon.id,
            basePokemon.type1,
            basePokemon.type2,
            pokemon.maxHealth,
            pokemon.level,
            catchRate,
            exp,
            new Amount(0, Currency.money),
            shiny,
            GYM_GEMS,
            gender,
            shadow,
            EncounterType.trainer,
        );
    }

    public static generateDungeonPokemon(name: PokemonNameType, chestsOpened: number, baseHealth: number, level: number, mimic = false): BattlePokemon {
        const basePokemon = PokemonHelper.getPokemonByName(name);
        const id = basePokemon.id;
        const maxHealth: number = Math.floor(baseHealth * (1 + (chestsOpened / 5)));
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        const exp: number = basePokemon.exp;
        const money = 0;
        const shiny: boolean = this.generateShiny(SHINY_CHANCE_DUNGEON);
        const heldItem = this.generateHeldItem(basePokemon.heldItem, DUNGEON_HELD_ITEM_MODIFIER, shiny);
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        if (shiny) {
            Notifier.notify({
                message: `✨ You encountered a shiny ${PokemonHelper.displayName(name)()}! ✨`,
                pokemonImage: PokemonHelper.getImage(id, shiny, basePokemon.gender, ShadowStatus.None),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.shiny_long,
                setting: NotificationConstants.NotificationSetting.General.encountered_shiny,
            });
        }

        const ep = BASE_EP_YIELD * (mimic ? DUNGEON_BOSS_EP_MODIFIER : DUNGEON_EP_MODIFIER);
        const et = mimic ? EncounterType.mimic : EncounterType.dungeon;
        return new BattlePokemon(name,
            id,
            basePokemon.type1,
            basePokemon.type2,
            maxHealth,
            level,
            catchRate,
            exp,
            new Amount(money, Currency.money),
            shiny,
            DUNGEON_GEMS,
            gender,
            ShadowStatus.None,
            et,
            heldItem,
            ep,
        );
    }

    public static generateDungeonTrainerPokemon(pokemon: GymPokemon, chestsOpened: number, baseHealth: number, level: number, isBoss: boolean, trainerPokemon = 1): BattlePokemon {
        const name = pokemon.name;
        const basePokemon = PokemonHelper.getPokemonByName(name);
        const maxHealth: number = Math.floor(baseHealth * (1 + (chestsOpened / 5)) / (isBoss ? 1 : trainerPokemon ** 0.75));
        const exp: number = basePokemon.exp;
        const shiny: boolean = pokemon.shiny ? pokemon.shiny : this.generateShiny(SHINY_CHANCE_DUNGEON);
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        // Reward 2% or 5% (boss) of dungeon DT cost when the trainer mons are defeated
        const money = 0;
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        const shadow = pokemon.shadow;
        const ep = BASE_EP_YIELD * (isBoss ? DUNGEON_BOSS_EP_MODIFIER : DUNGEON_EP_MODIFIER);
        if (shiny && !pokemon.shiny) {
            GameHelper.incrementObservable(App.game.statistics.totalShinyTrainerPokemonSeen);
        }
        return new BattlePokemon(name,
            basePokemon.id,
            basePokemon.type1,
            basePokemon.type2,
            maxHealth,
            level,
            catchRate,
            exp,
            new Amount(money, Currency.money),
            shiny,
            DUNGEON_GEMS,
            gender,
            shadow,
            EncounterType.trainer,
            undefined,
            ep,
        );
    }

    public static generateDungeonBoss(bossPokemon: DungeonBossPokemon, chestsOpened: number): BattlePokemon {
        const name: PokemonNameType = bossPokemon.name;
        const basePokemon = PokemonHelper.getPokemonByName(name);
        const id = basePokemon.id;
        const maxHealth: number = Math.floor(bossPokemon.baseHealth * (1 + (chestsOpened / 5)));
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        const exp: number = basePokemon.exp;
        const money = 0;
        const shiny: boolean = this.generateShiny(SHINY_CHANCE_DUNGEON);
        const heldItem = this.generateHeldItem(basePokemon.heldItem, DUNGEON_BOSS_HELD_ITEM_MODIFIER, shiny);
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        if (shiny) {
            Notifier.notify({
                message: `✨ You encountered a shiny ${PokemonHelper.displayName(name)()}! ✨`,
                pokemonImage: PokemonHelper.getImage(id, shiny, basePokemon.gender, ShadowStatus.None),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.shiny_long,
                setting: NotificationConstants.NotificationSetting.General.encountered_shiny,
            });
        }
        const ep = BASE_EP_YIELD * DUNGEON_BOSS_EP_MODIFIER;
        return new BattlePokemon(name,
            id,
            basePokemon.type1,
            basePokemon.type2,
            maxHealth,
            bossPokemon.level,
            catchRate,
            exp,
            new Amount(money, Currency.money),
            shiny,
            DUNGEON_BOSS_GEMS,
            gender,
            ShadowStatus.None,
            EncounterType.dungeonBoss,
            heldItem,
            ep,
        );
    }

    public static generateTemporaryBattlePokemon(battle: TemporaryBattle, index: number): BattlePokemon {
        const pokemon = battle.getPokemonList()[index];
        const basePokemon = PokemonHelper.getPokemonByName(pokemon.name);
        const catchRate: number = this.catchRateHelper(basePokemon.catchRate);
        const encounterType = battle.optionalArgs.isTrainerBattle
            ? EncounterType.trainer
            : App.game.gameState === GameState.dungeon
                ? EncounterType.dungeon
                : EncounterType.route;

        const exp: number = basePokemon.exp;
        const shiny = pokemon.shiny ? pokemon.shiny : this.generateShiny(SHINY_CHANCE_BATTLE);
        const gender = this.generateGender(basePokemon.gender.femaleRatio, basePokemon.gender.type);
        const shadow = pokemon.shadow;
        if (shiny && !pokemon.shiny && battle.optionalArgs.isTrainerBattle) {
            GameHelper.incrementObservable(App.game.statistics.totalShinyTrainerPokemonSeen);
        }
        return new BattlePokemon(pokemon.name,
            basePokemon.id,
            basePokemon.type1,
            basePokemon.type2,
            pokemon.maxHealth,
            pokemon.level,
            catchRate,
            exp,
            new Amount(0, Currency.money),
            shiny,
            GYM_GEMS,
            gender,
            shadow,
            encounterType,
        );
    }

    private static generateRoamingEncounter(region: Region, subRegion: SubRegion): PokemonNameType {
        const possible = RoamingPokemonList.getSubRegionalGroupRoamers(region, RoamingPokemonList.findGroup(region, subRegion.id));

        // Double the chance of encountering a roaming Pokemon you have not yet caught
        return Rand.fromWeightedArray(possible, possible.map(r => App.game.party.alreadyCaughtPokemonByName(r.pokemon.name) ? 1 : 2)).pokemon.name;
    }

    private static roamingEncounter(routeNum: number, region: Region, subRegion: SubRegion): boolean {
        // Map to the route numbers
        const route = Routes.getRoute(region, routeNum);
        const routes = Routes.getRoutesByRegion(region).filter(r => RoamingPokemonList.findGroup(region, r.subRegion || 0) == RoamingPokemonList.findGroup(region, subRegion.id));

        // Check if the dice rolls in their favor
        const encounter = PokemonFactory.roamingChance(route, routes, region, subRegion);
        if (!encounter) {
            return false;
        }

        // There is likely to be a roamer available, so we can check this last
        const roamingPokemon = RoamingPokemonList.getSubRegionalGroupRoamers(region, RoamingPokemonList.findGroup(region, subRegion.id));
        if (!routes || !routes.length || !roamingPokemon || !roamingPokemon.length) {
            return false;
        }

        // Roaming encounter
        return true;
    }

    private static roamingChance(curRoute: RegionRoute, allRoutes: RegionRoute[], region: Region, subRegion: SubRegion, max = ROAMING_MAX_CHANCE, min = ROAMING_MIN_CHANCE, skipBonus = false) {
        const bonus = skipBonus ? 1 : App.game.multiplier.getBonus('roaming');
        const maxRoute = allRoutes.length - 1;
        const routeInd = allRoutes.indexOf(curRoute);
        // Check if we should have increased chances on this route (3 x rate)
        const increasedChance = RoamingPokemonList.getIncreasedChanceRouteBySubRegionGroup(App.player.region, RoamingPokemonList.findGroup(region, subRegion.id))()?.number == curRoute?.number;
        const roamingChance = (max + ((min - max) * (maxRoute - routeInd) / (maxRoute))) / ((increasedChance ? ROAMING_INCREASED_CHANCE : 1) * bonus);
        return Rand.chance(roamingChance);
    }

    private static catchRateHelper(baseCatchRate: number, noVariation = false): number {
        const catchVariation = noVariation ? 0 : Rand.intBetween(-3, 3);
        const catchRateRaw = Math.floor(Math.pow(baseCatchRate, 0.75)) + catchVariation;
        return clipNumber(catchRateRaw, 0, 100);
    }

    private static generateHeldItem(item: BagItem, modifier: number, shiny: boolean): BagItem | null {
        if (!item || !BagHandler.displayName(item)) {
            return null;
        }

        if (!(item.requirement?.isCompleted() ?? true)) {
            return null;
        }

        if (shiny) {
            return item;
        }

        let chance = HELD_ITEM_CHANCE;

        // Apply drop chance by item type
        switch (item.type) {
            case ItemType.underground:
                chance = HELD_UNDERGROUND_ITEM_CHANCE;
                break;
        }

        // Apply drop chance by item ID
        switch (item.id) {
            case 'Griseous_Orb':
                chance = GRISEOUS_ITEM_CHANCE;
                break;
            case 'Black_DNA':
            case 'White_DNA':
                chance = DNA_ITEM_CHANCE;
                break;
            case 'Solar_light':
            case 'Lunar_light':
            case 'Pure_light':
                chance = LIGHT_ITEM_CHANCE;
                break;
            case 'Crystallized_shadow':
                chance = SHADOW_ITEM_CHANCE;
                break;
            case 'Rusted_Sword':
            case 'Rusted_Shield':
                chance = RUST_ITEM_CHANCE;
                break;
            case 'Black_mane_hair':
            case 'White_mane_hair':
                chance = MANE_ITEM_CHANCE;
                break;
            case 'Magikarp_Biscuit':
                chance = HELD_MAGIKARP_BISCUIT;
                break;
            case 'Rare_Candy':
                chance = HELD_CANDY_ITEM_CHANCE;
                break;
            case 'Christmas_present':
                chance = CHRISTMAS_ITEM_CHANCE;
                break;
        }

        chance /= modifier;

        if (EffectEngineRunner.isActive(BattleItemType.Dowsing_machine)()) {
            chance /= 1.5;
        }

        if (Rand.chance(chance)) {
            return item;
        }

        return null;
    }

    // Gender functions
    /**
     * generateGender but using Pokemon ID
     */
    public static generateGenderById(id: number) {
        const pokemon = PokemonHelper.getPokemonById(id);
        return this.generateGender(pokemon.gender.femaleRatio, pokemon.gender.type);
    }

    /**
     * Calculate which gender has the pokemon.
     * @param chance Base chance, should be from GameConstants under Gender Ratio comment
     * @param genderType Gender type (Genderless, male only, etc.), should be from GameConstants under Gender Types comment
     * @returns BattlePokemonGender
     */
    public static generateGender(chance: number, genderType: Genders): BattlePokemonGender {
        let gender: BattlePokemonGender;
        switch (genderType) {
            case Genders.Genderless:
                gender = BattlePokemonGender.NoGender;
                break;
            case Genders.MaleFemale:
                if (Rand.chance(chance)) { // Female
                    gender = BattlePokemonGender.Female;
                } else { // Male
                    gender = BattlePokemonGender.Male;
                }
                break;
            default:
                console.warn('Invalid gender');
        }
        return gender;
    }

    public static generateWandererData(plot: Plot): WandererPokemon {
        const berry = plot.berryData;
        const mulch = plot.mulch;
        const availablePokemon: PokemonNameType[] = [];
        const weights: number[] = [];
        berry.wander.forEach((p, i) => {
            if (pokemonMap[p].nativeRegion <= App.player.highestRegion()) {
                availablePokemon.push(p);
                weights.push(mulch === MulchType.Gooey_Mulch && i >= Berry.baseWander.length ? 2 : 1);
            }
        });
        const pokemon = Rand.fromWeightedArray(availablePokemon, weights);
        const pokemonData = pokemonMap[pokemon];
        const shiny = PokemonFactory.generateShiny(SHINY_CHANCE_FARM);
        const catchChance = PokemonFactory.catchRateHelper(pokemonData.catchRate + 25, true);
        const wanderer = new WandererPokemon(pokemon, berry.type, catchChance, shiny);
        return wanderer;
    }
}

export default PokemonFactory;
