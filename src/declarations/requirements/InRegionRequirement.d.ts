/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class InRegionRequirement extends Requirement {
    regions: Region[];
    constructor(regions: Region[], option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
