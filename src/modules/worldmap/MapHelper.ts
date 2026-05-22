import AchievementHandler from '../achievements/AchievementHandler';
import App from '../App';
import BattleFrontierRunner from '../battleFrontier/BattleFrontierRunner';
import Battle from '../battles/Battle';
import DungeonHelper from '../dungeons/DungeonHelper';
import DungeonList from '../dungeons/DungeonList';
import areaStatus from '../enums/AreaStatus';
import { BattleBackground, BattleBackgroundImage, BattleBackgrounds, camelCaseToString, DockTowns, Environment, Environments, GameState, getDungeonIndex, MAX_AVAILABLE_REGION, Pokerus, Region, ROUTE_KILLS_NEEDED, ShadowStatus, Starter, StartingTowns } from '../GameConstants';
import GameHelper from '../GameHelper';
import GymRunner from '../gym/GymRunner';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import Routes from '../routes/Routes';
import CssVariableSetting from '../settings/CssVariableSetting';
import Settings from '../settings/Settings';
import TemporaryBattleRunner from '../temporaryBattle/TemporaryBattleRunner';
import PokemonGiftNPC from '../towns/PokemonGiftNPC';
import TownList from '../towns/TownList';
import RouteHelper from '../wildBattle/RouteHelper';
import Blimp from './Blimp';

class MapHelper {

    public static getUsableFilters(): CssVariableSetting[] {
        const priority = Settings.getSetting('mapAreaStateOrder').observableValue();
        return priority.map(status => Settings.getSetting(`--${areaStatus[status]}`)).filter(setting => setting.isUnlocked());
    }

    public static moveToRoute(route: number, region: Region) {
        if (isNaN(route)) {
            return;
        }
        const routeData = Routes.getRoute(region, route);
        let genNewEnemy = false;
        if (route != Battle.route) {
            genNewEnemy = true;
        }
        if (MapHelper.accessToRoute(route, region)) {
            if (App.player.region != region) {
                App.player.region = region;
            }
            App.player.subregion = routeData.subRegion ?? 0;
            App.player.route = route;
            if (genNewEnemy && !Battle.catching()) {
                Battle.generateNewEnemy();
            }
            App.game.gameState = GameState.fighting;
        } else {
            if (!MapHelper.routeExist(route, region)) {
                return Notifier.notify({
                    message: `${Routes.getName(route, region)} does not exist in the ${Region[region]} region.`,
                    type: NotificationConstants.NotificationOption.danger,
                });
            }

            const reqsList: string[] = [];

            routeData.requirements?.forEach(requirement => {
                if (!requirement.isCompleted()) {
                    reqsList.push(requirement.hint());
                }
            });

            Notifier.notify({
                message: `You don't have access to that route yet.\n<i>${reqsList.join('\n')}</i>`,
                type: NotificationConstants.NotificationOption.warning,
            });
        }
    }

    public static routeExist(route: number, region: Region): boolean {
        return !!Routes.getRoute(region, route);
    }

    public static normalizeRoute(route: number, region: Region, skipIgnoredRoutes = true): number {
        return Routes.normalizedNumber(region, route, skipIgnoredRoutes);
    }

    public static accessToRoute(route: number, region: Region) {
        return MapHelper.routeExist(route, region) && Routes.getRoute(region, route).isUnlocked();
    }

    public static getEnvironments(area: number | string, region: Region): Environment[] {
        // Environments aren't stored in the locations themselves, so we need to refer to the record in Environments to get an array (list) of all the environments we've written it under
        const envs = Object.keys(Environments).filter(
            (env) => Environments[env][region]?.has(area),
        ) as Environment[]; // keeping everything as Environment makes them easier to refer to with an IDE (like VSCode). Environments will show up in a dropdown when you type

        // Now that we have an array we can push (add) environments straight up
        // determine Hisui environments for Burmy and electric friends
        if (region === Region.hisui) {
            const hisuilands = ['AlabasterIcelands', 'CobaltCoastlands', 'CoronetHighlands', 'CrimsonMirelands', 'JubilifeVillage', 'ObsidianFieldlands'] as Environment[];
            const blanklands = hisuilands.find(land => envs.includes(land)); // find which __land the area is part of
            switch (blanklands as Environment) {
                case 'ObsidianFieldlands':
                case 'JubilifeVillage':
                    envs.push('PlantCloak');
                    break; // group cloaks together to keep the switch breaks tidy, only three needed
                case 'CoronetHighlands':
                    envs.push('MagneticField'); // no break after this because we want to add SandyCloak to CoronetHighlands too
                case 'CrimsonMirelands':
                    envs.push('SandyCloak');
                    break;
                case 'AlabasterIcelands':
                case 'CobaltCoastlands':
                    envs.push('TrashCloak');
                    break;
            }
        // if not in Hisui, add general envs for Burmy
        } else if (envs.includes('Cave')) {
            envs.push('SandyCloak');
        } else if (typeof area === 'string' && ['City', 'League', 'Tower'].some(word => area.includes(word))) {
            envs.push('TrashCloak');
        }

        // if not in Cave or TrashCloak, Burmy evolves into (Plant). (this is mainly for realEvos challenge)
        const burmyCloaks = ['PlantCloak', 'SandyCloak', 'TrashCloak'] as Environment[];
        // if some element (cloak) of the "burmyCloaks" array is not (!) included in the "envs" array, add (push) the 'PlantCloak' environment
        if (!burmyCloaks.some(cloak => envs.includes(cloak))) {
            envs.push('PlantCloak');
        }

        // Get environments from Gym and Temp battles lists, if any
        const battleArea =
            (App.game.gameState == GameState.temporaryBattle
                ? TemporaryBattleRunner.getEnvironmentArea() : undefined) ||
            (App.game.gameState == GameState.gym
                ? GymRunner.getEnvironmentArea() : undefined) ||
            undefined;

        // Add the battle environment arrays
        if (battleArea != undefined) {
            envs.push(...battleArea);
        }

        return (envs);
    }

    public static getCurrentEnvironments(): Environment[] {
        const area = App.player.route ||
            App.player.town?.name ||
            undefined;
        return this.getEnvironments(area, App.player.region);
    }

    public static getBattleBackground(): BattleBackground {
        const area = App.player.route ||
            (App.game.gameState == GameState.temporaryBattle
                ? TemporaryBattleRunner.getBattleBackgroundImage() : undefined) ||
            (App.game.gameState == GameState.gym
                ? GymRunner.getBattleBackgroundImage() : undefined) ||
            (App.game.gameState == GameState.battleFrontier
                ? BattleFrontierRunner.battleBackground() : undefined) ||
            App.player.town?.name ||
            undefined;

        if (area in BattleBackgrounds) {
            return area as BattleBackground;
        }

        const [img] = Object.entries(BattleBackgrounds).find(
            ([, regions]) => regions[App.player.region]?.has(area),
        ) || [];

        return (img as BattleBackground);
    }

    public static calculateBattleCssClass(): string {
        return BattleBackgroundImage[this.getBattleBackground()];
    }

    public static calculateRouteCssClass(route: number, region: Region): string {
        const states = new Set([areaStatus.completed]);
        const possiblePokemon = RouteHelper.getAvailablePokemonList(route, region);

        if (!MapHelper.accessToRoute(route, region)) {
            states.add(areaStatus.locked);
        }
        if (App.game.statistics.routeKills[region][route]() < ROUTE_KILLS_NEEDED) {
            states.add(areaStatus.incomplete);
        }
        if (RouteHelper.isThereQuestAtLocation(route, region)) {
            states.add(areaStatus.questAtLocation);
        }
        MapHelper.getPokemonAreaStatus(possiblePokemon).forEach(s => states.add(s));
        if (!RouteHelper.isAchievementsComplete(route, region)) {
            states.add(areaStatus.missingAchievement);
        }

        const statusPriority = Settings.getSetting('mapAreaStateOrder').observableValue();
        const mostImportant = statusPriority.find(state => states.has(state));
        let cls = areaStatus[mostImportant];

        // Water routes
        if (Environments.Water[region]?.has(route)) {
            cls = `${cls} waterRoute`;
        }

        return cls;
    }

    public static isRouteCurrentLocation(route: number, region: Region): boolean {
        return App.player.route == route && App.player.region == region;
    }

    public static isTownCurrentLocation(townName: string): boolean {
        if (App.game.gameState == GameState.temporaryBattle) {
            return TemporaryBattleRunner.battleObservable()?.getTown()?.name == townName;
        }
        return !App.player.route && App.player.town.name == townName;
    }

    public static calculateTownCssClass(townName: string): string {
        // We don't want to spoil easter eggs with map colors
        if (TownList[townName]?.ignoreAreaStatus) {
            return '';
        }
        const states = new Set([areaStatus.completed]);
        // Check if this location is locked
        if (!MapHelper.accessToTown(townName)) {
            return areaStatus[areaStatus.locked];
        }
        // Is this location a dungeon
        if (DungeonList[townName] && DungeonList[townName].isUnlocked()) {
            const shadowPokemon = DungeonList[townName].allAvailableShadowPokemon();
            const possiblePokemon = [...DungeonList[townName].allAvailablePokemon(), ...shadowPokemon];

            if (!App.game.statistics.dungeonsCleared[getDungeonIndex(townName)]()) {
                states.add(areaStatus.incomplete);
            }
            if (DungeonList[townName].isThereQuestAtLocation()) {
                states.add(areaStatus.questAtLocation);
            }
            MapHelper.getPokemonAreaStatus(possiblePokemon)
                .forEach(s => states.add(s));
            if (shadowPokemon.some(p => App.game.party.alreadyCaughtPokemonByName(p) && App.game.party.getPokemonByName(p).shadow == ShadowStatus.None)) {
                states.add(areaStatus.uncaughtShadowPokemon);
            }
            if (!DungeonHelper.isAchievementsComplete(DungeonList[townName])) {
                states.add(areaStatus.missingAchievement);
            }
        }
        const town = TownList[townName];
        town.content.forEach(c => {
            const contentAreaStatus = c.areaStatus();
            if (!contentAreaStatus.includes(areaStatus.locked)) {
                contentAreaStatus.forEach(s => {
                    states.add(s);
                });
            }
        });
        town.npcs?.filter((npc): npc is PokemonGiftNPC => npc instanceof PokemonGiftNPC && npc.isVisible()).forEach(npc => {
            npc.areaStatus().forEach(s => states.add(s));
        });

        const statusPriority = Settings.getSetting('mapAreaStateOrder').observableValue();
        const importantState = statusPriority.find(state => states.has(state));
        return areaStatus[importantState];
    }

    public static accessToTown(townName: string): boolean {
        const town = TownList[townName];
        if (!town) {
            return false;
        }
        return town.isUnlocked();
    }

    public static moveToTown(townName: string) {
        if (MapHelper.accessToTown(townName)) {
            App.game.gameState = GameState.idle;
            App.player.route = 0;
            Battle.route = 0;
            Battle.catching(false);
            const town = TownList[townName];
            App.player.region = town.region;
            App.player.subregion = town.subRegion;
            App.player.town = town;
            Battle.enemyPokemon(null);
            //this should happen last, so all the values all set beforehand
            App.game.gameState = GameState.town;
        } else {
            const town = TownList[townName];
            const reqsList: string[] = [];

            town.requirements?.forEach(requirement => {
                if (!requirement.isCompleted()) {
                    reqsList.push(requirement.hint());
                }
            });

            Notifier.notify({
                message: `You don't have access to that location yet.\n<i>${reqsList.join('\n')}</i>`,
                type: NotificationConstants.NotificationOption.warning,
            });
        }
    }

    public static validRoute(route = 0, region: Region = 0): boolean {
        return !!Routes.getRoute(region, route);
    }

    public static openShipModal() {
        const openModal = () => {
            $('#ShipModal').modal('show');
        };
        if (App.player.highestRegion() > 0 && (TownList[DockTowns[App.player.region]].isUnlocked())) {
            openModal();
        } else {
            Notifier.notify({
                message: `You cannot access this dock yet!${App.player.region > Region.kanto ? '\n<i>Progress further to return to previous regions!</i>' : ''}`,
                type: NotificationConstants.NotificationOption.warning,
            });
        }
    }

    public static ableToTravel() {
        // If player already reached highest region, they can't move on
        if (App.player.highestRegion() >= MAX_AVAILABLE_REGION) {
            return false;
        }

        const challengeActive = App.game.challenges.list.requireCompletePokedex.active();
        const nextStartingTownUnlocked = TownList[StartingTowns[App.player.highestRegion() + 1]]?.isUnlocked() ?? false;
        const fullDex = AchievementHandler.findByName(`${camelCaseToString(Region[App.player.highestRegion()])} Master`).isCompleted();

        return nextStartingTownUnlocked && (fullDex || !challengeActive);
    }

    public static travelToNextRegion() {
        if (MapHelper.ableToTravel()) {
            // Gain queue slots based on highest region
            App.game.breeding.gainQueueSlot(App.game.breeding.queueSlotsGainedFromRegion(App.player.highestRegion()));
            GameHelper.incrementObservable(App.player.highestRegion);
            App.player.highestSubRegion(0);
            MapHelper.moveToTown(StartingTowns[App.player.highestRegion()]);
            App.player.region = App.player.highestRegion();
            // Update hatchery region filter to include new region if all previous regions selected
            const previousRegionFullMask = (2 << (App.player.highestRegion() - 1)) - 1;
            const regionFilterMask = Settings.getSetting('breedingRegionFilter').value & previousRegionFullMask;
            if (regionFilterMask == previousRegionFullMask) {
                const newRegionFullMask = (2 << App.player.highestRegion()) - 1;
                Settings.setSettingByName('breedingRegionFilter', newRegionFullMask);
            }
            $('#pickStarterModal').modal('show');
        }
    }

    public static getBlimpData(professorName = ''): Blimp {
        const baseProps = {
            name: `${professorName}'s Blimp`,
            width: 6 * 16,
            height: 3 * 16,
            image: '',
        };

        if (!MapHelper.ableToTravel()) {
            return baseProps as Blimp;
        }



        if (App.player.regionStarters[Region.kanto]() == Starter.Special) {
            return new Blimp(
                baseProps.name,
                baseProps.width,
                baseProps.height,
                'assets/images/map/blimp_pikachu.png',
            );
        } else if (!App.game.challenges.list.requireCompletePokedex.active()) {
            return new Blimp(
                'Team Rocket\'s Blimp',
                4 * 16,
                8 * 16,
                'assets/images/map/blimp_meowth.png',
            );
        } else {
            return new Blimp(
                baseProps.name,
                baseProps.width,
                baseProps.height,
                'assets/images/map/blimp_empty.png',
            );
        }

    }

    public static getPokemonAreaStatus(pokemon: PokemonNameType[]): areaStatus[] {
        const statuses = [];
        const pokerusUnlocked = Settings.getSetting(`--${areaStatus[areaStatus.missingResistant]}`).isUnlocked();
        let uncaught = false, uncaughtShiny = false, missingResistant = false;
        pokemon.forEach(p => {
            const partyPokemon = App.game.party.getPokemonByName(p);
            if (!partyPokemon) {
                uncaught = true;
                return; // Don't show shiny and resistant for uncaught Pokémon
            }
            if (!partyPokemon.shiny) {
                uncaughtShiny = true;
            }
            if (pokerusUnlocked && partyPokemon.pokerus < Pokerus.Resistant) {
                missingResistant = true;
            }
        });
        if (uncaught) {
            statuses.push(areaStatus.uncaughtPokemon);
        }
        if (uncaughtShiny) {
            statuses.push(areaStatus.uncaughtShinyPokemon);
        }
        if (missingResistant) {
            statuses.push(areaStatus.missingResistant);
        }
        return statuses;
    }

}

export default MapHelper;
