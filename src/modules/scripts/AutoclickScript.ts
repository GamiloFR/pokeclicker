import Script from './Script';
import { GameState, Region, Starter } from '../GameConstants';
import Battle from '../battles/Battle';

class AutoclickScriptClass extends Script {
    public constructor() {
        super('scripts.autoclick', 'Auto-click');
    }

    public isUnlocked(): boolean {
        return !App.game.challenges.list.disableClickAttack.active() && player.regionStarters[Region.kanto]() !== Starter.None;
    }

    protected tick() {
        if (App.game.gameState === GameState.fighting) {
            Battle.clickAttack();
        } else if (App.game.gameState === GameState.dungeon && DungeonRunner.fighting()) {
            DungeonBattle.clickAttack();
        } else if (App.game.gameState === GameState.gym) {
            GymBattle.clickAttack();
        } else if (App.game.gameState === GameState.temporaryBattle) {
            TemporaryBattleBattle.clickAttack();
        }
    }
}

const AutoclickScript = new AutoclickScriptClass();

export default AutoclickScript;
