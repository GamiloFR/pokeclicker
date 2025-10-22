import ko from 'knockout';
import { getDungeonRegion, Pokerus, Region, ShadowStatus } from '../GameConstants';
import KeyItemType from '../enums/KeyItemType';
import Gym from '../gym/Gym';
import GymBattle from '../gym/GymBattle';
import GymRunner from '../gym/GymRunner';
import { ItemList } from '../items/ItemList';
import { pokemonMap } from '../pokemons/PokemonList';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import DefeatDungeonQuest from '../quests/questTypes/DefeatDungeonQuest';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Rand from '../utilities/Rand';
import DungeonBossPokemon from './DungeonBossPokemon';
import DungeonTrainer from './DungeonTrainer';
import EnemyOptions from './EnemyOptions';
import Loot, { LootTable, LootTier } from './Loot';

export interface DetailedPokemon {
    pokemon: PokemonNameType;
    options: EnemyOptions;
}

// These should add up to 1 if you want to keep it easy to judge chances
const baseLootTierChance: Record<LootTier, number> = {
    common: 0.75,
    rare: 0.2,
    epic: 0.04,
    legendary: 0.0099,
    mythic: 0.0001,
};

const nerfedLootTierChance: Record<LootTier, number> = {
    common: 0.75,
    rare: 0.24,
    epic: 0.009,
    legendary: 0.00099,
    mythic: 0.00001,
};

// Should sum to 0
const lootRedistribution: Record<LootTier, number> = {
    common: -1,
    rare: 0.33,
    epic: 0.4,
    legendary: 0.2,
    mythic: 0.07,
};

// Max amount to take from common and redistibute @ 500 clears
const lootRedistibuteAmount = 0.15;

type Enemy = PokemonNameType | DetailedPokemon | DungeonTrainer;

type Boss = DungeonBossPokemon | DungeonTrainer;

interface EncounterInfo {
    image: string;
    shiny: boolean;
    shadow: boolean;
    hide: boolean; // try to not hide pokemon required as per the Pokedex Challenge whose unlock method can be avoided through regular gameplay
    uncaught: boolean;
    lock: boolean;
    lockMessage: string;
    pokemonName: PokemonNameType;
}

// Gain a gym badge after first completion of a dungeon
// Used for trials pre 10.16, could be useful for something else?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DungeonGainGymBadge = (gym: Gym) => {
    // Check that the player hasn't already obtained the badge
    if (!App.game.badgeCase.hasBadge(gym.badgeReward)) {
    // Set the set to our expected gym
    // This updates our modal values
        GymRunner.gymObservable(gym);
        GymBattle.gym = gym;
        // Give the player the badge
        gym.firstWinReward();
    }
};

/**
 * Gym class.
 */
interface OptionalDungeonParameters {
    dungeonRegionalDifficulty?: Region;
    requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
}

class Dungeon {
    private mimicList: PokemonNameType[] = [];

    public isThereQuestAtLocation = ko.pureComputed(() => {
        return App.game.quests.currentQuests().some((q) => q instanceof DefeatDungeonQuest && q.dungeon == this.name);
    });

    constructor(
        public name: string,
        public enemyList: Enemy[],
        public lootTable: LootTable,
        public baseHealth: number,
        public bossList: Boss[],
        public tokenCost: number,
        public difficultyRoute: number, // Closest route in terms of difficulty, used for egg steps, dungeon tokens etc.
        public rewardFunction = () => {},
        private optionalParameters: OptionalDungeonParameters = {},
    ) {
    // Keep a list of mimics to use with getCaughtMimics()
        Object.entries(this.lootTable).forEach(([, itemList]) => {
            itemList.forEach((loot) => {
                const mimic = pokemonMap[loot.loot].name;
                if (mimic != 'MissingNo.') {
                    this.mimicList.push(mimic);
                }
            });
        });
    }

    public isUnlocked(): boolean {
    // Player requires the Dungeon Ticket to access the dungeons
        if (!App.game.keyItems.hasKeyItem(KeyItemType.Dungeon_ticket)) {
            return false;
        }
        // Player may not meet the requirements to start the dungeon
        const dungeonTown = TownList[this.name];
        const dungeonRequirement = this.optionalParameters.requirement;
        // Use dungeonRequirement if it exists, else default to dungeonTown status
        if (dungeonRequirement ? !dungeonRequirement.isCompleted() : !dungeonTown.isUnlocked()) {
            return false;
        }
        return true;
    }

    public getRequirementHints() {
        const dungeonTown = TownList[this.name];
        const reqsList = [];
        dungeonTown.requirements?.forEach((req) => {
            if (!req.isCompleted()) {
                reqsList.push(req.hint());
            }
        });
        if (this.optionalParameters.requirement ? !this.optionalParameters.requirement.isCompleted() : false) {
            reqsList.push(this.optionalParameters.requirement.hint());
        }
        return reqsList;
    }

    /**
   * Finds the possible Bosses in the dungeon
   * @param includeTrainers Whether to include Trainer Bosses. Defaults to true
   * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
   */
    public availableBosses(includeTrainers = true, ignoreRequirement = false): Boss[] {
    // TODO: We need this check as this method is called somewhere during initialization when App isn't initialized yet
    // the requirement.isCompleted call can sometimes use the App object, which will cause this to crash
    // Once App is moved to modules, this check might be able to be removed.
        if (!App.game) {
            return [];
        }
        if (includeTrainers) {
            return this.bossList.filter((boss) => {
                return !ignoreRequirement && boss.options?.requirement ? boss.options.requirement.isCompleted() : true;
            });
        } else {
            return this.bossList
                .filter((b) => {
                    if (b instanceof DungeonBossPokemon) {
                        return !ignoreRequirement && b.options?.requirement ? b.options.requirement.isCompleted() : true;
                    }
                    return false;
                })
                .map((b) => <DungeonBossPokemon>b);
        }
    }

    public hasUnlockedBoss(): boolean {
        return this.bossList.some((boss) => boss.options?.requirement?.isCompleted() ?? true);
    }

    /**
   * Retreives the weights for all the possible bosses
   */
    get bossWeightList(): number[] {
        return this.availableBosses().map((boss) => {
            return boss.options?.weight ?? 1;
        });
    }

    /**
   * Returns the possible enemies in the dungeon.
   * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
   */
    public availableMinions(ignoreRequirement = false): Enemy[] {
        return this.enemyList.filter((enemy) => {
            if (typeof enemy === 'string') {
                return true;
            } else {
                return !ignoreRequirement && enemy.options?.requirement ? enemy.options.requirement.isCompleted() : true;
            }
        });
    }

    /**
   * Gets all available Pokemon in the dungeon
   */
    public allAvailablePokemon(): PokemonNameType[] {
        const encounterInfo = this.allAvailableShadowPokemon();

        // Handling minions
        this.enemyList.forEach((enemy) => {
            // Handling Pokemon
            if (typeof enemy === 'string' || enemy.hasOwnProperty('pokemon')) {
                let pokemonName: PokemonNameType;
                if (enemy.hasOwnProperty('pokemon')) {
                    // Check if requirements have been met
                    if ((enemy as DetailedPokemon).options?.requirement) {
                        if (!(enemy as DetailedPokemon).options.requirement.isCompleted()) {
                            return;
                        }
                    }
                    pokemonName = (<DetailedPokemon>enemy).pokemon;
                } else {
                    pokemonName = <PokemonNameType>enemy;
                }
                encounterInfo.push(pokemonName);
                // Handling Trainers
            } else {
                /* We don't include Trainers */
            }
        });

        // Handling Bosses
        this.bossList.forEach((boss) => {
            // Handling Pokemon
            if (boss instanceof DungeonBossPokemon) {
                if (boss.options?.requirement) {
                    if (!boss.options.requirement.isCompleted()) {
                        return;
                    }
                }
                const pokemonName = boss.name;
                encounterInfo.push(pokemonName);
                // Handling Trainer
            } else {
                /* We don't include Trainers */
            }
        });

        this.getCaughtMimics().forEach((mimic) => encounterInfo.push(mimic));

        return encounterInfo;
    }

    public allShadowPokemon(): PokemonNameType[] {
        const encounterInfo = this.normalEncounterList.filter((e) => e.shadow).map((e) => e.pokemonName);
        encounterInfo.push(...this.bossEncounterList.filter((e) => e.shadow).map((e) => e.pokemonName));
        return encounterInfo;
    }

    public allAvailableShadowPokemon(): PokemonNameType[] {
        const encounterInfo = this.normalEncounterList.filter((e) => e.shadow && !e.hide).map((e) => e.pokemonName);
        encounterInfo.push(...this.bossEncounterList.filter((e) => e.shadow && !e.hide).map((e) => e.pokemonName));
        return encounterInfo;
    }

    public getCaughtMimics(): PokemonNameType[] {
        return this.mimicList.filter((p) => App.game.party.alreadyCaughtPokemonByName(p));
    }

    public getRandomLootTier(clears: number, debuffed = false, onlyDebuffable = false): LootTier {
        const tierWeights = this.getLootTierWeights(clears, debuffed, onlyDebuffable);
        return Rand.fromWeightedArray(Object.keys(tierWeights), Object.values(tierWeights)) as LootTier;
    }

    private lootFilter = (loot: Loot, onlyDebuffable: boolean) =>
        (!loot.requirement || loot.requirement.isCompleted()) &&
    (!ItemList[loot.loot] || (ItemList[loot.loot].isAvailable() && !ItemList[loot.loot].isSoldOut())) &&
    !(onlyDebuffable && loot.ignoreDebuff);

    public getRandomLoot(tier: LootTier, onlyDebuffable = false): Loot {
        const lootTable = this.lootTable[tier].filter((loot) => this.lootFilter(loot, onlyDebuffable));
        return Rand.fromWeightedArray(
            lootTable,
            lootTable.map((loot) => loot.weight ?? 1),
        );
    }

    public getLootTierWeights(clears: number, debuffed: boolean, onlyDebuffable = false): Record<LootTier, number> {
        if (debuffed) {
            return Object.entries(nerfedLootTierChance).reduce(
                (chances, [tier, chance]) => {
                    if (tier in this.lootTable && this.lootTable[tier].some((loot: Loot) => this.lootFilter(loot, onlyDebuffable))) {
                        chances[tier] = chance;
                    }
                    return chances;
                },
                {} as Record<LootTier, number>,
            );
        }

        const timesCleared = Math.min(500, Math.max(1, clears));
        const redist = (lootRedistibuteAmount * timesCleared) / 500;

        const updatedChances = Object.entries(baseLootTierChance).reduce(
            (chances, [tier, chance]) => {
                if (tier in this.lootTable && this.lootTable[tier].some((loot) => !loot.requirement || loot.requirement.isCompleted())) {
                    chances[tier] = chance + redist * lootRedistribution[tier];
                }
                return chances;
            },
            {} as Record<LootTier, number>,
        );

        return updatedChances;
    }

    /**
   * Retrieves the weights for all the possible enemies
   */
    get weightList(): number[] {
        return this.availableMinions().map((enemy) => {
            if (typeof enemy === 'string') {
                return 1;
            } else if (enemy.hasOwnProperty('pokemon')) {
                return (<DetailedPokemon>enemy).options.weight ?? 1;
            } else {
                return (<DungeonTrainer>enemy).options?.weight ?? 1;
            }
        });
    }

    /**
   * Returns the possible minion Pokemon in the dungeon.
   * Filters out Trainers and collapses DetailedPokemon
   */
    get pokemonList(): PokemonNameType[] {
    // Filtering out Trainers
        return this.enemyList
            .filter((enemy) => {
                return !enemy.hasOwnProperty('name');
            })
            .map((enemy) => {
                // Collapsing DetailedPokemon
                if (typeof enemy === 'string') {
                    return enemy;
                } else if (enemy.hasOwnProperty('pokemon')) {
                    return (<DetailedPokemon>enemy).pokemon;
                }
            });
    }

    /**
   * Returns the possible boss Pokemon in the dungeon.
   * Filters out Trainers
   */
    get bossPokemonList(): PokemonNameType[] {
    // Filtering out Trainers
        return this.bossList
            .filter((enemy) => {
                return enemy instanceof DungeonBossPokemon;
            })
            .map((enemy) => {
                return enemy.name as PokemonNameType;
            });
    }

    /**
   * Gets all possible Pokemon in the dungeon
   */
    get allPokemon(): PokemonNameType[] {
        return this.pokemonList.concat(this.bossPokemonList, this.getCaughtMimics());
    }

    private getEncounterInfo(pokemonName: PokemonNameType, mimicData, hideEncounter = false, shadow = false): EncounterInfo {
        const partyPokemon = App.game.party.getPokemonByName(pokemonName);
        const pokerus = partyPokemon?.pokerus;
        const caught = App.game.party.alreadyCaughtPokemonByName(pokemonName);
        const shinyCaught = App.game.party.alreadyCaughtPokemonByName(pokemonName, true);
        const shadowCaught = partyPokemon?.shadow >= ShadowStatus.Shadow;
        const purified = partyPokemon?.shadow >= ShadowStatus.Purified;
        const encounter = {
            pokemonName,
            image: `assets/images/${shinyCaught ? 'shiny' : ''}${shadow && shadowCaught ? 'shadow' : ''}pokemon/${pokemonMap[pokemonName].id}.png`,
            shadowBackground: shadow && !shadowCaught ? `assets/images/shadowpokemon/${pokemonMap[pokemonName].id}.png` : '',
            pkrsImage: pokerus > Pokerus.Uninfected ? `assets/images/breeding/pokerus/${Pokerus[pokerus]}.png` : '',
            EVs: pokerus >= Pokerus.Contagious ? `EVs: ${partyPokemon.evs().toLocaleString('en-US')}` : '',
            shiny: shinyCaught,
            hide: hideEncounter,
            uncaught: !caught,
            lock: !!mimicData?.lockedMessage,
            lockMessage: mimicData?.lockedMessage ?? '',
            mimic: !!mimicData,
            mimicTier: mimicData?.tier,
            shadow,
            shadowCaught,
            purified,
        };
        return encounter;
    }

    /**
   * Gets all non-boss Pokemon encounters in the dungeon
   * Used for generating the dungeon encounter list view
   */
    get normalEncounterList(): EncounterInfo[] {
        const encounterInfo = [];

        // Handling minions
        this.enemyList.forEach((enemy) => {
            // Handling Pokemon
            if (typeof enemy === 'string' || enemy.hasOwnProperty('pokemon')) {
                let pokemonName: PokemonNameType;
                let hideEncounter = false;
                if (enemy.hasOwnProperty('pokemon')) {
                    const pokemon = <DetailedPokemon>enemy;
                    pokemonName = pokemon.pokemon;
                    hideEncounter = pokemon.options?.hide ? (pokemon.options?.requirement ? !pokemon.options?.requirement.isCompleted() : pokemon.options?.hide) : false;
                } else {
                    pokemonName = <PokemonNameType>enemy;
                }
                encounterInfo.push(this.getEncounterInfo(pokemonName, null, hideEncounter));
                // Handling Trainers (only those with shadow Pokemon)
            } else if (enemy instanceof DungeonTrainer) {
                const hideEncounter = enemy.options?.requirement && !enemy.options.requirement.isCompleted();
                const shadowPokemon = enemy.getTeam().filter((p) => p.shadow == ShadowStatus.Shadow);
                if (shadowPokemon.length) {
                    const shadowEncounters = shadowPokemon.map((p) => this.getEncounterInfo(p.name, null, hideEncounter, true));
                    const trainerEncounter = {
                        image: enemy.image,
                        EVs: '',
                        hide: hideEncounter,
                        lockMessage: '',
                        shadowTrainer: true,
                    };
                    encounterInfo.push(...shadowEncounters);
                    encounterInfo.push(trainerEncounter);
                }
            }
        });

        // Handling Mimics
        this.getCaughtMimics().forEach((enemy) => {
            const pokemonName = enemy;
            encounterInfo.push(this.getEncounterInfo(pokemonName, this.getMimicData(pokemonName)));
        });

        return encounterInfo;
    }

    /**
   * Gets all boss encounters in the dungeon
   * Used for generating the dungeon encounter list view
   */
    get bossEncounterList(): EncounterInfo[] {
        const encounterInfo = [];

        // Handling Bosses
        this.bossList.forEach((boss) => {
            const hideEncounter = boss.options?.hide ? (boss.options?.requirement ? !boss.options?.requirement.isCompleted() : boss.options?.hide) : false;
            const lock = boss.options?.requirement ? !boss.options?.requirement.isCompleted() : false;
            const lockMessage = boss.options?.requirement ? boss.options?.requirement.hint() : '';
            // Handling Pokemon
            if (boss instanceof DungeonBossPokemon) {
                const encounter = this.getEncounterInfo(boss.name, null, hideEncounter);
                encounter.lock = lock;
                encounter.lockMessage = lockMessage;
                encounterInfo.push(encounter);
                // Handling Trainer
            } else {
                // Check for Shadow Pokemon
                const shadowPokemon = boss.getTeam().filter((p) => p.shadow == ShadowStatus.Shadow);
                const shadowEncounter = shadowPokemon.length > 0;
                if (shadowEncounter) {
                    const shadowEncounters = shadowPokemon.map((p) => this.getEncounterInfo(p.name, null, hideEncounter, true));
                    encounterInfo.push(...shadowEncounters);
                }
                const encounter = {
                    image: boss.image,
                    EVs: '',
                    shiny: false,
                    hide: hideEncounter,
                    uncaught: false,
                    lock,
                    lockMessage,
                    shadowTrainer: shadowEncounter,
                };
                encounterInfo.push(encounter);
            }
        });

        return encounterInfo;
    }

    get difficulty(): Region {
        return this.optionalParameters?.dungeonRegionalDifficulty ?? getDungeonRegion(this.name);
    }

    public getMimicData(pokemonName: PokemonNameType): { tier: LootTier; lockedMessage: string } {
        let res;
        (Object.keys(this.lootTable) as LootTier[]).forEach((tier) => {
            this.lootTable[tier].forEach((loot) => {
                if (loot.loot === pokemonName) {
                    res = { tier: tier, lockedMessage: (loot.requirement?.isCompleted() ?? true) ? '' : loot.requirement.hint() };
                }
            });
        });
        return res;
    }
}

export default Dungeon;
