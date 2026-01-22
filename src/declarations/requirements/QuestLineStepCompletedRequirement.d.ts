/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class QuestLineStepCompletedRequirement extends Requirement {
    private questLineName;
    private questIndex;
    cachedQuest: any;
    get quest(): any;
    constructor(questLineName: string, questIndex: number, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
