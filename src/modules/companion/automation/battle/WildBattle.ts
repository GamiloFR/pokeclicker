import * as GameConstants from '../../../GameConstants';
import Battle from '../../../battles/Battle';
import BattleFeature from './BattleFeature';

class WildBattleFeature extends BattleFeature {
    public constructor() {
        super(GameConstants.GameState.fighting);
    }

    _battleTick(): void {
        Battle.clickAttack();
    }
}

export default WildBattleFeature;
