import App from '../App';
import DungeonList from '../dungeons/DungeonList';
import BadgeEnums from '../enums/Badges';
import KeyItemType from '../enums/KeyItemType';
import { AchievementOption, AlolaSubRegions, BerryTraderLocations, BulletinBoards, Currency, EnergyRestoreSize, FinalSubRegions, GalarSubRegions, GemShops, HisuiSubRegions, HoennSubRegions, JohtoSubRegions, KalosSubRegions, KantoSubRegions, PaldeaSubRegions, PokeballType, Region, ShardTraderLocations, SinnohSubRegions, UnovaSubRegions, getDungeonIndex } from '../GameConstants';
import GymList from '../gym/GymList';
import EnergyRestore from '../items/EnergyRestore';
import { ItemList } from '../items/ItemList';
import PokeballItem from '../items/PokeballItem';
import BulletinBoard from '../quests/BulletinBoard';
import ClearDungeonRequirement from '../requirements/ClearDungeonRequirement';
import ClientRequirement from '../requirements/ClientRequirement';
import CustomRequirement from '../requirements/CustomRequirement';
import DevelopmentRequirement from '../requirements/DevelopmentRequirement';
import GymBadgeRequirement from '../requirements/GymBadgeRequirement';
import ItemOwnedRequirement from '../requirements/ItemOwnedRequirement';
import MaxRegionRequirement from '../requirements/MaxRegionRequirement';
import MultiRequirement from '../requirements/MultiRequirement';
import ObtainedPokemonRequirement from '../requirements/ObtainedPokemonRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import QuestLineCompletedRequirement from '../requirements/QuestLineCompletedRequirement';
import QuestLineStartedRequirement from '../requirements/QuestLineStartedRequirement';
import QuestLineStepCompletedRequirement from '../requirements/QuestLineStepCompletedRequirement';
import RouteKillRequirement from '../requirements/RouteKillRequirement';
import SpecialEventRequirement from '../requirements/SpecialEventRequirement';
import TemporaryBattleRequirement from '../requirements/TemporaryBattleRequirement';
import SafariTownContent from '../safari/SafariTownContent';
import BerryMasterShop from '../shop/BerryMasterShop';
import GemMasterShop from '../shop/GemMasterShop';
import GenericTraderShop from '../shop/GenericTraderShop';
import ShardTraderShop from '../shop/ShardTraderShop';
import Shop from '../shop/Shop';
import TemporaryBattleList from '../temporaryBattle/TemporaryBattleList';
import BattleCafe from './battleCafe/BattleCafe';
import { DreamOrbTownContent } from './DreamOrbController';
import DungeonTown from './DungeonTown';
import NPCList from './NPCList';
import PurifyChamberTownContent from './purifyChamber/PurifyChamberTownContent';
import Town from './Town';
import AccessGym from './townContent/AccessGym';
import BattleFrontierTownContent from './townContent/BattleFrontierTownContent';
import DockTownContent from './townContent/DockTownContent';
import MoveToDungeon from './townContent/MoveToDungeon';
import MoveToTown from './townContent/MoveToTown';
import WeatherAppTownContent from './townContent/WeatherAppTownContent';

const TownList: { [name: string]: Town } = {};

export const pokeMartShop = new Shop([
    ItemList.Pokeball,
    ItemList.Greatball,
    ItemList.Ultraball,
    ItemList.xAttack,
    ItemList.xClick,
    ItemList.Lucky_egg,
    ItemList.Token_collector,
    ItemList.Dowsing_machine,
    ItemList.Lucky_incense,
    ItemList.SmallRestore,
    ItemList.MediumRestore,
    ItemList.LargeRestore,
], 'Explorers Poké Mart');

export function initTownList() {
    const DepartmentStoreShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_egg,
        ItemList.Dowsing_machine,
        ItemList.Token_collector,
        ItemList.Lucky_incense,
        ItemList.SmallRestore,
        ItemList.MediumRestore,
        ItemList.LargeRestore,
    ], 'Department Store');

    const pokeLeagueShop = () => new Shop([
        new PokeballItem(PokeballType.Masterball, 10000000, Currency.money, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.money]}` }, 'Master Ball'),
        new PokeballItem(PokeballType.Masterball, 75000, Currency.dungeonToken, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.dungeonToken]}` }, 'Master Ball'),
        new PokeballItem(PokeballType.Masterball, 3000, Currency.questPoint, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.questPoint]}` }, 'Master Ball'),
        new PokeballItem(PokeballType.Masterball, 3000, Currency.farmPoint, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.farmPoint]}` }, 'Master Ball'),
        new PokeballItem(PokeballType.Masterball, 250, Currency.diamond, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.diamond]}` }, 'Master Ball'),
        ItemList.Protein,
        ItemList.Calcium,
        ItemList.Carbos,
    ]);

    //Kanto Shops
    const ViridianCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Dungeon_ticket,
    ]);
    const PewterCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.Mystery_egg,
    ]);
    const Route3Shop = new Shop([
        ItemList.Magikarp,
    ], 'Shady Deal');
    const CeruleanCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.Water_egg,
        ItemList.Water_stone,
    ]);
    const VermilionCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Lucky_egg,
        ItemList.Electric_egg,
        ItemList.Thunder_stone,
    ]);
    const LavenderTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Grass_egg,
    ]);
    const CeladonCityShop = new Shop([
        ItemList.Eevee,
        ItemList.Porygon,
        ItemList.Jynx,
        ItemList['Mr. Mime'],
        ItemList.Lickitung,
    ],   'Game Corner Shop');
    const CeladonDepartmentStoreShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_egg,
        ItemList.Dowsing_machine,
        ItemList.Token_collector,
        ItemList.Lucky_incense,
    ], 'Department Store');
    const SaffronCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xClick,
        ItemList.Fighting_egg,
        ItemList.Leaf_stone,
        ItemList.Moon_stone,
    ]);
    const FuchsiaCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Dragon_egg,
        ItemList.Linking_cord,
    ]);
    const CinnabarIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.SmallRestore,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
        ItemList.Explorer_kit,
        ItemList.Explosive_Charge,
        ItemList.Treasure_Scanner,
        ItemList.HatcheryHelperKris,
    ]);
    const OneIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.Lucky_incense,
    ]);
    const TwoIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dowsing_machine,
    ]);
    const ThreeIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
    ]);
    const ClientIslandShop = new Shop([
        ItemList['Charity Chansey'],
    ], 'Gift Shop');
    const FourIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.Soothe_bell,
        ItemList.Wonder_Chest,
    ]);
    const FiveIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dragon_scale,
    ]);
    const SixIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Prism_scale,
    ]);
    const SevenIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
    ]);
    const MikanIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Metal_coat,
    ]);
    const NavelIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Kings_rock,
    ]);
    const TrovitaIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
    ]);
    const KumquatIslandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Upgrade,
    ]);
    const ValenciaPokémonCenterShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Dowsing_machine,
        ItemList.Sun_stone,
    ]);
    const PinkanPokémonReserveShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_incense,
    ]);
    const TanobyRuinsShop = new Shop([
        ItemList['Pinkan Dodrio'],
    ], 'Trade with Prof. Ivy');

    const PinkanBerryMaster = new BerryMasterShop(BerryTraderLocations['Pinkan Pokémon Reserve'], [
        ItemList.Freeze_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
        ItemList.Gooey_Mulch,
    ], 'Officer Jenny\'s Pinkan Trade Shop', [new QuestLineCompletedRequirement('Team Rocket\'s Pinkan Theme Park')]);

    //Kanto Towns
    TownList['Pallet Town'] = new Town(
        'Pallet Town',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new BulletinBoard(BulletinBoards.Kanto)],
        {
            npcs: [NPCList.PalletProfOak, NPCList.PalletCelebiProfOak1, NPCList.PalletCelebiProfOak2, NPCList.PalletMom1, NPCList.PalletMom2],
        },
    );
    TownList['Viridian City'] = new Town(
        'Viridian City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [ViridianCityShop, TemporaryBattleList['Unrivaled Blue']],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 1)],
            npcs: [NPCList.ViridianCityOldMan1, NPCList.ViridianCityOldMan2, NPCList.ViridianCityOldMan3, NPCList.UnrivaledBlue],
        },
    );
    TownList['Pewter City'] = new Town(
        'Pewter City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [PewterCityShop],
        {
            requirements: [
                new RouteKillRequirement(10, Region.kanto, 2),
                new ClearDungeonRequirement(1, getDungeonIndex('Viridian Forest')),
            ],
            npcs: [NPCList.PewterBattleItemRival, NPCList.PewterScientist],
        },
    );
    TownList['Route 4 Pokémon Center'] = new Town(
        'Route 4 Pokémon Center',
        Region.kanto,
        KantoSubRegions.Kanto,
        [Route3Shop],
        {
            requirements: [
                new RouteKillRequirement(10, Region.kanto, 3),
            ],
            npcs: [NPCList.Route3ShadySalesman],
            ignoreAreaStatus: true,
        },
    );
    TownList['Cerulean City'] = new Town(
        'Cerulean City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [CeruleanCityShop, new ShardTraderShop(ShardTraderLocations['Cerulean City']), new MoveToDungeon(DungeonList['Cerulean Cave'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 4)],
            npcs: [NPCList.CeruleanKantoBerryMaster, NPCList.CeruleanFarmApprentice, NPCList.CeruleanSuperNerd, NPCList.Mewtwo1, NPCList.Mewtwo2, NPCList.DetectiveRaichu],
        },
    );
    TownList['Bill\'s House'] = new Town(
        'Bill\'s House',
        Region.kanto,
        KantoSubRegions.Kanto,
        [
            TemporaryBattleList['Bill\'s Grandpa'],
            TemporaryBattleList['Santa Jynx 1'],
            TemporaryBattleList['Santa Jynx 2'],
            TemporaryBattleList['Santa Jynx 3'],
            TemporaryBattleList['Santa Jynx 4'],
        ],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 25)],
            npcs: [
                NPCList.BillsGrandpa1,
                NPCList.BillsGrandpa2,
                NPCList.BillsGrandpa3,
                NPCList.BillsGrandpa4,
                NPCList.BillsGrandpa5,
                NPCList.BillsGrandpa6,
                NPCList.BillsGrandpa7,
                NPCList.BillsGrandpa8,
                NPCList.BillsHouseEusine,
                NPCList.BillGrandpaChristmas,
            ],
        },
    );
    TownList['Vermilion City'] = new Town(
        'Vermilion City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [VermilionCityShop, new ShardTraderShop(ShardTraderLocations['Vermilion City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 6)],
            npcs: [NPCList.VermilionFanClubChairman, NPCList.VermilionShardApprentice, NPCList.VermilionEusine, NPCList.SquirtleJenny],
        },
    );
    TownList['Lavender Town'] = new Town(
        'Lavender Town',
        Region.kanto,
        KantoSubRegions.Kanto,
        [LavenderTownShop, new ShardTraderShop(ShardTraderLocations['Lavender Town']), new MoveToDungeon(DungeonList['Pokémon Tower'])],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Rock Tunnel'))],
            npcs: [NPCList.LavenderMrFuji, NPCList.LavenderChanneler, NPCList.LavenderShopper],
        },
    );
    TownList['Celadon City'] = new Town(
        'Celadon City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [CeladonDepartmentStoreShop, CeladonCityShop, new MoveToDungeon(DungeonList['Rocket Game Corner'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 7)],
            npcs: [NPCList.BigSpender, NPCList.EggHuntErika, NPCList.CandyMan],
        },
    );
    TownList['Saffron City'] = new Town(
        'Saffron City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [SaffronCityShop, new ShardTraderShop(ShardTraderLocations['Saffron City']), new MoveToDungeon(DungeonList['Silph Co.']), TemporaryBattleList['Fighting Dojo'], TemporaryBattleList['Mime Interview']],
        {
            requirements: [new OneFromManyRequirement([
                new GymBadgeRequirement(BadgeEnums.Rainbow),
                new ClearDungeonRequirement(1, getDungeonIndex('Rocket Game Corner')),
            ])],
            npcs: [NPCList.SaffronBattleItemRival, NPCList.SaffronBreeder, NPCList.Informant1, NPCList.Informant2],
        },
    );
    TownList['Fuchsia City'] = new Town(
        'Fuchsia City',
        Region.kanto,
        KantoSubRegions.Kanto,
        [FuchsiaCityShop, new ShardTraderShop(ShardTraderLocations['Fuchsia City'])],
        {
            requirements: [new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.kanto, 18),
                new RouteKillRequirement(10, Region.kanto, 15),
            ])],
            npcs: [NPCList.FuchsiaKantoRoamerNPC, NPCList.FuchsiaEusine],
        },
    );
    TownList['Safari Zone'] = new Town(
        'Safari Zone',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new SafariTownContent()],
        {
            requirements: [new CustomRequirement(ko.pureComputed(() => +App.game.keyItems.hasKeyItem(KeyItemType.Safari_ticket)), 1, 'Obtain the Safari Ticket')],
            npcs: [NPCList.BugCatcherPinsir],
        },
    );
    TownList['Cinnabar Island'] = new Town(
        'Cinnabar Island',
        Region.kanto,
        KantoSubRegions.Kanto,
        [CinnabarIslandShop, new ShardTraderShop(ShardTraderLocations['Cinnabar Island']), new GenericTraderShop('Palaeontologist', 'Palaeontologist'), new GenericTraderShop('FossilCinnabarLab', 'Cinnabar Lab'), new MoveToDungeon(DungeonList['Pokémon Mansion'])],
        {
            requirements: [new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.kanto, 20),
                new RouteKillRequirement(10, Region.kanto, 21),
            ])],
            npcs: [NPCList.KantoFossilNpc, NPCList.CinnabarIslandResearcher],
        },
    );
    TownList['Indigo Plateau Kanto'] = new Town(
        'Indigo Plateau Kanto',
        Region.kanto,
        KantoSubRegions.Kanto,
        [GymList['Elite Lorelei'], GymList['Elite Bruno'], GymList['Elite Agatha'], GymList['Elite Lance'], GymList['Champion Blue'], pokeLeagueShop(), TemporaryBattleList['Unrivaled Red']],
        {
            requirements: [
                new RouteKillRequirement(10, Region.kanto, 23),
                new ClearDungeonRequirement(1, getDungeonIndex('Victory Road')),
            ],
            npcs: [NPCList.SpeedyRunner],
        },
    );
    TownList['One Island'] = new Town(
        'One Island',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [OneIslandShop, new DockTownContent()],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Volcano)],
            npcs: [
                NPCList.OneIslandCelio1,
                NPCList.OneIslandCelio2,
                NPCList.OneIslandCelio3,
                NPCList.OneIslandCelio4,
                NPCList.OneIslandCelio5,
                NPCList.OneIslandCelio6,
                NPCList.OneIslandCelio7,
                NPCList.OneIslandYoungster,
            ],
        },
    );
    TownList['Mt. Ember'] = new Town(
        'Mt. Ember',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [new MoveToDungeon(DungeonList['Mt. Ember Summit']), new MoveToDungeon(DungeonList['Ruby Path'], new MaxRegionRequirement(Region.hoenn)), TemporaryBattleList['Sevii Rocket Grunt 1'], TemporaryBattleList['Sevii Rocket Grunt 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 27)],
            npcs: [NPCList.SeviiRocketGrunts],
        },
    );
    TownList['Two Island'] = new Town(
        'Two Island',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [TwoIslandShop, new GenericTraderShop('EverstoneDealer', 'Rocío Noevo')],
        {
            requirements: [new QuestLineStepCompletedRequirement('Bill\'s Errand', 0)],
            npcs: [NPCList.TwoIslandGameCornerOwner1, NPCList.TwoIslandGameCornerOwner2],
        },
    );
    TownList['Three Island'] = new Town(
        'Three Island',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [ThreeIslandShop, TemporaryBattleList['Biker Goon 1'], TemporaryBattleList['Biker Goon 2'], TemporaryBattleList['Biker Goon 3'], TemporaryBattleList['Cue Ball Paxton']],
        {
            requirements: [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
            npcs: [NPCList.ThreeIslandBiker1, NPCList.ThreeIslandBiker2, NPCList.ThreeIslandBiker3],
        },
    );
    TownList['Professor Ivy\'s Lab'] = new Town(
        'Professor Ivy\'s Lab',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [],
        {
            requirements: [new QuestLineStepCompletedRequirement('Unfinished Business', 0)],
            npcs: [NPCList.CelebiProfIvy],
        },
    );
    TownList['Client Island'] = new Town(
        'Client Island',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [ClientIslandShop],
        {
            requirements: [new ClientRequirement(), new GymBadgeRequirement(BadgeEnums.Volcano)],
            npcs: [NPCList.ClientSignpost, NPCList.RedSpearow],
        },
    );
    TownList['Four Island'] = new Town(
        'Four Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [FourIslandShop, new MoveToDungeon(DungeonList['Icefall Cave'])],
        {
            requirements: [new QuestLineStepCompletedRequirement('Celio\'s Errand', 5)],
        },
    );
    TownList['Five Island'] = new Town(
        'Five Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [FiveIslandShop, new DockTownContent()],
        {
            requirements: [new QuestLineStepCompletedRequirement('Celio\'s Errand', 5)],
        },
    );
    TownList['Rocket Warehouse'] = new Town(
        'Rocket Warehouse',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [TemporaryBattleList['Sevii Rocket Grunt 3'], TemporaryBattleList['Sevii Rocket Grunt 4'], TemporaryBattleList['Sevii Rocket Grunt 5'], TemporaryBattleList['Sevii Rocket Ariana'], TemporaryBattleList['Sevii Rocket Archer'], TemporaryBattleList['Scientist Gideon']],
        {
            requirements: [
                new RouteKillRequirement(10, Region.kanto, 30),
                new QuestLineStepCompletedRequirement('Celio\'s Errand', 8),
            ],
        },
    );
    TownList['Six Island'] = new Town(
        'Six Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [SixIslandShop],
        {
            requirements: [new QuestLineStepCompletedRequirement('Celio\'s Errand', 5)],
            npcs: [NPCList.SixIslandSeviiRoamerNPC],
        },
    );
    TownList['Dotted Hole'] = new Town(
        'Dotted Hole',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 37)],
            npcs: [NPCList.SeviiGideon1, NPCList.SeviiGideon2],
        },
    );
    TownList['Seven Island'] = new Town(
        'Seven Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [SevenIslandShop],
        {
            requirements: [new QuestLineStepCompletedRequirement('Celio\'s Errand', 5)],
        },
    );
    TownList['Mikan Island'] = new Town(
        'Mikan Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [MikanIslandShop],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Tanoby Ruins'))],
        },
    );
    TownList['Navel Island'] = new Town(
        'Navel Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [NavelIslandShop],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Lost Cave'))],
        },
    );
    TownList['Trovita Island'] = new Town(
        'Trovita Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [TrovitaIslandShop],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 41)],
        },
    );
    TownList['Kumquat Island'] = new Town(
        'Kumquat Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [KumquatIslandShop],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Icefall Cave'))],
        },
    );
    TownList['Pummelo Island'] = new Town(
        'Pummelo Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [GymList['Supreme Gym Leader Drake'], pokeLeagueShop(), new BulletinBoard(BulletinBoards.Sevii4567)],
        {
            requirements:
            [
                new GymBadgeRequirement(BadgeEnums['Coral-Eye']),
                new GymBadgeRequirement(BadgeEnums.Sea_Ruby),
                new GymBadgeRequirement(BadgeEnums.Spike_Shell),
                new GymBadgeRequirement(BadgeEnums.Jade_Star),
            ],
        },
    );
    TownList['Valencia Pokémon Center'] = new Town(
        'Valencia Pokémon Center',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [ValenciaPokémonCenterShop],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 40)],
            npcs: [NPCList.ValenciaProfIvy],
        },
    );
    TownList['Pinkan Pokémon Reserve'] = new Town(
        'Pinkan Pokémon Reserve',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [PinkanPokémonReserveShop, PinkanBerryMaster, TemporaryBattleList['Pinkan Jessie & James'], TemporaryBattleList['Pinkan Officer Jenny']],
        {
            requirements: [new RouteKillRequirement(10, Region.kanto, 42)],
            npcs: [
                NPCList.PinkanOfficerJenny1,
                NPCList.PinkanOfficerJenny2,
                NPCList.PinkanOfficerJenny3,
                NPCList.ThemeparkTeamRocket1,
                NPCList.ThemeparkTeamRocket2,
                NPCList.ThemeparkTeamRocket3,
                NPCList.ThemeparkTeamRocket4,
            ],
        },
    );

    //Kanto Dungeons
    TownList['Viridian Forest'] = new DungeonTown(
        'Viridian Forest',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new RouteKillRequirement(10, Region.kanto, 2)],
    );
    TownList['Mt. Moon'] = new DungeonTown(
        'Mt. Moon',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new RouteKillRequirement(10, Region.kanto, 3)],
        [TemporaryBattleList['Silver 6']],
    );
    TownList['Diglett\'s Cave'] = new DungeonTown(
        'Diglett\'s Cave',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new RouteKillRequirement(10, Region.kanto, 6)],
    );
    TownList['Rock Tunnel'] = new DungeonTown(
        'Rock Tunnel',
        Region.kanto,
        KantoSubRegions.Kanto,
        [
            new RouteKillRequirement(10, Region.kanto, 10),
            new GymBadgeRequirement(BadgeEnums.Cascade),
        ],
    );
    TownList['Rocket Game Corner'] = new DungeonTown(
        'Rocket Game Corner',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new RouteKillRequirement(10, Region.kanto, 7)],
    );
    TownList['Pokémon Tower'] = new DungeonTown(
        'Pokémon Tower',
        Region.kanto,
        KantoSubRegions.Kanto,
        [
            new RouteKillRequirement(10, Region.kanto, 7),
            new ClearDungeonRequirement(1, getDungeonIndex('Rocket Game Corner')),
        ],
        [TemporaryBattleList['Blue 4']],
    );
    TownList['Silph Co.'] = new DungeonTown(
        'Silph Co.',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new TemporaryBattleRequirement('Blue 4')],
        [TemporaryBattleList['Blue 5']],
        {
            npcs: [NPCList.LaprasGift],
        },
    );
    TownList['Power Plant'] = new DungeonTown(
        'Power Plant',
        Region.kanto,
        KantoSubRegions.Kanto,
        [
            new RouteKillRequirement(10, Region.kanto, 9),
            new GymBadgeRequirement(BadgeEnums.Soul),
        ],
    );
    TownList['Seafoam Islands'] = new DungeonTown(
        'Seafoam Islands',
        Region.kanto,
        KantoSubRegions.Kanto,
        [
            new RouteKillRequirement(10, Region.kanto, 19),
            new GymBadgeRequirement(BadgeEnums.Rainbow),
        ],
    );
    TownList['Pokémon Mansion'] = new DungeonTown(
        'Pokémon Mansion',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new OneFromManyRequirement([
            new RouteKillRequirement(10, Region.kanto, 20),
            new RouteKillRequirement(10, Region.kanto, 21),
        ])],
    );
    TownList['Mt. Ember Summit'] = new DungeonTown(
        'Mt. Ember Summit',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [new RouteKillRequirement(10, Region.kanto, 27)],
    );
    TownList['Berry Forest'] = new DungeonTown(
        'Berry Forest',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [new RouteKillRequirement(10, Region.kanto, 29)],
    );
    TownList['New Island'] = new DungeonTown(
        'New Island',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new SpecialEventRequirement('Mewtwo strikes back!')],
        [TemporaryBattleList['Ash Ketchum New Island']],
        {
            npcs: [NPCList.NewIslandAsh1, NPCList.NewIslandAsh2, NPCList.NewIslandJessieAndJames],
        },
    );
    TownList['Victory Road'] = new DungeonTown(
        'Victory Road',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new RouteKillRequirement(10, Region.kanto, 23)],
    );
    TownList['Cerulean Cave'] = new DungeonTown(
        'Cerulean Cave',
        Region.kanto,
        KantoSubRegions.Kanto,
        [new GymBadgeRequirement(BadgeEnums.Elite_KantoChampion)],
        [TemporaryBattleList['Unrivaled Green']],
        {
            npcs: [NPCList.UnrivaledGreen1, NPCList.UnrivaledGreen2, NPCList.AnomalyMewtwo1],
        },
    );
    TownList['Ruby Path'] = new DungeonTown(
        'Ruby Path',
        Region.kanto,
        KantoSubRegions.Sevii123,
        [new QuestLineStepCompletedRequirement('Celio\'s Errand', 2)],
        [],
        {
            npcs: [NPCList.SeviiRuby],
        },
    );
    TownList['Icefall Cave'] = new DungeonTown(
        'Icefall Cave',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new QuestLineStepCompletedRequirement('Celio\'s Errand', 5)],
        [],
        {
            npcs: [NPCList.SeviiLorelei],
        },
    );
    TownList['Sunburst Island'] = new DungeonTown(
        'Sunburst Island',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new RouteKillRequirement(10, Region.kanto, 31)],
        [],
    );
    TownList['Lost Cave'] = new DungeonTown(
        'Lost Cave',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new RouteKillRequirement(10, Region.kanto, 33)],
        [],
    );
    TownList['Pattern Bush'] = new DungeonTown(
        'Pattern Bush',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new RouteKillRequirement(10, Region.kanto, 34)],
        [],
    );
    TownList['Altering Cave'] = new DungeonTown(
        'Altering Cave',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new RouteKillRequirement(10, Region.kanto, 36)],
        [],
        {
            npcs: [NPCList.AlteringCaveRuinManiac1, NPCList.AlteringCaveRuinManiac2],
        },
    );
    TownList['Tanoby Ruins'] = new DungeonTown(
        'Tanoby Ruins',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [new RouteKillRequirement(10, Region.kanto, 39)],
        [TanobyRuinsShop],
        {
            npcs: [NPCList.TanobyProfIvy, NPCList.UnownFigure],
        },
    );
    TownList['Pinkan Mountain'] = new DungeonTown(
        'Pinkan Mountain',
        Region.kanto,
        KantoSubRegions.Sevii4567,
        [
            new RouteKillRequirement(10, Region.kanto, 42),
            new GymBadgeRequirement(BadgeEnums.Elite_OrangeChampion),
        ],
        [],
    );

    //Johto Shops
    const CherrygroveCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
    ]);
    const VioletCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.MediumRestore,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
        ItemList.Togepi,
    ]);
    const AzaleaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.Grass_egg,
        ItemList.Leaf_stone,
        ItemList.Kings_rock,
    ]);
    const GoldenrodDepartmentStoreShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_egg,
        ItemList.Dowsing_machine,
        ItemList.Token_collector,
        ItemList.Lucky_incense,
        ItemList.SmallRestore,
        ItemList.MediumRestore,
    ], 'Department Store');
    const EcruteakCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
        ItemList.Soothe_bell,
    ]);
    const OlivineCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Water_egg,
        ItemList.Electric_egg,
        ItemList.Water_stone,
        ItemList.Thunder_stone,
        ItemList.Metal_coat,
        ItemList.HatcheryHelperCarey,
    ]);
    const CianwoodCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xClick,
        ItemList.Fighting_egg,
        ItemList.Moon_stone,
        ItemList.Sun_stone,
    ]);
    const MahoganyTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Linking_cord,
        ItemList.Upgrade,
        ItemList.HatcheryHelperDakota,
    ]);
    const BlackthornCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.LargeRestore,
        ItemList.Dragon_egg,
        ItemList.Dragon_scale,
    ]);
    const JohtoBerryMaster = new BerryMasterShop(BerryTraderLocations['Goldenrod City'], [
        ItemList.Boost_Mulch,
        ItemList.Rich_Mulch,
        ItemList.Surprise_Mulch,
        ItemList.Amaze_Mulch,
        ItemList.Freeze_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
        ItemList.Squirtbottle,
        ItemList.FarmHandBailey,
        ItemList.ChopleBerry,
        ItemList.KebiaBerry,
        ItemList.ShucaBerry,
        ItemList.ChartiBerry,
    ], 'Johto Berry Master');

    //Johto Contest Shop
    const JohtoContestShop = new Shop([
        ItemList['Sudowoodo (Golden)'],
    ], 'Contest Shop');

    //Johto Towns
    TownList['New Bark Town'] = new Town(
        'New Bark Town',
        Region.johto,
        JohtoSubRegions.Johto,
        [new BulletinBoard(BulletinBoards.Johto)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_KantoChampion)],
            npcs: [NPCList.ProfElm, NPCList.BabyAssistant],
        },
    );
    TownList['Cherrygrove City'] = new Town(
        'Cherrygrove City',
        Region.johto,
        JohtoSubRegions.Johto,
        [CherrygroveCityShop, TemporaryBattleList['Youngster Joey']],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 29)],
            npcs: [NPCList.CherrygroveMrPokemon],
        },
    );
    TownList['Violet City'] = new Town(
        'Violet City',
        Region.johto,
        JohtoSubRegions.Johto,
        [VioletCityShop, new MoveToDungeon(DungeonList['Sprout Tower'])],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 31)],
            npcs: [NPCList.VioletPrimo, NPCList.VioletEarlDervish, NPCList.Zuki],
        },
    );
    TownList['Azalea Town'] = new Town(
        'Azalea Town',
        Region.johto,
        JohtoSubRegions.Johto,
        [AzaleaTownShop, new ShardTraderShop(ShardTraderLocations['Azalea Town']), new MoveToDungeon(DungeonList['Slowpoke Well'])],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 33)],
            npcs: [
                NPCList.AzaleaElder,
                NPCList.AzaleaHiker,
                NPCList.AzaleaCelebiKurt1,
                NPCList.AzaleaCelebiKurt2,
                NPCList.AzaleaCelebiKurt3,
                NPCList.AzaleaCelebiKurt4,
                NPCList.AzaleaCelebiOak1,
                NPCList.AzaleaCelebiOak2,
                NPCList.AzaleaCelebiOak3,
                NPCList.AzaleaCelebiOak4,
                NPCList.AzaleaCelebiOak5,
            ],
        },
    );
    TownList['Goldenrod City'] = new Town(
        'Goldenrod City',
        Region.johto,
        JohtoSubRegions.Johto,
        [GoldenrodDepartmentStoreShop, JohtoBerryMaster, new MoveToDungeon(DungeonList['Radio Tower']), TemporaryBattleList['Silver 4'], TemporaryBattleList['Aipom Alley'], TemporaryBattleList.Imposter, TemporaryBattleList['Possessed Mewtwo']],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 34)],
            npcs: [NPCList.Conductor, NPCList.searchForClues, NPCList.HowardClifford1, NPCList.HowardClifford2, NPCList.HowardClifford3, NPCList.Kuni],
        },
    );
    TownList['Ecruteak City'] = new Town(
        'Ecruteak City',
        Region.johto,
        JohtoSubRegions.Johto,
        [EcruteakCityShop, new ShardTraderShop(ShardTraderLocations['Ecruteak City']), new MoveToDungeon(DungeonList['Burned Tower']), new MoveToDungeon(DungeonList['Tin Tower']), TemporaryBattleList['Kimono Girls']],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 37)],
            npcs: [NPCList.EcruteakBill, NPCList.EcruteakEusine, NPCList.EcruteakPokéfan, NPCList.Miki, NPCList.KimonoGirlsEcruteak],
        },
    );
    TownList['Olivine City'] = new Town(
        'Olivine City',
        Region.johto,
        JohtoSubRegions.Johto,
        [OlivineCityShop, new ShardTraderShop(ShardTraderLocations['Olivine City']), new MoveToDungeon(DungeonList['Olivine Lighthouse'])],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 39)],
            npcs: [NPCList.OlivineSSAquaCaptain],
        },
    );
    TownList['Cianwood City'] = new Town(
        'Cianwood City',
        Region.johto,
        JohtoSubRegions.Johto,
        [CianwoodCityShop, new ShardTraderShop(ShardTraderLocations['Cianwood City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 41)],
            npcs: [NPCList.CianwoodPhotographyAide, NPCList.CianwoodEusine, NPCList.CianwoodCityPharmacist1, NPCList.CianwoodCityPharmacist2],
        },
    );
    TownList['Mahogany Town'] = new Town(
        'Mahogany Town',
        Region.johto,
        JohtoSubRegions.Johto,
        [MahoganyTownShop, new ShardTraderShop(ShardTraderLocations['Mahogany Town']), new MoveToDungeon(DungeonList['Team Rocket\'s Hideout'])],
        {
            requirements: [new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.johto, 42),
                new ClearDungeonRequirement(1, getDungeonIndex('Mt. Mortar')),
            ])],
            npcs: [NPCList.MahoganySouvenirShopAttendant, NPCList.MahoganyEusine, NPCList.MahoGanyOfficerJenny],
        },
    );
    TownList['Blackthorn City'] = new Town(
        'Blackthorn City',
        Region.johto,
        JohtoSubRegions.Johto,
        [BlackthornCityShop, new ShardTraderShop(ShardTraderLocations['Blackthorn City'])],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Ice Path'))],
            npcs: [NPCList.BlackthornJohtoRoamerNPC],
        },
    );
    TownList['Indigo Plateau Johto'] = new Town(
        'Indigo Plateau Johto',
        Region.johto,
        JohtoSubRegions.Johto,
        [TemporaryBattleList['Silver 7'], GymList['Elite Will'], GymList['Elite Koga'], GymList['Elite Bruno2'], GymList['Elite Karen'], GymList['Champion Lance'], pokeLeagueShop()],
        {
            requirements: [
                new RouteKillRequirement(10, Region.johto, 26),
                new TemporaryBattleRequirement('Silver 5'),
            ],
        },
    );
    TownList['National Park'] = new Town(
        'National Park',
        Region.johto,
        JohtoSubRegions.Johto,
        [new SafariTownContent('Bug Catching Contest'), JohtoContestShop],
        {
            requirements: [new RouteKillRequirement(10, Region.johto, 35)],
            npcs: [NPCList.ParkAttendant, NPCList.ParkResearcher],
        },
    );

    //Johto Dungeons
    TownList['Sprout Tower'] = new DungeonTown(
        'Sprout Tower',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 31)],
    );
    TownList['Ruins of Alph'] = new DungeonTown(
        'Ruins of Alph',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 32)],
        undefined,
        {
            npcs: [NPCList.UnownFigure],
        },
    );
    TownList['Union Cave'] = new DungeonTown(
        'Union Cave',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 32)],
    );
    TownList['Slowpoke Well'] = new DungeonTown(
        'Slowpoke Well',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 33)],
    );
    TownList['Ilex Forest'] = new DungeonTown(
        'Ilex Forest',
        Region.johto,
        JohtoSubRegions.Johto,
        [
            new GymBadgeRequirement(BadgeEnums.Hive),
            new TemporaryBattleRequirement('Silver 2'),
        ],
        [TemporaryBattleList['Spiky-eared Pichu']],
        {
            npcs: [NPCList.IlexForestShrine1, NPCList.IlexForestShrine2, NPCList.IlexForestPichuFan, NPCList.Naoko],
        },
    );
    TownList['Burned Tower'] = new DungeonTown(
        'Burned Tower',
        Region.johto,
        JohtoSubRegions.Johto,
        [new QuestLineStepCompletedRequirement('The Legendary Beasts', 0)],
        [TemporaryBattleList['Silver 3']],
    );
    TownList['Olivine Lighthouse'] = new DungeonTown(
        'Olivine Lighthouse',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 39)],
        [],
        {
            npcs: [NPCList.OlivineLighthouseJasmine1, NPCList.OlivineLighthouseJasmine2, NPCList.OlivineLighthouseMedicineAmphy, NPCList.OlivineLighthouseAmphy],
        },
    );
    TownList['Tin Tower'] = new DungeonTown(
        'Tin Tower',
        Region.johto,
        JohtoSubRegions.Johto,
        [new ClearDungeonRequirement(1, getDungeonIndex('Radio Tower'))],
    );
    TownList['Whirl Islands'] = new DungeonTown(
        'Whirl Islands',
        Region.johto,
        JohtoSubRegions.Johto,
        [new ClearDungeonRequirement(1, getDungeonIndex('Radio Tower'))],
        [],
        {
            npcs: [NPCList.KimonoGirlsWhirl],
        },
    );
    TownList['Mt. Mortar'] = new DungeonTown(
        'Mt. Mortar',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 37)],
    );
    TownList['Team Rocket\'s Hideout'] = new DungeonTown(
        'Team Rocket\'s Hideout',
        Region.johto,
        JohtoSubRegions.Johto,
        [new TemporaryBattleRequirement('Red Gyarados')],
    );
    TownList['Radio Tower'] = new DungeonTown(
        'Radio Tower',
        Region.johto,
        JohtoSubRegions.Johto,
        [new TemporaryBattleRequirement('Silver 4')],
    );
    TownList['Ice Path'] = new DungeonTown(
        'Ice Path',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 44)],
        [],
        {
            npcs: [NPCList.Sayo],
        },
    );
    TownList['Dark Cave'] = new DungeonTown(
        'Dark Cave',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 45)],
    );
    TownList['Tohjo Falls'] = new DungeonTown(
        'Tohjo Falls',
        Region.johto,
        JohtoSubRegions.Johto,
        [new GymBadgeRequirement(BadgeEnums.Rising)],
        [TemporaryBattleList['Rocket Boss Giovanni']],
        {
            npcs: [NPCList.TohjoFallsCelebiTimeDistortion],
        },
    );
    TownList['Victory Road Johto'] = new DungeonTown(
        'Victory Road Johto',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 26)],
    );
    TownList['Mt. Silver'] = new DungeonTown(
        'Mt. Silver',
        Region.johto,
        JohtoSubRegions.Johto,
        [new RouteKillRequirement(10, Region.johto, 28)],
        [],
        {
            npcs: [NPCList.RedOldManJohtoNPC],
        },
    );

    //Hoenn Shops
    const OldaleTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
    ]);
    const PetalburgCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.Kings_rock,
    ]);
    const RustboroCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
    ]);
    const DewfordTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Lucky_egg,
        ItemList.Fighting_egg,
    ]);
    const SlateportCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.MediumRestore,
        ItemList.Water_egg,
        ItemList.Linking_cord,
    ]);
    const MauvilleCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xClick,
        ItemList.Electric_egg,
        ItemList.Thunder_stone,
        ItemList.Metal_coat,
        ItemList.HatcheryHelperJasmine,
    ]);
    const VerdanturfTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Grass_egg,
        ItemList.Soothe_bell,
    ]);
    const FallarborTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Token_collector,
        ItemList.Moon_stone,
        ItemList.Sun_stone,
    ]);
    const LavaridgeTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xAttack,
        ItemList.Lucky_incense,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
    ]);
    const RoadsideStandShop = new Shop([
        ItemList['Probably Feebas'],
    ], 'Shady Deal');
    const FortreeCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dowsing_machine,
        ItemList.LargeRestore,
        ItemList.Leaf_stone,
    ]);
    const WindChimeShop = new Shop([
        ItemList['Probably Chimecho'],
    ], 'Shady Deal');
    const MossdeepCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Upgrade,
        ItemList.Prism_scale,
        ItemList.Beldum,
    ]);
    const SootopolisCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Lucky_incense,
        ItemList.Water_stone,
    ]);
    const PacifidlogTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Dowsing_machine,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
    ]);
    const EverGrandeCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Dragon_egg,
        ItemList.Dragon_scale,
    ]);
    const BattleFrontierShop = new Shop([
        new PokeballItem(PokeballType.Ultraball, 1, Currency.battlePoint, undefined, 'Ultra Ball'),
        new PokeballItem(PokeballType.Masterball, 500, Currency.battlePoint, { multiplier: 1.35, multiplierDecrease: false, saveName: `${PokeballType[PokeballType.Masterball]}|${Currency[Currency.battlePoint]}` }, 'Master Ball'),
        new EnergyRestore(EnergyRestoreSize.SmallRestore, 10, Currency.battlePoint, 'Small Restore'),
        new EnergyRestore(EnergyRestoreSize.MediumRestore, 20, Currency.battlePoint, 'Medium Restore'),
        new EnergyRestore(EnergyRestoreSize.LargeRestore, 40, Currency.battlePoint, 'Large Restore'),
        ItemList.FarmHandJamie,
        ItemList.HatcheryHelperNoel,
        ItemList.Muscle_Band,
    ]);
    const OutskirtStandShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.SmallRestore,
        ItemList.MediumRestore,
        ItemList.LargeRestore,
        ItemList.Wonder_Chest,
    ]);
    const PhenacCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_egg,
        ItemList.Wonder_Chest,
    ]);
    const AgateVillageShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_incense,
        ItemList.Token_collector,
        ItemList.Dowsing_machine,
        ItemList.Wonder_Chest,
    ]);
    const GateonPortShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_incense,
        ItemList.Miracle_Chest,
    ]);
    //Hoenn Berry Master
    const HoennBerryMaster = new BerryMasterShop(BerryTraderLocations['Mauville City'], [
        ItemList.Boost_Mulch,
        ItemList.Rich_Mulch,
        ItemList.Surprise_Mulch,
        ItemList.Amaze_Mulch,
        ItemList.Freeze_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
        ItemList.Sprinklotad,
        ItemList.FarmHandKerry,
        ItemList.HatcheryHelperCameron,
    ], 'Hoenn Berry Master');

    //Hoenn Contest Shop
    const HoennContestShop = new Shop([
        ItemList['Tangela (Pom-pom)'],
        ItemList['Goldeen (Diva)'],
        ItemList['Weepinbell (Fancy)'],
        ItemList['Onix (Rocker)'],
        ItemList['Dugtrio (Punk)'],
        ItemList['Gengar (Punk)'],
        new PokeballItem(PokeballType.Ultraball, 20, Currency.contestToken, undefined, 'Ultra Ball'),
        new EnergyRestore(EnergyRestoreSize.SmallRestore, 5, Currency.contestToken, 'Small Restore'),
        new EnergyRestore(EnergyRestoreSize.MediumRestore, 10, Currency.contestToken, 'Medium Restore'),
        new EnergyRestore(EnergyRestoreSize.LargeRestore, 30, Currency.contestToken, 'Large Restore'),
    ], 'Contest Shop', [new DevelopmentRequirement()]);

    //Hoenn Flute Master
    const HoennFluteMaster = new GemMasterShop(GemShops.HoennFluteMaster);
    const HoennStoneSalesman = new GemMasterShop(GemShops.HoennStoneSalesman, 'Stone Salesman', [new TemporaryBattleRequirement('Hoenn Stone Salesman')], true);

    //Hoenn Towns
    TownList['Littleroot Town'] = new Town(
        'Littleroot Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new BulletinBoard(BulletinBoards.Hoenn)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_JohtoChampion)],
            npcs: [NPCList.ProfBirch, NPCList.LittlerootAide, NPCList.Television1, NPCList.Television2, NPCList.DeltaMay1, NPCList.NewsBirch, NPCList.DeltaMay2],
        },
    );
    TownList['Oldale Town'] = new Town(
        'Oldale Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [OldaleTownShop],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 101)],
            npcs: [NPCList.OldaleTrackingScientist],
        },
    );
    TownList['Petalburg City'] = new Town(
        'Petalburg City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [PetalburgCityShop, new ShardTraderShop(ShardTraderLocations['Petalburg City']), TemporaryBattleList['Courtney 1'], TemporaryBattleList['Matt 1']],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 102)],
            npcs: [NPCList.DeltaSteven1, NPCList.DeltaWally1],
        },
    );
    TownList['Rustboro City'] = new Town(
        'Rustboro City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [RustboroCityShop, new GenericTraderShop('FossilDevonCorporation', 'Devon Corporation'), TemporaryBattleList['Mr. Stone']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Petalburg Woods'))],
        },
    );
    TownList['Dewford Town'] = new Town(
        'Dewford Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [DewfordTownShop, new ShardTraderShop(ShardTraderLocations['Dewford Town'])],
        {
            requirements: [new TemporaryBattleRequirement('May 2')],
            npcs: [NPCList.HoennFossilNpc],
        },
    );
    TownList['Slateport City'] = new Town(
        'Slateport City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [SlateportCityShop, new ShardTraderShop(ShardTraderLocations['Slateport City'])],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Granite Cave'))],
            npcs: [NPCList.SlateportHoennRoamerNPC, NPCList.MrStone1, NPCList.MrStone2],
        },
    );
    TownList['Mauville City'] = new Town(
        'Mauville City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [MauvilleCityShop, new ShardTraderShop(ShardTraderLocations['Mauville City']), HoennBerryMaster],
        {
            requirements: [new TemporaryBattleRequirement('May 3')],
            npcs: [NPCList.SkepticalFisherman],
        },
    );
    TownList['Sea Mauville'] = new Town(
        'Sea Mauville',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [TemporaryBattleList['Delta Giovanni'], TemporaryBattleList['Captain Stern']],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 109)],
            npcs: [NPCList.SeaMauvilleRocket1, NPCList.SeaMauvilleRocket2, NPCList.Stern1, NPCList.SternSubstitute, NPCList.Stern2, NPCList.Stern3],
        },
    );
    TownList['Verdanturf Town'] = new Town(
        'Verdanturf Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [VerdanturfTownShop, new ShardTraderShop(ShardTraderLocations['Verdanturf Town'])],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 117)],
        },
    );
    TownList['Mt. Chimney'] = new Town(
        'Mt. Chimney',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new MoveToDungeon(DungeonList['Fiery Path']), new MoveToDungeon(DungeonList['Mt. Chimney Crater']), new MoveToDungeon(DungeonList['Jagged Pass']), new MoveToDungeon(DungeonList['Magma Hideout'])],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 112)],
        },
    );
    TownList['Fallarbor Town'] = new Town(
        'Fallarbor Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [FallarborTownShop, new ShardTraderShop(ShardTraderLocations['Fallarbor Town']), HoennFluteMaster, HoennStoneSalesman, TemporaryBattleList['Hoenn Stone Salesman']],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 113)],
            npcs: [NPCList.FallarborProfessorCozmo, NPCList.Cozmo1, NPCList.HoennStoneSalesman1, NPCList.HoennStoneSalesman2],
        },
    );
    TownList['Lavaridge Town'] = new Town(
        'Lavaridge Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [LavaridgeTownShop, new ShardTraderShop(ShardTraderLocations['Lavaridge Town']), TemporaryBattleList['Clown Jessie & James']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Jagged Pass'))],
            npcs: [NPCList.MillenniumFest, NPCList.Butler1],
        },
    );
    TownList['Fish Shop'] = new Town(
        'Fish Shop',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [RoadsideStandShop],
        {
            requirements: [
                new RouteKillRequirement(10, Region.hoenn, 118),
            ],
            npcs: [NPCList.RoadsideStandShadySalesman],
            ignoreAreaStatus: true,
        },
    );
    TownList['Fortree City'] = new Town(
        'Fortree City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [FortreeCityShop, new ShardTraderShop(ShardTraderLocations['Fortree City'])],
        {
            requirements: [new TemporaryBattleRequirement('May 4')],
            npcs: [NPCList.FortreeWeatherman, NPCList.FortreeRanger, NPCList.Steven1, NPCList.Steven2],
        },
    );
    TownList['Wind Chime Shop'] = new Town(
        'Wind Chime Shop',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [WindChimeShop],
        {
            requirements: [new TemporaryBattleRequirement('May 4')],
            npcs: [NPCList.WindChimeShopShadySalesman],
            ignoreAreaStatus: true,
        },
    );
    TownList['Lilycove City'] = new Town(
        'Lilycove City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [DepartmentStoreShop, HoennContestShop],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 121)],
        },
    );
    TownList['Mossdeep City'] = new Town(
        'Mossdeep City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [MossdeepCityShop, new ShardTraderShop(ShardTraderLocations['Mossdeep City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 125)],
            npcs: [NPCList.MossdeepAstronomer],
        },
    );
    TownList['Mossdeep Space Center'] = new Town(
        'Mossdeep Space Center',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [TemporaryBattleList['Aqua Grunt'], TemporaryBattleList['Magma Grunt'], TemporaryBattleList['Courtney 2'], TemporaryBattleList['Matt 2'], TemporaryBattleList['Dr Cozmo'], new MoveToDungeon(DungeonList['Near Space'])],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Mind)],
            npcs: [NPCList.Cozmo2, NPCList.Zinnia4, NPCList.Cozmo3, NPCList.Zinnia5, NPCList.Cozmo4],
        },
    );
    TownList['Pacifidlog Town'] = new Town(
        'Pacifidlog Town',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [PacifidlogTownShop, new ShardTraderShop(ShardTraderLocations['Pacifidlog Town']), TemporaryBattleList['Underground Fighting Ring']],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 131)],
            npcs: [NPCList.PacifidlogDiver],
        },
    );
    TownList['Sootopolis City'] = new Town(
        'Sootopolis City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [SootopolisCityShop, new ShardTraderShop(ShardTraderLocations['Sootopolis City']), TemporaryBattleList['Delta Wallace']],
        {
            requirements: [new RouteKillRequirement(10, Region.hoenn, 126), new GymBadgeRequirement(BadgeEnums.Mind)],
            npcs: [NPCList.WeatherBattle1, NPCList.WeatherBattle2, NPCList.Wallace3],
        },
    );
    TownList['Ever Grande City'] = new Town(
        'Ever Grande City',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [EverGrandeCityShop, new ShardTraderShop(ShardTraderLocations['Ever Grande City'])],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Rain)],
        },
    );
    TownList['Battle Frontier'] = new Town(
        'Battle Frontier',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [BattleFrontierShop, new BattleFrontierTownContent(), TemporaryBattleList['Destiny Deoxys Rayquaza'], TemporaryBattleList['Destiny Deoxys Army'], TemporaryBattleList['Destiny Rayquaza'], new GemMasterShop(GemShops.hoennBattleFrontierDeoxysDeal, 'Deoxys Replica', [new QuestLineCompletedRequirement('Destiny Deoxys')], true)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_HoennChampion)],
            npcs: [NPCList.CoolTrainerDillan, NPCList.destinyScientistBF, NPCList.destinyDeoxysReunion],
        },
    );
    TownList['Pokémon League Hoenn'] = new Town(
        'Pokémon League Hoenn',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [GymList['Elite Sidney'], GymList['Elite Phoebe'], GymList['Elite Glacia'], GymList['Elite Drake'], GymList['Champion Wallace'], pokeLeagueShop(), TemporaryBattleList['Delta Steven']],
        {
            requirements: [
                new RouteKillRequirement(10, Region.hoenn, 128),
                new TemporaryBattleRequirement('Wally 2'),
            ],
            npcs: [NPCList.TicketClaim, NPCList.DeltaSteven2, NPCList.DeltaSteven3],
        },
    );
    TownList['Southern Island'] = new Town(
        'Southern Island',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [TemporaryBattleList.Latios, TemporaryBattleList.Latias, TemporaryBattleList['Matt 3'], TemporaryBattleList['Courtney 3']],
        {
            requirements: [new CustomRequirement(ko.pureComputed(() => +App.game.keyItems.hasKeyItem(KeyItemType.Eon_ticket)), 1, 'Obtain an Eon Ticket')],
            npcs: [NPCList.SurferDave, NPCList.SouthernIsland1],
        },
    );

    TownList['Outskirt Stand'] = new Town(
        'Outskirt Stand',
        Region.hoenn,
        HoennSubRegions.Orre,
        [OutskirtStandShop, TemporaryBattleList.Willie, TemporaryBattleList['Miror B. 2']],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_HoennChampion), new QuestLineStartedRequirement('Shadows in the Desert')],
            npcs: [NPCList.ExploreStand, NPCList.Willie],
        },
    );

    TownList['Phenac City'] = new Town(
        'Phenac City',
        Region.hoenn,
        HoennSubRegions.Orre,
        [PhenacCityShop, new MoveToDungeon(DungeonList['Phenac Stadium']), new MoveToDungeon(DungeonList['Phenac City Battles']), TemporaryBattleList.Folly],
        {
            requirements: [new QuestLineStepCompletedRequirement('Shadows in the Desert', 1)],
            npcs: [NPCList.PhenacRoller, NPCList.Sack, NPCList.EsCade1, NPCList.Rui1, NPCList.Trest],
        },
    );

    TownList['Pyrite Town'] = new Town(
        'Pyrite Town',
        Region.hoenn,
        HoennSubRegions.Orre,
        [GymList['Cipher Admin Miror B.'], new MoveToDungeon(DungeonList['Pyrite Colosseum']), new MoveToDungeon(DungeonList['The Under']), new MoveToDungeon(DungeonList['Pyrite Town Battles']), new MoveToDungeon(DungeonList['Deep Colosseum']), new MoveToDungeon(DungeonList['Under Colosseum'])],
        {
            requirements: [new QuestLineStepCompletedRequirement('Shadows in the Desert', 6)],
            npcs: [NPCList.OrreRoamerNPC, NPCList.Duking1],
        },
    );

    TownList['Agate Village'] = new Town(
        'Agate Village',
        Region.hoenn,
        HoennSubRegions.Orre,
        [AgateVillageShop, new MoveToTown('Relic Stone'), new MoveToDungeon(DungeonList['Relic Cave']), TemporaryBattleList['Cipher Peon Doven'], TemporaryBattleList['Cipher Peon Silton'], TemporaryBattleList['Cipher Peon Kass']],
        {
            requirements: [new QuestLineStepCompletedRequirement('Shadows in the Desert', 14)],
            npcs: [NPCList.AgateAthlete],
        },
    );

    TownList['Relic Stone'] = new Town(
        'Relic Stone',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new MoveToTown('Agate Village', undefined, false), new MoveToDungeon(DungeonList['Relic Cave']), new PurifyChamberTownContent()],
        {
            requirements: [new QuestLineStepCompletedRequirement('Shadows in the Desert', 17)],
            npcs: [NPCList.RelicSage, NPCList.Eagun2],
        },
    );

    TownList['Realgam Tower'] = new Town(
        'Realgam Tower',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new MoveToDungeon(DungeonList['Realgam Tower Battles']), new MoveToDungeon(DungeonList['Realgam Colosseum'])],
        {
            requirements: [new QuestLineStepCompletedRequirement('Shadows in the Desert', 22)],
            npcs: [NPCList.EsCade2],
        },
    );

    TownList['Gateon Port'] = new Town(
        'Gateon Port',
        Region.hoenn,
        HoennSubRegions.Orre,
        [GateonPortShop, new MoveToDungeon(DungeonList['Gateon Port Battles']), new DockTownContent()],
        {
            requirements: [new QuestLineStartedRequirement('Shadows in the Desert')],
            npcs: [NPCList.GateonSailor, NPCList.Verich],
        },
    );

    TownList['Pokémon HQ Lab'] = new Town(
        'Pokémon HQ Lab',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new ShardTraderShop(ShardTraderLocations['Pokémon HQ Lab']), TemporaryBattleList['Cipher Peon Naps']],
        {
            requirements: [new QuestLineStepCompletedRequirement('Gale of Darkness', 0)],
            npcs: [NPCList.ProfKrane],
        },
    );

    TownList['Kaminko\'s Manor'] = new Town(
        'Kaminko\'s Manor',
        Region.hoenn,
        HoennSubRegions.Orre,
        [TemporaryBattleList['Chobin 1'], TemporaryBattleList['Chobin 2']],
        {
            requirements: [new QuestLineStepCompletedRequirement('Gale of Darkness', 2)],
            npcs: [NPCList.DrKaminko, NPCList.Chobin1, NPCList.Chobin2],
        },
    );

    TownList['S. S. Libra'] = new Town(
        'S. S. Libra',
        Region.hoenn,
        HoennSubRegions.Orre,
        [TemporaryBattleList['Cipher Peon Smarton']],
        {
            requirements: [new QuestLineStepCompletedRequirement('Gale of Darkness', 19)],
            npcs: [NPCList.SearchLibra],
        },
    );
    TownList['Orre Colosseum'] = new Town(
        'Orre Colosseum',
        Region.hoenn,
        HoennSubRegions.Orre,
        [GymList['Cipher Admin Lovrina'], GymList['Cipher Admin Snattle'], GymList['Cipher Admin Gorigan'], GymList['Cipher Admin Ardos'], GymList['Cipher Admin Eldes']],
        {
            requirements: [new QuestLineCompletedRequirement('Gale of Darkness')],
            npcs: [NPCList.OrreColosseumSpectator],
        },
    );
    //Hoenn Dungeons
    TownList['Petalburg Woods'] = new DungeonTown(
        'Petalburg Woods',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 104)],
        [],
        { npcs: [NPCList.MossRock, NPCList.EasterEggHunter] },
    );
    TownList['Rusturf Tunnel'] = new DungeonTown(
        'Rusturf Tunnel',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new RouteKillRequirement(10, Region.hoenn, 116),
            new GymBadgeRequirement(BadgeEnums.Stone),
        ],
    );
    TownList['Granite Cave'] = new DungeonTown(
        'Granite Cave',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new TemporaryBattleRequirement('May 2')],
        [TemporaryBattleList['Zinnia 1'], TemporaryBattleList['Delta Brock']],
        {
            npcs: [NPCList.Zinnia2, NPCList.Zinnia3, NPCList.GraniteCamper1, NPCList.GraniteCamper2, NPCList.PrimalMural1, NPCList.PrimalMural2, NPCList.PrimalSteven],
        },
    );
    TownList['Fiery Path'] = new DungeonTown(
        'Fiery Path',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 112)],
    );
    TownList['Meteor Falls'] = new DungeonTown(
        'Meteor Falls',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 114)],
        [TemporaryBattleList['Draconid Elder'], TemporaryBattleList['Mega Draconid Elder']],
        {
            npcs: [NPCList.DraconidElder1, NPCList.DraconidElder2, NPCList.DraconidElder3],
        },
    );
    TownList['Mt. Chimney Crater'] = new DungeonTown(
        'Mt. Chimney Crater',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new ClearDungeonRequirement(1, getDungeonIndex('Meteor Falls'))],
        [TemporaryBattleList['Butler 1']],
        {
            npcs: [NPCList.CocoonHatch, NPCList.Butler3],
        },
    );
    TownList['Jagged Pass'] = new DungeonTown(
        'Jagged Pass',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new ClearDungeonRequirement(1, getDungeonIndex('Mt. Chimney Crater'))],
        [TemporaryBattleList['Butler 2']],
        {
            npcs: [NPCList.Butler2],
        },
    );
    TownList['New Mauville'] = new DungeonTown(
        'New Mauville',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new GymBadgeRequirement(BadgeEnums.Balance)],
    );
    TownList['Weather Institute'] = new DungeonTown(
        'Weather Institute',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 119)],
        [new WeatherAppTownContent()],
        {
            npcs: [NPCList.WeatherScan],
        },
    );
    TownList['Mt. Pyre'] = new DungeonTown(
        'Mt. Pyre',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 122)],
        [],
        {
            npcs: [NPCList.PrimalArchie, NPCList.PrimalMaxie],
        },
    );
    TownList['Magma Hideout'] = new DungeonTown(
        'Magma Hideout',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new ClearDungeonRequirement(1, getDungeonIndex('Mt. Pyre'))],
        [TemporaryBattleList['Delta Tabitha']],
        {
            npcs: [NPCList.Maxie],
        },
    );
    TownList['Aqua Hideout'] = new DungeonTown(
        'Aqua Hideout',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new ClearDungeonRequirement(1, getDungeonIndex('Magma Hideout'))],
        [TemporaryBattleList['Delta Shelly']],
        {
            npcs: [NPCList.Archie],
        },
    );
    TownList['Shoal Cave'] = new DungeonTown(
        'Shoal Cave',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new RouteKillRequirement(10, Region.hoenn, 125)],
        [TemporaryBattleList['Shoal Fisherman'], TemporaryBattleList['Icy Boulder']],
        {
            npcs: [NPCList.IceRock, NPCList.ShoalFisherman1, NPCList.ShoalFisherman2, NPCList.IcyBoulder],
        },
    );
    TownList['Cave of Origin'] = new DungeonTown(
        'Cave of Origin',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new RouteKillRequirement(10, Region.hoenn, 126),
            new ClearDungeonRequirement(1, getDungeonIndex('Seafloor Cavern')),
        ],
        [],
        {
            npcs: [NPCList.Wallace1, NPCList.Wallace2, NPCList.ZinniaOrigin],
        },
    );
    TownList['Seafloor Cavern'] = new DungeonTown(
        'Seafloor Cavern',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new RouteKillRequirement(10, Region.hoenn, 128),
            new GymBadgeRequirement(BadgeEnums.Mind),
        ],
        [TemporaryBattleList['Archie Primal'], TemporaryBattleList['Maxie Primal']],
        {
            npcs: [],
        },
    );
    TownList['Sky Pillar'] = new DungeonTown(
        'Sky Pillar',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new RouteKillRequirement(10, Region.hoenn, 131),
            new ClearDungeonRequirement(1, getDungeonIndex('Cave of Origin'))],
        [TemporaryBattleList['Zinnia 2'], TemporaryBattleList.Deoxys],
        {
            npcs: [NPCList.Zinnia1, NPCList.Zinnia6, NPCList.Zinnia7],
        },
    );
    TownList['Victory Road Hoenn'] = new DungeonTown(
        'Victory Road Hoenn',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [new GymBadgeRequirement(BadgeEnums.Rain)],
        [TemporaryBattleList['Wally 2']],
    );
    TownList['Sealed Chamber'] = new DungeonTown(
        'Sealed Chamber',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new RouteKillRequirement(10, Region.hoenn, 134),
            new GymBadgeRequirement(BadgeEnums.Mind)],
        [],
        {
            npcs: [
                NPCList.SCEntrance,
                NPCList.MazeHintLeft,
                NPCList.MazeHintRight,
                NPCList.MazeHintStraight,
                NPCList.SCMazeLeft,
                NPCList.SCMazeLeftWrong,
                NPCList.SCMazeRight,
                NPCList.SCMazeRightWrong,
                NPCList.SCMazeStraight,
                NPCList.SCMazeStraightWrong,
                NPCList.SCHints,
                NPCList.BrailleEnthusiast1,
                NPCList.BrailleEnthusiast2,
                NPCList.BrailleEnthusiast3,
            ],
        },
    );
    TownList['Near Space'] = new DungeonTown(
        'Near Space',
        Region.hoenn,
        HoennSubRegions.Hoenn,
        [
            new QuestLineCompletedRequirement('The Delta Episode'),
        ],
    );
    TownList['Phenac City Battles'] = new DungeonTown(
        'Phenac City Battles',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 3),
        ],
    );
    TownList['Pyrite Town Battles'] = new DungeonTown(
        'Pyrite Town Battles',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 6),
        ],
    );
    TownList['Pyrite Colosseum'] = new DungeonTown(
        'Pyrite Colosseum',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 8),
        ],
        [],
        {
            npcs: [NPCList.Rui2],
        },
    );
    TownList['Pyrite Building'] = new DungeonTown(
        'Pyrite Building',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 9),
        ],
        [],
        {
            npcs: [NPCList.Doken1, NPCList.Exol],
        },
    );
    TownList['Pyrite Cave'] = new DungeonTown(
        'Pyrite Cave',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 11),
        ],
        [],
        {
            npcs: [NPCList.FreePlusle],
        },
    );
    TownList['Relic Cave'] = new DungeonTown(
        'Relic Cave',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 15),
        ],
        [],
        {
            npcs: [NPCList.GrandpaEagun1],
        },
    );
    TownList['Mt. Battle'] = new DungeonTown(
        'Mt. Battle',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 17),
        ],
        [GymList['Cipher Admin Dakim']],
        {
            npcs: [NPCList.Rui3],
        },
    );
    TownList['The Under'] = new DungeonTown(
        'The Under',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 19),
        ],
        [GymList['Cipher Admin Venus']],
        {
            npcs: [NPCList.SearchTheStudio],
        },
    );
    TownList['Cipher Lab'] = new DungeonTown(
        'Cipher Lab',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 21),
        ],
        [GymList['Cipher Admin Ein']],
        {
            npcs: [NPCList.Lovrina],
        },
    );
    TownList['Realgam Tower Battles'] = new DungeonTown(
        'Realgam Tower Battles',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 22),
        ],
    );
    TownList['Realgam Colosseum'] = new DungeonTown(
        'Realgam Colosseum',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineStepCompletedRequirement('Shadows in the Desert', 24),
        ],
        [],
        {
            npcs: [NPCList.EviceEscape],
        },
    );
    TownList['Snagem Hideout'] = new DungeonTown(
        'Snagem Hideout',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineCompletedRequirement('Shadows in the Desert'),
        ],
    );
    TownList['Deep Colosseum'] = new DungeonTown(
        'Deep Colosseum',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineCompletedRequirement('Shadows in the Desert'),
        ],
    );
    TownList['Phenac Stadium'] = new DungeonTown(
        'Phenac Stadium',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineCompletedRequirement('Shadows in the Desert'),
        ],
        [],
        {
            npcs: [NPCList.Snattle],
        },
    );
    TownList['Under Colosseum'] = new DungeonTown(
        'Under Colosseum',
        Region.hoenn,
        HoennSubRegions.Orre,
        [
            new QuestLineCompletedRequirement('Shadows in the Desert'),
        ],
    );
    TownList['Gateon Port Battles'] = new DungeonTown(
        'Gateon Port Battles',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new QuestLineStepCompletedRequirement('Gale of Darkness', 1)],
    );
    TownList['Cipher Key Lair'] = new DungeonTown(
        'Cipher Key Lair',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new QuestLineStepCompletedRequirement('Gale of Darkness', 24)],
    );
    TownList['Citadark Isle'] = new DungeonTown(
        'Citadark Isle',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new QuestLineStepCompletedRequirement('Gale of Darkness', 26)],
    );
    TownList['Citadark Isle Dome'] = new DungeonTown(
        'Citadark Isle Dome',
        Region.hoenn,
        HoennSubRegions.Orre,
        [new QuestLineStepCompletedRequirement('Gale of Darkness', 27)],
    );

    //Sinnoh Shops
    const SandgemTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
    ]);
    const JubilifeCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
    ]);
    const OreburghCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.Moon_stone,
        ItemList.Sun_stone,
    ]);
    const FloaromaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Lucky_egg,
        ItemList.Linking_cord,
        ItemList.Kings_rock,
    ]);
    const EternaCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Grass_egg,
        ItemList.Leaf_stone,
    ]);
    const HearthomeCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xClick,
        ItemList.MediumRestore,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
        ItemList.Soothe_bell,
    ]);
    const SolaceonTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Shiny_stone,
        ItemList.Dusk_stone,
        ItemList.Dawn_stone,
    ]);
    const PastoriaShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.LargeRestore,
        ItemList.Water_egg,
        ItemList.Water_stone,
        ItemList.Prism_scale,
    ]);
    const CelesticTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.Lucky_incense,
        ItemList.Dragon_egg,
        ItemList.Dragon_scale,
    ]);
    const CanalaveCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dowsing_machine,
        ItemList.Fighting_egg,
        ItemList.Metal_coat,
    ]);
    const PalParkShop = new Shop([
        ItemList.Razor_claw,
        ItemList.Razor_fang,
        ItemList.Combee,
        ItemList['Burmy (Plant)'],
        ItemList.Cherubi,
    ]);
    const SnowpointCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Upgrade,
    ]);
    const SunyshoreCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Lucky_incense,
        ItemList.Electric_egg,
        ItemList.Thunder_stone,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
    ]);
    const FightAreaShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Macho_Brace,
    ]);
    const SurvivalAreaShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Electirizer,
        ItemList.Magmarizer,
    ]);
    const ResortAreaShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Protector,
        ItemList.Dubious_disc,
        ItemList.Reaper_cloth,
    ]);

    //Sinnoh Berry Master
    const SinnohBerryMaster = new BerryMasterShop(BerryTraderLocations['Hearthome City'], [
        ItemList.Boost_Mulch,
        ItemList.Rich_Mulch,
        ItemList.Surprise_Mulch,
        ItemList.Amaze_Mulch,
        ItemList.Freeze_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
        ItemList.Gracidea,
        ItemList.FarmHandRiley,
    ], 'Sinnoh Berry Master');

    const SecretBerryMaster = new BerryMasterShop(BerryTraderLocations['Secret Berry Shop'], [
        ItemList.Freeze_Mulch,
        ItemList.Gooey_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
    ], 'Secret Berry Shop');

    //Sinnoh Towns
    TownList['Twinleaf Town'] = new Town(
        'Twinleaf Town',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new BulletinBoard(BulletinBoards.Sinnoh)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_HoennChampion)],
            npcs: [NPCList.TwinleafContestChampion],
        },
    );
    TownList['Sandgem Town'] = new Town(
        'Sandgem Town',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [SandgemTownShop, TemporaryBattleList['Manaphy Go-Rock Pincher'], new ShardTraderShop(ShardTraderLocations['Sandgem Town'], 'Santa\'s Secret Daycare', true, 'Plates')],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 201)],
            npcs: [NPCList.ProfRowan, NPCList.EvolutionAssistant, NPCList.SandgemBeachcomber, NPCList.ManaphyHastings1, NPCList.ManaphyHastings2, NPCList.HappinyWitness9],
        },
    );
    TownList['Jubilife City'] = new Town(
        'Jubilife City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [JubilifeCityShop],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 202)],
            npcs: [NPCList.SinnohFossilNpc, NPCList.HappinyWitness1, NPCList.HappinyWitness8],
        },
    );
    TownList['Oreburgh City'] = new Town(
        'Oreburgh City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [OreburghCityShop, new ShardTraderShop(ShardTraderLocations['Oreburgh City']), new GenericTraderShop('FossilOreburghMiningMuseum', 'Oreburgh Mining Museum')],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Oreburgh Gate'))],
            npcs: [NPCList.OreburghConstructionWorker, NPCList.HappinyWitness7],
        },
    );
    TownList['Floaroma Town'] = new Town(
        'Floaroma Town',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [FloaromaTownShop, new ShardTraderShop(ShardTraderLocations['Floaroma Town'])],
        {
            requirements: [
                new RouteKillRequirement(10, Region.sinnoh, 204),
                new GymBadgeRequirement(BadgeEnums.Coal),
            ],
            npcs: [NPCList.FloaromaFlowerGirl, NPCList.HappinyWitness2],
        },
    );
    TownList['Eterna City'] = new Town(
        'Eterna City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [EternaCityShop, new ShardTraderShop(ShardTraderLocations['Eterna City']), new MoveToDungeon(DungeonList['Team Galactic Eterna Building'])],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Eterna Forest'))],
            npcs: [NPCList.EternaLassCaroline, NPCList.HappinyWitness3],
        },
    );
    TownList['Mt. Coronet'] = new Town(
        'Mt. Coronet',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new MoveToDungeon(DungeonList['Mt. Coronet South']), new MoveToDungeon(DungeonList['Mt. Coronet North']), new MoveToDungeon(DungeonList['Spear Pillar']), new MoveToDungeon(DungeonList['Hall of Origin'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 207)],
        },
    );
    TownList['Hearthome City'] = new Town(
        'Hearthome City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [HearthomeCityShop, new ShardTraderShop(ShardTraderLocations['Hearthome City']), SinnohBerryMaster],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 208)],
            npcs: [NPCList.HearthomeContestFan, NPCList.SinnohBerryMasterAssistant, NPCList.LucyStevens1, NPCList.HappinyWitness6],
        },
    );
    TownList['Solaceon Town'] = new Town(
        'Solaceon Town',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [SolaceonTownShop, new ShardTraderShop(ShardTraderLocations['Solaceon Town'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 209)],
            npcs: [NPCList.HappinyWitness5],
        },
    );
    TownList['Veilstone City'] = new Town(
        'Veilstone City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [DepartmentStoreShop, new MoveToDungeon(DungeonList['Team Galactic HQ'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 215)],
            npcs: [],
        },
    );
    TownList['Pastoria City'] = new Town(
        'Pastoria City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [PastoriaShop, new ShardTraderShop(ShardTraderLocations['Pastoria City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 213)],
        },
    );
    TownList['Celestic Town'] = new Town(
        'Celestic Town',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [CelesticTownShop, new ShardTraderShop(ShardTraderLocations['Celestic Town']), TemporaryBattleList['Galactic Boss Cyrus']],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Fen)],
            npcs: [NPCList.CelesticGrandma, NPCList.HappinyWitness4],
        },
    );
    TownList['Pal Park'] = new Town(
        'Pal Park',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [PalParkShop, new ShardTraderShop(ShardTraderLocations['Pal Park']), TemporaryBattleList['Manaphy Egg Protectors']],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 221)],
            npcs: [NPCList.PalParkWarden, NPCList.PalParkBurglar, NPCList.HappinyBoulders],
        },
    );
    TownList['Canalave City'] = new Town(
        'Canalave City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [CanalaveCityShop, new ShardTraderShop(ShardTraderLocations['Canalave City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 218)],
            npcs: [NPCList.CanalaveRiley, NPCList.CanalaveYoungBoy, NPCList.CanalaveSinnohMyth, NPCList.ManaphyHastings3, NPCList.ManaphyHastings4],
        },
    );
    TownList['Great Marsh'] = new Town(
        'Great Marsh',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new SafariTownContent()],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 218)],
            npcs: [],
        },
    );
    TownList['Snowpoint City'] = new Town(
        'Snowpoint City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [SnowpointCityShop, new ShardTraderShop(ShardTraderLocations['Snowpoint City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 217)],
            npcs: [NPCList.SnowpointYoungGirl, NPCList.MindyFriend],
        },
    );
    TownList['Secret Berry Shop'] = new Town(
        'Secret Berry Shop',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [SecretBerryMaster],
        {
            requirements: [
                new RouteKillRequirement(10, Region.sinnoh, 217),
            ],
            npcs: [NPCList.SnoverBreeder, NPCList.GrotleAcornParty],
            ignoreAreaStatus: true,
        },
    );
    TownList['Sunyshore City'] = new Town(
        'Sunyshore City',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [SunyshoreCityShop, new ShardTraderShop(ShardTraderLocations['Sunyshore City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 222)],
            npcs: [NPCList.SunyshoreRibbonerJulia],
        },
    );
    TownList['Fight Area'] = new Town(
        'Fight Area',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [FightAreaShop],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
            npcs: [NPCList.FightAreaAceTrainer, NPCList.FightAreaZero1, NPCList.FightAreaZero2],
        },
    );
    TownList['Survival Area'] = new Town(
        'Survival Area',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [TemporaryBattleList['Barry 7'], SurvivalAreaShop, new ShardTraderShop(ShardTraderLocations['Survival Area'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 225)],
            npcs: [NPCList.SurvivalAreaSinnohRoamerNPC],
        },
    );
    TownList['Resort Area'] = new Town(
        'Resort Area',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [ResortAreaShop, new ShardTraderShop(ShardTraderLocations['Resort Area'])],
        {
            requirements: [new RouteKillRequirement(10, Region.sinnoh, 229)],
        },
    );
    TownList['Pokémon League Sinnoh'] = new Town(
        'Pokémon League Sinnoh',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [GymList['Elite Aaron'], GymList['Elite Bertha'], GymList['Elite Flint'], GymList['Elite Lucian'], GymList['Champion Cynthia'], pokeLeagueShop()],
        {
            requirements: [
                new RouteKillRequirement(10, Region.sinnoh, 223),
                new TemporaryBattleRequirement('Barry 6'),
            ],
        },
    );

    //Sinnoh Dungeons
    TownList['Oreburgh Gate'] = new DungeonTown(
        'Oreburgh Gate',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 203)],
    );
    TownList['Valley Windworks'] = new DungeonTown(
        'Valley Windworks',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new RouteKillRequirement(10, Region.sinnoh, 204),
            new GymBadgeRequirement(BadgeEnums.Coal),
        ],
    );
    TownList['Eterna Forest'] = new DungeonTown(
        'Eterna Forest',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new RouteKillRequirement(10, Region.sinnoh, 205),
            new GymBadgeRequirement(BadgeEnums.Coal),
        ],
        [TemporaryBattleList['Manaphy Go-Rock MGrunt 1'], TemporaryBattleList['Manaphy Go-Rock MGrunt 2'], TemporaryBattleList['Manaphy Go-Rock MGrunt 3'], TemporaryBattleList['Manaphy Go-Rock MGrunt 4'], TemporaryBattleList['Manaphy Go-Rock FGrunt 1'], TemporaryBattleList['Manaphy Go-Rock FGrunt 2']],
        {
            npcs: [NPCList.MossRock, NPCList.ManaphyGoRock, NPCList.ManaphyGoRockCommander, NPCList.ManaphyBoulders],
        },
    );
    TownList['Old Chateau'] = new DungeonTown(
        'Old Chateau',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new RouteKillRequirement(10, Region.sinnoh, 205),
            new GymBadgeRequirement(BadgeEnums.Forest),
        ],
        [TemporaryBattleList['Manaphy Go-Rock Commander']],
    );
    TownList['Team Galactic Eterna Building'] = new DungeonTown(
        'Team Galactic Eterna Building',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Forest)],
    );
    TownList['Wayward Cave'] = new DungeonTown(
        'Wayward Cave',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 206)],
    );
    TownList['Mt. Coronet South'] = new DungeonTown(
        'Mt. Coronet South',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 207)],
    );
    TownList['Solaceon Ruins'] = new DungeonTown(
        'Solaceon Ruins',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 209)],
        undefined,
        {
            npcs: [NPCList.UnownFigure],
        },
    );
    TownList['Iron Island'] = new DungeonTown(
        'Iron Island',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 218)],
    );
    TownList['Lake Valor'] = new DungeonTown(
        'Lake Valor',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Mine)],
        [],
        {
            npcs: [NPCList.ValorAzelf],
        },
    );
    TownList['Lake Verity'] = new DungeonTown(
        'Lake Verity',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new ClearDungeonRequirement(1, getDungeonIndex('Lake Valor'))],
        [],
        {
            npcs: [NPCList.VerityMesprit],
        },
    );
    TownList['Mt. Coronet North'] = new DungeonTown(
        'Mt. Coronet North',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new RouteKillRequirement(10, Region.sinnoh, 211),
            new ClearDungeonRequirement(1, getDungeonIndex('Lake Verity')),
        ],
    );
    TownList['Lake Acuity'] = new DungeonTown(
        'Lake Acuity',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Icicle)],
        [],
        {
            npcs: [NPCList.IceRock, NPCList.AcuityUxie],
        },
    );
    TownList['Team Galactic HQ'] = new DungeonTown(
        'Team Galactic HQ',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new ClearDungeonRequirement(1, getDungeonIndex('Lake Acuity'))],
    );
    TownList['Spear Pillar'] = new DungeonTown(
        'Spear Pillar',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new ClearDungeonRequirement(1, getDungeonIndex('Team Galactic HQ'))],
    );
    TownList['Distortion World'] = new DungeonTown(
        'Distortion World',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new OneFromManyRequirement([
                new MultiRequirement([
                    new QuestLineStepCompletedRequirement('A New World', 9),
                    new QuestLineStepCompletedRequirement('A New World', 10, AchievementOption.less),
                ]),
                new TemporaryBattleRequirement('Zero'),
            ]),
        ],
    );
    TownList['Victory Road Sinnoh'] = new DungeonTown(
        'Victory Road Sinnoh',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 223)],
    );
    TownList['Sendoff Spring'] = new DungeonTown(
        'Sendoff Spring',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new QuestLineStepCompletedRequirement('Zero\'s Ambition', 8)],
        [TemporaryBattleList.Zero],
        {
            npcs: [NPCList.SendoffSpringLakeTrio, NPCList.SendoffSpringZero1, NPCList.SendoffSpringZero2],
        },
    );
    TownList['Hall of Origin'] = new DungeonTown(
        'Hall of Origin',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
    );
    TownList['Fullmoon Island'] = new DungeonTown(
        'Fullmoon Island',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
    );
    TownList['Newmoon Island'] = new DungeonTown(
        'Newmoon Island',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
    );
    TownList['Flower Paradise'] = new DungeonTown(
        'Flower Paradise',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [
            new RouteKillRequirement(10, Region.sinnoh, 224),
            new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion),
        ],
    );
    TownList['Stark Mountain'] = new DungeonTown(
        'Stark Mountain',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new RouteKillRequirement(10, Region.sinnoh, 227)],
    );
    TownList['Snowpoint Temple'] = new DungeonTown(
        'Snowpoint Temple',
        Region.sinnoh,
        SinnohSubRegions.Sinnoh,
        [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
    );

    //Unova Shops
    const FloccesyTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
        ItemList.Miracle_Chest,
    ]);
    const VirbankCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.MediumRestore,
    ]);
    const CasteliaCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xAttack,
        ItemList.Water_egg,
        ItemList.Linking_cord,
        ItemList.Kings_rock,
    ]);
    const NimbasaCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Grass_egg,
        ItemList.Electric_egg,
        ItemList.Metal_coat,
    ]);
    const DriftveilCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Razor_claw,
        ItemList.Razor_fang,
        ItemList.Zorua,
    ]);
    const MistraltonCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.LargeRestore,
        ItemList.Thunder_stone,
        ItemList.Upgrade,
    ]);
    const LentimasTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Fire_egg,
    ]);
    const UndellaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
    ]);
    const LacunosaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.Lucky_incense,
        ItemList.Fighting_egg,
    ]);
    const OpelucidCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dowsing_machine,
        ItemList.Dragon_egg,
        ItemList.Dragon_scale,
    ]);
    const HumilauCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Prism_scale,
    ]);
    const IcirrusCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Protector,
        ItemList.Dubious_disc,
        ItemList.Reaper_cloth,
    ]);
    const BlackAndWhiteParkShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Moon_stone,
        ItemList.Sun_stone,
    ]);
    const NacreneCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Soothe_bell,
    ]);
    const StriatonCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Leaf_stone,
        ItemList.Fire_stone,
        ItemList.Water_stone,
    ]);
    const AccumulaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Shiny_stone,
        ItemList.Dusk_stone,
        ItemList.Dawn_stone,
    ]);
    const NuvemaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Electirizer,
        ItemList.Magmarizer,
    ]);
    const AnvilleTownShop = new Shop([
        ItemList['Meloetta (Pirouette)'],
    ]);

    //Unova Gem Master
    const UnovaFluteMaster = new GemMasterShop(GemShops.UnovaFluteMaster);

    //Unova Berry Master
    const DriftveilBerryMaster = new BerryMasterShop(BerryTraderLocations['Driftveil City'], [
        ItemList.Boost_Mulch,
        ItemList.Rich_Mulch,
        ItemList.Surprise_Mulch,
        ItemList.Amaze_Mulch,
        ItemList.Freeze_Mulch,
        ItemList.Gooey_Mulch,
        ItemList.Berry_Shovel,
        ItemList.Mulch_Shovel,
    ], 'Unova Berry Master');

    //Unova Towns
    TownList['Aspertia City'] = new Town(
        'Aspertia City',
        Region.unova,
        UnovaSubRegions.Unova,
        [new BulletinBoard(BulletinBoards.Unova)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_SinnohChampion)],
            npcs: [],
        },
    );
    TownList['Floccesy Town'] = new Town(
        'Floccesy Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [FloccesyTownShop],
        {
            requirements: [
                new RouteKillRequirement(10, Region.unova, 19),
                new TemporaryBattleRequirement('Hugh 1'),
            ],
        },
    );
    TownList['Virbank City'] = new Town(
        'Virbank City',
        Region.unova,
        UnovaSubRegions.Unova,
        [VirbankCityShop, TemporaryBattleList['Team Plasma Grunt 1']],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Basic)],
        },
    );
    TownList['Castelia City'] = new Town(
        'Castelia City',
        Region.unova,
        UnovaSubRegions.Unova,
        [CasteliaCityShop, new ShardTraderShop(ShardTraderLocations['Castelia City']), new MoveToDungeon(DungeonList['Castelia Sewers'])],
        {
            requirements: [new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 0)],
            npcs: [NPCList.CasteliaMusician, NPCList.GenesectFight],
        },
    );
    TownList['A Perfectly Ordinary Frigate'] = new Town(
        'A Perfectly Ordinary Frigate',
        Region.unova,
        UnovaSubRegions.Unova,
        [],
        {
            requirements: [
                new GymBadgeRequirement(BadgeEnums.Insect),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 1),
                new TemporaryBattleRequirement('Team Plasma Grunt 1'),
            ],
            npcs: [NPCList.PlasmaGrunt1],
        },
    );
    TownList['Nimbasa City'] = new Town(
        'Nimbasa City',
        Region.unova,
        UnovaSubRegions.Unova,
        [NimbasaCityShop, new ShardTraderShop(ShardTraderLocations['Nimbasa City']), TemporaryBattleList['Team Plasma Grunt 2'], TemporaryBattleList['Team Plasma Grunt 3']],
        {
            requirements: [
                new RouteKillRequirement(10, Region.unova, 4),
                new TemporaryBattleRequirement('Colress 1'),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 2),
            ],
            npcs: [NPCList.NimbasaExplorer],
        },
    );
    TownList['Driftveil City'] = new Town(
        'Driftveil City',
        Region.unova,
        UnovaSubRegions.Unova,
        [TemporaryBattleList['Hugh 7'], DriftveilCityShop, new ShardTraderShop(ShardTraderLocations['Driftveil City']), DriftveilBerryMaster],
        {
            requirements: [
                new RouteKillRequirement(10, Region.unova, 5),
                new TemporaryBattleRequirement('Team Plasma Grunt 2'),
                new TemporaryBattleRequirement('Team Plasma Grunt 3'),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 4),
            ],
        },
    );
    TownList['A Totally Unsuspicious Frigate'] = new Town(
        'A Totally Unsuspicious Frigate',
        Region.unova,
        UnovaSubRegions.Unova,
        [TemporaryBattleList['Team Plasma Grunt 4'], TemporaryBattleList['Team Plasma Grunt 5'], TemporaryBattleList['Team Plasma Grunts 1'], TemporaryBattleList['Team Plasma Grunts 2']],
        {
            requirements: [
                new GymBadgeRequirement(BadgeEnums.Quake),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 4),
            ],
            npcs: [NPCList.PlasmaGrunt2, NPCList.DriftveilZinzolin],
        },
    );
    TownList['Mistralton City'] = new Town(
        'Mistralton City',
        Region.unova,
        UnovaSubRegions.Unova,
        [MistraltonCityShop, new ShardTraderShop(ShardTraderLocations['Mistralton City'])],
        {
            requirements: [
                new ClearDungeonRequirement(1, getDungeonIndex('Chargestone Cave')),
                new TemporaryBattleRequirement('Colress 2'),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 7),
            ],
        },
    );
    TownList['Lentimas Town'] = new Town(
        'Lentimas Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [LentimasTownShop, new ShardTraderShop(ShardTraderLocations['Lentimas Town'])],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Jet)],
        },
    );
    TownList['Undella Town'] = new Town(
        'Undella Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [UndellaTownShop, new ShardTraderShop(ShardTraderLocations['Undella Town']), UnovaFluteMaster],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Reversal Mountain'))],
        },
    );
    TownList['Lacunosa Town'] = new Town(
        'Lacunosa Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [LacunosaTownShop, new ShardTraderShop(ShardTraderLocations['Lacunosa Town']), TemporaryBattleList['Team Plasma Grunt 6'], TemporaryBattleList['Zinzolin 1'], TemporaryBattleList['Kyurem 1']],
        {
            requirements: [
                new RouteKillRequirement(10, Region.unova, 13),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 8),
            ],
            npcs: [NPCList.Cobalion5],
        },
    );
    TownList['Opelucid City'] = new Town(
        'Opelucid City',
        Region.unova,
        UnovaSubRegions.Unova,
        [OpelucidCityShop, new ShardTraderShop(ShardTraderLocations['Opelucid City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 11)],
        },
    );
    TownList['Team Plasma Assault'] = new Town(
        'Team Plasma Assault',
        Region.unova,
        UnovaSubRegions.Unova,
        [TemporaryBattleList['Team Plasma Grunt 7'], TemporaryBattleList['Team Plasma Grunt 8'], TemporaryBattleList['Team Plasma Grunt 9'], TemporaryBattleList['Zinzolin 2'], TemporaryBattleList['Plasma Shadow 1']],
        {
            requirements: [
                new GymBadgeRequirement(BadgeEnums.Legend),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 11),
            ],
            npcs: [NPCList.PlasmaGrunt3],
        },
    );
    TownList['Shopping Mall Nine'] = new Town(
        'Shopping Mall Nine',
        Region.unova,
        UnovaSubRegions.Unova,
        [DepartmentStoreShop],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 9)],
        },
    );
    TownList['Humilau City'] = new Town(
        'Humilau City',
        Region.unova,
        UnovaSubRegions.Unova,
        [HumilauCityShop, new ShardTraderShop(ShardTraderLocations['Humilau City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 21)],
            npcs: [NPCList.ExcitedChild],
        },
    );
    TownList['Icirrus City'] = new Town(
        'Icirrus City',
        Region.unova,
        UnovaSubRegions.Unova,
        [IcirrusCityShop, new ShardTraderShop(ShardTraderLocations['Icirrus City'])],
        {
            requirements: [new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.unova, 8),
                new ClearDungeonRequirement(1, getDungeonIndex('Twist Mountain')),
            ])],
            npcs: [NPCList.IcirrusFanClubChairman],
        },
    );
    TownList['Black and White Park'] = new Town(
        'Black and White Park',
        Region.unova,
        UnovaSubRegions.Unova,
        [new DreamOrbTownContent(), BlackAndWhiteParkShop, new ShardTraderShop(ShardTraderLocations['Black and White Park']), TemporaryBattleList['Dream Researcher']],
        {
            requirements: [new OneFromManyRequirement([
                new MultiRequirement([
                    new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion),
                    new RouteKillRequirement(10, Region.unova, 14),
                ]),
                new RouteKillRequirement(10, Region.unova, 15),
            ])],
            npcs: [NPCList.ProfBurnet, NPCList.DreamResearcher1, NPCList.DreamResearcher2],
        },
    );
    TownList['Nacrene City'] = new Town(
        'Nacrene City',
        Region.unova,
        UnovaSubRegions.Unova,
        [NacreneCityShop, new ShardTraderShop(ShardTraderLocations['Nacrene City']), new GenericTraderShop('FossilNacreneMuseum', 'Nacrene Museum')],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Pinwheel Forest'))],
            npcs: [NPCList.VitaminRefundCode, NPCList.UnovaFossilNpc],
        },
    );
    TownList['Striaton City'] = new Town(
        'Striaton City',
        Region.unova,
        UnovaSubRegions.Unova,
        [StriatonCityShop, new ShardTraderShop(ShardTraderLocations['Striaton City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 3)],
        },
    );
    TownList['Accumula Town'] = new Town(
        'Accumula Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [AccumulaTownShop, new ShardTraderShop(ShardTraderLocations['Accumula Town'])],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 2)],
        },
    );
    TownList['Nuvema Town'] = new Town(
        'Nuvema Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [NuvemaTownShop, new ShardTraderShop(ShardTraderLocations['Nuvema Town']), TemporaryBattleList['Lab Ambush']],
        {
            requirements: [new RouteKillRequirement(10, Region.unova, 1)],
            npcs: [NPCList.ProfJuniper, NPCList.UnovaRoamerNPC],
        },
    );
    TownList['Anville Town'] = new Town(
        'Anville Town',
        Region.unova,
        UnovaSubRegions.Unova,
        [AnvilleTownShop],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion)],
        },
    );
    TownList['Pokémon League Unova'] = new Town(
        'Pokémon League Unova',
        Region.unova,
        UnovaSubRegions.Unova,
        [GymList['Elite Shauntal'], GymList['Elite Marshal'], GymList['Elite Grimsley'], GymList['Elite Caitlin'], GymList['Champion Iris'], pokeLeagueShop()],
        {
            requirements: [
                new TemporaryBattleRequirement('Hugh 5'),
                new ClearDungeonRequirement(1, getDungeonIndex('Victory Road Unova')),
            ],
        },
    );

    //Unova Dungeons
    TownList['Pledge Grove'] = new DungeonTown(
        'Pledge Grove',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new ObtainedPokemonRequirement('Keldeo'),
            new ClearDungeonRequirement(1, getDungeonIndex('Moor of Icirrus')),
        ],
    );
    TownList['Floccesy Ranch'] = new DungeonTown(
        'Floccesy Ranch',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new RouteKillRequirement(10, Region.unova, 20),
            new TemporaryBattleRequirement('Hugh 2'),
        ],
    );
    TownList['Liberty Garden'] = new DungeonTown(
        'Liberty Garden',
        Region.unova,
        UnovaSubRegions.Unova,
        //Victini dungeon, maybe unlock later
        [new TemporaryBattleRequirement('Team Plasma Grunt 1')],
    );
    TownList['Castelia Sewers'] = new DungeonTown(
        'Castelia Sewers',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 0),
        ],
        [TemporaryBattleList['Red Genesect 1'], TemporaryBattleList['Red Genesect 2']],
        {
            npcs: [NPCList.AncientBugHunter1, NPCList.AncientBugHunter2],
        },
    );
    TownList['Relic Passage'] = new DungeonTown(
        'Relic Passage',
        Region.unova,
        UnovaSubRegions.Unova,
        [new GymBadgeRequirement(BadgeEnums.Quake)],
    );
    TownList['Relic Castle'] = new DungeonTown(
        'Relic Castle',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 25)],
        [],
        {
            npcs: [NPCList.RelicCastleRuinmaniac],
        },
    );
    TownList['Lostlorn Forest'] = new DungeonTown(
        'Lostlorn Forest',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 16)],
    );
    TownList['Chargestone Cave'] = new DungeonTown(
        'Chargestone Cave',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 6)],
    );
    TownList['Mistralton Cave'] = new DungeonTown(
        'Mistralton Cave',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new TemporaryBattleRequirement('Colress 2'),
            new RouteKillRequirement(10, Region.unova, 6),
        ],
        [],
        {
            npcs: [NPCList.OldManSwords, NPCList.Cobalion1],
        },
    );
    TownList['Celestial Tower'] = new DungeonTown(
        'Celestial Tower',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 7)],
    );
    TownList['Reversal Mountain'] = new DungeonTown(
        'Reversal Mountain',
        Region.unova,
        UnovaSubRegions.Unova,
        [new GymBadgeRequirement(BadgeEnums.Jet)],
    );
    TownList['Seaside Cave'] = new DungeonTown(
        'Seaside Cave',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new RouteKillRequirement(10, Region.unova, 24),
            new TemporaryBattleRequirement('Plasma Shadow 1'),
            new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 14),
        ],
    );
    TownList['Plasma Frigate'] = new DungeonTown(
        'Plasma Frigate',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new OneFromManyRequirement([
                new MultiRequirement([
                    new GymBadgeRequirement(BadgeEnums.Wave),
                    new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 14),
                    new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 15, AchievementOption.less),
                ]),
                new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 16),
                new QuestLineCompletedRequirement('Hollow Truth and Ideals'),
            ]),
        ],
        [TemporaryBattleList['Colress 3'], TemporaryBattleList['Plasma Shadow 2'], TemporaryBattleList['Plasma Shadow 3'], TemporaryBattleList['Plasma Shadow 4']],
        {
            npcs: [NPCList.GiantChasmColress, NPCList.GiantChasmShadowTriad],
        },
    );
    TownList['Giant Chasm'] = new DungeonTown(
        'Giant Chasm',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new ClearDungeonRequirement(1, getDungeonIndex('Plasma Frigate')),
            new QuestLineStepCompletedRequirement('Hollow Truth and Ideals', 15),
        ],
        [TemporaryBattleList['Ghetsis 1'], TemporaryBattleList['Ghetsis 2'], TemporaryBattleList['Kyurem 2'], TemporaryBattleList['Kyurem 3'], TemporaryBattleList['Destiny Deoxys Rayquaza']],
        {
            npcs: [NPCList.Cobalion6, NPCList.Cobalion7, NPCList.Terrakion2, NPCList.Virizion3, NPCList.destinyGem, NPCList.destinyScientistChasm],
        },
    );
    TownList['Cave of Being'] = new DungeonTown(
        'Cave of Being',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 23)],
    );
    TownList['Abundant Shrine'] = new DungeonTown(
        'Abundant Shrine',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new RouteKillRequirement(10, Region.unova, 23),
            new RouteKillRequirement(10, Region.unova, 14),
            new ObtainedPokemonRequirement('Tornadus'),
            new ObtainedPokemonRequirement('Thundurus'),
        ],
    );
    TownList['Victory Road Unova'] = new DungeonTown(
        'Victory Road Unova',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 23)],
        [TemporaryBattleList['Terrakion 1']],
        {
            npcs: [NPCList.Terrakion1],
        },
    );
    TownList['Twist Mountain'] = new DungeonTown(
        'Twist Mountain',
        Region.unova,
        UnovaSubRegions.Unova,
        [new OneFromManyRequirement([
            new MultiRequirement([
                new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion),
                new RouteKillRequirement(10, Region.unova, 7),
            ]),
            new RouteKillRequirement(10, Region.unova, 8),
        ])],
        undefined,
        {
            npcs: [NPCList.IceRock],
        },
    );
    TownList['Dragonspiral Tower'] = new DungeonTown(
        'Dragonspiral Tower',
        Region.unova,
        UnovaSubRegions.Unova,
        [new OneFromManyRequirement([
            new ClearDungeonRequirement(1, getDungeonIndex('Twist Mountain')),
            new RouteKillRequirement(10, Region.unova, 8),
        ])],
    );
    TownList['Moor of Icirrus'] = new DungeonTown(
        'Moor of Icirrus',
        Region.unova,
        UnovaSubRegions.Unova,
        [
            new RouteKillRequirement(10, Region.unova, 8),
            new QuestLineStepCompletedRequirement('Swords of Justice', 2, AchievementOption.more),
        ],
        [TemporaryBattleList['Swords of Justice 1']],
        {
            npcs: [NPCList.Cobalion2, NPCList.Cobalion3, NPCList.Cobalion4],
        },
    );
    TownList['Pinwheel Forest'] = new DungeonTown(
        'Pinwheel Forest',
        Region.unova,
        UnovaSubRegions.Unova,
        [new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion)],
        [],
        {
            npcs: [NPCList.MossRock, NPCList.Virizion1, NPCList.Virizion2],
        },
    );
    TownList.Dreamyard = new DungeonTown(
        'Dreamyard',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 3)],
    );
    TownList['P2 Laboratory'] = new DungeonTown(
        'P2 Laboratory',
        Region.unova,
        UnovaSubRegions.Unova,
        [new RouteKillRequirement(10, Region.unova, 17)],
        [],
        {
            npcs: [NPCList.P2LaboratoryColress, NPCList.InvestigateP2, NPCList.AncientBugHunter3],
        },
    );

    //Kalos Shops
    const AquacordeTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
    ]);
    const SantaluneCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
        ItemList.Miracle_Chest,
    ]);
    const FriseurFurfrouShop = new Shop([
        ItemList['Furfrou (Debutante)'],
        ItemList['Furfrou (Diamond)'],
        ItemList['Furfrou (Matron)'],
        ItemList['Furfrou (Dandy)'],
        ItemList['Furfrou (Kabuki)'],
        ItemList['Furfrou (Pharaoh)'],
    //ItemList['Furfrou (Heart)'],
    ], 'Friseur Furfrou');
    const CamphrierTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xAttack,
        ItemList.MediumRestore,
        ItemList.Electric_egg,
        ItemList.Thunder_stone,
    ]);
    const AmbretteTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Water_egg,
        ItemList.Water_stone,
    ]);
    const CyllageCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Upgrade,
        ItemList.Prism_scale,
    ]);
    const DisguisedShop = new Shop([
        ItemList['Probably Not Pikachu'],
    ], 'Badly Disguised Shop', [new TemporaryBattleRequirement('Twerps')]);
    const GeosengeTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xClick,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
        ItemList.Kings_rock,
    ]);
    const ShalourCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Fighting_egg,
        ItemList.Linking_cord,
        ItemList.Metal_coat,
        ItemList.Key_stone,
    ]);
    const CoumarineCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.LargeRestore,
        ItemList.Grass_egg,
        ItemList.Leaf_stone,
        ItemList.Electirizer,
        ItemList.Magmarizer,
    ]);
    const LaverreCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xAttack,
        ItemList.Lucky_incense,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
        ItemList.Sachet,
        ItemList.Whipped_dream,
    ]);
    const DendemilleTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.Dowsing_machine,
        ItemList.Shiny_stone,
        ItemList.Dusk_stone,
        ItemList.Dawn_stone,
    ]);
    const AnistarCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Moon_stone,
        ItemList.Sun_stone,
        ItemList.Razor_claw,
        ItemList.Razor_fang,
    ]);
    const CouriwayTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Dragon_egg,
        ItemList.Dragon_scale,
    ]);
    const SnowbelleCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Protector,
        ItemList.Dubious_disc,
        ItemList.Reaper_cloth,
    ]);

    //Hoenn Flute Master
    const FurfrouGemTrader = new GemMasterShop(GemShops.FurfrouGemTrader, 'Furfrou Gem Trader');
    const KalosStoneSalesman = new GemMasterShop(GemShops.KalosStoneSalesman, 'Stone Emporium', [new TemporaryBattleRequirement('Kalos Stone Salesman')], true);
    //Kalos Towns

    TownList['Vaniville Town'] = new Town(
        'Vaniville Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new BulletinBoard(BulletinBoards.Kalos)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion)],
            npcs: [],
        },
    );
    TownList['Aquacorde Town'] = new Town(
        'Aquacorde Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [AquacordeTownShop],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 1)],
        },
    );
    TownList['Santalune City'] = new Town(
        'Santalune City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [SantaluneCityShop],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 3)],
            npcs: [NPCList.MysteryFan, NPCList.VivillonPhotobook, NPCList.SantaluneSageChen],
        },
    );
    TownList['Lumiose City'] = new Town(
        'Lumiose City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [TemporaryBattleList['Sycamore 1'], DepartmentStoreShop, FriseurFurfrouShop, KalosStoneSalesman, TemporaryBattleList['Team Flare Lysandre 1'], TemporaryBattleList['Team Flare Xerosic'], TemporaryBattleList.AZ, TemporaryBattleList.Merilyn, TemporaryBattleList['Grand Duchess Diantha'], TemporaryBattleList['Kalos Stone Salesman']],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 4)],
            npcs: [
                NPCList.ProfSycamore,
                NPCList.LumioseDexio,
                NPCList.LumioseEngineer,
                NPCList.Lysandre1,
                NPCList.Calem1,
                NPCList.Lysandre3,
                NPCList.Lysandre4,
                NPCList.AZ1,
                NPCList.BlueButton,
                NPCList.RedButton,
                NPCList.EternalFloetteGift,
                NPCList.KalosStoneSalesman1,
                NPCList.KalosStoneSalesman2,
            ],
        },
    );
    TownList['Camphrier Town'] = new Town(
        'Camphrier Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [CamphrierTownShop, new ShardTraderShop(ShardTraderLocations['Camphrier Town'])],
        {
            requirements: [new TemporaryBattleRequirement('Tierno 1')],
            npcs: [NPCList.CamphrierFlabébéEnthusiast],
        },
    );
    TownList['Parfum Palace'] = new Town(
        'Parfum Palace',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new ShardTraderShop(ShardTraderLocations['Parfum Palace'], 'Furfrou Shard Trader', true), FurfrouGemTrader],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 6)],
        },
    );
    TownList['Ambrette Town'] = new Town(
        'Ambrette Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [AmbretteTownShop, new ShardTraderShop(ShardTraderLocations['Ambrette Town']), new GenericTraderShop('FossilAmbretteFossilLab', 'Ambrette Fossil Lab')],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 8)],
            npcs: [NPCList.KalosFossilNpc1, NPCList.KalosFossilNpc3, NPCList.Calem2],
        },
    );
    TownList['Cyllage City'] = new Town(
        'Cyllage City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [CyllageCityShop, new ShardTraderShop(ShardTraderLocations['Cyllage City']), TemporaryBattleList['Marquis Grant']],
        {
            requirements: [new QuestLineStepCompletedRequirement('A Beautiful World', 5)],
            npcs: [NPCList.CyllageStoneCollector],
        },
    );
    TownList['Disguised Shop'] = new Town(
        'Disguised Shop',
        Region.kalos,
        KalosSubRegions.Kalos,
        [DisguisedShop, TemporaryBattleList.Twerps],
        {
            requirements: [
                new RouteKillRequirement(10, Region.kalos, 10),
            ],
            npcs: [NPCList.NotAsh],
            ignoreAreaStatus: true,
        },
    );
    TownList['Geosenge Town'] = new Town(
        'Geosenge Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [GeosengeTownShop, new ShardTraderShop(ShardTraderLocations['Geosenge Town']), new MoveToDungeon(DungeonList['Team Flare Secret HQ']), TemporaryBattleList['Team Flare Grunt 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 10)],
            npcs: [NPCList.TeamFlareGrunt1],
        },
    );
    TownList['Shalour City'] = new Town(
        'Shalour City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [ShalourCityShop, new ShardTraderShop(ShardTraderLocations['Shalour City']), TemporaryBattleList.Korrina, TemporaryBattleList.Riot, TemporaryBattleList['Millis and Argus Steel']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Reflection Cave'))],
            npcs: [NPCList.SharlourKorrina, NPCList.ExamineAegislash, NPCList.ThanksDiancie],
        },
    );
    TownList['Coumarine City'] = new Town(
        'Coumarine City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [CoumarineCityShop, new ShardTraderShop(ShardTraderLocations['Coumarine City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 12)],
            npcs: [NPCList.CoumarineBirdwatcher, NPCList.CoumarineElectricTrainer, NPCList.Diantha1, NPCList.Lysandre2],
        },
    );
    TownList['Laverre City'] = new Town(
        'Laverre City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [LaverreCityShop, new ShardTraderShop(ShardTraderLocations['Laverre City']), TemporaryBattleList['Hex Maniac Aster']],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 14)],
            npcs: [NPCList.LaverreFurisodeGirlKatherine, NPCList.LaverreGengariteAster1, NPCList.LaverreGengariteAster2, NPCList.LaverreMedichamite],
        },
    );
    TownList['Dendemille Town'] = new Town(
        'Dendemille Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [DendemilleTownShop, new ShardTraderShop(ShardTraderLocations['Dendemille Town'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 15)],
            npcs: [NPCList.DendemilleWolfLover, NPCList.DendemilleDogLover, NPCList.ProfessorSycamore1],
        },
    );
    TownList['Anistar City'] = new Town(
        'Anistar City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [AnistarCityShop, new ShardTraderShop(ShardTraderLocations['Anistar City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 17)],
            npcs: [NPCList.AnistarKalosRoamerNPC, NPCList.KalosTVNews],
        },
    );
    TownList['Couriway Town'] = new Town(
        'Couriway Town',
        Region.kalos,
        KalosSubRegions.Kalos,
        [TemporaryBattleList['Sycamore 2'], CouriwayTownShop, new ShardTraderShop(ShardTraderLocations['Couriway Town']), TemporaryBattleList['Team Flare Boss Lysandre 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.kalos, 18)],
            npcs: [NPCList.CouriwayOldGentlemanHarold],
        },
    );
    TownList['Snowbelle City'] = new Town(
        'Snowbelle City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [SnowbelleCityShop, new ShardTraderShop(ShardTraderLocations['Snowbelle City'])],
        {
            requirements: [new TemporaryBattleRequirement('Trevor')],
        },
    );
    TownList['Kiloude City'] = new Town(
        'Kiloude City',
        Region.kalos,
        KalosSubRegions.Kalos,
        [TemporaryBattleList['Calem 6']],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)],
            npcs: [NPCList.KiloudeConfusedHiker, NPCList.Baraz1, NPCList.Baraz2, NPCList.Baraz3, NPCList.Baraz4],
        },
    );
    TownList['Pokémon League Kalos'] = new Town(
        'Pokémon League Kalos',
        Region.kalos,
        KalosSubRegions.Kalos,
        [GymList['Elite Malva'], GymList['Elite Siebold'], GymList['Elite Wikstrom'], GymList['Elite Drasna'], GymList['Champion Diantha'], pokeLeagueShop()],
        {
            requirements: [
                new TemporaryBattleRequirement('Calem 5'),
                new ClearDungeonRequirement(1, getDungeonIndex('Victory Road Kalos')),
            ],
        },
    );
    TownList['Friend Safari'] = new Town(
        'Friend Safari',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new SafariTownContent('Enter Friend Safari')],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)],
            npcs: [NPCList.FriendlyAttendant, NPCList.BugCatcherScizor],
        },
    );

    //Kalos Dungeons
    TownList['Santalune Forest'] = new DungeonTown(
        'Santalune Forest',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 2)],
    );
    TownList['Connecting Cave'] = new DungeonTown(
        'Connecting Cave',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new TemporaryBattleRequirement('Trevor & Tierno')],
    );
    TownList['Glittering Cave'] = new DungeonTown(
        'Glittering Cave',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 9), new QuestLineStepCompletedRequirement('A Beautiful World', 2)],
        [TemporaryBattleList['Team Flare Grunt 1']],
        {
            npcs: [NPCList.FossilScientist, NPCList.KalosFossilNpc2],
        },
    );

    TownList['Reflection Cave'] = new DungeonTown(
        'Reflection Cave',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 11)],
        [],
        {
            npcs: [NPCList.Spelunker],
        },
    );
    //Tower of Mastery?
    TownList['Sea Spirit\'s Den'] = new DungeonTown(
        'Sea Spirit\'s Den',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 23)],
    );
    TownList['Poké Ball Factory'] = new DungeonTown(
        'Poké Ball Factory',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new GymBadgeRequirement(BadgeEnums.Fairy)],
        [],
        {
            npcs: [NPCList.PokéBallFactoryDirector],
        },
    );
    TownList['Kalos Power Plant'] = new DungeonTown(
        'Kalos Power Plant',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 13), new GymBadgeRequirement(BadgeEnums.Plant), new QuestLineStepCompletedRequirement('A Beautiful World', 10)],
    );
    TownList['Lost Hotel'] = new DungeonTown(
        'Lost Hotel',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 15)],
    );
    TownList['Frost Cavern'] = new DungeonTown(
        'Frost Cavern',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new QuestLineStepCompletedRequirement('A Beautiful World', 16)],
        undefined,
        {
            npcs: [NPCList.IceRock],
        },
    );
    TownList['Team Flare Secret HQ'] = new DungeonTown(
        'Team Flare Secret HQ',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new QuestLineStepCompletedRequirement('A Beautiful World', 24)],
        [TemporaryBattleList.Xerneas, TemporaryBattleList.Yveltal, TemporaryBattleList['Team Flare Boss Lysandre 1']],
        {
            npcs: [NPCList.TeamFlareLysandre1, NPCList.TeamFlareBossLysandre1, NPCList.XerneasAZ],
        },
    );
    TownList['Terminus Cave'] = new DungeonTown(
        'Terminus Cave',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 18)],
    );
    TownList['Pokémon Village'] = new DungeonTown(
        'Pokémon Village',
        Region.kalos,
        KalosSubRegions.Kalos,
        [new RouteKillRequirement(10, Region.kalos, 20)],
        [],
        {
            npcs: [NPCList.MossRock, NPCList.AnomalyMewtwo2, NPCList.AnomalyMewtwo3, NPCList.AnomalyMewtwo4],
        },
    );
    TownList['Victory Road Kalos'] = new DungeonTown(
        'Victory Road Kalos',
        Region.kalos,
        KalosSubRegions.Kalos,
        [
            new GymBadgeRequirement(BadgeEnums.Iceberg),
            new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.kalos, 21),
                new RouteKillRequirement(10, Region.kalos, 22),
            ]),
        ],
    );
    //Unknown Cave?

    //Alola Shops

    const IkiTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.SmallRestore,
    ]);
    const HauoliCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Token_collector,
        ItemList.Lucky_egg,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
        ItemList.Miracle_Chest,
        ItemList.Shiny_stone,
        ItemList.Dusk_stone,
        ItemList.Dawn_stone,
    ]);
    const HeaheaCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.xAttack,
        ItemList.MediumRestore,
        ItemList.Water_stone,
        ItemList.Kings_rock,
        ItemList.Metal_coat,
    ]);
    const PaniolaTownShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Lucky_egg,
        ItemList.Grass_egg,
        ItemList.Fire_egg,
        ItemList.Water_egg,
    ]);
    const RoadsideMotelShop = new Shop([
        ItemList.Beastball,
    ], 'Looker’s Exchange', [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 1),
    ]);
    const KonikoniCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
        ItemList.Fire_stone,
        ItemList.Linking_cord,
        ItemList.Soothe_bell,
    ]);
    const AetherParadiseShop = new Shop([
        ItemList.Upgrade,
        ItemList['Type: Null'],
    ]);
    const MalieCityShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.xClick,
        ItemList.LargeRestore,
        ItemList.Thunder_stone,
        ItemList.Electric_egg,
        ItemList.Electirizer,
        ItemList.Magmarizer,
    ]);
    const TapuVillageShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Lucky_egg,
        ItemList.Razor_claw,
        ItemList.Razor_fang,
        ItemList.Ice_stone,
    ]);
    const SeafolkVillageShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Token_collector,
        ItemList.Fighting_egg,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
        ItemList.Prism_scale,
        ItemList.Sachet,
        ItemList.Whipped_dream,
    ]);
    const ExeggutorIslandShop = new Shop([
        ItemList.Dragon_egg,
        ItemList.Leaf_stone,
        ItemList.Dragon_scale,
        ItemList.Protector,
        ItemList.Dubious_disc,
        ItemList.Reaper_cloth,
    ]);
    const AltaroftheSunneandMooneShop = new Shop([
        ItemList.Moon_stone,
        ItemList.Sun_stone,
        ItemList.Poipole,
    ]);
    const ATreeMaybeShop = new Shop([
        ItemList.Power_Bracer,
        ItemList.Key_stone,
    ]);
    //Silvally Typings Shops
    const BrookletHillShop = new Shop(
        [
            ItemList.Water_Memory_Silvally,
        ],
        'Lana\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 5, AchievementOption.more), new ItemOwnedRequirement('Water_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );
    const LushJungleShop = new Shop(
        [
            ItemList.Grass_Memory_Silvally,
        ],
        'Mallow\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 7, AchievementOption.more), new ItemOwnedRequirement('Grass_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );
    const WelaVolcanoParkShop = new Shop(
        [
            ItemList.Fire_Memory_Silvally,
        ],
        'Kiawe\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 9, AchievementOption.more), new ItemOwnedRequirement('Fire_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );
    const HokulaniObservatoryShop = new Shop(
        [
            ItemList.Electric_Memory_Silvally,
        ],
        'Sophocles\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 11, AchievementOption.more), new ItemOwnedRequirement('Electric_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );
    const MountLanakilaShop = new Shop(
        [
            ItemList.Ice_Memory_Silvally,
        ],
        'Veteran Aristo\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 13, AchievementOption.more), new ItemOwnedRequirement('Ice_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );
    const ExeggutorIslandHillShop = new Shop(
        [
            ItemList.Ground_Memory_Silvally,
        ],
        'Hapu\'s Trade',
        [
            new MultiRequirement([new QuestLineStepCompletedRequirement('Typing some Memories', 15, AchievementOption.more), new ItemOwnedRequirement('Ground_Memory_Silvally', 1, AchievementOption.less)]),
        ],
        true,
    );

    // Magikarp Jump Shops
    const MagikarpJumpGemTrade = new GemMasterShop(GemShops.MagikarpJumpGemTrader, 'Trade', [new GymBadgeRequirement(BadgeEnums.Heal_League)]);
    const MagikarpJumpShadySalesMan = new Shop([
        ItemList['Magikarp Blue Raindrops'],
        ItemList['Magikarp Saucy Violet'],
    ], 'Shady Salesman', [new GymBadgeRequirement(BadgeEnums.Master_League)]);

    //Alola Towns

    TownList['Iki Town Outskirts'] = new Town(
        'Iki Town Outskirts',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)],
            npcs: [NPCList.IkiOutskirtsMom],
        },
    );
    TownList['Iki Town'] = new Town(
        'Iki Town',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [IkiTownShop],
        {
            requirements: [new TemporaryBattleRequirement('Hau 1')],
            npcs: [NPCList.IkiKahuna, NPCList.SilvallyHala, NPCList.Lillie3],
        },
    );
    TownList['Professor Kukui\'s Lab'] = new Town(
        'Professor Kukui\'s Lab',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new BulletinBoard(BulletinBoards.Alola)],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 18)],
            npcs: [NPCList.ProfKukui, NPCList.RotomDexSun, NPCList.RotomDexMoon],
        },
    );
    TownList['Hau\'oli City'] = new Town(
        'Hau\'oli City',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [HauoliCityShop, new ShardTraderShop(ShardTraderLocations['Hau\'oli City']), TemporaryBattleList.Ilima],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Trainers\' School'))],
            npcs: [NPCList.NecrozmaLooker],
        },
    );
    TownList['Melemele Woods'] = new Town(
        'Melemele Woods',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new MoveToDungeon(DungeonList['Ruins of Conflict']), new MoveToDungeon(DungeonList['Verdant Cavern']), new MoveToDungeon(DungeonList['Melemele Meadow'])],
        {
            requirements: [new MultiRequirement([new RouteKillRequirement(10, Region.alola, 2), new TemporaryBattleRequirement('Skull 2')])],
            npcs: [NPCList.LagunaKahuna],
        },
    );
    TownList['Roadside Motel'] = new Town(
        'Roadside Motel',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [TemporaryBattleList.Anabel, TemporaryBattleList['Captain Mina UB'], TemporaryBattleList['Kahuna Nanu UB'], RoadsideMotelShop],
        {
            requirements: [new QuestLineStartedRequirement('Ultra Beast Hunt')],
            npcs: [
                NPCList.RoadsideMotelLooker1,
                NPCList.RoadsideMotelAnabel1,
                NPCList.RoadsideMotelLooker2,
                NPCList.RoadsideMotelAnabel2,
                NPCList.RoadsideMotelAnabel3,
                NPCList.RoadsideMotelMina,
                NPCList.RoadsideMotelNanu1,
                NPCList.RoadsideMotelNanu2,
                NPCList.RoadsideMotelAnabel4,
                NPCList.RoadsideMotelAnabel5,
            ],
        },
    );
    TownList['Heahea City'] = new Town(
        'Heahea City',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [TemporaryBattleList.Dexio, TemporaryBattleList.Sina, HeaheaCityShop, new ShardTraderShop(ShardTraderLocations['Heahea City']), new DockTownContent()],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Melemele_Stamp)],
            npcs: [NPCList.HeaheaCafeOwner, NPCList.HeaheaGentleman, NPCList.Lillie4, NPCList.LillieHeahea, NPCList.ProfBurnetAlola1, NPCList.ProfBurnetAlola2],
        },
    );
    TownList['Paniola Town'] = new Town(
        'Paniola Town',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [PaniolaTownShop, new ShardTraderShop(ShardTraderLocations['Paniola Town'])],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 4)],
            npcs: [NPCList.PaniolaTownActor],
        },
    );
    TownList['Royal Avenue'] = new Town(
        'Royal Avenue',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [TemporaryBattleList['Battle Royal'], DepartmentStoreShop, TemporaryBattleList['Molayne Steel Memory']],
        {
            requirements: [new TemporaryBattleRequirement('Skull 3')],
            npcs: [NPCList.RoyalAvenueSpectator, NPCList.MolayneSilvally],
        },
    );
    TownList['Konikoni City'] = new Town(
        'Konikoni City',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [KonikoniCityShop, new ShardTraderShop(ShardTraderLocations['Konikoni City'])],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 9)],
            npcs: [NPCList.KonikoniKahuna, NPCList.SilvallyOlivia],
        },
    );
    TownList['Aether Paradise'] = new Town(
        'Aether Paradise',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [
            TemporaryBattleList['Ultra Wormhole'],
            AetherParadiseShop,
            new ShardTraderShop(ShardTraderLocations['Aether Paradise']),
            new MoveToDungeon(DungeonList['Aether Foundation']),
            TemporaryBattleList['Faba Psychic Memory'],
        ],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Akala_Stamp)],
            npcs: [NPCList.AetherParadiseAlolaRoamerNPC, NPCList.FabaSilvally, NPCList.Lillie6, NPCList.Gladion1, NPCList.LillieSun, NPCList.LillieMoon],
        },
    );
    TownList['Malie City'] = new Town(
        'Malie City',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [MalieCityShop, new ShardTraderShop(ShardTraderLocations['Malie City']), new MoveToDungeon(DungeonList['Malie Garden']), new DockTownContent()],
        {
            requirements: [new TemporaryBattleRequirement('Ultra Wormhole')],
            npcs: [NPCList.MalieKahuna, NPCList.SilvallyNanu, NPCList.Lillie5, NPCList.LillieMalie, NPCList.HapuMalie],
        },
    );
    TownList['Tapu Village'] = new Town(
        'Tapu Village',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [TapuVillageShop, new ShardTraderShop(ShardTraderLocations['Tapu Village'])],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 13)],
            npcs: [NPCList.TapuWorker],
        },
    );
    TownList['Aether House'] = new Town(
        'Aether House',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [TemporaryBattleList['Skull 5'], TemporaryBattleList['Kahuna Nanu']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 13)],
            npcs: [NPCList.YungoosAetherHouse, NPCList.LillieAetherHouse],
        },
    );
    TownList['Seafolk Village'] = new Town(
        'Seafolk Village',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [SeafolkVillageShop, new ShardTraderShop(ShardTraderLocations['Seafolk Village']), new MoveToDungeon(DungeonList['Mina\'s Houseboat']), new DockTownContent(), TemporaryBattleList['Captain Mina']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Aether Foundation'))],
            npcs: [NPCList.SeafolkCaptain, NPCList.SeafolkCaptainMina, NPCList.SilvallyMina, NPCList.LillieSeafolkVillage],
        },
    );
    TownList['Exeggutor Island'] = new Town(
        'Exeggutor Island',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [ExeggutorIslandShop, new ShardTraderShop(ShardTraderLocations['Exeggutor Island']), new MoveToTown('Exeggutor Island Hill', undefined, false)],
        {
            requirements: [new QuestLineCompletedRequirement('Emissary of Light')],
        },
    );
    TownList['Altar of the Sunne and Moone'] = new Town(
        'Altar of the Sunne and Moone',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [TemporaryBattleList.Lusamine, TemporaryBattleList.Necrozma, TemporaryBattleList['Ultra Megalopolis'], TemporaryBattleList.Lillie, AltaroftheSunneandMooneShop, new ShardTraderShop(ShardTraderLocations['Altar of the Sunne and Moone'])],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Vast Poni Canyon'))],
            npcs: [NPCList.SunFlute, NPCList.MoonFlute, NPCList.LillieAltar1, NPCList.Lillie7, NPCList.HapuAltar, NPCList.PhycoAltar, NPCList.LillieAltar2, NPCList.ReconSquadAltar, NPCList.Lillie8],
        },
    );
    TownList['Pokémon League Alola'] = new Town(
        'Pokémon League Alola',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [GymList['Elite Molayne'], GymList['Elite Olivia'], GymList['Elite Acerola'], GymList['Elite Kahili'], GymList['Champion Hau'], pokeLeagueShop()],
        {
            requirements:[
                new ClearDungeonRequirement(1, getDungeonIndex('Mount Lanakila')),
            ],
            npcs: [NPCList.RotomDexPreChamp, NPCList.RotomDexChamp],
        },
    );
    TownList['A Tree Maybe'] = new Town(
        'A Tree Maybe',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [ATreeMaybeShop, TemporaryBattleList['Ryuki Dragon Memory']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 30)],
            npcs: [NPCList.BattleTreeRed, NPCList.BattleTreeBlue, NPCList.RyukiSilvally],
        },
    );

    // Magikarp Jump Towns
    TownList['Hoppy Town'] = new Town(
        'Hoppy Town',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [new DockTownContent(), new BulletinBoard(BulletinBoards.Hoppy), MagikarpJumpGemTrade],
        {
            requirements: [new QuestLineStartedRequirement('Magikarp Jump')],
            npcs: [
                NPCList.MayorKarp,
                NPCList.MagikarpJumpRoamerNPC,
                NPCList.HoppyManOfMystery,
                NPCList.DrSplash1,
                NPCList.DrSplash2,
                NPCList.DrSplash3,
                NPCList.DrSplash4,
                NPCList.DrSplash5,
                NPCList.FishPolice,
            ],
        },
    );
    TownList['Hoppy Town Fishing Pond'] = new Town(
        'Hoppy Town Fishing Pond',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [new SafariTownContent('Fishing Pond')],
        {
            requirements: [new QuestLineStartedRequirement('Magikarp Jump')],
            npcs: [],
        },
    );
    TownList['Friend League'] = new Town(
        'Friend League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 31)],
        },
    );
    TownList['Quick League'] = new Town(
        'Quick League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Koylee']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 32)],
        },
    );
    TownList['Heavy League'] = new Town(
        'Heavy League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Karpella'], TemporaryBattleList['Magikarp Jump Karpen']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 33)],
        },
    );
    TownList['Great League'] = new Town(
        'Great League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Tykarp'], TemporaryBattleList['Magikarp Jump Karpress']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 34)],
        },
    );
    TownList['Fast League'] = new Town(
        'Fast League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Karami'], TemporaryBattleList['Magikarp Jump Karson']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 35)],
        },
    );
    TownList['Luxury League'] = new Town(
        'Luxury League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Karpress 2'], TemporaryBattleList['Magikarp Jump Karpen 2'], TemporaryBattleList['Magikarp Jump Karbuck']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 36)],
        },
    );
    TownList['Heal League'] = new Town(
        'Heal League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Skyhopper'], TemporaryBattleList['Magikarp Jump Karpen 3'], TemporaryBattleList['Magikarp Jump Karpella 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 37)],
        },
    );
    TownList['Ultra League'] = new Town(
        'Ultra League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Karbuck 2'], TemporaryBattleList['Magikarp Jump Kareign'], TemporaryBattleList['Magikarp Jump Koylee 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 38)],
        },
    );
    TownList['Elite Four League'] = new Town(
        'Elite Four League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [GymList['E4 League'], TemporaryBattleList['Magikarp Jump Karpress 3'], TemporaryBattleList['Magikarp Jump Karpen 4'], TemporaryBattleList['Magikarp Jump Karpella 3']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 39)],
        },
    );
    TownList['Master League'] = new Town(
        'Master League',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [TemporaryBattleList['Magikarp Jump Skyhopper 2'], TemporaryBattleList['Magikarp Jump Tykarp 2']],
        {
            requirements: [new RouteKillRequirement(10, Region.alola, 40)],
        },
    );
    TownList['Magikarp\'s Eye'] = new Town(
        'Magikarp\'s Eye',
        Region.alola,
        AlolaSubRegions.MagikarpJump,
        [MagikarpJumpShadySalesMan],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Master_League)],
            npcs: [NPCList.MagikarpEyeShadySalesman],
            ignoreAreaStatus: true,
        },
    );


    //Alola Dungeons
    TownList['Trainers\' School'] = new DungeonTown(
        'Trainers\' School',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new RouteKillRequirement(10, Region.alola, 18)],
        undefined,
        { npcs: [NPCList.TrainerSchoolTeacher] },
    );
    TownList['Hau\'oli Cemetery'] = new DungeonTown(
        'Hau\'oli Cemetery',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new RouteKillRequirement(10, Region.alola, 2)],
        [TemporaryBattleList['Captain Ilima']],
    );
    TownList['Verdant Cavern'] = new DungeonTown(
        'Verdant Cavern',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new MultiRequirement([new RouteKillRequirement(10, Region.alola, 2), new TemporaryBattleRequirement('Skull 2')])],
        undefined,
        { npcs: [NPCList.VerdantCavernIlima] },
    );
    TownList['Melemele Meadow'] = new DungeonTown(
        'Melemele Meadow',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new RouteKillRequirement(10, Region.alola, 3)],
        [new MoveToTown('Seaward Cave', new ClearDungeonRequirement(1, getDungeonIndex('Melemele Meadow')), false)],
        { npcs: [NPCList.Lillie2, NPCList.LillieMelemeleMeadow1, NPCList.LillieMelemeleMeadow2] },
    );
    TownList['Seaward Cave'] = new DungeonTown(
        'Seaward Cave',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new ClearDungeonRequirement(1, getDungeonIndex('Melemele Meadow'))],
        [new MoveToTown('Melemele Meadow', undefined, false), TemporaryBattleList['Recon Squad 1']],
    );
    TownList['Ten Carat Hill'] = new DungeonTown(
        'Ten Carat Hill',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new GymBadgeRequirement(BadgeEnums.Melemele_Stamp)],
        [TemporaryBattleList['Kahili Flying Memory']],
        {
            npcs:[NPCList.KahiliSilvally],
        },
    );
    TownList['Pikachu Valley'] = new DungeonTown(
        'Pikachu Valley',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new RouteKillRequirement(10, Region.alola, 4)],
        undefined,
        {
            npcs: [NPCList.PikachuValleyPikachuGeneric, NPCList.PikachuValleyAlolaCap, NPCList.PikachuValleyPikachuWorldCap],
        },
    );
    TownList['Paniola Ranch'] = new DungeonTown(
        'Paniola Ranch',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new TemporaryBattleRequirement('Hau 4')],
    );
    TownList['Brooklet Hill'] = new DungeonTown(
        'Brooklet Hill',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new TemporaryBattleRequirement('Gladion 1')],
        [BrookletHillShop],
        {
            npcs: [NPCList.LanaSilvally1],
        },
    );
    TownList['Wela Volcano Park'] = new DungeonTown(
        'Wela Volcano Park',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new RouteKillRequirement(10, Region.alola, 7)],
        [WelaVolcanoParkShop, TemporaryBattleList['Captain Kiawe']],
        {
            npcs: [NPCList.KiaweSilvally1],
        },
    );
    TownList['Lush Jungle'] = new DungeonTown(
        'Lush Jungle',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new RouteKillRequirement(10, Region.alola, 8)],
        [LushJungleShop, TemporaryBattleList['Captain Mallow'], TemporaryBattleList['Captain Lana']],
        { npcs: [NPCList.MossRock, NPCList.MallowSilvally1] },
    );
    TownList['Diglett\'s Tunnel'] = new DungeonTown(
        'Diglett\'s Tunnel',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new QuestLineStepCompletedRequirement('Symbiotic Relations', 6)],
    );
    TownList['Memorial Hill'] = new DungeonTown(
        'Memorial Hill',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new RouteKillRequirement(10, Region.alola, 9)],
    );
    TownList['Malie Garden'] = new DungeonTown(
        'Malie Garden',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new TemporaryBattleRequirement('Hau 5')],
    );
    TownList['Hokulani Observatory'] = new DungeonTown(
        'Hokulani Observatory',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new RouteKillRequirement(10, Region.alola, 22)],
        [HokulaniObservatoryShop, TemporaryBattleList['Captain Sophocles'], TemporaryBattleList.Molayne],
        { npcs: [NPCList.SophoclesSilvally1] },
    );
    TownList['Thrifty Megamart'] = new DungeonTown(
        'Thrifty Megamart',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new MultiRequirement([new TemporaryBattleRequirement('Skull 5'), new RouteKillRequirement(10, Region.alola, 14)])],
        [TemporaryBattleList['Acerola Ghost Memory']],
        { npcs: [NPCList.AcerolaSilvally] },
    );
    TownList['Ula\'ula Meadow'] = new DungeonTown(
        'Ula\'ula Meadow',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new RouteKillRequirement(10, Region.alola, 16)],
    );
    TownList['Po Town'] = new DungeonTown(
        'Po Town',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new RouteKillRequirement(10, Region.alola, 17)],
        [TemporaryBattleList['Guzma Bug Memory']],
        { npcs: [NPCList.PoTownNanu, NPCList.PoTownHomeowner, NPCList.GuzmaSilvally] },
    );
    TownList['Aether Foundation'] = new DungeonTown(
        'Aether Foundation',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new GymBadgeRequirement(BadgeEnums.Ula_Ula_Stamp)],
        [
            new GemMasterShop(GemShops.SilvallyTrader, 'Memory Replicator', [new QuestLineStepCompletedRequirement('Typing some Memories', 3)], true),
            TemporaryBattleList['Aether Branch Chief Faba'],
            TemporaryBattleList['Team Aqua Leader Archie'],
            TemporaryBattleList['Team Magma Leader Maxie'],
            TemporaryBattleList['Team Galactic Leader Cyrus'],
            TemporaryBattleList['Team Flare Leader Lysandre'],
            TemporaryBattleList['Team Plasma Leader Ghetsis'],
            TemporaryBattleList['Team Rainbow Leader Giovanni'],
        ],
        {
            npcs: [
                NPCList.HauAether,
                NPCList.GladionAether,
                NPCList.LillieAether,
                NPCList.SilvallyGladion1,
                NPCList.SilvallyGladion2,
                NPCList.SilvallyGladion3,
                NPCList.SilvallyGladion4,
                NPCList.SilvallyGladion2Hints,
                NPCList.SilvallyGladion3Hints,
            ],
        },
    );
    TownList['Exeggutor Island Hill'] = new DungeonTown(
        'Exeggutor Island Hill',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [new QuestLineStepCompletedRequirement('Emissary of Light', 1)],
        [ExeggutorIslandHillShop, TemporaryBattleList['Exeggutor Tree']],
        { npcs: [NPCList.LillieExeggutorIsland, NPCList.HapuSilvally1] },
    );
    TownList['Vast Poni Canyon'] = new DungeonTown(
        'Vast Poni Canyon',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [new QuestLineStepCompletedRequirement('Emissary of Light', 3)],
        [
            new AccessGym(GymList['Exeggutor Island'], new MultiRequirement([new TemporaryBattleRequirement('Recon Squad 3'), new QuestLineStepCompletedRequirement('Emissary of Light', 4, AchievementOption.less)])),
            TemporaryBattleList['Recon Squad 3'],
            TemporaryBattleList['Plumeria Poison Memory'],
        ],
        { npcs: [NPCList.HapuCanyon, NPCList.PlumeriaSilvally] },
    );
    TownList['Mina\'s Houseboat'] = new DungeonTown(
        'Mina\'s Houseboat',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [new QuestLineStepCompletedRequirement('Eater of Light', 2)],
    );
    TownList['Mount Lanakila'] = new DungeonTown(
        'Mount Lanakila',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new TemporaryBattleRequirement('Gladion 3')],
        [MountLanakilaShop],
        {
            npcs: [NPCList.IceRock, NPCList.LanakilaColress, NPCList.VeteranSilvally1],
        },
    );
    TownList['Lake of the Sunne and Moone'] = new DungeonTown(
        'Lake of the Sunne and Moone',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new GymBadgeRequirement(BadgeEnums.Champion_Stamp)],
    );
    TownList['Ruins of Conflict'] = new DungeonTown(
        'Ruins of Conflict',
        Region.alola,
        AlolaSubRegions.MelemeleIsland,
        [new QuestLineStartedRequirement('Welcome to Paradise, Cousin!')],
        [TemporaryBattleList['Melemele Spearow']],
        {
            npcs: [NPCList.Lillie1, NPCList.LillieMahaloTrail1, NPCList.LillieMahaloTrail2],
        },
    );
    TownList['Ruins of Life'] = new DungeonTown(
        'Ruins of Life',
        Region.alola,
        AlolaSubRegions.AkalaIsland,
        [new TemporaryBattleRequirement('Plumeria 1')],
        [new AccessGym(GymList['Konikoni City'], new QuestLineStepCompletedRequirement('Symbiotic Relations', 8, AchievementOption.less))],
        {
            npcs: [NPCList.LillieRuinsOfLife],
        },
    );
    TownList['Ruins of Abundance'] = new DungeonTown(
        'Ruins of Abundance',
        Region.alola,
        AlolaSubRegions.UlaulaIsland,
        [new RouteKillRequirement(10, Region.alola, 23)],
    );
    TownList['Ruins of Hope'] = new DungeonTown(
        'Ruins of Hope',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [new RouteKillRequirement(10, Region.alola, 26)],
        undefined,
        {
            npcs: [NPCList.HapuHope],
        },
    );
    TownList['Poni Meadow'] = new DungeonTown(
        'Poni Meadow',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [new RouteKillRequirement(10, Region.alola, 28)],
    );
    TownList['Resolution Cave'] = new DungeonTown(
        'Resolution Cave',
        Region.alola,
        AlolaSubRegions.PoniIsland,
        [
            new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 17),
        ],
    );

    //Galar Shops
    const PostwickShop = new Shop([
        ItemList.Pokeball,
    ]);
    const WedgehurstShop = new Shop([
        ItemList.Pokeball,
        ItemList.Mystery_egg,
        ItemList.Wonder_Chest,
        ItemList.Miracle_Chest,
    ]);
    const TurffieldShop = new Shop([
        ItemList.Pokeball,
        ItemList.Grass_egg,
        ItemList.Sweet_apple,
        ItemList.Tart_apple,
        ItemList.Leaf_stone,
        ItemList.Sun_stone,
    ]);
    const HulburyShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Water_egg,
        ItemList.Water_stone,
        ItemList.Kings_rock,
        ItemList.Prism_scale,
        ItemList.Deepsea_tooth,
        ItemList.Deepsea_scale,
    ]);
    const MotostokeShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Fire_egg,
        ItemList.Fire_stone,
        ItemList.Linking_cord,
        ItemList.Magmarizer,
    ]);
    const HammerlockeShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Event_calendar,
        ItemList.Dragon_egg,
        ItemList.Metal_coat,
        ItemList.Upgrade,
        ItemList.Dragon_scale,
    ]);
    const StowonSideShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Fighting_egg,
        ItemList.Soothe_bell,
        ItemList.Dawn_stone,
        ItemList.Dubious_disc,
        ItemList.Reaper_cloth,
    ]);
    const GlimwoodTangleShop = new Shop([
        ItemList['Zarude (Dada)'],
    ], 'Zarude Village', [new QuestLineCompletedRequirement('Secrets of the Jungle')]);
    const BallonleaShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Cracked_pot,
        ItemList.Moon_stone,
        ItemList.Shiny_stone,
        ItemList.Sachet,
        ItemList.Whipped_dream,
    ]);
    const CirchesterShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Razor_claw,
        ItemList.Razor_fang,
        ItemList.Protector,
        ItemList.Ice_stone,
    ]);
    const SpikemuthShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Electric_egg,
        ItemList.Thunder_stone,
        ItemList.Dusk_stone,
        ItemList.Electirizer,
    ]);
    const WyndonShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.SmallRestore,
        ItemList.MediumRestore,
        ItemList.LargeRestore,
        ItemList.xAttack,
        ItemList.xClick,
        ItemList.Lucky_egg,
        ItemList.Token_collector,
        ItemList.Dowsing_machine,
        ItemList.Lucky_incense,
    ]);
    const MasterDojoShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Galarica_cuff,
        ItemList.Galarica_wreath,
    ]);
    const FreezingtonShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
    ]);

    //Galar Towns
    TownList.Postwick = new Town(
        'Postwick',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [new BulletinBoard(BulletinBoards.Galar), PostwickShop],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Champion_Stamp)],
            npcs: [NPCList.PostwickMum, NPCList.MagearnaMysteryGift],
        },
    );
    TownList['Slumbering Weald'] = new Town(
        'Slumbering Weald',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [TemporaryBattleList.Mirages, new MoveToDungeon(DungeonList['Slumbering Weald Shrine'])],
        {
            requirements: [new TemporaryBattleRequirement('Hop 1')],
        },
    );
    TownList.Wedgehurst = new Town(
        'Wedgehurst',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [TemporaryBattleList['Sordward & Shielbert'], WedgehurstShop],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 1)],
            npcs: [NPCList.WedgehurstRailStaff, NPCList.SouthGalarRoamerNPC, NPCList.SordwardShielbert2],
        },
    );
    TownList['Professor Magnolia\'s House'] = new Town(
        'Professor Magnolia\'s House',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 2)],
            npcs: [NPCList.ProfMagnolia, NPCList.AssistantHenry],
        },
    );
    TownList.Motostoke = new Town(
        'Motostoke',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [TemporaryBattleList['Marnie 1'], TemporaryBattleList['Rampaging Torkoal'], MotostokeShop, new ShardTraderShop(ShardTraderLocations.Motostoke), new BattleCafe()],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 6)],
            npcs: [NPCList.BattleCafeMaster, NPCList.MotostokeArtist],
        },
    );
    TownList.Turffield = new Town(
        'Turffield',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [TemporaryBattleList['Rampaging Tsareena'], TurffieldShop, new ShardTraderShop(ShardTraderLocations.Turffield)],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 13)],
            npcs: [NPCList.TurffieldCook],
        },
    );
    TownList.Hulbury = new Town(
        'Hulbury',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [TemporaryBattleList['Rampaging Gyarados'], HulburyShop, new ShardTraderShop(ShardTraderLocations.Hulbury)],
        {
            requirements: [new TemporaryBattleRequirement('Hop 4')],
            npcs: [NPCList.Meteorologist],
        },
    );
    TownList['Stow-on-Side'] = new Town(
        'Stow-on-Side',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [TemporaryBattleList['Rampaging Conkeldurr'], TemporaryBattleList['Rampaging Dusknoir'], GymList['Stow-on-Side1'], GymList['Stow-on-Side2'], StowonSideShop, new ShardTraderShop(ShardTraderLocations['Stow-on-Side']), new GenericTraderShop('FossilMasterGalarRoute6', 'Cara Liss')],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 23)],
            npcs: [NPCList.AncientMural1, NPCList.AncientMural2, NPCList.StowonSideSonia, NPCList.Archaeologist],
        },
    );
    TownList.Ballonlea = new Town(
        'Ballonlea',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [TemporaryBattleList['Gym Leader Bede'], BallonleaShop, new ShardTraderShop(ShardTraderLocations.Ballonlea)],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Glimwood Tangle'))],
        },
    );

    TownList.Hammerlocke = new Town(
        'Hammerlocke',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [TemporaryBattleList['Rampaging Haxorus'], new MoveToDungeon(DungeonList['Energy Plant']), HammerlockeShop, new ShardTraderShop(ShardTraderLocations.Hammerlocke), new BattleCafe()],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 22)],
            npcs: [NPCList.HammerlockeHiker],
        },
    );

    TownList.Circhester = new Town(
        'Circhester',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [TemporaryBattleList['Rampaging Gigalith'], TemporaryBattleList['Rampaging Froslass'], GymList.Circhester1, GymList.Circhester2, CirchesterShop, new ShardTraderShop(ShardTraderLocations.Circhester)],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 26)],
            npcs: [NPCList.HerosBath, NPCList.CirchesterHop, NPCList.CirchesterSonia, NPCList.CirchesterGuitarist],
        },
    );
    TownList.Spikemuth = new Town(
        'Spikemuth',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [TemporaryBattleList['Gym Leader Marnie'], SpikemuthShop, new ShardTraderShop(ShardTraderLocations.Spikemuth), new DockTownContent()],
        {
            requirements: [new TemporaryBattleRequirement('Marnie 2')],
            npcs: [NPCList.TeamYellGrunts],
        },
    );
    TownList.Wyndon = new Town(
        'Wyndon',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [WyndonShop, new MoveToDungeon(DungeonList['Rose Tower']), new BattleCafe()],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 32)],
            npcs: [NPCList.WyndonBattleCafeRichard],
        },
    );
    TownList['Wyndon Stadium'] = new Town(
        'Wyndon Stadium',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [GymList['Elite Trainer Marnie'], GymList['Elite Gym Leader Bede'], GymList['Elite Trainer Hop'], GymList['Champion Leon'], pokeLeagueShop()],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 32)],
            npcs: [NPCList.RoseBroadcast, NPCList.WyndonHop, NPCList.Leon],
        },
    );

    //Isle of Armor Towns
    TownList['Armor Station'] = new Town(
        'Armor Station',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
        },
    );
    TownList['Master Dojo'] = new Town(
        'Master Dojo',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [new BulletinBoard(BulletinBoards.Armor), TemporaryBattleList.Mustard, TemporaryBattleList.Kubfu, MasterDojoShop, new ShardTraderShop(ShardTraderLocations['Master Dojo']), new DockTownContent()],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 33)],
            npcs: [
                NPCList.Mustard1,
                NPCList.Mustard2,
                NPCList.Mustard3,
                NPCList.Mustard4,
                NPCList.Mustard5,
                NPCList.Klara2,
                NPCList.Avery2,
                NPCList.Mustard6,
                NPCList.Mustard7,
                NPCList.Mustard8,
                NPCList.Mustard9,
                NPCList.JungleAsh1,
                NPCList.JungleAsh2,
                NPCList.IsleofArmorRoamerNPC,
            ],
        },
    );
    TownList['Master Dojo Battle Court'] = new Town(
        'Master Dojo Battle Court',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [GymList['Elite Gym Leader Klara'], GymList['Elite Gym Leader Avery'], GymList['Elite Dojo Matron Honey'], GymList['Elite Dojo Master Mustard']],
        {
            requirements: [new QuestLineCompletedRequirement('The Dojo\'s Armor')],
        },
    );

    //Crown Tundra Towns
    TownList['Crown Tundra Station'] = new Town(
        'Crown Tundra Station',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new DockTownContent(), TemporaryBattleList.Peony],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
        },
    );
    TownList.Freezington = new Town(
        'Freezington',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new BulletinBoard(BulletinBoards.Crown), GymList['Elite Trainer Peony'], TemporaryBattleList.Calyrex, TemporaryBattleList.Glastrier, TemporaryBattleList.Spectrier, FreezingtonShop],
        {
            requirements: [new RouteKillRequirement(10, Region.galar, 46)],
            npcs: [
                NPCList.CrownPeony1,
                NPCList.Calyrex1,
                NPCList.Calyrex2,
                NPCList.Calyrex3,
                NPCList.CrownPeony2,
                NPCList.BirdPeony1,
                NPCList.BirdPeony2,
                NPCList.BirdPeony3,
                NPCList.BirdPeony4,
                NPCList.GolemPeony1,
                NPCList.GolemPeony2,
                NPCList.GolemPeony3,
                NPCList.GolemPeony4,
                NPCList.GolemPeony5,
                NPCList.GolemPeony6,
                NPCList.PeonyComplete,
                NPCList.Peonia1,
                NPCList.CrownTundraRoamerNPC,
            ],
        },
    );


    //Galar Dungeons
    TownList['Slumbering Weald Shrine'] = new DungeonTown(
        'Slumbering Weald Shrine',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [new QuestLineStepCompletedRequirement('The Darkest Day', 12)],
        [TemporaryBattleList['Hop 8'], TemporaryBattleList['Sordward 1'], TemporaryBattleList['Shielbert 1']],
        {
            npcs: [NPCList.SlumberingHop1, NPCList.SlumberingHop2, NPCList.SordwardShielbert1],
        },
    );
    TownList['Galar Mine'] = new DungeonTown(
        'Galar Mine',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [new RouteKillRequirement(10, Region.galar, 12)],
        [TemporaryBattleList['Bede 1']],
    );
    TownList['Galar Mine No. 2'] = new DungeonTown(
        'Galar Mine No. 2',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [new GymBadgeRequirement(BadgeEnums.Galar_Water)],
        [TemporaryBattleList['Bede 2']],
    );
    TownList['Glimwood Tangle'] = new DungeonTown(
        'Glimwood Tangle',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [new QuestLineStepCompletedRequirement('The Darkest Day', 2)],
        [TemporaryBattleList['Zarude Tribe 1'], TemporaryBattleList['Zarude Tribe 2'], TemporaryBattleList['Zarude Tribe 3'], TemporaryBattleList['Zarude (Dada)'], TemporaryBattleList['Flowering Celebi'], GlimwoodTangleShop],
        {
            npcs: [NPCList.JungleKoko1, NPCList.JungleKoko2, NPCList.JungleKoko3, NPCList.JungleKoko4, NPCList.JungleKoko5, NPCList.JungleAsh3, NPCList.JungleKoko6],
        },
    );
    TownList['Rose Tower'] = new DungeonTown(
        'Rose Tower',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [new GymBadgeRequirement(BadgeEnums.Elite_Hop)],
    );
    TownList['Energy Plant'] = new DungeonTown(
        'Energy Plant',
        Region.galar,
        GalarSubRegions.NorthGalar,
        [new QuestLineStepCompletedRequirement('The Darkest Day', 14)],
        [TemporaryBattleList.Eternatus, TemporaryBattleList['Sordward 2'], TemporaryBattleList['Shielbert 2'], TemporaryBattleList['Rampaging Zacian'], TemporaryBattleList['Rampaging Zamazenta'], TemporaryBattleList['The Darkest Day'], TemporaryBattleList['Eternamax Eternatus']],
        {
            npcs: [
                NPCList.EnergyPlantRose,
                NPCList.EternatusCatch,
                NPCList.SordwardShielbert3,
                NPCList.SordwardShielbert4,
                NPCList.Piers,
                NPCList.EnergyPlantHop,
                NPCList.GigantamaxLeon1,
                NPCList.GigantamaxLeon2,
            ],
        },
    );
    TownList['Dusty Bowl'] = new DungeonTown(
        'Dusty Bowl',
        Region.galar,
        GalarSubRegions.SouthGalar,
        [new RouteKillRequirement(10, Region.galar, 18)],
    );
    TownList['Courageous Cavern'] = new DungeonTown(
        'Courageous Cavern',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [new RouteKillRequirement(10, Region.galar, 33)],
    );
    TownList['Brawlers\' Cave'] = new DungeonTown(
        'Brawlers\' Cave',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [
            new OneFromManyRequirement([
                new RouteKillRequirement(10, Region.galar, 34),
                new RouteKillRequirement(10, Region.galar, 40),
            ]),
        ],
    );
    TownList['Warm-Up Tunnel'] = new DungeonTown(
        'Warm-Up Tunnel',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [new RouteKillRequirement(10, Region.galar, 38)],
        [TemporaryBattleList['Klara 2'], TemporaryBattleList['Avery 2']],
        {
            npcs: [NPCList.Klara1, NPCList.Avery1],
        },
    );
    TownList['Tower of Darkness'] = new DungeonTown(
        'Tower of Darkness',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [
            new MultiRequirement([
                new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 17),
                new RouteKillRequirement(10, Region.galar, 40),
            ]),
        ],
        [],
        {
            npcs: [NPCList.Mustard10],
        },
    );
    TownList['Tower of Waters'] = new DungeonTown(
        'Tower of Waters',
        Region.galar,
        GalarSubRegions.IsleofArmor,
        [
            new MultiRequirement([
                new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 17),
                new RouteKillRequirement(10, Region.galar, 36),
            ]),
        ],
        [],
        {
            npcs: [NPCList.Mustard10],
        },
    );
    TownList['Roaring-Sea Caves'] = new DungeonTown(
        'Roaring-Sea Caves',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 50)],
        [],
        {
            npcs: [NPCList.GalarFossilHiker],
        },
    );
    TownList['Rock Peak Ruins'] = new DungeonTown(
        'Rock Peak Ruins',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 48)],
    );
    TownList['Iron Ruins'] = new DungeonTown(
        'Iron Ruins',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 48)],
    );
    TownList['Iceberg Ruins'] = new DungeonTown(
        'Iceberg Ruins',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 54)],
    );
    TownList['Split-Decision Ruins'] = new DungeonTown(
        'Split-Decision Ruins',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new QuestLineStepCompletedRequirement('The Ancient Golems', 8)],
    );
    TownList['Lakeside Cave'] = new DungeonTown(
        'Lakeside Cave',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 53)],
    );
    TownList['Dyna Tree Hill'] = new DungeonTown(
        'Dyna Tree Hill',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 53)],
    );
    TownList['Tunnel to the Top'] = new DungeonTown(
        'Tunnel to the Top',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 54)],
    );
    TownList['Crown Shrine'] = new DungeonTown(
        'Crown Shrine',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new RouteKillRequirement(10, Region.galar, 55)],
        [],
        {
            npcs: [NPCList.Calyrex4, NPCList.Calyrex5, NPCList.CrownShrineExplorer],
        },
    );
    TownList['Max Lair'] = new DungeonTown(
        'Max Lair',
        Region.galar,
        GalarSubRegions.CrownTundra,
        [new QuestLineStepCompletedRequirement('The Lair of Giants', 0)],
        [],
        {
            npcs: [NPCList.Peonia2, NPCList.Peonia3, NPCList.Peonia4, NPCList.MaxLairScientist],
        },
    );

    //Hisui shops
    const JubilifeVillageShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Black_augurite,
    ]);

    //Hisui Towns
    TownList['Prelude Beach'] = new Town(
        'Prelude Beach',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['The Galaxy Team\'s Kamado']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Jubilife Village'] = new Town(
        'Jubilife Village',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [JubilifeVillageShop, new ShardTraderShop(ShardTraderLocations['Jubilife Village']), TemporaryBattleList['Volo 1'], TemporaryBattleList['Akari 1'], TemporaryBattleList['Akari 2'], TemporaryBattleList['Adaman 1']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Galaxy Hall'] = new Town(
        'Galaxy Hall',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new BulletinBoard(BulletinBoards.Hisui)],
        {
            requirements: [new DevelopmentRequirement()],
            npcs: [NPCList.ForcesCogita1],
        },
    );
    TownList['Fieldlands Camp'] = new Town(
        'Fieldlands Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Warden Mai']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Heights Camp'] = new Town(
        'Heights Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Alpha Kricketune']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Grandtree Arena'] = new Town(
        'Grandtree Arena',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Warden Lian'], TemporaryBattleList['Irida 1'], TemporaryBattleList['Lord of the Woods: Kleavor']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Mirelands Camp'] = new Town(
        'Mirelands Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Coin 1']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Bogbound Camp'] = new Town(
        'Bogbound Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Sludge Mound'] = new Town(
        'Sludge Mound',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList.Ursaluna],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Diamond Settlement'] = new Town(
        'Diamond Settlement',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Brava Arena'] = new Town(
        'Brava Arena',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Lady of the Ridge: Lilligant']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Beachside Camp'] = new Town(
        'Beachside Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Irida 2']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Coastlands Camp'] = new Town(
        'Coastlands Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Iscan\'s Cabin'] = new Town(
        'Iscan\'s Cabin',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Molten Arena'] = new Town(
        'Molten Arena',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList.Clover, TemporaryBattleList['Coin 2'], TemporaryBattleList['Charm 1'], TemporaryBattleList['Lord of the Isles: Arcanine']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Firespit Island'))],
        },
    );
    TownList['Highlands Camp'] = new Town(
        'Highlands Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Mountain Camp'] = new Town(
        'Mountain Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Summit Camp'] = new Town(
        'Summit Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Moonview Arena'] = new Town(
        'Moonview Arena',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Melli 2'], TemporaryBattleList['Lord of the Hollow: Electrode']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Snowfields Camp'] = new Town(
        'Snowfields Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Icepeak Camp'] = new Town(
        'Icepeak Camp',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Pearl Settlement'] = new Town(
        'Pearl Settlement',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Irida 3']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Icepeak Arena'] = new Town(
        'Icepeak Arena',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList['Lord of the Tundra: Avalugg']],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );
    TownList['Ancient Retreat'] = new Town(
        'Ancient Retreat',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [],
        {
            requirements: [new DevelopmentRequirement()],
            npcs: [NPCList.ForcesCogita2, NPCList.ForcesCogita3],
        },
    );
    TownList['Stone Portal'] = new Town(
        'Stone Portal',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [TemporaryBattleList.Beni],
        {
            requirements: [new DevelopmentRequirement()],
        },
    );

    //Hisui Dungeons
    TownList['Floaro Gardens'] = new DungeonTown(
        'Floaro Gardens',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Oreburrow Tunnel'] = new DungeonTown(
        'Oreburrow Tunnel',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList.Heartwood = new DungeonTown(
        'Heartwood',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        undefined,
        {
            npcs: [NPCList.MossRock],
        },
    );
    TownList['Ancient Solaceon Ruins'] = new DungeonTown(
        'Ancient Solaceon Ruins',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Volo 2']],
    );
    TownList['Shrouded Ruins'] = new DungeonTown(
        'Shrouded Ruins',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Veilstone Cape'] = new DungeonTown(
        'Veilstone Cape',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Firespit Island'] = new DungeonTown(
        'Firespit Island',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [new MoveToTown('Molten Arena')],
    );
    TownList['Ancient Wayward Cave'] = new DungeonTown(
        'Ancient Wayward Cave',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Melli 1']],
    );
    TownList['Ancient Quarry'] = new DungeonTown(
        'Ancient Quarry',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Primeval Grotto'] = new DungeonTown(
        'Primeval Grotto',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Charm 2']],
    );
    TownList['Clamberclaw Cliffs'] = new DungeonTown(
        'Clamberclaw Cliffs',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Warden Ingo']],
    );
    TownList['Celestica Ruins'] = new DungeonTown(
        'Celestica Ruins',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Sacred Plaza'] = new DungeonTown(
        'Sacred Plaza',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Avalugg\'s Legacy'] = new DungeonTown(
        'Avalugg\'s Legacy',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Warden Gaeric']],
    );
    TownList['Ice Column Chamber'] = new DungeonTown(
        'Ice Column Chamber',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Icepeak Cavern'] = new DungeonTown(
        'Icepeak Cavern',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        undefined,
        {
            npcs: [NPCList.IceRock],
        },
    );
    TownList['Ancient Snowpoint Temple'] = new DungeonTown(
        'Ancient Snowpoint Temple',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Warden Sabi'], TemporaryBattleList['Hisuian Braviary']],
    );
    TownList['Seaside Hollow'] = new DungeonTown(
        'Seaside Hollow',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [
            new DevelopmentRequirement(),
            new ObtainedPokemonRequirement('Overqwil'),
        ],
    );
    TownList['Ancient Lake Verity'] = new DungeonTown(
        'Ancient Lake Verity',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Ancient Lake Valor'] = new DungeonTown(
        'Ancient Lake Valor',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Adaman 2']],
    );
    TownList['Ancient Lake Acuity'] = new DungeonTown(
        'Ancient Lake Acuity',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );
    TownList['Temple of Sinnoh'] = new DungeonTown(
        'Temple of Sinnoh',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
        [TemporaryBattleList['Dialga (Origin)'], TemporaryBattleList['Palkia (Origin)'], TemporaryBattleList['Volo 3'], TemporaryBattleList.Arceus],
    );
    TownList['Turnback Cave'] = new DungeonTown(
        'Turnback Cave',
        Region.hisui,
        HisuiSubRegions.Hisui,
        [new DevelopmentRequirement()],
    );

    //Paldea Shops
    const ZapapicoShop = new Shop([
        ItemList.Pokeball,
        ItemList.Greatball,
        ItemList.Ultraball,
        ItemList.Auspicious_armor,
        ItemList.Malicious_armor,
    ]);

    //Paldea Towns
    TownList['Cabo Poco'] = new Town(
        'Cabo Poco',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new BulletinBoard(BulletinBoards.Paldea)],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Azure)],
        },
    );
    TownList['Poco Path Lighthouse'] = new Town(
        'Poco Path Lighthouse',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [GymList['Pokémon Trainer Arven']],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Los Platos'] = new Town(
        'Los Platos',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Mesagoza = new Town(
        'Mesagoza',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [GymList['Champion Nemona']],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    //Dunno what do about Naranja and Uva Academy's names. For now I've merged them.
    TownList['Naranjuva Academy'] = new Town(
        'Naranjuva Academy',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [GymList['Director Clavell'], GymList['Penny of Team Star']],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
            npcs: [NPCList.PaldeaRoamerNPC],
        },
    );
    TownList.Cortondo = new Town(
        'Cortondo',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Artazon = new Town(
        'Artazon',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Levincia = new Town(
        'Levincia',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Alfornada = new Town(
        'Alfornada',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Cascarrafa = new Town(
        'Cascarrafa',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Porto Marinada'] = new Town(
        'Porto Marinada',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Medali = new Town(
        'Medali',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Zapapico = new Town(
        'Zapapico',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [ZapapicoShop],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList.Montenevera = new Town(
        'Montenevera',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Pokémon League Paldea'] = new Town(
        'Pokémon League Paldea',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [GymList['Elite Rika'], GymList['Elite Poppy'], GymList['Elite Larry'], GymList['Elite Hassel'], GymList['Top Champion Geeta'], pokeLeagueShop()],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Segin Squad\'s Base'] = new Town(
        'Segin Squad\'s Base',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Schedar Squad\'s Base'] = new Town(
        'Schedar Squad\'s Base',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Navi Squad\'s Base'] = new Town(
        'Navi Squad\'s Base',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Ruchbah Squad\'s Base'] = new Town(
        'Ruchbah Squad\'s Base',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Caph Squad\'s Base'] = new Town(
        'Caph Squad\'s Base',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Zero Gate'] = new Town(
        'Zero Gate',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [],
        {
            requirements: [new RouteKillRequirement(10, Region.paldea, 2)],
        },
    );
    TownList['Zero Lab'] = new Town(
        'Zero Lab',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [GymList['AI Sada'], GymList['AI Turo'], TemporaryBattleList['Paradise Protection Protocol']],
        {
            requirements: [new ClearDungeonRequirement(1, getDungeonIndex('Area Zero Depths'))],
        },
    );

    // Paldea Dungeons
    TownList['Inlet Grotto'] = new DungeonTown(
        'Inlet Grotto',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Glaseado Mountain'] = new DungeonTown(
        'Glaseado Mountain',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Grasswither Shrine'] = new DungeonTown(
        'Grasswither Shrine',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Icerend Shrine'] = new DungeonTown(
        'Icerend Shrine',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Groundblight Shrine'] = new DungeonTown(
        'Groundblight Shrine',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Firescourge Shrine'] = new DungeonTown(
        'Firescourge Shrine',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new RouteKillRequirement(10, Region.paldea, 1)],
    );
    TownList['Area Zero'] = new DungeonTown(
        'Area Zero',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        /*[new MultiRequirement([
        new QuestLineCompletedRequirement('Path of Legends'),
        new QuestLineCompletedRequirement('Victory Road'),
        new QuestLineCompletedRequirement('Starfall Street'),
    ])]*/
        [new ClearDungeonRequirement(1, getDungeonIndex('Inlet Grotto'))],
    );
    TownList['Area Zero Depths'] = new DungeonTown(
        'Area Zero Depths',
        Region.paldea,
        PaldeaSubRegions.Paldea,
        [new ClearDungeonRequirement(1, getDungeonIndex('Area Zero'))],
    );

    // Used to check if next region can be reached, for example for professor NPC
    TownList['Final Region Town'] = new Town(
        'Final Region Town',
        Region.final,
        FinalSubRegions.Final,
        [],
        {
            requirements: [new GymBadgeRequirement(BadgeEnums.Elite_PaldeaChampion)],
        },
    );
}

export default TownList;
