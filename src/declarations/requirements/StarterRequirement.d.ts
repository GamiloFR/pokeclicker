/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class StarterRequirement extends Requirement {
    private region;
    private starter;
    constructor(region: Region, starter: Starter);
    getProgress(): any;
    hint(): string;
}
