import { Saveable } from '../../../DataStore/common/Saveable';
import InfiniteCheat from './InfiniteCheat';

/**
 * Grants the player an infinite amount of money
 */
class WalletCheat extends InfiniteCheat {
    private _currencies: number[];

    get _feature(): Saveable {
        return App.game.wallet;
    }

    _applyInfinite() {
        this._currencies = App.game.wallet.currencies.map(value => value());
        App.game.wallet.currencies.forEach(value => value(Number.POSITIVE_INFINITY));
    }

    _applyReal() {
        App.game.wallet.currencies.forEach((value, index) => value(this._currencies[index]));
    }
}

export default WalletCheat;
