import { GameState } from '../../../GameConstants';
import BattleFeature from './BattleFeature';

class TemporaryBattleFeature extends BattleFeature {
    public constructor() {
        super(GameState.temporaryBattle);
    }

    _battleTick(): void {
        TemporaryBattleBattle.clickAttack();
    }
}

export default TemporaryBattleFeature;
