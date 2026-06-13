import { Saveable } from '../../DataStore/common/Saveable';
import BattleCafeController from './BattleCafeController';

class BattleCafeSaveObject implements Saveable {
    saveKey = 'BattleCafe';
    defaults = {};

    toJSON(): Record<string, any> {
        return {
            spinsLeft: BattleCafeController.spinsLeft(),
        };
    }
    fromJSON(json: Record<string, any>): void {
        if (!json) {
            return;
        }
        BattleCafeController.spinsLeft(json.spinsLeft ?? BattleCafeController.baseDailySpins);
    }

}

export default BattleCafeSaveObject;
