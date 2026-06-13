import { GameState } from '../../../GameConstants';
import GymBattle from '../../../gym/GymBattle';
import BattleFeature from './BattleFeature';

class GymBattleFeature extends BattleFeature {
    public constructor() {
        super(GameState.gym);
    }

    _battleTick() {
        GymBattle.clickAttack();
    }
}

export default GymBattleFeature;
