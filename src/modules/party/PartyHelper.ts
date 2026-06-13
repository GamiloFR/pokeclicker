import PokemonType from '../enums/PokemonType';
import { pokemonMap } from '../pokemons/PokemonList';
import PartyPokemon from './PartyPokemon';

class PartyHelper {
    public static isPureType(pokemon: PartyPokemon, type: (PokemonType | null)): boolean {
        const pokemonData = pokemonMap[pokemon.name];
        return ((type == null || pokemonData.type[0] === type) && (pokemonData.type[1] == undefined || pokemonData.type[1] == PokemonType.None));
    }
}

export default PartyHelper;
