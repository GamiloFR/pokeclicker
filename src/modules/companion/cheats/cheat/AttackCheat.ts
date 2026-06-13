import Cheat from '../Cheat';

class AttackCheat extends Cheat {
    private _calculatePokemonAttack: (...args: any[]) => any;
    private _calculateBaseClickAttack: (...args: any[]) => any;

    _enable(): void {
        this._calculatePokemonAttack = App.game.party.calculatePokemonAttack;
        App.game.party.calculatePokemonAttack = () => Number.POSITIVE_INFINITY;

        this._calculateBaseClickAttack = App.game.party.calculateClickAttack;
        App.game.party.calculateClickAttack = (useItem: boolean) => {
            App.game.multiplier.getBonus('clickAttack', useItem);
            return Number.POSITIVE_INFINITY;
        };
    }

    _disable(): void {
        if (this._calculatePokemonAttack) {
            App.game.party.calculatePokemonAttack = this._calculatePokemonAttack.bind(App.game.party);
        }
        if (this._calculateBaseClickAttack) {
            App.game.party.calculateClickAttack = this._calculateBaseClickAttack.bind(App.game.party);
        }
    }
}

export default AttackCheat;
