/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./AchievementRequirement.d.ts"/>
declare class ClearGymRequirement extends AchievementRequirement {
    gymIndex: number;
    constructor(value: number, gymIndex: number, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
