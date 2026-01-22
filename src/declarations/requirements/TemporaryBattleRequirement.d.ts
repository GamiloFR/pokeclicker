/// <reference path="./Requirement.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
declare class TemporaryBattleRequirement extends Requirement {
    battleName: string;
    constructor(battleName: string, defeatsRequired?: number, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
