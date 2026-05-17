// importing only types, as we are "allowed" to have circular type dependencies
import type {
    Computed as KnockoutComputed,
    Observable as KnockoutObservable,
    ObservableArray as KnockoutObservableArray,
} from 'knockout';
import type Achievement from './achievements/Achievement';
import type AchievementCategory from './achievements/AchievementCategory';
import type { AchievementSortOptions } from './achievements/AchievementSortOptions';
import type BattlePokemon from './battles/BattlePokemon';
import type EggType from './breeding/EggType';
import type Challenges from './challenges/Challenges';
import type BadgeCase from './DataStore/BadgeCase';
import type Statistics from './DataStore/StatisticStore';
import type DungeonBossPokemon from './dungeons/DungeonBossPokemon';
import type areaStatus from './enums/AreaStatus';
import type CaughtStatus from './enums/CaughtStatus';
import type PokemonType from './enums/PokemonType';
import type Farming from './farming/Farming';
import type Plot from './farming/Plot';
import type WandererPokemon from './farming/WandererPokemon';
import type * as GameConstants from './GameConstants';
import type Gym from './gym/Gym';
import type GymPokemon from './gym/GymPokemon';
import type BagItem from './interfaces/BagItem';
import type Item from './items/Item';
import type { MultiplierDecreaser } from './items/types';
import type KeyItems from './keyItems/KeyItems';
import type LogBook from './logbook/LogBook';
import type Multiplier from './multiplier/Multiplier';
import type OakItemLoadouts from './oakItems/OakItemLoadouts';
import type OakItems from './oakItems/OakItems';
import type PokemonCategories from './party/Category';
import type Party from './party/Party';
import type PartyPokemon from './party/PartyPokemon';
import type PokeballFilters from './pokeballs/PokeballFilters';
import type { EvoData } from './pokemons/evolutions/Base';
import type { PokemonNameType } from './pokemons/PokemonNameType';
import type Profile from './profile/Profile';
import type Quests from './quests/Quests';
import type HatchRequirement from './requirements/HatchRequirement';
import type SaveReminder from './saveReminder/SaveReminder';
import type CssVariableSetting from './settings/CssVariableSetting';
import type { SortOptions } from './settings/SortOptions';
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
    breeding: TmpBreedingType;
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

export type TmpAchievementHandlerType = {
    achievementList: Achievement[];
    navigateIndex: KnockoutObservable<number>;
    achievementListFiltered: KnockoutObservableArray<Achievement>;
    numberOfTabs: KnockoutObservable<number>;
    setNavigateIndex: (index: number) => void;
    navigateRight: () => void;
    navigateLeft: () => void;
    isNavigateDirectionDisabled: (navigateBackward: boolean) => boolean;
    calculateNumberOfTabs: () => void;
    filter: Record<string, any>;
    getAchievementListWithIndex: () => void;
    cachedSortedList: Achievement[];
    achievementSortedList: KnockoutComputed<any[]>;
    filterAchievementList: (retainPage: boolean) => void;
    compareBy: (option: AchievementSortOptions, direction: boolean) => (a: Achievement, b: Achievement) => number;
    preCheckAchievements: () => void;
    checkAchievements: () => void;
    addAchievement: (...rest) => void;
    calculateBonus: () => void;
    calculateMaxBonus: () => void;
    achievementBonus: () => number;
    achievementBonusPercent: () => string;
    findByName: (name: string) => Achievement;
    getAchievementCategories: () => AchievementCategory[];
    getAchievementCategoryByRegion: (region: GameConstants.Region) => AchievementCategory;
    getAchievementCategoryByExtraCategory: (category: GameConstants.ExtraAchievementCategories) => AchievementCategory;
    initialize: (multiplier: Multiplier, challenges: Challenges) => void;
    load: () => void;
    unlockAchievement (achievementName: string): void
};

export type TmpPokemonLocationsType = {
    getPokemonPrevolution: (pokemonName: PokemonNameType, maxRegion?: GameConstants.Region) => EvoData[];
};

export type TmpPokemonFactoryType = {
    generateWildPokemon(route: number, region: GameConstants.Region, subRegion: SubRegion): BattlePokemon;
    routeDungeonTokens(route: number, region: GameConstants.Region): number;
    generateShiny(chance: number, skipBonus?: boolean): boolean;
    generateGenderById(id: number): GameConstants.BattlePokemonGender;
    routeHealth(route: number, region: GameConstants.Region): number;
    generateWandererData(plot: Plot): WandererPokemon;
    generateDungeonPokemon(name: PokemonNameType, chestsOpened: number, baseHealth: number, level: number, mimic?: boolean): BattlePokemon;
    generateDungeonTrainerPokemon(pokemon: GymPokemon, chestsOpened: number, baseHealth: number, level: number, isBoss: boolean, trainerPokemon?: number): BattlePokemon;
    generateDungeonBoss(bossPokemon: DungeonBossPokemon, chestsOpened: number): BattlePokemon;
    routeLevel(route: number, region: GameConstants.Region): number
    generateGymPokemon(gym: Gym, index: number): BattlePokemon
    generatePartyPokemon(id: number, shiny?: boolean, gender?: GameConstants.BattlePokemonGender, shadow?: GameConstants.ShadowStatus): PartyPokemon
};

export type TmpBagHandlerType = {
    displayName(item: BagItem): string;
    image(item: BagItem): string;
    gainItem(item: BagItem, amount?: number): void;
};

export type TmpTemporaryBattleListType = {
    [battleName: string]: TmpTemporaryBattleType;
};

export type TmpTemporaryBattleType = TownContent & {
    name: string;
    parent?: Town;
    getTown: () => Town | undefined;
    getDisplayName: () => string;
};

export type TmpTownListType = {
    [name: string]: Town;
};

export type TmpBattleFrontierMilestonesType = {
    milestoneRewards: TmpBattleFrontierMilestoneType[]
};

export type TmpBattleFrontierMilestoneType = {
    obtained: KnockoutObservable<boolean>
};

export type TmpBattleFrontierMilestonePokemonType = TmpBattleFrontierMilestoneType & {
    pokemonName: string
};

export type TmpHeldItemType = Item & {
    regionUnlocked: GameConstants.Region;
    canUse: (pokemon: PartyPokemon) => boolean
};

export type TmpHeldItemStaticType = {
    heldItemSelected: KnockoutObservable<TmpHeldItemType>
};

export type TmpBreedingControllerType = {
    isPureType(pokemon: PartyPokemon, type: (PokemonType | null)): boolean;
};

export type TmpHatcheryHelperType = {
    trainerSprite: number;
    hired: KnockoutObservable<boolean>;
    tooltip: KnockoutComputed<string>;
    fireAllButtonTooltip: KnockoutComputed<string>;
    sortOption: KnockoutObservable<SortOptions>;
    sortDirection: KnockoutObservable<boolean>;
    hatched: KnockoutObservable<number>;
    hatchBonus: KnockoutObservable<number>;
    stepEfficiency: KnockoutObservable<number>;
    attackEfficiency: KnockoutObservable<number>;
    prevBonus: KnockoutObservable<number>;
    nextBonus: KnockoutObservable<number>;
    categories: KnockoutObservableArray<number>;
    useHatcheryFilters: KnockoutObservable<boolean>;
};

export type TmpHatcheryHelpersType = {
    MAX_HIRES: number;
    available: KnockoutComputed<TmpHatcheryHelperType[]>;
    hired: KnockoutComputed<TmpHatcheryHelperType[]>;
    canHire: KnockoutComputed<boolean>;
    requirement: HatchRequirement;
};

export type TmpEggType = {
    steps: KnockoutObservable<number>;
    pokemonType1: PokemonType;
    pokemonType2: PokemonType;
    progress: KnockoutComputed<number>;
    progressText: KnockoutComputed<string>;
    stepsRemaining: KnockoutComputed<number>;
    partyPokemon: KnockoutObservable<PartyPokemon>;
    stepsRequired: number;
    type: EggType;
    totalSteps: number;
    pokemon: number;
    shinyChance: number;
    notified: boolean;

    isNone(): boolean;
    canHatch(): boolean
};

export type TmpBreedingType = {
    hatcheryHelpers: TmpHatcheryHelpersType;

    get eggList(): Array<KnockoutObservable<TmpEggType>>;
    set eggList(value: Array<KnockoutObservable<TmpEggType>>);

    canAccess(): boolean
    getSteps(eggCycles: number): number;
    addEggItemToHatchery(eggItem: GameConstants.EggItemType): boolean;
    getAllCaughtStatus(): CaughtStatus;
    getTypeCaughtStatus(type: GameConstants.EggItemType): CaughtStatus;
    progressEggsBattle(route: number, region: GameConstants.Region): void;
};
