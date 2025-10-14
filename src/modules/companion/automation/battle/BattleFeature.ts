import ko from 'knockout';
import * as GameConstants from '../../../GameConstants';
import BotFeature from '../Feature';

abstract class BattleFeature extends BotFeature {
    _targetState: GameConstants.GameState;

    constructor(targetState: GameConstants.GameState) {
        super();
        this.canAccess = ko.observable(true);
        this._targetState = targetState;
    }

    abstract _battleTick();

    _tick(): void {
        if (App.game.gameState === this._targetState) {
            this._battleTick();
        }
    }
}

export default BattleFeature;
