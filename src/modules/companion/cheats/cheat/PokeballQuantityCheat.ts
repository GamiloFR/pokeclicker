import { Saveable } from '../../../DataStore/common/Saveable';
import { Pokeball } from '../../../GameConstants';
import InfiniteCheat from './InfiniteCheat';

class PokeballQuantityCheat extends InfiniteCheat {
    private _quantities: Record<Pokeball, number>;

    get _feature(): Saveable {
        return App.game.pokeballs as unknown as Saveable;
    }

    _applyInfinite() {
        this._quantities = App.game.pokeballs.pokeballs
            .reduce((acc, pokeball) => ({
                ...acc,
                [pokeball.type]: pokeball.quantity(),
            }), {} as Record<Pokeball, number>);
        App.game.pokeballs.pokeballs.forEach(pokeball => {
            pokeball.quantity(Number.POSITIVE_INFINITY);
        });
    }

    _applyReal() {
        App.game.pokeballs.pokeballs.forEach(pokeball => {
            pokeball.quantity(this._quantities[pokeball.type]);
        });
    }
}

export default PokeballQuantityCheat;
