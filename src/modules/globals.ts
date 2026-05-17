import * as TempTypes from './TemporaryScriptTypes';
import { modalState } from './utilities/DisplayObservables';

/*
    Globals declared here also need to be listed in .eslintrc.js
*/

// Where all the magic happens
export declare const DisplayObservables: { modalState: typeof modalState };

declare global {
    const App: TempTypes.TmpAppType;
    const player: TempTypes.TmpPlayerType;
    const Save: TempTypes.TmpSaveType;
    const MapHelper: TempTypes.TmpMapHelperType;
    const AchievementHandler: TempTypes.TmpAchievementHandlerType;
    const TemporaryBattleList: TempTypes.TmpTemporaryBattleListType;
    const BagHandler: TempTypes.TmpBagHandlerType;
    const TownList: TempTypes.TmpTownListType;
    const BattleFrontierMilestones: TempTypes.TmpBattleFrontierMilestonesType;
    const HeldItem: TempTypes.TmpHeldItemStaticType;
    const BreedingController: TempTypes.TmpBreedingControllerType;
    const SafariPokemonList: TempTypes.TmpSafariPokemonListType;
    const SafariPokemon: TempTypes.TmpSafariPokemonStaticType;
    const SafariItemController: TempTypes.TmpSafariItemControllerType;
}
