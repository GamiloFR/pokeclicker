/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare abstract class AchievementRequirement extends Requirement {
    achievementType: GameConstants.AchievementType;
    constructor(requiredValue: number, option: GameConstants.AchievementOption, achievementType?: GameConstants.AchievementType);
}
