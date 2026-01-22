/// <reference path="./logbook/LogBook.d.ts"/>
/// <reference path="./DataStore/BadgeCase.d.ts"/>
/// <reference path="./profile/Profile.d.ts"/>
/// <reference path="./DataStore/StatisticStore.d.ts"/>
/// <reference path="./challenges/Challenges.d.ts"/>
/// <reference path="./multiplier/Multiplier.d.ts"/>
/// <reference path="./GameConstants.d.ts"/>
/// <reference path="./wallet/Wallet.d.ts"/>
/// <reference path="./party/Category.d.ts"/>
/// <reference path="./oakItems/OakItems.d.ts"/>
/// <reference path="./oakItems/OakItemLoadouts.d.ts"/>
/// <reference path="./saveReminder/SaveReminder.d.ts"/>
/// <reference path="./translation/Translation.d.ts"/>
declare type TmpGameType = {
    gameState: GameState;
    update: any;
    profile: Profile;
    breeding: any;
    pokeballs: any;
    wallet: Wallet;
    keyItems: any;
    badgeCase: BadgeCase;
    oakItems: OakItems;
    oakItemLoadouts: OakItemLoadouts;
    categories: PokemonCategories;
    party: any;
    gems: any;
    underground: any;
    farming: any;
    logbook: LogBook;
    redeemableCodes: any;
    statistics: Statistics;
    quests: any;
    specialEvents: any;
    discord: any;
    achievementTracker: any;
    challenges: Challenges;
    multiplier: Multiplier;
    saveReminder: SaveReminder;
};
declare type TmpAppType = {
    game: TmpGameType;
    isUsingClient: boolean;
    translation: Translate;
    start: () => void;
};
declare type TmpSaveType = {
    key: string;
};
declare type TmpMapHelperType = {
    moveToRoute: (route: number, region: Region) => void;
    routeExist: (route: number, region: Region) => boolean;
    normalizeRoute: (route: number, region: Region) => number;
    accessToRoute: (route: number, region: Region) => boolean;
    getCurrentEnvironment: () => Environment;
    calculateBattleCssClass: () => string;
    calculateRouteCssClass: (route: number, region: Region) => string;
    calculateTownCssClass: (townName: string) => string;
    accessToTown: (townName: string) => boolean;
    moveToTown: (townName: string) => void;
    validRoute: (route: number, region: Region) => boolean;
    openShipModal: () => void;
    ableToTravel: () => boolean;
    travelToNextRegion: () => void;
};
declare type TmpDungeonRunner = {
    dungeon: {
        name: string;
    };
};
declare type TmpGym = {
    town: string;
};
declare type TmpGymRunner = {
    gymObservable: () => TmpGym;
};
declare global {
    const App: TmpAppType;
    const player: any;
    const Save: TmpSaveType;
    const MapHelper: TmpMapHelperType;
    const DungeonRunner: TmpDungeonRunner;
    const GymRunner: TmpGymRunner;
}

