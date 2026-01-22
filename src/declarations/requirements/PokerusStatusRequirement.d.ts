/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./AchievementRequirement.d.ts"/>
declare class PokerusStatusRequirement extends AchievementRequirement {
    private statusRequired;
    constructor(pokemonRequired: number, statusRequired: GameConstants.Pokerus);
    getProgress(): number;
    hint(): string;
}
