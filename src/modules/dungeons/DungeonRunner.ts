import ko, { Observable } from 'knockout';
import EffectEngineRunner from '../effectEngine/effectEngineRunner';
import BerryType from '../enums/BerryType';
import {
    BASE_DUNGEON_SIZE,
    BattleItemType,
    camelCaseToString,
    Currency,
    DUNGEON_LADDER_BONUS,
    DUNGEON_TICK,
    DUNGEON_TIME,
    DungeonInteractionSource,
    DungeonTileType,
    FluteItemType,
    GameState,
    getDungeonIndex,
    humanifyString,
    MIN_DUNGEON_SIZE,
    MINUTE,
    pluralizeString,
    Pokeball,
    StartingTowns,
} from '../GameConstants';
import GameHelper from '../GameHelper';
import FluteEffectRunner from '../gems/FluteEffectRunner';
import BattleItem from '../items/BattleItem';
import EggItem from '../items/EggItem';
import EnergyRestore from '../items/EnergyRestore';
import { ItemList } from '../items/ItemList';
import MegaStoneItem from '../items/MegaStoneItem';
import PokeballItem from '../items/PokeballItem';
import Vitamin from '../items/Vitamin';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import { getPokemonByName } from '../pokemons/PokemonHelper';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import ClearDungeonRequirement from '../requirements/ClearDungeonRequirement';
import Settings from '../settings';
import { UndergroundController } from '../underground/UndergroundController';
import UndergroundItem from '../underground/UndergroundItem';
import UndergroundItems from '../underground/UndergroundItems';
import Rand from '../utilities/Rand';
import Amount from '../wallet/Amount';
import RouteHelper from '../wildBattle/RouteHelper';
import Dungeon from './Dungeon';
import DungeonBattle from './DungeonBattle';
import DungeonFlash from './DungeonFlash';
import DungeonGuides from './DungeonGuides';
import DungeonMap from './DungeonMap';

declare class EvolutionStone {}

class DungeonRunner {
    public static dungeon: Dungeon;
    public static timeLeft: Observable<number> = ko.observable(DUNGEON_TIME);
    public static timeLeftPercentage: Observable<number> = ko.observable(100);
    public static timeBonus: Observable<number> = ko.observable(1);

    public static fighting: Observable<boolean> = ko.observable(false);
    public static map: DungeonMap;
    public static chestsOpened: Observable<number> = ko.observable(0);
    private static chestsOpenedPerFloor: number[];
    public static currentTileType;
    public static encountersWon: Observable<number> = ko.observable(0);
    public static fightingBoss: Observable<boolean> = ko.observable(false);
    public static defeatedBoss: Observable<string> = ko.observable(null);
    public static dungeonFinished: Observable<boolean> = ko.observable(false);
    public static fightingLootEnemy: boolean;
    public static continuousInteractionInput = false;

    public static timeLeftSeconds = ko.pureComputed(() => {
        return (Math.ceil(DungeonRunner.timeLeft() / 100) / 10).toFixed(1);
    });

    public static initializeDungeon(dungeon: Dungeon) {
        if (!DungeonRunner.canStartDungeon(dungeon)) {
            let message;
            let notifType;
            if (!dungeon.isUnlocked()) {
                if (dungeon.name === 'Viridian Forest') {
                    message = 'You need the Dungeon Ticket to access dungeons.\n<i>Check out the shop at Viridian City.</i>';
                    notifType = NotificationConstants.NotificationOption.danger;
                } else {
                    message = `You don't have access to this dungeon yet.\n<i>${dungeon.getRequirementHints()}</i>`;
                    notifType = NotificationConstants.NotificationOption.warning;
                }
            } else if (!dungeon.hasUnlockedBoss()) {
                message = "You can't access this dungeon right now because all of its bosses are locked.";
                notifType = NotificationConstants.NotificationOption.warning;
            } else if (!DungeonGuides.hired() && !DungeonRunner.hasEnoughTokens(dungeon)) {
                message = "You don't have enough Dungeon Tokens.";
                notifType = NotificationConstants.NotificationOption.danger;
            } else {
                message = "You can't enter this dungeon right now.";
                notifType = NotificationConstants.NotificationOption.danger;
            }
            Notifier.notify({
                message: message,
                type: notifType,
            });
            return false;
        }
        DungeonRunner.dungeon = dungeon;

        // Only charge the player if they aren't using a dungeon guide as they are charged when they start the dungeon
        if (!DungeonGuides.hired()) {
            App.game.wallet.loseAmount(new Amount(DungeonRunner.dungeon.tokenCost, Currency.dungeonToken));
        }
        // Reset any trainers/pokemon if there was one previously
        DungeonBattle.trainer(null);
        DungeonBattle.trainerPokemonIndex(0);
        DungeonBattle.enemyPokemon(null);
        DungeonRunner.timeBonus(FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute));
        DungeonRunner.timeLeft(DUNGEON_TIME * DungeonRunner.timeBonus());

        DungeonRunner.timeLeftPercentage(100);
        // Dungeon size increases with each region
        let dungeonSize = BASE_DUNGEON_SIZE + dungeon.difficulty;
        // Decrease dungeon size by 1 for every 10, 100, 1000 etc completes
        dungeonSize -= Math.max(0, App.game.statistics.dungeonsCleared[getDungeonIndex(DungeonRunner.dungeon.name)]().toString().length - 1);
        const flash = DungeonRunner.getFlash(DungeonRunner.dungeon.name);
        const generateChestLoot = () => {
            const clears = App.game.statistics.dungeonsCleared[getDungeonIndex(dungeon.name)]();
            const debuffed = DungeonRunner.isDungeonDebuffed(dungeon);
            // Ignores debuff on first attempt to get loot that ignores debuff.
            let tier = dungeon.getRandomLootTier(clears);
            let loot = dungeon.getRandomLoot(tier);
            if (!loot.ignoreDebuff && debuffed) {
                tier = dungeon.getRandomLootTier(clears, debuffed, true);
                loot = dungeon.getRandomLoot(tier, true);
            }

            return { tier, loot };
        };
        // Dungeon size minimum of MIN_DUNGEON_SIZE
        DungeonRunner.map = new DungeonMap(Math.max(MIN_DUNGEON_SIZE, dungeonSize), generateChestLoot, flash);

        DungeonRunner.chestsOpened(0);
        DungeonRunner.encountersWon(0);
        DungeonRunner.chestsOpenedPerFloor = new Array<number>(DungeonRunner.map.board().length).fill(0);
        DungeonRunner.currentTileType = ko.pureComputed(() => {
            return DungeonRunner.map.currentTile().type;
        });
        DungeonRunner.fightingLootEnemy = false;
        DungeonRunner.fightingBoss(false);
        DungeonRunner.defeatedBoss(null);
        DungeonRunner.dungeonFinished(false);
        App.game.gameState = GameState.dungeon;

        // If we have a dungeon guide, start them walking
        DungeonGuides.startDungeon();
    }

    public static tick() {
        if (DungeonRunner.timeLeft() <= 0) {
            if (DungeonRunner.defeatedBoss()) {
                DungeonRunner.dungeonWon();
            } else {
                DungeonRunner.dungeonLost();
            }
            return;
        }

        // Tick our dungeon guides
        DungeonGuides.hired()?.tick();

        if (DungeonRunner.map.playerMoved()) {
            DungeonRunner.timeLeft(DungeonRunner.timeLeft() - DUNGEON_TICK);
            DungeonRunner.timeLeftPercentage(Math.floor((DungeonRunner.timeLeft() / (DUNGEON_TIME * FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute))) * 100));
            if (DungeonRunner.continuousInteractionInput) {
                DungeonRunner.handleInteraction(DungeonInteractionSource.HeldKeybind);
            }
        }
        const currentFluteBonus = FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute);
        if (currentFluteBonus != DungeonRunner.timeBonus()) {
            if (currentFluteBonus > DungeonRunner.timeBonus()) {
                if (DungeonRunner.timeBonus() === 1) {
                    DungeonRunner.timeBonus(currentFluteBonus);
                    DungeonRunner.timeLeft(DungeonRunner.timeLeft() * DungeonRunner.timeBonus());
                } else {
                    DungeonRunner.timeLeft(DungeonRunner.timeLeft() / DungeonRunner.timeBonus());
                    DungeonRunner.timeBonus(currentFluteBonus);
                    DungeonRunner.timeLeft(DungeonRunner.timeLeft() * DungeonRunner.timeBonus());
                }
            } else {
                DungeonRunner.timeLeft(DungeonRunner.timeLeft() / DungeonRunner.timeBonus());
                DungeonRunner.timeBonus(currentFluteBonus);
            }
        }
    }

    /**
   * Handles the interaction event in the dungeon view and from keybinds
   */
    public static handleInteraction(source: DungeonInteractionSource = DungeonInteractionSource.Click) {
        if (DungeonRunner.fighting() && !DungeonBattle.catching() && source === DungeonInteractionSource.Click) {
            DungeonBattle.clickAttack();
        } else if (
            DungeonRunner.map.currentTile().type() === DungeonTileType.entrance &&
      (source === DungeonInteractionSource.Click || source === DungeonInteractionSource.Keybind) &&
      !DungeonGuides.hired()
        ) {
            DungeonRunner.dungeonLeave();
        } else if (DungeonRunner.map.currentTile().type() === DungeonTileType.chest) {
            DungeonRunner.openChest();
        } else if (DungeonRunner.map.currentTile().type() === DungeonTileType.boss && !DungeonRunner.fightingBoss()) {
            DungeonRunner.startBossFight();
        } else if (DungeonRunner.map.currentTile().type() === DungeonTileType.ladder) {
            DungeonRunner.nextFloor();
        }
    }

    public static openChest() {
        const tile = DungeonRunner.map.currentTile();
        if (tile.type() !== DungeonTileType.chest) {
            return;
        }

        GameHelper.incrementObservable(DungeonRunner.chestsOpened);
        DungeonRunner.chestsOpenedPerFloor[DungeonRunner.map.playerPosition().floor]++;

        const { tier, loot } = tile.metadata;

        let amount = loot.amount || 1;

        const tierWeight = {
            common: 4,
            rare: 3,
            epic: 2,
            legendary: 1,
            mythic: 0,
        }[tier];

        // Decreasing chance for rarer items (41.7% → 8.3%), ×150% with Dowsing Machine on
        let moreItemsChance = 0.5 / (4 / (tierWeight + 1)) / 1.5;
        if (EffectEngineRunner.isActive(BattleItemType.Dowsing_machine)()) {
            moreItemsChance *= 1.5;
        }
        if (Rand.chance(moreItemsChance)) {
            // Gain more items in higher regions
            const region = DungeonRunner.dungeon.difficulty;
            amount *= 1 + Math.max(1, Math.round((Math.max(tierWeight, 2) / 8) * (region + 1)));
        }

        DungeonRunner.gainLoot(loot.loot, amount, tierWeight);

        if (tier === 'mythic' && !loot.ignoreDebuff && DungeonRunner.isDungeonDebuffed(DungeonRunner.dungeon)) {
            AchievementHandler.unlockAchievement('Lucky Loot');
        }

        DungeonRunner.map.currentTile().type(DungeonTileType.empty);
        DungeonRunner.map.currentTile().calculateCssClass();
        if (DungeonRunner.chestsOpenedPerFloor[DungeonRunner.map.playerPosition().floor] == Math.floor(DungeonRunner.map.floorSizes[DungeonRunner.map.playerPosition().floor] / 3)) {
            DungeonRunner.map.showChestTiles();
        }
        if (DungeonRunner.chestsOpenedPerFloor[DungeonRunner.map.playerPosition().floor] == Math.ceil(DungeonRunner.map.floorSizes[DungeonRunner.map.playerPosition().floor] / 2)) {
            DungeonRunner.map.showAllTiles();
        }
    }

    public static gainLoot(input, amount, weight) {
        if (typeof BerryType[input] == 'number') {
            DungeonRunner.lootNotification(input, amount, weight, FarmController.getBerryImage(BerryType[humanifyString(input)]));
            return App.game.farming.gainBerry(BerryType[humanifyString(input)], amount, false);
        } else if (ItemList[input] instanceof PokeballItem) {
            DungeonRunner.lootNotification(input, amount, weight, ItemList[input].image);
            return App.game.pokeballs.gainPokeballs(Pokeball[humanifyString(input)], amount, false);
        } else if (UndergroundItems.getByName(input) instanceof UndergroundItem) {
            DungeonRunner.lootNotification(input, amount, weight, UndergroundItems.getByName(input).image);
            return UndergroundController.gainMineItem(UndergroundItems.getByName(input).id, amount);
        } else if (getPokemonByName(input).name != 'MissingNo.') {
            const image = `assets/images/pokemon/${getPokemonByName(input).id}.png`;
            DungeonRunner.lootNotification(input, amount, weight, image);
            DungeonRunner.fightingLootEnemy = true;
            return DungeonBattle.generateNewLootEnemy(input);
        } else if (ItemList[input] instanceof MegaStoneItem) {
            DungeonRunner.lootNotification(input, amount, weight, ItemList[input].image);
            ItemList[input].gain(1);
        } else if (ItemList[input] instanceof EvolutionStone || EggItem || BattleItem || Vitamin || EnergyRestore) {
            if (ItemList[input] instanceof Vitamin) {
                GameHelper.incrementObservable(App.game.statistics.totalVitaminsObtained, amount);
            }
            DungeonRunner.lootNotification(input, amount, weight, ItemList[input].image);
            return player.gainItem(ItemList[input].name, amount);
        } else {
            DungeonRunner.lootNotification(input, amount, weight, ItemList[input].image);
            return player.gainItem(ItemList.xAttack.name, 1);
        }
    }

    public static lootNotification(input, amount, weight, image) {
        let message = `Found ${amount} × <img src="${image}" height="24px"/> ${pluralizeString(camelCaseToString(humanifyString(input)), amount)} in a dungeon chest.`;
        let type = NotificationConstants.NotificationOption.success;
        let setting = NotificationConstants.NotificationSetting.Dungeons.common_dungeon_item_found;

        if (typeof BerryType[input] == 'number') {
            message = `Found ${Math.floor(amount)} × <img src="${image}" height="24px"/> ${humanifyString(input)} ${pluralizeString('Berry', amount)} in a dungeon chest.`;
        }
        if (ItemList[input] instanceof PokeballItem) {
            message = `Found ${amount} × <img src="${image}" height ="24px"/> ${pluralizeString(ItemList[input].displayName, amount)} in a dungeon chest.`;
        } else if (getPokemonByName(input).name != 'MissingNo.') {
            message = `Encountered ${GameHelper.anOrA(input)} <img src="${image}" height="40px"/> ${humanifyString(input)} in a dungeon chest.`;
        }

        if (weight <= 2) {
            setting = NotificationConstants.NotificationSetting.Dungeons.rare_dungeon_item_found;
            if (weight <= 0.5) {
                type = NotificationConstants.NotificationOption.danger;
            } else {
                type = NotificationConstants.NotificationOption.warning;
            }
        }

        return Notifier.notify({
            message: message,
            type: type,
            setting: setting,
        });
    }

    public static startBossFight() {
        if (DungeonRunner.map.currentTile().type() !== DungeonTileType.boss || DungeonRunner.fightingBoss()) {
            return;
        }

        if (!DungeonRunner.dungeon.hasUnlockedBoss()) {
            // Prevent the player from being unable to finish the dungeon if somehow all the bosses became locked after entering
            DungeonRunner.dungeonWon();
            return;
        }

        DungeonRunner.fightingBoss(true);
        DungeonBattle.generateNewBoss();
    }

    public static nextFloor() {
        DungeonRunner.map.moveToCoordinates(
            Math.floor(DungeonRunner.map.floorSizes[DungeonRunner.map.playerPosition().floor + 1] / 2),
            DungeonRunner.map.floorSizes[DungeonRunner.map.playerPosition().floor + 1] - 1,
            DungeonRunner.map.playerPosition().floor + 1,
        );
        DungeonRunner.map.playerPosition.notifySubscribers();
        DungeonRunner.timeLeft(DungeonRunner.timeLeft() + DUNGEON_LADDER_BONUS);
        if (!DungeonGuides.hired()) {
            DungeonRunner.map.playerMoved(false);
        }
    }

    public static returnToTown() {
        MapHelper.moveToTown(DungeonRunner.dungeon.name);
        if (App.game.gameState !== GameState.town) {
            // MoveToTown failed and the player is stuck in the dungeon
            const dest = StartingTowns[player.region];
            MapHelper.moveToTown(dest);
        }
    }

    public static async dungeonLeave(shouldConfirm = Settings.getSetting('confirmLeaveDungeon').observableValue()): Promise<void> {
        if (DungeonRunner.map.currentTile().type() !== DungeonTileType.entrance || DungeonRunner.dungeonFinished() || !DungeonRunner.map.playerMoved()) {
            return;
        }

        if (
            !shouldConfirm ||
      (await Notifier.confirm({
          title: 'Dungeon',
          message: 'Leave the dungeon?\n\nCurrent progress will be lost, but you will keep any items obtained from chests.',
          type: NotificationConstants.NotificationOption.warning,
          confirm: 'Leave',
          timeout: 1 * MINUTE,
      }))
        ) {
            DungeonRunner.dungeonFinished(true);
            DungeonRunner.fighting(false);
            DungeonRunner.fightingBoss(false);
            DungeonRunner.returnToTown();
            DungeonGuides.endDungeon();
        }
    }

    private static dungeonLost() {
        if (!DungeonRunner.dungeonFinished()) {
            DungeonRunner.dungeonFinished(true);
            DungeonRunner.fighting(false);
            DungeonRunner.fightingBoss(false);
            DungeonRunner.returnToTown();
            Notifier.notify({
                message: 'You could not complete the dungeon in time.',
                type: NotificationConstants.NotificationOption.danger,
            });
        }
        DungeonGuides.endDungeon();
    }

    public static dungeonWon() {
        if (!DungeonRunner.dungeonFinished()) {
            DungeonRunner.dungeonFinished(true);
            if (!App.game.statistics.dungeonsCleared[getDungeonIndex(DungeonRunner.dungeon.name)]()) {
                DungeonRunner.dungeon.rewardFunction();
            }
            if (DungeonGuides.hired()) {
                GameHelper.incrementObservable(App.game.statistics.dungeonGuideClears[DungeonGuides.hired().index]);
            }
            GameHelper.incrementObservable(App.game.statistics.dungeonsCleared[getDungeonIndex(DungeonRunner.dungeon.name)]);
            DungeonRunner.returnToTown();
            Notifier.notify({
                message: 'You have successfully completed the dungeon.',
                type: NotificationConstants.NotificationOption.success,
                setting: NotificationConstants.NotificationSetting.Dungeons.dungeon_complete,
            });
        }
        DungeonGuides.endDungeon();
    }

    public static dungeonCompleted(dungeon: Dungeon, includeShiny: boolean) {
        const possiblePokemon: PokemonNameType[] = dungeon.allAvailablePokemon();
        return RouteHelper.listCompleted(possiblePokemon, includeShiny);
    }

    public static isAchievementsComplete(dungeon: Dungeon) {
        const dungeonIndex = getDungeonIndex(dungeon.name);
        return AchievementHandler.achievementList.every((achievement) => {
            return !(achievement.property instanceof ClearDungeonRequirement && achievement.property.dungeonIndex === dungeonIndex && !achievement.isCompleted());
        });
    }

    public static canStartDungeon(dungeon: Dungeon = DungeonRunner.dungeon) {
        return (DungeonGuides.hired() || DungeonRunner.hasEnoughTokens(dungeon)) && dungeon.isUnlocked() && dungeon.hasUnlockedBoss();
    }

    public static hasEnoughTokens(dungeon: Dungeon = DungeonRunner.dungeon) {
        return App.game.wallet.hasAmount(new Amount(dungeon.tokenCost, Currency.dungeonToken));
    }

    public static dungeonLevel(): number {
        return PokemonFactory.routeLevel(DungeonRunner.dungeon.difficultyRoute, player.region);
    }

    public static getFlash(dungeonName): DungeonFlash | undefined {
        const clears = App.game.statistics.dungeonsCleared[getDungeonIndex(dungeonName)]();

        const config = [
            { flash: DungeonFlash.tiers[0], clearsNeeded: 100 },
            { flash: DungeonFlash.tiers[1], clearsNeeded: 250 },
            { flash: DungeonFlash.tiers[2], clearsNeeded: 400 },
        ].reverse();

        // findIndex, so we can get next tier when light ball is implemented
        const index = config.findIndex((tier) => tier.clearsNeeded <= clears);
        return config[index]?.flash;
    }

    public static isDungeonDebuffed(dungeon: Dungeon) {
        return dungeon.difficulty < player.highestRegion() - 2;
    }
}

export default DungeonRunner;
