import { Saveable } from '../../../DataStore/common/Saveable';
import Cheat from '../Cheat';

/**
 * A cheat granting the player an infinite amount of something
 */
abstract class InfiniteCheat extends Cheat {
    private _toJSON: () => Record<string, any>;

    /**
     * The feature that holds the property with the infinite amount
     */
    abstract get _feature(): Saveable;

    /**
     * Changes the current amount to an infinite value
     */
    abstract _applyInfinite();

    /**
     * Reverts the amount to its originial value
     */
    abstract _applyReal();

    _enable(): void {
        this._applyInfinite();

        this._toJSON = this._feature.toJSON;
        this._feature.toJSON = () => {
            this._applyReal();
            const json = this._toJSON.bind(this._feature)();
            this._applyInfinite();
            return json;
        };
    }

    _disable(): void {
        this._applyReal();
        this._feature.toJSON = this._toJSON.bind(this._feature);
    }
}

export default InfiniteCheat;
