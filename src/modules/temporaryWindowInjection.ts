// TODO: Remove temporary code after all code in ../scripts has been ported.
// This is only here so that the code in ../scripts can use the new functionality

import DataStore from './DataStore';
import * as GameConstants from './GameConstants';
import GameHelper from './GameHelper';
import Profile from './profile/Profile';
import SaveSelector from './SaveSelector';
// enums
import AuraType from './enums/AuraType';
import BadgeEnums from './enums/Badges';
import BerryColor from './enums/BerryColor';
import BerryFirmness from './enums/BerryFirmness';
import BerryType from './enums/BerryType';
import CaughtStatus from './enums/CaughtStatus';
import EvolutionType from './enums/EvolutionType';
import FarmingTool from './enums/FarmingTool';
import FarmNotificationType from './enums/FarmNotificationType';
import FlavorType from './enums/FlavorType';
import ItemType from './enums/ItemType';
import KeyItemType from './enums/KeyItemType';
import MulchType from './enums/MulchType';
import PlotStage from './enums/PlotStage';
import PokemonType from './enums/PokemonType';
import SafariEnvironments from './enums/SafariEnvironments';
import SizeUnits from './enums/SizeUnits';
import WeatherForecastStatus from './enums/WeatherForecastStatus';
import QuestLineState from './quests/QuestLineState';
// end enums
import Achievement from './achievements/Achievement';
import AchievementCategory from './achievements/AchievementCategory';
import AchievementHandler from './achievements/AchievementHandler';
import { AchievementSortOptionConfigs, AchievementSortOptions } from './achievements/AchievementSortOptions';
import AchievementTracker from './achievements/AchievementTracker';
import CaughtUniqueShinyPokemonsByRegionRequirement from './achievements/CaughtShinyPokemonByRegionRequirement';
import SafariLevelRequirement from './achievements/SafariLevelRequirement';
import SecretAchievement from './achievements/SecretAchievement';
import BadgeCaseController from './badgeCase/BadgeCaseController';
import BattleFrontier from './battleFrontier/BattleFrontier';
import BattleFrontierBattle from './battleFrontier/BattleFrontierBattle';
import BattleFrontierMilestones from './battleFrontier/BattleFrontierMilestones';
import BattleFrontierRunner from './battleFrontier/BattleFrontierRunner';
import Battle from './battles/Battle';
import BattlePokemon from './battles/BattlePokemon';
import Trainer from './battles/Trainer';
import Breeding from './breeding/Breeding';
import BreedingController from './breeding/BreedingController';
import EggType from './breeding/EggType';
import HatcheryHelpers from './breeding/HatcheryHelpers';
import Challenges from './challenges/Challenges';
import ChangelogItems from './changelog/ChangelogItems';
import RedeemableCode from './codes/RedeemableCode';
import RedeemableCodeController from './codes/RedeemableCodeController';
import RedeemableCodes from './codes/RedeemableCodes';
import { CodeCredits, SpriteCredits } from './Credits';
import DayCycle from './dayCycle/DayCycle';
import DayCyclePart from './dayCycle/DayCyclePart';
import GenericDeal, { DealCostOrProfitType } from './deal/GenericDeal';
import Discord from './discord/Discord';
import DiscordRichPresence from './discord/DiscordRichPresence';
import DungeonBattle from './dungeons/DungeonBattle';
import DungeonGuides from './dungeons/DungeonGuides';
import DungeonList from './dungeons/DungeonList';
import DungeonRunner from './dungeons/DungeonRunner';
import DungeonTrainer from './dungeons/DungeonTrainer';
import EffectEngineRunner from './effectEngine/effectEngineRunner';
import DungeonInfo from './encountersInfo/DungeonInfo';
import RouteInfo from './encountersInfo/RouteInfo';
import areaStatus from './enums/AreaStatus';
import EncounterType from './enums/EncounterType';
import OakItemType from './enums/OakItemType';
import UndergroundItemValueType from './enums/UndergroundItemValueType';
import Berry from './farming/Berry';
import BerryDeal from './farming/BerryDeal';
import FarmController from './farming/FarmController';
import FarmHands from './farming/FarmHands';
import Farming from './farming/Farming';
import EnigmaMutation from './farming/mutation/mutationTypes/EnigmaMutation';
import WandererPokemon from './farming/WandererPokemon';
import FluteEffectRunner from './gems/FluteEffectRunner';
import GemDeals from './gems/GemDeals';
import Gems from './gems/Gems';
import Gym from './gym/Gym';
import GymBattle from './gym/GymBattle';
import GymList from './gym/GymList';
import GymPokemon from './gym/GymPokemon';
import GymRunner from './gym/GymRunner';
import BagHandler from './items/BagHandler';
import CaughtIndicatingItem from './items/CaughtIndicatingItem';
import ChristmasPresent from './items/ChristmasPresent';
import Consumable from './items/Consumable';
import ConsumableController from './items/ConsumableController';
import EggItem from './items/EggItem';
import EnergyRestore from './items/EnergyRestore';
import HeldItem from './items/heldItem/HeldItem';
import Item from './items/Item';
import ItemHandler from './items/ItemHandler';
import ItemHelper from './items/ItemHelper';
import { ItemList } from './items/ItemList';
import MegaStoneItem from './items/MegaStoneItem';
import PokeballItem from './items/PokeballItem';
import PokemonItem from './items/PokemonItem';
import PokerusIndicatingItem from './items/PokerusIndicatingItem';
import QuestItem from './items/QuestItem';
import { MultiplierDecreaser } from './items/types';
import Vitamin from './items/Vitamin';
import VitaminController from './items/VitaminController';
import KeyItem from './keyItems/KeyItem';
import KeyItemController from './keyItems/KeyItemController';
import KeyItems from './keyItems/KeyItems';
import { createLogContent } from './logbook/helpers';
import LogBook from './logbook/LogBook';
import { LogBookTypes } from './logbook/LogBookTypes';
import MoonCycle from './moonCycle/MoonCycle';
import MoonCyclePhase from './moonCycle/MoonCyclePhase';
import Multiplier from './multiplier/Multiplier';
import MultiplierType from './multiplier/MultiplierType';
import NotificationConstants from './notifications/NotificationConstants';
import Notifier from './notifications/Notifier';
import BoughtOakItem from './oakItems/BoughtOakItem';
import OakItem from './oakItems/OakItem';
import OakItemController from './oakItems/OakItemController';
import OakItemLoadout from './oakItems/OakItemLoadout';
import OakItemLoadouts from './oakItems/OakItemLoadouts';
import OakItems from './oakItems/OakItems';
import PokemonCategories from './party/Category';
import LevelType, { levelRequirements } from './party/LevelType';
import Party from './party/Party';
import PartyController from './party/PartyController';
import PartyPokemon from './party/PartyPokemon';
import PokeballFilter from './pokeballs/PokeballFilter';
import { pokeballFilterOptions } from './pokeballs/PokeballFilterOptions';
import PokeballFilters from './pokeballs/PokeballFilters';
import DataPokemon from './pokemons/DataPokemon';
import {
    beforeEvolve, EvoTrigger, LevelEvolution, StoneEvolution,
} from './pokemons/evolutions/Base';
import * as OtherEvos from './pokemons/evolutions/Methods';
import PokemonFactory from './pokemons/PokemonFactory';
import * as PokemonHelper from './pokemons/PokemonHelper';
import { pokemonBabyPrevolutionMap, pokemonList, pokemonMap } from './pokemons/PokemonList';
import PokemonLocations from './pokemons/PokemonLocations';
import RoamingPokemon from './pokemons/RoamingPokemon';
import RoamingPokemonList from './pokemons/RoamingPokemonList';
import BulletinBoard from './quests/BulletinBoard';
import Quest from './quests/Quest';
import QuestLineHelper from './quests/QuestLineHelper';
import Quests from './quests/Quests';
import MultipleQuestsQuest from './quests/questTypes/MultipleQuestsQuest';
import AchievementRequirement from './requirements/AchievementRequirement';
import AllFlutesTimeActiveRequirement from './requirements/AllFlutesTimeActiveRequirement';
import AttackRequirement from './requirements/AttackRequirement';
import BattleFrontierHighestStageRequirement from './requirements/BattleFrontierHighestStageRequirement';
import BattleFrontierTotalStageRequirement from './requirements/BattleFrontierTotalStageRequirement';
import BerriesUnlockedRequirement from './requirements/BerriesUnlockedRequirement';
import CapturedRequirement from './requirements/CapturedRequirement';
import CaptureSpecificPokemonRequirement from './requirements/CaptureSpecificPokemonRequirement';
import CaughtPokemonRequirement from './requirements/CaughtPokemonRequirement';
import ClearAnyDungeonRequirement from './requirements/ClearAnyDungeonRequirement';
import ClearDungeonRequirement from './requirements/ClearDungeonRequirement';
import ClearGymRequirement from './requirements/ClearGymRequirement';
import ClickRequirement from './requirements/ClickRequirement';
import ClientRequirement from './requirements/ClientRequirement';
import CustomRequirement from './requirements/CustomRequirement';
import DayCyclePartRequirement from './requirements/DayCyclePartRequirement';
import DayOfWeekRequirement from './requirements/DayOfWeekRequirement';
import DefeatedPokemonTypeRequirement from './requirements/DefeatedPokemonTypeRequirement';
import DefeatedRequirement from './requirements/DefeatedRequirement';
import DevelopmentRequirement from './requirements/DevelopmentRequirement';
import DiamondRequirement from './requirements/DiamondRequirement';
import DummyRequirement from './requirements/DummyRequirement';
import EVBonusRequirement from './requirements/EVBonusRequirement';
import FarmHandRequirement from './requirements/FarmHandRequirement';
import FarmPlotsUnlockedRequirement from './requirements/FarmPlotsUnlockedRequirement';
import FarmPointsRequirement from './requirements/FarmPointsRequirement';
import GymBadgeRequirement from './requirements/GymBadgeRequirement';
import HatcheryHelperRequirement from './requirements/HatcheryHelperRequirement';
import HatchRequirement from './requirements/HatchRequirement';
import InRegionRequirement from './requirements/InRegionRequirement';
import ItemOwnedRequirement from './requirements/ItemOwnedRequirement';
import MaxLevelOakItemRequirement from './requirements/MaxLevelOakItemRequirement';
import MaxRegionRequirement from './requirements/MaxRegionRequirement';
import MegaEvolveRequirement from './requirements/MegaEvolveRequirement';
import MoneyRequirement from './requirements/MoneyRequirement';
import MoonCyclePhaseRequirement from './requirements/MoonCyclePhaseRequirement';
import MultiRequirement from './requirements/MultiRequirement';
import NullRequirement from './requirements/NullRequirement';
import ObtainedPokemonRequirement from './requirements/ObtainedPokemonRequirement';
import OneFromManyRequirement from './requirements/OneFromManyRequirement';
import PokeballFilterCountRequirement from './requirements/PokeballFilterCountRequirement';
import PokeballRequirement from './requirements/PokeballRequirement';
import PokemonAttackRequirement from './requirements/PokemonAttackRequirement';
import PokemonDefeatedSelectNRequirement from './requirements/PokemonDefeatedSelectNRequirement';
import PokemonLevelRequirement from './requirements/PokemonLevelRequirement';
import PokerusStatusRequirement from './requirements/PokerusStatusRequirement';
import QuestLevelRequirement from './requirements/QuestLevelRequirement';
import QuestLineCompletedRequirement from './requirements/QuestLineCompletedRequirement';
import QuestLineStartedRequirement from './requirements/QuestLineStartedRequirement';
import QuestLineStepCompletedRequirement from './requirements/QuestLineStepCompletedRequirement';
import QuestRequirement from './requirements/QuestRequirement';
import Requirement from './requirements/Requirement';
import RouteKillRequirement from './requirements/RouteKillRequirement';
import SafariBaitRequirement from './requirements/SafariBaitRequirement';
import SafariCatchRequirement from './requirements/SafariCatchRequirement';
import SafariItemsRequirement from './requirements/SafariItemsRequirement';
import SafariRocksRequirement from './requirements/SafariRocksRequirement';
import SafariStepsRequirement from './requirements/SafariStepsRequirement';
import SeededDateRequirement from './requirements/SeededDateRequirement';
import SeededDateSelectNRequirement from './requirements/SeededDateSelectNRequirement';
import SeviiCaughtRequirement from './requirements/SeviiCaughtRequirement';
import ShadowPokemonRequirement from './requirements/ShadowPokemonRequirement';
import ShinyPokemonRequirement from './requirements/ShinyPokemonRequirement';
import SpecialEventRandomRequirement from './requirements/SpecialEventRandomRequirement';
import SpecialEventRequirement from './requirements/SpecialEventRequirement';
import StarterRequirement from './requirements/StarterRequirement';
import StatisticRequirement from './requirements/StatisticRequirement';
import SubregionRequirement from './requirements/SubregionRequirement';
import TemporaryBattleRequirement from './requirements/TemporaryBattleRequirement';
import TimePlayedRequirement from './requirements/TimePlayedRequirement';
import TokenRequirement from './requirements/TokenRequirement';
import TotalMegaStoneObtainedRequirement from './requirements/TotalMegaStoneObtainedRequirement';
import TotalSpecialEventsActiveRequirement from './requirements/TotalSpecialEventsActiveRequirement';
import UndergroundHelperRequirement from './requirements/UndergroundHelperRequirement';
import UndergroundItemsFoundRequirement from './requirements/UndergroundItemsFoundRequirement';
import UndergroundLayersFullyMinedRequirement from './requirements/UndergroundLayersFullyMinedRequirement';
import UndergroundLayersMinedRequirement from './requirements/UndergroundLayersMinedRequirement';
import UndergroundLevelRequirement from './requirements/UndergroundLevelRequirement';
import UndergroundUseToolRequirement from './requirements/UndergroundUseToolRequirement';
import UniqueItemOwnedRequirement from './requirements/UniqueItemOwnedRequirement';
import VitaminObtainRequirement from './requirements/VitaminObtainRequirement';
import WeatherRequirement from './requirements/WeatherRequirement';
import RegionRoute from './routes/RegionRoute';
import RoutePokemon from './routes/RoutePokemon';
import Routes from './routes/Routes';
import SpecialRoutePokemon from './routes/SpecialRoutePokemon';
import { BaitType } from './safari/Bait';
import BaitList from './safari/BaitList';
import Safari from './safari/Safari';
import SafariBattle from './safari/SafariBattle';
import SafariPokemonList from './safari/SafariPokemonList';
import SafariTownContent from './safari/SafariTownContent';
import SaveReminder from './saveReminder/SaveReminder';
import BooleanSetting from './settings/BooleanSetting';
import RangeSetting from './settings/RangeSetting';
import Setting from './settings/Setting';
import SettingOption from './settings/SettingOption';
import Settings, { breedingFilterSettingKeys, pokedexFilterSettingKeys } from './settings/Settings';
import { SortOptionConfigs, SortOptions } from './settings/SortOptions';
import BerryMasterShop from './shop/BerryMasterShop';
import GemMasterShop from './shop/GemMasterShop';
import GenericTraderShop from './shop/GenericTraderShop';
import ShardTraderShop from './shop/ShardTraderShop';
import Shop from './shop/Shop';
import ShopHandler from './shop/ShopHandler';
import { SortModules, SortSaves } from './Sortable';
import SpecialEvent from './specialEvents/SpecialEvent';
import SpecialEvents from './specialEvents/SpecialEvents';
import SubRegion from './subRegion/SubRegion';
import SubRegions from './subRegion/SubRegions';
import AssistantNPC from './towns/AssistantNPC';
import BattleCafe from './towns/battleCafe/BattleCafe';
import BattleCafeController from './towns/battleCafe/BattleCafeController';
import BattleCafeSaveObject from './towns/battleCafe/BattleCafeSaveObject';
import DreamOrbController, { DreamOrbTownContent } from './towns/DreamOrbController';
import DungeonTown from './towns/DungeonTown';
import KantoBerryMasterNPC from './towns/KantoBerryMasterNPC';
import NPC from './towns/NPC';
import NPCController from './towns/NPCController';
import NPCType from './towns/NPCType';
import PokemonGiftNPC from './towns/PokemonGiftNPC';
import ProfNPC from './towns/ProfNPC';
import PurifyChamber from './towns/purifyChamber/PurifyChamber';
import PurifyChamberTownContent from './towns/purifyChamber/PurifyChamberTownContent';
import RoamerNPC from './towns/RoamerNPC';
import Town from './towns/Town';
import AccessGym from './towns/townContent/AccessGym';
import BattleFrontierTownContent from './towns/townContent/BattleFrontierTownContent';
import DockTownContent from './towns/townContent/DockTownContent';
import MoveToDungeon from './towns/townContent/MoveToDungeon';
import MoveToTown from './towns/townContent/MoveToTown';
import TownContent from './towns/townContent/TownContent';
import WeatherAppTownContent from './towns/townContent/WeatherAppTownContent';
import Translate from './translation/Translation';
import TranslationHelper from './translation/TranslationHelper';
import DamageCalculator from './types/DamageCalculator';
import TypeHelper from './types/TypeHelper';
import { UndergroundHelper } from './underground/helper/UndergroundHelper';
import { Mine } from './underground/mine/Mine';
import { MineConfigs, MineType } from './underground/mine/MineConfig';
import { ShardDeal } from './underground/ShardDeal';
import UndergroundToolType from './underground/tools/UndergroundToolType';
import { Underground } from './underground/Underground';
import { UndergroundController } from './underground/UndergroundController';
import UndergroundItem from './underground/UndergroundItem';
import UndergroundItems from './underground/UndergroundItems';
import UndergroundMegaStoneItem from './underground/UndergroundMegaStoneItem';
import { UndergroundTrading } from './underground/UndergroundTrading';
import ExpUpgrade from './upgrades/ExpUpgrade';
import Upgrade from './upgrades/Upgrade';
import * as DisplayObservables from './utilities/DisplayObservables';
import * as DownloadUtil from './utilities/DownloadUtil';
import GameLoadState from './utilities/GameLoadState';
import GenericProxy from './utilities/GenericProxy';
import Information from './utilities/Information';
import { lazyLoad, lazyLoadCallback } from './utilities/LazyLoader';
import Rand from './utilities/Rand';
import SeededDateRand from './utilities/SeededDateRand';
import SeededRand from './utilities/SeededRand';
import TextMerger from './utilities/TextMerger';
import WalletClasses from './wallet/inject';
import RegionalForecast from './weather/RegionalForecast';
import Weather from './weather/Weather';
import WeatherApp from './weather/WeatherApp';
import WeatherForecast from './weather/WeatherForecast';
import WeatherType from './weather/WeatherType';
import RouteHelper from './wildBattle/RouteHelper';

Object.assign(<any>window, {
    SaveSelector,
    Profile,
    GameConstants,
    GameHelper,
    DataStore,
    BadgeCase: DataStore.badge,
    Statistics: DataStore.statistics,
    AuraType,
    BadgeEnums,
    BerryColor,
    BerryFirmness,
    BerryType,
    SizeUnits,
    PokemonType,
    CaughtStatus,
    EvolutionType,
    FarmNotificationType,
    FlavorType,
    ItemType,
    KeyItemType,
    MulchType,
    PlotStage,
    QuestLineState,
    WeatherForecastStatus,
    SafariEnvironments,
    FarmingTool,
    Battle,
    BattlePokemon,
    Trainer,
    GymPokemon,
    BooleanSetting,
    RangeSetting,
    Setting,
    SettingOption,
    WeatherType,
    Weather,
    WeatherApp,
    RegionalForecast,
    WeatherForecast,
    DayCycle,
    DayCyclePart,
    DayCyclePartRequirement,
    MoonCycle,
    MoonCyclePhase,
    MoonCyclePhaseRequirement,
    SeededRand,
    SeededDateRand,
    Rand,
    Settings,
    breedingFilterSettingKeys,
    pokedexFilterSettingKeys,
    NotificationConstants,
    Notifier,
    SortOptionConfigs,
    SortOptions,
    AchievementSortOptionConfigs,
    AchievementSortOptions,
    AchievementCategory,
    LogBook,
    LogBookTypes,
    createLogContent,
    ChangelogItems,
    RedeemableCode,
    RedeemableCodes,
    RedeemableCodeController,
    EggType,
    Multiplier,
    MultiplierType,
    SpecialEvent,
    SpecialEvents,
    Challenges,
    LevelType,
    levelRequirements,
    ...WalletClasses,
    GenericProxy,
    SpriteCredits,
    CodeCredits,
    DisplayObservables,
    PokemonCategories,
    Information,
    TypeHelper,
    Upgrade,
    ExpUpgrade,
    OakItemType,
    OakItem,
    OakItems,
    BoughtOakItem,
    OakItemController,
    OakItemLoadout,
    OakItemLoadouts,
    SpecialRoutePokemon,
    RoutePokemon,
    RegionRoute,
    Routes,
    SubRegion,
    SubRegions,
    Requirement,
    AchievementRequirement,
    NullRequirement,
    MultiRequirement,
    OneFromManyRequirement,
    AttackRequirement,
    BattleFrontierHighestStageRequirement,
    BattleFrontierTotalStageRequirement,
    BerriesUnlockedRequirement,
    CapturedRequirement,
    CaughtPokemonRequirement,
    ClearDungeonRequirement,
    ClearGymRequirement,
    ClickRequirement,
    CustomRequirement,
    DefeatedRequirement,
    DevelopmentRequirement,
    DiamondRequirement,
    FarmHandRequirement,
    FarmPlotsUnlockedRequirement,
    FarmPointsRequirement,
    GymBadgeRequirement,
    HatchRequirement,
    HatcheryHelperRequirement,
    InRegionRequirement,
    MoneyRequirement,
    MaxLevelOakItemRequirement,
    MaxRegionRequirement,
    ObtainedPokemonRequirement,
    PokeballRequirement,
    PokemonLevelRequirement,
    PokerusStatusRequirement,
    VitaminObtainRequirement,
    QuestRequirement,
    QuestLevelRequirement,
    RouteKillRequirement,
    SeededDateRequirement,
    SeededDateSelectNRequirement,
    PokemonDefeatedSelectNRequirement,
    SeviiCaughtRequirement,
    ShinyPokemonRequirement,
    ShadowPokemonRequirement,
    StatisticRequirement,
    SubregionRequirement,
    StarterRequirement,
    TokenRequirement,
    TotalMegaStoneObtainedRequirement,
    UndergroundItemsFoundRequirement,
    UndergroundItemValueType,
    UndergroundItem,
    UndergroundItems,
    UndergroundLayersMinedRequirement,
    UndergroundHelperRequirement,
    UndergroundLevelRequirement,
    UndergroundUseToolRequirement,
    UndergroundLayersFullyMinedRequirement,
    CaptureSpecificPokemonRequirement,
    ClearAnyDungeonRequirement,
    EVBonusRequirement,
    TimePlayedRequirement,
    TotalSpecialEventsActiveRequirement,
    PokeballFilterCountRequirement,
    DefeatedPokemonTypeRequirement,
    AllFlutesTimeActiveRequirement,
    DummyRequirement,
    WeatherRequirement,
    MegaEvolveRequirement,
    PokemonAttackRequirement,
    SortModules,
    SortSaves,
    KeyItemController,
    KeyItem,
    KeyItems,
    Achievement,
    SecretAchievement,
    Gems,
    GemDeals,
    FluteEffectRunner,
    QuestLineCompletedRequirement,
    QuestLineStepCompletedRequirement,
    QuestLineStartedRequirement,
    TemporaryBattleRequirement,
    SpecialEventRandomRequirement,
    SpecialEventRequirement,
    Translate,
    DayOfWeekRequirement,
    SaveReminder,
    ClientRequirement,
    lazyLoad,
    lazyLoadCallback,
    LevelEvolution,
    StoneEvolution,
    EvoTrigger,
    beforeEvolve,
    ...OtherEvos,
    pokemonList,
    pokemonMap,
    pokemonBabyPrevolutionMap,
    PokemonHelper,
    ItemList,
    Item,
    MultiplierDecreaser,
    EnergyRestore,
    EffectEngineRunner,
    ItemHandler,
    CaughtIndicatingItem,
    PokerusIndicatingItem,
    PokemonItem,
    EggItem,
    MegaStoneItem,
    PokeballItem,
    QuestItem,
    Vitamin,
    VitaminController,
    Consumable,
    ConsumableController,
    RoamingPokemonList,
    DataPokemon,
    RoamingPokemon,
    UndergroundMegaStoneItem,
    PokeballFilter,
    PokeballFilters,
    TextMerger,
    pokeballFilterOptions,
    Mine,
    MineType,
    MineConfigs,
    Underground,
    UndergroundController,
    UndergroundTrading,
    UndergroundHelper,
    UndergroundToolType,
    ShardDeal,
    GenericDeal,
    DealCostOrProfitType,
    EncounterType,
    SafariBaitRequirement,
    SafariStepsRequirement,
    SafariRocksRequirement,
    SafariItemsRequirement,
    SafariCatchRequirement,
    ItemOwnedRequirement,
    UniqueItemOwnedRequirement,
    ChristmasPresent,
    DamageCalculator,
    GameLoadState,
    areaStatus,
    TranslationHelper,
    DownloadUtil,
    BadgeCaseController,
    RouteHelper,
    Quest,
    QuestLineHelper,
    Quests,
    MultipleQuestsQuest,
    TownContent,
    Shop,
    BerryMasterShop,
    GemMasterShop,
    GenericTraderShop,
    ShardTraderShop,
    ShopHandler,
    ProfNPC,
    NPC,
    NPCType,
    KantoBerryMasterNPC,
    PokemonGiftNPC,
    RoamerNPC,
    Town,
    BulletinBoard,
    MoveToDungeon,
    DockTownContent,
    DungeonTown,
    AssistantNPC,
    BattleFrontierTownContent,
    MoveToTown,
    PurifyChamberTownContent,
    WeatherAppTownContent,
    DreamOrbTownContent,
    AccessGym,
    BattleCafe,
    BattleCafeSaveObject,
    DreamOrbController,
    PurifyChamber,
    BattleCafeController,
    NPCController,
    FarmController,
    Farming,
    BerryDeal,
    Berry,
    FarmHands,
    WandererPokemon,
    EnigmaMutation,
    DungeonList,
    DungeonTrainer,
    DungeonBattle,
    DungeonGuides,
    DungeonRunner,
    GymList,
    GymBattle,
    GymRunner,
    Gym,
    Party,
    PartyController,
    PartyPokemon,
    PokemonLocations,
    PokemonFactory,
    Breeding,
    BreedingController,
    HatcheryHelpers,
    BagHandler,
    ItemHelper,
    HeldItem,
    Safari,
    SafariBattle,
    SafariPokemonList,
    SafariTownContent,
    SafariLevelRequirement,
    BaitType,
    BaitList,
    AchievementHandler,
    CaughtUniqueShinyPokemonsByRegionRequirement,
    AchievementTracker,
    BattleFrontier,
    BattleFrontierBattle,
    BattleFrontierMilestones,
    BattleFrontierRunner,
    Discord,
    DiscordRichPresence,
    RouteInfo,
    DungeonInfo,
});
