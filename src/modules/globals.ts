import * as TempTypes from './TemporaryScriptTypes';

/*
    Globals declared here also need to be listed in .eslintrc.js
*/

// Where all the magic happens
declare global {
    const App: TempTypes.TmpAppType;
    const player: TempTypes.TmpPlayerType;
    const Save: TempTypes.TmpSaveType;
    const MapHelper: TempTypes.TmpMapHelperType;
    const DungeonRunner: TempTypes.TmpDungeonRunnerType;
    const DungeonBattle: TempTypes.TmpDungeonBattleType;
    const GymRunner: TempTypes.TmpGymRunnerType;
    const GymBattle: TempTypes.TmpGymBattleType;
    const AchievementHandler: TempTypes.TmpAchievementHandlerType;
    const PokemonLocations: TempTypes.TmpPokemonLocationsType;
    const PokemonFactory: TempTypes.TmpPokemonFactoryType;
    const PartyController: TempTypes.TmpPartyControllerType;
    const TemporaryBattleList: TempTypes.TmpTemporaryBattleListType;
    const TemporaryBattleBattle: TempTypes.TmpTemporaryBattleBattleType;
    const BagHandler: TempTypes.TmpBagHandlerType;
    const BreedingController: TempTypes.TmpBreedingControllerType;
    const Safari: TempTypes.TmpSafariType;
    const SafariBattle: TempTypes.TmpSafariBattleType;
    const BaitList: TempTypes.TmpBaitListType;
}
