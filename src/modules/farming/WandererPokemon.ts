import type { Observable } from 'knockout';
import BerryType from '../enums/BerryType';
import { MINUTE, Pokeball, WANDER_TICK } from '../GameConstants';
import GameHelper from '../GameHelper';
import { PokemonNameType } from '../pokemons/PokemonNameType';

class WandererPokemon {
    public catching = ko.observable(false);
    public pokeball = ko.observable(Pokeball.None);
    public distractTime: Observable<number>;
    public fleeing = ko.observable(false);

    constructor(
        public name: PokemonNameType,
        public berry: BerryType,
        public catchRate: number,
        public shiny = false,
        distractTime = 0,
    ) {
        this.distractTime = ko.observable(distractTime);
    }

    public static fromJSON(wanderer: any): WandererPokemon | undefined {
        if (wanderer) {
            return new WandererPokemon(wanderer.name, wanderer.berry, wanderer.catchRate, wanderer.shiny, wanderer.distractTime);
        }
        return undefined;
    }

    // If distracted for long enough, flees
    public tick(): boolean {
        if (!this.distractTime() || this.catching() || this.fleeing()) {
            return false;
        }
        GameHelper.incrementObservable(this.distractTime, WANDER_TICK);
        if (this.distractTime() >= 5 * MINUTE) {
            return true;
        }
        return false;
    }

    // Happens when plot.dies() is used
    public distract() {
        GameHelper.incrementObservable(this.distractTime, 1);
    }

    public toJSON(): Record<any, any> {
        const json = { name: this.name, berry: this.berry, catchRate: this.catchRate, shiny: this.shiny, distractTime: this.distractTime() };
        return json;
    }
}

export default WandererPokemon;
