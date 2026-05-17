import SafariEnvironments from '../enums/SafariEnvironments';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import ObtainedPokemonRequirement from '../requirements/ObtainedPokemonRequirement';
import Requirement from '../requirements/Requirement';
import { OverworldSpriteType } from './SafariPokemonList';

class SafariEncounter {
    public requirement: Requirement;
    constructor(
        public name: PokemonNameType,
        public weight: number,
        public environments: SafariEnvironments[] = [SafariEnvironments.Grass],
        requirement?: true | Requirement, // True is used to simplify Friend Safari Pokémon generation
        public hide = true, // Hide from the list
        public sprite : OverworldSpriteType = 'base',
    ) {
        this.requirement = requirement === true ? new ObtainedPokemonRequirement(this.name) : requirement;
    }

    public isAvailable(): boolean {
        return this.requirement?.isCompleted() ?? true;
    }
}

export default SafariEncounter;
