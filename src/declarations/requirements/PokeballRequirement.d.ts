/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./AchievementRequirement.d.ts"/>
declare class PokeballRequirement extends AchievementRequirement {
    private pokeball;
    constructor(value: number, pokeball: GameConstants.Pokeball, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
