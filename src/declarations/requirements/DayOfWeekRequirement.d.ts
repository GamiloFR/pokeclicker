/// <reference path="knockout.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class DayOfWeekRequirement extends Requirement {
    static date: KnockoutObservable<Number>;
    DayOfWeekNum: number;
    constructor(DayOfWeekNum: number, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
