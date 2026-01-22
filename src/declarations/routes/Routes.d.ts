/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./RegionRoute.d.ts"/>
declare class Routes {
    static regionRoutes: RegionRoute[];
    static add(route: RegionRoute): void;
    static sortRegionRoutes(): void;
    static getRoute(region: GameConstants.Region, route: number): RegionRoute;
    static getRoutesByRegion(region: GameConstants.Region): RegionRoute[];
    static getRegionByRoute(route: number): GameConstants.Region;
    static getName(route: number, region: number, alwaysIncludeRegionName?: boolean): string;
    static unnormalizeRoute(normalizedRoute: number): number;
    static normalizedNumber(region: GameConstants.Region, route: number, skipIgnoredRoutes: boolean): number;
}
