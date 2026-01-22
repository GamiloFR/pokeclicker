/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class QuestLineCompletedRequirement extends Requirement {
    private questLineName;
    cachedQuest: any;
    get quest(): any;
    constructor(questLineName: string, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
