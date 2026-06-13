import Cheat from '../Cheat';

declare class SafariPokemon {
    get catchFactor(): number;
}

class SafariCheat extends Cheat {
    private _catchFactor: () => number;
    private calcCapture: (...args: any[]) => any;

    _enable(): void {
        this._catchFactor = Object.getOwnPropertyDescriptor(SafariPokemon.prototype, 'catchFactor').get;
        Object.defineProperty(SafariPokemon.prototype, 'catchFactor', {
            get: () => 100,
        });
    }

    _disable(): void {
        Object.defineProperty(SafariPokemon.prototype, 'catchFactor', {
            get: this._catchFactor,
        });
    }
}

export default SafariCheat;
