/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./SubRegion.d.ts"/>
declare class SubRegions {
    static list: Record<number, SubRegion[]>;
    static addSubRegion(region: Region, subregion: SubRegion): void;
    static getSubRegions(region: Region): SubRegion[];
    static getSubRegion(region: Region, subregion: string): SubRegion;
    static getSubRegionById(region: Region, subregionID: number): SubRegion;
    static openModal(): void;
}
