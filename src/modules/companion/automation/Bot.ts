import CompanionFeature from '../Feature';
import GymBattleFeature from './battle/GymBattle';
import TemporaryBattleFeature from './battle/TemporaryBattle';
import WildBattleFeature from './battle/WildBattle';

class Bot implements CompanionFeature {
    public wildBattle: WildBattleFeature;
    public gymBattle: GymBattleFeature;
    public temporaryBattle: TemporaryBattleFeature;

    public constructor() {
        this.wildBattle = new WildBattleFeature();
        this.gymBattle = new GymBattleFeature();
        this.temporaryBattle = new TemporaryBattleFeature();
    }

    public fromJSON(json: Record<string, any>): void {
        if ('battle' in json) {
            this.wildBattle.enabled(json.battle);
        }
        if ('gym' in json) {
            this.gymBattle.enabled(json.gym);
        }
        if ('temporaryBattle' in json) {
            this.temporaryBattle.enabled(json.temporaryBattle);
        }
    }

    public toJSON(): Record<string, any> {
        return {
            battle: this.wildBattle.enabled(),
            gym: this.gymBattle.enabled(),
            temporaryBattle: this.temporaryBattle.enabled(),
        };
    }
}

export default Bot;
