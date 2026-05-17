// importing only types, as we are "allowed" to have circular type dependencies
import type {
    Observable as KnockoutObservable
} from 'knockout';
import Breeding from './breeding/Breeding';
import type Challenges from './challenges/Challenges';
import type BadgeCase from './DataStore/BadgeCase';
import type Statistics from './DataStore/StatisticStore';
import type areaStatus from './enums/AreaStatus';
import type Farming from './farming/Farming';
import type * as GameConstants from './GameConstants';
import type GymPokemon from './gym/GymPokemon';
import type { MultiplierDecreaser } from './items/types';
import type KeyItems from './keyItems/KeyItems';
import type LogBook from './logbook/LogBook';
import type Multiplier from './multiplier/Multiplier';
import type OakItemLoadouts from './oakItems/OakItemLoadouts';
import type OakItems from './oakItems/OakItems';
import type PokemonCategories from './party/Category';
import type Party from './party/Party';
import type PokeballFilters from './pokeballs/PokeballFilters';
import type { PokemonNameType } from './pokemons/PokemonNameType';
import type Profile from './profile/Profile';
import type Quests from './quests/Quests';
import type Requirement from './requirements/Requirement';
import type SaveReminder from './saveReminder/SaveReminder';
import type CssVariableSetting from './settings/CssVariableSetting';
import type SpecialEvents from './specialEvents/SpecialEvents';
import type SubRegion from './subRegion/SubRegion';
import type Town from './towns/Town';
import type TownContent from './towns/townContent/TownContent';
import type Translate from './translation/Translation';
import type { Underground } from './underground/Underground';
import type Wallet from './wallet/Wallet';

/*
    These types are only temporary while we are converting things to modules. As things are converted,
    we should import their types here for use, instead of these cheap imitations.

    When a file is converted to a module, the types for any /scripts dependencies should be added here
    and declared in globals.ts as globally available. The /scripts file should then check against
    the temporary type defined here.

    For example, an instantiable class

        class Example1 {
            public instanceProperty: string;
        }

    becomes

        // this file
        export type TmpExample1Type = {
            instanceProperty: string;
        }

        // the /scripts file
        class Example1 implements TmpExample1Type {
            public instanceProperty: string;
        }

    Static classes aren't as well supported by TypeScript yet:

        class Example2 {
            public static staticProperty: string;
        }

    becomes

        // this file
        export type TmpExample2Type = {
            staticProperty: string;
        }

        // the /scripts file
        class Example2 {
            public static staticProperty: string;
        }
        Example2 satisfies TmpExample2Type;

    If a class has both static and instance properties, it needs separate types for each.

*/

// TODO types for classes not yet described
export type TmpUpdateType = any;
export type TmpPokeballsType = any;
export type TmpGemsType = any;
export type TmpRedeemableCodesType = any;
export type TmpDiscordType = any;
export type TmpAchievementTrackerType = any;
export type TmpBattleFrontierType = any;
export type TmpBattleCafeSaveObjectType = any;
export type TmpDreamOrbControllerType = any;
export type TmpPurifyChamberType = any;
export type TmpWeatherAppType = any;
export type TmpZMovesType = any;

export type TmpGameType = {
    gameState: GameConstants.GameState;

    // constructor properties
    update: TmpUpdateType;
    profile: Profile;
    breeding: Breeding;
    pokeballs: TmpPokeballsType;
    pokeballFilters: PokeballFilters;
    wallet: Wallet;
    keyItems: KeyItems;
    badgeCase: BadgeCase;
    oakItems: OakItems;
    oakItemLoadouts: OakItemLoadouts;
    categories: PokemonCategories;
    party: Party;
    gems: TmpGemsType;
    underground: Underground;
    farming: Farming;
    logbook: LogBook;
    redeemableCodes: TmpRedeemableCodesType;
    statistics: Statistics;
    quests: Quests;
    specialEvents: SpecialEvents;
    discord: TmpDiscordType;
    achievementTracker: TmpAchievementTrackerType;
    challenges: Challenges;
    battleFrontier: TmpBattleFrontierType;
    multiplier: Multiplier;
    saveReminder: SaveReminder;
    battleCafe: TmpBattleCafeSaveObjectType;
    dreamOrbController: TmpDreamOrbControllerType;
    purifyChamber: TmpPurifyChamberType;
    weatherApp: TmpWeatherAppType;
    zMoves: TmpZMovesType;

    // functions
    load: () => void;
    initialize: () => void;
    computeOfflineEarnings: () => void;
    checkAndFix: () => void;
    start: () => void;
    stop: () => void;
    gameTick: () => void;
    save: () => void;
};

export type TmpAppType = {
    debug: boolean;
    game: TmpGameType;
    isUsingClient: boolean;
    translation: Translate;
    start: () => void;
};

export type TmpSaveType = {
    counter: number;
    key: string;
    store: (player: TmpPlayerType) => void;
    getSaveObject: () => void;
    load: () => TmpPlayerType;
    download: () => void;
    copySaveToClipboard: () => void;
    delete: () => Promise<void>;
    filter: (object: any, keep: string[]) => Record<string, any>;
    initializeMultipliers: () => Record<string, number>;
    initializeItemlist: () => Record<string, KnockoutObservable<number>>;
    initializeGems: (saved?: Array<Array<number>>) => Array<Array<KnockoutObservable<number>>>;
    initializeEffects: (saved?: Array<string>) => Record<string, KnockoutObservable<number>>;
    initializeEffectTimer: () => Record<string, KnockoutObservable<string>>;
    loadFromFile: (file) => void;
};

export type TmpPlayerType = {
    route: number;
    region: GameConstants.Region;
    subregion: number;
    town: Town;
    regionStarters: Array<KnockoutObservable<GameConstants.Starter>>;
    subregionObject: KnockoutObservable<SubRegion>;
    trainerId: string;
    itemList: Record<string, KnockoutObservable<number>>;
    _lastSeen: number;
    effectList: Record<string, KnockoutObservable<number>>;
    effectTimer: Record<string, KnockoutObservable<string>>;
    highestRegion: KnockoutObservable<GameConstants.Region>;
    highestSubRegion: KnockoutObservable<number>;
    amountOfItem: (itemName: string) => number;
    itemMultipliers: Record<string, number>;
    gainItem: (itemName: string, amount: number) => void;
    loseItem: (itemName: string, amount: number) => void;
    lowerItemMultipliers: (multiplierDecreaser: MultiplierDecreaser, amount?: number) => void;
    hasMegaStone: (megaStone: GameConstants.MegaStoneType) => boolean;
    gainMegaStone: (megaStone: GameConstants.MegaStoneType, notify?: boolean) => void;
    toJSON: () => Record<string, any>;
};

export type TmpMapHelperType = {
    getUsableFilters: () => CssVariableSetting[];
    moveToRoute: (route: number, region: GameConstants.Region) => void;
    routeExist: (route: number, region: GameConstants.Region) => boolean;
    normalizeRoute: (route: number, region: GameConstants.Region) => number;
    accessToRoute: (route: number, region: GameConstants.Region) => boolean;
    getCurrentEnvironments: () => Array<GameConstants.Environment>;
    calculateBattleCssClass: () => string;
    calculateRouteCssClass: (route: number, region: GameConstants.Region) => string;
    isRouteCurrentLocation: (route: number, region: GameConstants.Region) => boolean;
    isTownCurrentLocation: (townName: string) => boolean;
    calculateTownCssClass: (townName: string) => string;
    accessToTown: (townName: string) => boolean;
    moveToTown: (townName: string) => void;
    validRoute: (route: number, region: GameConstants.Region) => boolean;
    openShipModal: () => void;
    ableToTravel: () => boolean;
    travelToNextRegion: () => void;
    getPokemonAreaStatus(pokemon: PokemonNameType[]): areaStatus[]
};

export type TmpTemporaryBattleListType = {
    [battleName: string]: TmpTemporaryBattleType;
};

export type TmpTemporaryBattleOptionalArgumentType = {
    rewardFunction?: () => void,
    firstTimeRewardFunction?: () => void,
    isTrainerBattle?: boolean,
    displayName?: string,
    returnTown?: string, // If in town, that town will be used. If not in town, this will be used, with the Dock town as default
    imageName?: string,
    visibleRequirement?: Requirement,
    hideTrainer?: boolean,
    environment?: GameConstants.Environment[],
    battleBackground?: GameConstants.BattleBackground,
    resetDaily?: boolean,
    finalPokemonImage?: string // trainer image when on final pokemon
};

export type TmpTemporaryBattleType = TownContent & {
    name: string;
    parent?: Town;
    optionalArgs: TmpTemporaryBattleOptionalArgumentType;
    getTown: () => Town | undefined;
    getDisplayName: () => string;
    getPokemonList(): GymPokemon[];
};

export type TmpTownListType = {
    [name: string]: Town;
};

export type TmpBattleFrontierMilestonesType = {
    milestoneRewards: TmpBattleFrontierMilestoneType[]
};

export type TmpBattleFrontierMilestoneType = {
    obtained: KnockoutObservable<boolean>
    stage: number,
    rewardFunction: () => void,
    requirement?: Requirement,
    _image?: string;

    get image(): string | undefined;
    get description(): string | undefined;
    get displayName(): string | KnockoutObservable<string>
};

export type TmpBattleFrontierMilestonePokemonType = TmpBattleFrontierMilestoneType & {
    pokemonName: string
};

export type TmpGameControllerType = {
    simulateKey(code: string, type?: string, modifiers?: object): void;
};
