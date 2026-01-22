/// <reference path="./AchievementRequirement.d.ts"/>
declare class HatcheryHelperRequirement extends AchievementRequirement {
    private bonusRequired;
    constructor(helpersUnlocked: number, bonusRequired: number);
    getProgress(): number;
    hint(): string;
}
