import { SHINY_CHANCE_BATTLEFRONTIER } from '../GameConstants';
import PokemonFactory from '../pokemons/PokemonFactory';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { pokemonMap } from '../pokemons/PokemonList';
import Requirement from '../requirements/Requirement';
import BattleFrontierMilestone from './BattleFrontierMilestone';

class BattleFrontierMilestonePokemon extends BattleFrontierMilestone {
    constructor(stage: number, public pokemonName: string, requirement?: Requirement, image = `assets/images/items/pokemonItem/${pokemonName}.png`) {
        super(
            stage,
            () => {
                App.game.party.gainPokemonById(pokemonMap[pokemonName].id, PokemonFactory.generateShiny(SHINY_CHANCE_BATTLEFRONTIER));
            },
            image,
            pokemonName,
            requirement,
        );
    }

    get displayName() {
        return PokemonHelper.displayName(this.pokemonName);
    }
}

export default BattleFrontierMilestonePokemon;
