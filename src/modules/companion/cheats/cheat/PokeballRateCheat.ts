import { Pokeball } from '../../../GameConstants';
import Cheat from '../Cheat';

class PokeballRateCheat extends Cheat {
    private catchBonuses: Record<Pokeball, (...args: any) => any>;

    _enable(): void {
        this.catchBonuses = App.game.pokeballs.pokeballs
            .reduce((acc, pokeball) => ({
                ...acc,
                [pokeball.type]: pokeball.catchBonus,
            }), {} as Record<Pokeball, (...args: any) => any>);
        App.game.pokeballs.pokeballs.forEach(pokeball => {
            pokeball.catchBonus = () => 100;
        });
    }

    _disable(): void {
        App.game.pokeballs.pokeballs.forEach(pokeball => {
            pokeball.catchBonus = this.catchBonuses[pokeball.type].bind(pokeball);
        });
    }
}

export default PokeballRateCheat;
