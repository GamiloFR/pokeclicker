import { ShadowStatus } from '../GameConstants';
import type { PokemonNameType } from '../pokemons/PokemonNameType';
import Requirement from '../requirements/Requirement';

class GymPokemon {
    name: PokemonNameType;
    maxHealth: number;
    level: number;
    shiny: boolean;
    shadow: ShadowStatus;
    requirements: Requirement[];

    constructor(
        name: PokemonNameType,
        maxHealth: number,
        level: number,
        requirements: Requirement | Requirement[] = [],
        shiny = false,
        shadow = ShadowStatus.None,
    ) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.level = level;
        if (requirements instanceof Requirement) {
            this.requirements = [requirements];
        } else {
            this.requirements = requirements;
        }
        this.shiny = shiny;
        this.shadow = shadow;
    }
}

export default GymPokemon;
