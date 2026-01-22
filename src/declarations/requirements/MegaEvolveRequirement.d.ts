/// <reference path="../pokemons/PokemonNameType.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class MegaEvolveRequirement extends Requirement {
    private name;
    constructor(name: PokemonNameType);
    getProgress(): number;
    hint(): string;
}
