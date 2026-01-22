/// <reference path="knockout.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../routes/RegionRoute.d.ts"/>
/// <reference path="./PokemonNameType.d.ts"/>
/// <reference path="./RoamingPokemon.d.ts"/>
declare class RoamingPokemonList {
    static roamerGroups: (KantoSubRegions[][] | JohtoSubRegions[][] | HoennSubRegions[][] | SinnohSubRegions[][] | UnovaSubRegions[][] | KalosSubRegions[][] | AlolaSubRegions[][] | GalarSubRegions[][])[];
    static list: Partial<Record<Region, Array<Array<RoamingPokemon>>>>;
    static increasedChanceRoute: Array<Array<Observable<RegionRoute>>>;
    private static period;
    static add(region: Region, subRegionGroup: number, roamer: RoamingPokemon): void;
    static remove(region: Region, subRegionGroup: number, pokemonName: PokemonNameType): void;
    static getSubRegionalGroupRoamers(region: Region, subRegionGroup: number): Array<RoamingPokemon>;
    static getIncreasedChanceRouteBySubRegionGroup(region: Region, subRegionGroup: number): Observable<RegionRoute>;
    static generateIncreasedChanceRoutes(date?: Date): void;
    static findGroup(region: Region, subRegion: number): number;
}
