/// <reference path="./AchievementRequirement.d.ts"/>
declare class SeviiCaughtRequirement extends AchievementRequirement {
    private shiny;
    constructor(value: number, shiny: boolean);
    getProgress(): number;
    hint(): string;
}
