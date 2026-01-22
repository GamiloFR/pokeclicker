/// <reference path="knockout.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class CustomRequirement<T> extends Requirement {
    private focus;
    private required;
    private hintText;
    constructor(focus: Observable<T>, required: T, hintText: string, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
