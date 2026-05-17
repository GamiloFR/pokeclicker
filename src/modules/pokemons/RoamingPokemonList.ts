import { Observable } from 'knockout';
import {
    AlolaSubRegions, GalarSubRegions, HisuiSubRegions,
    HoennSubRegions,
    JohtoSubRegions,
    KalosSubRegions,
    KantoSubRegions,
    PaldeaSubRegions, Region,
    SinnohSubRegions, UnovaSubRegions
} from '../GameConstants';
import GameHelper from '../GameHelper';
import RegionRoute from '../routes/RegionRoute';
import Routes from '../routes/Routes';
import SeededRand from '../utilities/SeededRand';
import { PokemonNameType } from './PokemonNameType';
import RoamingGroup from './RoamingGroup';
import RoamingPokemon from './RoamingPokemon';

export default class RoamingPokemonList {
    public static roamerGroups: RoamingGroup[][] = [
        [new RoamingGroup('Kanto', [KantoSubRegions.Kanto]), new RoamingGroup('Kanto - Sevii Islands', [KantoSubRegions.Sevii123, KantoSubRegions.Sevii4567])],
        [new RoamingGroup('Johto', [JohtoSubRegions.Johto])],
        [new RoamingGroup('Hoenn', [HoennSubRegions.Hoenn]), new RoamingGroup('Hoenn - Orre', [HoennSubRegions.Orre])],
        [new RoamingGroup('Sinnoh', [SinnohSubRegions.Sinnoh])],
        [new RoamingGroup('Unova', [UnovaSubRegions.Unova])],
        [new RoamingGroup('Kalos', [KalosSubRegions.Kalos])],
        [new RoamingGroup('Alola', [AlolaSubRegions.MelemeleIsland, AlolaSubRegions.AkalaIsland, AlolaSubRegions.UlaulaIsland, AlolaSubRegions.PoniIsland]), new RoamingGroup('Alola - Magikarp Jump', [AlolaSubRegions.MagikarpJump])],
        [new RoamingGroup('Galar - South', [GalarSubRegions.SouthGalar]), new RoamingGroup('Galar - North', [GalarSubRegions.NorthGalar]), new RoamingGroup('Galar - Isle of Armor', [GalarSubRegions.IsleofArmor]), new RoamingGroup('Galar - Crown Tundra', [GalarSubRegions.CrownTundra])],
        [new RoamingGroup('Hisui', [HisuiSubRegions.Hisui])],
        [new RoamingGroup('Paldea', [PaldeaSubRegions.Paldea]), new RoamingGroup('Paldea - Kitakami', [PaldeaSubRegions.Kitakami]), new RoamingGroup('Paldea - Blueberry Academy', [PaldeaSubRegions.BlueberryAcademy])],
    ];

    public static list: Partial<Record<Region, Array<Array<RoamingPokemon>>>> = {};
    public static increasedChanceRoute: Array<Array<Observable<RegionRoute>>> = new Array(GameHelper.enumLength(Region) - 2) // Remove None and Final
        .fill(0).map((v, i) => new Array(RoamingPokemonList.roamerGroups[i].length)
            .fill(0).map(() => ko.observable(undefined)));

    // How many hours between when the roaming Pokemon change routes for increased chances
    private static period = 8;

    public static add(region: Region, subRegionGroup: number, roamer: RoamingPokemon): void {
        if (!RoamingPokemonList.list[region]) {
            RoamingPokemonList.list[region] = [];
        }
        if (!RoamingPokemonList.list[region][subRegionGroup]) {
            RoamingPokemonList.list[region][subRegionGroup] = [];
        }
        RoamingPokemonList.list[region][subRegionGroup].push(roamer);
    }

    public static remove(region: Region, subRegionGroup: number, pokemonName: PokemonNameType): void {
        const index = RoamingPokemonList.list[region][subRegionGroup].findIndex((r) => r.pokemon.name === pokemonName);
        if (index >= 0) {
            RoamingPokemonList.list[region][subRegionGroup].splice(index, 1);
        }
    }

    public static getSubRegionalGroupRoamers(region: Region, subRegionGroup: number): Array<RoamingPokemon> {
        return RoamingPokemonList.list[region] && RoamingPokemonList.list[region][subRegionGroup]
            ? RoamingPokemonList.list[region][subRegionGroup].filter((p) => p.isRoaming())
            : [];
    }

    public static getIncreasedChanceRouteBySubRegionGroup(region: Region, subRegionGroup: number): Observable<RegionRoute> {
        return RoamingPokemonList.increasedChanceRoute[region]?.[subRegionGroup];
    }

    public static generateIncreasedChanceRoutes(date = new Date()) {
        // Seed the random runmber generator
        SeededRand.seedWithDateHour(date, this.period);

        RoamingPokemonList.increasedChanceRoute.forEach((subRegionGroups, region) => {
            subRegionGroups.forEach((route, group) => {
                const routes = Routes.getRoutesByRegion(region).filter((r) => this.findGroup(region, r.subRegion ?? 0) === group);
                // Select a route
                const selectedRoute = SeededRand.fromArray(routes);
                route(selectedRoute);
            });
        });
    }

    public static findGroup(region: Region, subRegion: number) {
        return this.roamerGroups[region].findIndex((g) => g.subRegions.includes(subRegion));
    }
}
