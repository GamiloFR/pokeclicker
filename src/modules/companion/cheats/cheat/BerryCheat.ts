import { Saveable } from '../../../DataStore/common/Saveable';
import InfiniteCheat from './InfiniteCheat';

class BerryCheat extends InfiniteCheat {
    private _berryList: number[];
    private _berryUnlocked: boolean[];

    get _feature(): Saveable {
        return App.game.farming as unknown as Saveable;
    }

    _applyInfinite() {
        this._berryList = App.game.farming.berryList.map(amount => amount());
        this._berryUnlocked = App.game.farming.unlockedBerries.map(isUnlocked => isUnlocked());

        App.game.farming.berryList.forEach(amount => amount(Number.POSITIVE_INFINITY));
        App.game.farming.unlockedBerries.forEach(isUnlocked => isUnlocked(true));
    }

    _applyReal() {
        App.game.farming.berryList.forEach((amount, index) => amount(this._berryList[index]));
        App.game.farming.unlockedBerries.forEach((isUnlocked, index) => isUnlocked(this._berryUnlocked[index]));
    }
}

export default BerryCheat;
