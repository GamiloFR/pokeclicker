import { PokemonNameType } from '../pokemons/PokemonNameType';
import EnemyOptions from './EnemyOptions';

class DungeonBossPokemon {
    constructor(
        public name: PokemonNameType,
        public baseHealth: number,
        public level: number,
        public options?: EnemyOptions,
    ) {}
}

export default DungeonBossPokemon;
