import { Saveable } from '../../../DataStore/common/Saveable';
import { StoneType } from '../../../GameConstants';
import GameHelper from '../../../GameHelper';
import EggItem from '../../../items/EggItem';
import { ItemList } from '../../../items/ItemList';
import TreasureItem from '../../../items/TreasureItem';
import InfiniteCheat from './InfiniteCheat';

class ItemCheat extends InfiniteCheat {
    private _items: Record<string, number>;

    get _feature(): Saveable {
        return player as unknown as Saveable;
    }

    _applyInfinite() {
        this._items = Object.entries(player.itemList)
            .filter(([name]) => {
                const item = ItemList[name];
                return item instanceof TreasureItem || item instanceof EggItem || GameHelper.enumStrings(StoneType).includes(name);
            })
            .reduce((acc, [name, value]) => ({
                ...acc,
                [name]: value(),
            }), {} as Record<string, number>);
        Object.keys(this._items).forEach(name => player.itemList[name](Number.POSITIVE_INFINITY));
    }

    _applyReal() {
        Object.entries(this._items).forEach(([name, value]) => player.itemList[name](value));
    }
}

export default ItemCheat;
