import BadgeEnums from '../enums/Badges';
import { getDungeonIndex, Region, Starter } from '../GameConstants';
import MoonCyclePhase from '../moonCycle/MoonCyclePhase';
import ClearDungeonRequirement from '../requirements/ClearDungeonRequirement';
import GymBadgeRequirement from '../requirements/GymBadgeRequirement';
import MoonCyclePhaseRequirement from '../requirements/MoonCyclePhaseRequirement';
import MultiRequirement from '../requirements/MultiRequirement';
import ObtainedPokemonRequirement from '../requirements/ObtainedPokemonRequirement';
import QuestLineCompletedRequirement from '../requirements/QuestLineCompletedRequirement';
import QuestLineStepCompletedRequirement from '../requirements/QuestLineStepCompletedRequirement';
import SpecialEventRequirement from '../requirements/SpecialEventRequirement';
import StarterRequirement from '../requirements/StarterRequirement';
import TemporaryBattleRequirement from '../requirements/TemporaryBattleRequirement';
import RoamingPokemon from './RoamingPokemon';
import RoamingPokemonList from './RoamingPokemonList';

// Kanto
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Mew'));

// Kanto - Sevii Islands
RoamingPokemonList.add(Region.kanto, 1, new RoamingPokemon('Raikou', new QuestLineCompletedRequirement('Celio\'s Errand')));
RoamingPokemonList.add(Region.kanto, 1, new RoamingPokemon('Entei', new QuestLineCompletedRequirement('Celio\'s Errand')));
RoamingPokemonList.add(Region.kanto, 1, new RoamingPokemon('Suicune', new MultiRequirement([new QuestLineCompletedRequirement('Celio\'s Errand'), new ObtainedPokemonRequirement('Suicune')])));
RoamingPokemonList.add(Region.kanto, 1, new RoamingPokemon('Pink Butterfree', new GymBadgeRequirement(BadgeEnums.Elite_OrangeChampion)));
RoamingPokemonList.add(Region.kanto, 1, new RoamingPokemon('Ash\'s Butterfree', new GymBadgeRequirement(BadgeEnums.Elite_OrangeChampion)));

// Johto
RoamingPokemonList.add(Region.johto, 0, new RoamingPokemon('Raikou', new QuestLineStepCompletedRequirement('The Legendary Beasts', 3)));
RoamingPokemonList.add(Region.johto, 0, new RoamingPokemon('Entei', new QuestLineStepCompletedRequirement('The Legendary Beasts', 3)));

// Hoenn
RoamingPokemonList.add(Region.hoenn, 0, new RoamingPokemon('Latios', new QuestLineStepCompletedRequirement('The Eon Duo', 3)));
RoamingPokemonList.add(Region.hoenn, 0, new RoamingPokemon('Latias', new QuestLineStepCompletedRequirement('The Eon Duo', 3)));
RoamingPokemonList.add(Region.hoenn, 0, new RoamingPokemon('Jirachi', new QuestLineStepCompletedRequirement('Wish Maker', 8)));
// Orre
RoamingPokemonList.add(Region.hoenn, 1, new RoamingPokemon('Ho-Oh', new QuestLineCompletedRequirement('Shadows in the Desert')));
RoamingPokemonList.add(Region.hoenn, 1, new RoamingPokemon('Bonsly', new QuestLineCompletedRequirement('Gale of Darkness')));

// Sinnoh
RoamingPokemonList.add(Region.sinnoh, 0, new RoamingPokemon('Manaphy', new QuestLineCompletedRequirement('Recover the Precious Egg!')));
RoamingPokemonList.add(Region.sinnoh, 0, new RoamingPokemon('Mesprit', new ClearDungeonRequirement(1, getDungeonIndex('Distortion World'))));
RoamingPokemonList.add(Region.sinnoh, 0, new RoamingPokemon('Cresselia', new MultiRequirement([new ClearDungeonRequirement(1, getDungeonIndex('Fullmoon Island')), new MoonCyclePhaseRequirement([MoonCyclePhase.FullMoon, MoonCyclePhase.WaxingGibbous, MoonCyclePhase.WaningGibbous, MoonCyclePhase.FirstQuarter, MoonCyclePhase.ThirdQuarter])])));
RoamingPokemonList.add(Region.sinnoh, 0, new RoamingPokemon('Darkrai', new MultiRequirement([new ClearDungeonRequirement(1, getDungeonIndex('Newmoon Island')), new MoonCyclePhaseRequirement([MoonCyclePhase.NewMoon, MoonCyclePhase.WaxingCrescent, MoonCyclePhase.WaningCrescent])])));

// Unova
RoamingPokemonList.add(Region.unova, 0, new RoamingPokemon('Tornadus', new GymBadgeRequirement(BadgeEnums.Legend)));
RoamingPokemonList.add(Region.unova, 0, new RoamingPokemon('Thundurus', new GymBadgeRequirement(BadgeEnums.Legend)));
RoamingPokemonList.add(Region.unova, 0, new RoamingPokemon('Meloetta (Aria)', new GymBadgeRequirement(BadgeEnums.Elite_UnovaChampion)));
RoamingPokemonList.add(Region.unova, 0, new RoamingPokemon('Genesect (High-Speed)', new QuestLineCompletedRequirement('The Legend Awakened')));

// Kalos
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Zapdos', new MultiRequirement([new ClearDungeonRequirement(1, getDungeonIndex('Sea Spirit\'s Den')), new StarterRequirement(Region.kalos, Starter.Fire)])));
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Moltres', new MultiRequirement([new ClearDungeonRequirement(1, getDungeonIndex('Sea Spirit\'s Den')), new StarterRequirement(Region.kalos, Starter.Water)])));
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Articuno', new MultiRequirement([new ClearDungeonRequirement(1, getDungeonIndex('Sea Spirit\'s Den')), new StarterRequirement(Region.kalos, Starter.Grass)])));
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Hoopa', new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)));
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Ash-Greninja', new TemporaryBattleRequirement('Ash Ketchum Kalos')));

// Alola
RoamingPokemonList.add(Region.alola, 0, new RoamingPokemon('Magearna', new GymBadgeRequirement(BadgeEnums.Champion_Stamp)));
RoamingPokemonList.add(Region.alola, 0, new RoamingPokemon('Marshadow', new GymBadgeRequirement(BadgeEnums.Champion_Stamp)));
RoamingPokemonList.add(Region.alola, 0, new RoamingPokemon('Zeraora', new GymBadgeRequirement(BadgeEnums.Champion_Stamp)));
// Magikarp Jump
RoamingPokemonList.add(Region.alola, 1, new RoamingPokemon('Magikarp Purple Diamonds', new GymBadgeRequirement(BadgeEnums.Luxury_League)));
RoamingPokemonList.add(Region.alola, 1, new RoamingPokemon('Magikarp Apricot Stripes', new GymBadgeRequirement(BadgeEnums.Heal_League)));
RoamingPokemonList.add(Region.alola, 1, new RoamingPokemon('Magikarp Violet Raindrops', new GymBadgeRequirement(BadgeEnums.Master_League)));

// Galar
RoamingPokemonList.add(Region.galar, 0, new RoamingPokemon('Galarian Zapdos', new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 5)));

// Galar - Isle of Armor
RoamingPokemonList.add(Region.galar, 2, new RoamingPokemon('Zarude', new QuestLineStepCompletedRequirement('Secrets of the Jungle', 1)));
RoamingPokemonList.add(Region.galar, 2, new RoamingPokemon('Galarian Moltres', new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 5)));

// Galar - Crown Tundra
RoamingPokemonList.add(Region.galar, 3, new RoamingPokemon('Spectrier', new QuestLineStepCompletedRequirement('The Crown of Galar', 6)));
RoamingPokemonList.add(Region.galar, 3, new RoamingPokemon('Glastrier', new QuestLineStepCompletedRequirement('The Crown of Galar', 6)));
RoamingPokemonList.add(Region.galar, 3, new RoamingPokemon('Galarian Articuno', new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 5)));

// Hisui
RoamingPokemonList.add(Region.hisui, 0, new RoamingPokemon('Tornadus', new QuestLineStepCompletedRequirement('Incarnate Forces of Hisui', 1)));
RoamingPokemonList.add(Region.hisui, 0, new RoamingPokemon('Thundurus', new QuestLineStepCompletedRequirement('Incarnate Forces of Hisui', 1)));
RoamingPokemonList.add(Region.hisui, 0, new RoamingPokemon('Landorus', new QuestLineStepCompletedRequirement('Incarnate Forces of Hisui', 1)));
RoamingPokemonList.add(Region.hisui, 0, new RoamingPokemon('Enamorus', new QuestLineStepCompletedRequirement('Incarnate Forces of Hisui', 3)));

// Paldea
RoamingPokemonList.add(Region.paldea, 0, new RoamingPokemon('Gimmighoul (Roaming)'));

// Events
// Lunar New Year (Jan 24 - Feb 7)
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Vivillon (Fancy)', new SpecialEventRequirement('Lunar New Year')));
RoamingPokemonList.add(Region.galar, 0, new RoamingPokemon('Vivillon (Fancy)', new SpecialEventRequirement('Lunar New Year')));
RoamingPokemonList.add(Region.galar, 2, new RoamingPokemon('Vivillon (Fancy)', new SpecialEventRequirement('Lunar New Year')));
RoamingPokemonList.add(Region.galar, 3, new RoamingPokemon('Vivillon (Fancy)', new SpecialEventRequirement('Lunar New Year')));
RoamingPokemonList.add(Region.kalos, 0, new RoamingPokemon('Vivillon (Meadow)', new SpecialEventRequirement('Lunar New Year')));
RoamingPokemonList.add(Region.alola, 0, new RoamingPokemon('Vivillon (Meadow)', new SpecialEventRequirement('Lunar New Year')));
// Hoopa Day (Apr 1 - Apr 2)
// Easter (Apr 8 - Apr 29)
// Golden Week (Apr 29 - May 6)
// Flying Pikachu (Jul 6 - Jul 12)
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Flying Pikachu', new SpecialEventRequirement('Flying Pikachu')));
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Red Spearow', new SpecialEventRequirement('Flying Pikachu')));
// First movie anniversay (Jul 18 - Jul 24)
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Bulbasaur (Clone)', new MultiRequirement([new SpecialEventRequirement('Mewtwo strikes back!'), new ClearDungeonRequirement(1, getDungeonIndex('New Island'))])));
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Charmander (Clone)', new MultiRequirement([new SpecialEventRequirement('Mewtwo strikes back!'), new ClearDungeonRequirement(1, getDungeonIndex('New Island'))])));
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Squirtle (Clone)', new MultiRequirement([new SpecialEventRequirement('Mewtwo strikes back!'), new ClearDungeonRequirement(1, getDungeonIndex('New Island'))])));
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Pikachu (Clone)', new MultiRequirement([new SpecialEventRequirement('Mewtwo strikes back!'), new ObtainedPokemonRequirement('Pikachu (Clone)')])));
// Halloween (Oct 30 - Nov 5)
// Let's Go Pikachu Eevee (Nov 16 - Nov 23)
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Let\'s Go Pikachu', new SpecialEventRequirement('Let\'s GO!')));
RoamingPokemonList.add(Region.kanto, 0, new RoamingPokemon('Let\'s Go Eevee', new SpecialEventRequirement('Let\'s GO!')));
// Christmas (Dec 18 - Dec 31)
// Add to every roaming group that has at least one roamer
RoamingPokemonList.roamerGroups.forEach((regionGroups, region) => {
    regionGroups.forEach((_, subRegionGroup) => {
        if (RoamingPokemonList.list[region][subRegionGroup]?.length) {
            RoamingPokemonList.add(region, subRegionGroup, new RoamingPokemon('Santa Snorlax', new SpecialEventRequirement('Merry Christmas!')));
        }
    });
});
RoamingPokemonList.add(Region.johto, 0, new RoamingPokemon('Reindeer Stantler', new SpecialEventRequirement('Merry Christmas!')));
