/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./AchievementRequirement.d.ts"/>
declare class RouteKillRequirement extends AchievementRequirement {
    region: Region;
    route: number;
    constructor(value: number, region: Region, route: number, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
