import ko, { Observable } from 'knockout';
import '../../koExtenders';
import type { PokemonList } from '../../pokemons/PokemonList';
import { Saveable } from '../common/Saveable';
import getRouteKillsProxy from './getRouteKillsProxy';

const failedSetValue = () => 0;

type PokemonID = PokemonList[number]['id'];
type PokemonStats = Record<PokemonID, Observable<number>> & { highestID: PokemonID };

export default class Statistics implements Saveable {
    saveKey = 'statistics';

    defaults: Record<string, any> = {};

    selectedPokemonID = ko.observable(1);

    selectedBerryID = ko.observable(0).extend({ numeric: 0 });

    /*
     * observables
     */
    // Other
    secondsPlayed: Observable<number>;
    clickAttacks: Observable<number>;
    questsCompleted: Observable<number>;
    totalGemsGained: Observable<number>;
    totalVitaminsPurchased: Observable<number>;
    totalVitaminsObtained: Observable<number>;
    // Currency
    totalMoney: Observable<number>;
    totalDungeonTokens: Observable<number>;
    totalQuestPoints: Observable<number>;
    totalDiamonds: Observable<number>;
    totalFarmPoints: Observable<number>;
    totalBattlePoints: Observable<number>;
    totalContestTokens: Observable<number>;
    // Pokemon
    totalPokemonCaptured: Observable<number>;
    totalPokemonDefeated: Observable<number>;
    totalPokemonEncountered: Observable<number>;
    totalPokemonHatched: Observable<number>;
    totalShinyPokemonCaptured: Observable<number>;
    totalShinyPokemonDefeated: Observable<number>;
    totalShinyPokemonEncountered: Observable<number>;
    totalShinyPokemonHatched: Observable<number>;

    totalMalePokemonCaptured: Observable<number>;
    totalMalePokemonDefeated: Observable<number>;
    totalMalePokemonEncountered: Observable<number>;
    totalMalePokemonHatched: Observable<number>;
    totalFemalePokemonCaptured: Observable<number>;
    totalFemalePokemonDefeated: Observable<number>;
    totalFemalePokemonEncountered: Observable<number>;
    totalFemalePokemonHatched: Observable<number>;
    totalGenderlessPokemonCaptured: Observable<number>;
    totalGenderlessPokemonDefeated: Observable<number>;
    totalGenderlessPokemonEncountered: Observable<number>;
    totalGenderlessPokemonHatched: Observable<number>;

    totalShinyMalePokemonCaptured: Observable<number>;
    totalShinyMalePokemonDefeated: Observable<number>;
    totalShinyMalePokemonEncountered: Observable<number>;
    totalShinyMalePokemonHatched: Observable<number>;
    totalShinyFemalePokemonCaptured: Observable<number>;
    totalShinyFemalePokemonDefeated: Observable<number>;
    totalShinyFemalePokemonEncountered: Observable<number>;
    totalShinyFemalePokemonHatched: Observable<number>;
    totalShinyGenderlessPokemonCaptured: Observable<number>;
    totalShinyGenderlessPokemonDefeated: Observable<number>;
    totalShinyGenderlessPokemonEncountered: Observable<number>;
    totalShinyGenderlessPokemonHatched: Observable<number>;

    totalShadowPokemonCaptured: Observable<number>;
    totalShadowPokemonDefeated: Observable<number>;

    totalShadowMalePokemonCaptured: Observable<number>;
    totalShadowMalePokemonDefeated: Observable<number>;
    totalShadowFemalePokemonCaptured: Observable<number>;
    totalShadowFemalePokemonDefeated: Observable<number>;
    totalShadowGenderlessPokemonCaptured: Observable<number>;
    totalShadowGenderlessPokemonDefeated: Observable<number>;

    totalShinyTrainerPokemonSeen: Observable<number>;
    // Underground
    undergroundItemsFound: Observable<number>;
    undergroundLayersMined: Observable<number>;
    undergroundLayersFullyMined: Observable<number>;
    undergroundTrades: Observable<number>;
    undergroundToolsUsed: Record<string, Observable<number>>;
    // Farm
    totalManualHarvests: Observable<number>;
    totalBerriesObtained: Observable<number>;
    totalBerriesHarvested: Observable<number>;
    totalBerriesReplanted: Observable<number>;
    totalBerriesMutated: Observable<number>;
    totalMulchesUsed: Observable<number>;
    totalShovelsUsed: Observable<number>;
    berryDailyDealTrades: Observable<number>;
    farmWandererFarmPointsObtained: Observable<number>;
    farmWandererDungeonTokensObtained: Observable<number>;
    // Battle Frontier
    battleFrontierTotalStagesCompleted: Observable<number>;
    battleFrontierHighestStageCompleted: Observable<number>;
    // Safari Zone
    safariTimesEntered: Observable<number>;
    safariRocksThrown: Observable<number>;
    safariBaitThrown: Observable<number>;
    safariBallsThrown: Observable<number>;
    safariPokemonCaptured: Observable<number>;
    safariShinyPokemonCaptured: Observable<number>;
    safariStepsTaken: Observable<number>;
    safariItemsObtained: Observable<number>;

    /*
     * arrayObservables
     */
    pokeballsUsed: Array<Observable<number>>;
    pokeballsPurchased: Array<Observable<number>>;
    pokeballsObtained: Array<Observable<number>>;
    // Other
    gemsGained: Array<Observable<number>>;
    oakItemUses: Array<Observable<number>>;
    // Farm
    berriesHarvested: Array<Observable<number>>;
    berriesObtained: Observable<number>;
    mulchesUsed: Array<Observable<number>>;
    // Battle
    routeKills: Record<string, Record<string, Observable<number>>>;
    gymsDefeated: Array<Observable<number>>;
    dungeonsCleared: Array<Observable<number>>;
    temporaryBattleDefeated: Array<Observable<number>>;
    // DungeonGuides
    dungeonGuideAttempts: Array<Observable<number>>;
    dungeonGuideClears: Array<Observable<number>>;

    /*
     * objectObservables
     */
    pokemonCaptured: PokemonStats;
    pokemonDefeated: PokemonStats;
    pokemonSeen: PokemonStats;
    pokemonEncountered: PokemonStats;
    pokemonHatched: PokemonStats;
    shinyPokemonCaptured: PokemonStats;
    shinyPokemonDefeated: PokemonStats;
    shinyPokemonEncountered: PokemonStats;
    shinyPokemonHatched: PokemonStats;
    shadowPokemonCaptured: PokemonStats;
    shadowPokemonDefeated: PokemonStats;
    npcTalkedTo: Record<string, Observable<number>>;
    undergroundBatteryDischarges: Record<string, Observable<number>>;
    undergroundSpecificItemsFound: Record<string, Observable<number>>;
    undergroundSpecificLayersMined: Record<string, Observable<number>>;

    observables = [
        'secondsPlayed',
        'clickAttacks',
        'questsCompleted',
        'totalGemsGained',
        'totalVitaminsPurchased',
        'totalVitaminsObtained',
        'totalMoney',
        'totalDungeonTokens',
        'totalQuestPoints',
        'totalDiamonds',
        'totalFarmPoints',
        'totalBattlePoints',
        'totalContestTokens',
        'undergroundItemsFound',
        'undergroundLayersMined',
        'undergroundTrades',
        'totalManualHarvests',
        'totalBerriesHarvested',
        'totalBerriesObtained',
        'totalBerriesReplanted',
        'totalBerriesMutated',
        'totalMulchesUsed',
        'totalShovelsUsed',
        'berryDailyDealTrades',
        'farmWandererFarmPointsObtained',
        'farmWandererDungeonTokensObtained',
        'battleFrontierTotalStagesCompleted',
        'battleFrontierHighestStageCompleted',
        'safariTimesEntered',
        'safariRocksThrown',
        'safariBaitThrown',
        'safariBallsThrown',
        'safariPokemonCaptured',
        'safariShinyPokemonCaptured',
        'safariStepsTaken',
        'safariItemsObtained',
    ];

    hiddenObservables = [
        'totalShinyTrainerPokemonSeen',
        'undergroundLayersFullyMined',
    ];

    arrayObservables = [
        'gymsDefeated',
        'dungeonsCleared',
        'pokeballsUsed',
        'pokeballsPurchased',
        'pokeballsObtained',
        'gemsGained',
        'oakItemUses',
        'berriesHarvested',
        'berriesObtained',
        'mulchesUsed',
        'temporaryBattleDefeated',
        'dungeonGuideAttempts',
        'dungeonGuideClears',
    ];
    // These will allow negative values (special events etc)
    objectObservables = [
        'pokemonCaptured',
        'pokemonDefeated',
        'pokemonSeen',
        'pokemonEncountered',
        'pokemonHatched',
        'shinyPokemonCaptured',
        'shinyPokemonDefeated',
        'shinyPokemonEncountered',
        'shinyPokemonHatched',
        'shadowPokemonCaptured',
        'shadowPokemonDefeated',
        'npcTalkedTo',
        'undergroundToolsUsed',
        'undergroundBatteryDischarges',
        'undergroundSpecificItemsFound',
        'undergroundSpecificLayersMined',
    ];
    // Observables that can be automatically generated
    autogeneratedObservables = [
        'routeKills',
    ];

    statisticGenders = ['', 'Male', 'Female', 'Genderless'];

    baseGenderObservables = [
        'total{{GENDER}}PokemonCaptured',
        'total{{GENDER}}PokemonDefeated',
        'total{{GENDER}}PokemonEncountered',
        'total{{GENDER}}PokemonHatched',
        'totalShiny{{GENDER}}PokemonCaptured',
        'totalShiny{{GENDER}}PokemonDefeated',
        'totalShiny{{GENDER}}PokemonEncountered',
        'totalShiny{{GENDER}}PokemonHatched',
        'totalShadow{{GENDER}}PokemonCaptured',
        'totalShadow{{GENDER}}PokemonDefeated',
    ];

    genderStatisticGroups = this.baseGenderObservables.map((observableString) => {
        return this.statisticGenders.map((gender) => {
            return observableString.replace('{{GENDER}}', gender);
        });
    });

    genderObservables = this.genderStatisticGroups.flat();

    constructor() {
        [].concat(
            this.observables,
            this.hiddenObservables,
            this.genderObservables,
        ).forEach((prop) => {
            this[prop] = ko.observable<number>(0).extend({ numeric: 0 });
        });

        this.arrayObservables.forEach((array) => {
            // We use a proxy to generate new array observables on the fly.
            this[array] = new Proxy([], {
                get: (statistics, prop: string) => {
                    if (typeof statistics[prop] !== 'undefined') {
                        return statistics[prop];
                    }

                    // If it's not an int or less than zero, we do not want to set it
                    const id: number = Math.floor(Number(prop));
                    if (Number.isNaN(id) || id < 0 || id !== Number(prop)) {
                        if (Number.isNaN(id)) {
                            // eslint-disable-next-line no-console
                            console.trace(`[Statistics] [${array}] Invalid property requested:`, prop);
                        }
                        return failedSetValue;
                    }

                    // eslint-disable-next-line no-param-reassign
                    statistics[id] = ko.observable<number>(0).extend({ numeric: 0 });
                    return statistics[id];
                },

                // This makes it so the stats observable can't be accidently changed
                set: (
                    obj: Array<Observable<number>>,
                    prop: any,
                    value: number,
                ): boolean => {
                    const result = obj[prop](value);
                    return result === failedSetValue;
                },

                // This is needed for map, forEach etc to work,
                // because they want to check if target.hasOwnProperty("0") first.
                // The ko function doesn't seem to have any OwnProperties anyway,
                // so no harm here (don't quote me)
                // eslint-disable-next-line func-names
                has: (target: any, prop: string) => Reflect.has(target, prop),
            });
        });

        this.objectObservables.forEach((object) => {
            this[object] = new Proxy({}, {
                get: (statistics, prop: string) => {
                    if (typeof statistics[prop] !== 'undefined') {
                        return statistics[prop];
                    }

                    if (prop === 'highestID') {
                        let highestID = 0;
                        Object.entries(statistics).forEach(([key, val]: [string, () => number]) => {
                            const numKey = Number(key);
                            if (!Number.isNaN(numKey) && numKey > highestID && val() > 0) {
                                highestID = numKey;
                            }
                        });
                        return highestID;
                    }

                    // eslint-disable-next-line no-param-reassign
                    statistics[prop] = ko.observable<number>(0).extend({ numeric: 0 });
                    return statistics[prop];
                },

                // This makes it so the stats observable can't be accidently changed
                set: (obj: any, prop: any, value: number): boolean => {
                    const result = obj[prop](value);
                    return result === failedSetValue;
                },

                // This is needed for map, forEach etc to work,
                // because they want to check if target.hasOwnProperty("0") first.
                // The ko function doesn't seem to have any OwnProperties anyway,
                // so no harm here (don't quote me)
                // eslint-disable-next-line func-names
                has: (target: any, prop: string) => Reflect.has(target, prop),
            });
        });

        // We use a proxy to generate new array observables on the fly.
        this.routeKills = getRouteKillsProxy();
    }

    toJSON(): Record<string, any> {
        const saveObject = {};

        const getSaveDataValue = (rawInput) => {
            // Unwrap the value immediately, so we are always working with JS types
            const input = ko.unwrap(rawInput);

            if (Array.isArray(input)) {
                // Recurse arrays through getSaveDataValue, to get any observable values
                return input.map(getSaveDataValue);
            }

            if (typeof input === 'object' && !ko.isObservable(input)) {
                // Recurse objects through getSaveDataValue, to get any observable values
                return Object.entries(input).reduce((acc, [nextKey, nextObs]) => {
                    const nextValue = getSaveDataValue(nextObs);
                    if (nextValue === 0) {
                        return acc;
                    }
                    acc[nextKey] = nextValue;
                    return acc;
                }, {});
            }

            // If we get here, it isn't an array or object, so it must be a value.
            return input;
        };

        // Since we're able to flatten arrays/objects/values with a single function,
        // process all of them together
        [].concat(
            this.observables,
            this.hiddenObservables,
            this.genderObservables,
            this.arrayObservables,
            this.objectObservables,
            this.autogeneratedObservables,
        ).forEach((prop) => { saveObject[prop] = getSaveDataValue(this[prop]); });

        return saveObject;
    }

    fromJSON(json: Record<string, any>): void {
        if (!json) {
            return;
        }

        [].concat(
            this.observables,
            this.hiddenObservables,
            this.genderObservables,
        ).forEach((prop) => { this[prop](json[prop] || 0); });

        this.arrayObservables.forEach((array) => {
            json[array]?.forEach((el, index) => {
                if (this[array] && this[array][index] && !Number.isNaN(Number(el))) {
                    this[array][index](Number(el));
                }
            });
        });

        this.objectObservables.forEach((object) => {
            if (!json[object]) { return; }

            Object.entries(json[object]).forEach(([key, val]) => {
                const num = Number(val);
                if (!Number.isNaN(num) && num) {
                    this[object][key](num);
                }
            });
        });

        const setAutogeneratedObservable = (objSet, objGet, key) => {
            // Don't try to process a null value. We should retain the defaults
            if (objGet[key] === null) {
                return;
            }

            if (typeof objSet[key] === 'undefined') {
                // Skip any values that are not allowed to be set
                // eslint-disable-next-line no-console
                console.trace('[Statistics] Could not set:', key);
            } else if (Array.isArray(objGet[key])) {
                // If we've found an array, loop into it
                for (let i = 0; i < objGet[key].length; i += 1) {
                    setAutogeneratedObservable(objSet[key], objGet[key], i);
                }
            } else if (typeof objGet[key] === 'object') {
                // If we've found an object, nest into it
                Object.keys(objGet[key]).forEach((nestedKey) => {
                    setAutogeneratedObservable(objSet[key], objGet[key], nestedKey);
                });
            } else if (ko.isObservable(objSet[key])) {
                // If we've found an observable, set it
                objSet[key](objGet[key]);
            } else {
                // eslint-disable-next-line no-console
                console.trace('[Statistics] Could not determine action to take for set:', key);
            }
        };
        this.autogeneratedObservables.forEach((object) => {
            if (!json[object]) { return; }
            setAutogeneratedObservable(this, json, object);
        });
    }
}
