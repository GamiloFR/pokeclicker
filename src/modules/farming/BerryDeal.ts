import type { ObservableArray } from 'knockout';
import BerryType from '../enums/BerryType';
import UndergroundItemValueType from '../enums/UndergroundItemValueType';
import { BattleItemType, BerryTraderLocations, StoneType, humanifyString, pluralizeString } from '../GameConstants';
import GameHelper from '../GameHelper';
import Item from '../items/Item';
import { ItemList } from '../items/ItemList';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import { UndergroundController } from '../underground/UndergroundController';
import UndergroundItem from '../underground/UndergroundItem';
import UndergroundItems from '../underground/UndergroundItems';
import SeededRand from '../utilities/SeededRand';
import Farming from './Farming';

class BerryDeal {
    public berries: { berryType: BerryType, amount: number }[];
    public item: { itemType: Item, amount: number };

    public static list: Partial<Record<BerryTraderLocations, ObservableArray<BerryDeal>>> = {};

    constructor(berries: BerryType[], berryAmount: number[], item: Item, itemAmount: number) {
        this.berries = [];
        berries.forEach((berry, idx) => {
            this.berries.push({ berryType: berry, amount: berryAmount[idx] });
        });
        this.item = { itemType: item, amount: itemAmount };
    }

    public calculateMaxTrades(): number {
        return Math.min(...this.berries.map(b => Math.floor(App.game.farming.berryList[b.berryType]() / b.amount)));
    }

    public static getDeals(town: BerryTraderLocations) {
        return BerryDeal.list[town];
    }

    private static randomBerry(berryList: BerryType[]): BerryType {
        return SeededRand.fromArray(berryList);
    }

    private static randomBattleItem(): Item {
        const battleItem = SeededRand.fromArray(GameHelper.enumStrings(BattleItemType));
        return ItemList[battleItem];
    }

    private static randomEvoItem(): Item {
        const evoItem = SeededRand.fromArray(GameHelper.enumStrings(StoneType).filter(name => !(['None', 'Black_DNA', 'White_DNA', 'Solar_light', 'Key_stone', 'Lunar_light', 'Pure_light', 'Crystallized_shadow', 'Black_mane_hair', 'White_mane_hair']).includes(name)));
        return ItemList[evoItem];
    }

    private static randomUndergroundItem(): Item {
        const undergroudItems = UndergroundItems.list.filter(item => item.valueType !== UndergroundItemValueType.MegaStone && item.valueType !== UndergroundItemValueType.Special);
        return ItemList[SeededRand.fromArray(undergroudItems).itemName];
    }

    private static randomPokeballDeal(): BerryDeal {
        const firstGen = Farming.getGeneration(0);
        const secondGen = Farming.getGeneration(1);
        const thirdGen = Farming.getGeneration(2);

        return SeededRand.fromArray([
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                ],
                ItemList.Fastball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                ],
                ItemList.Moonball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                ],
                ItemList.Quickball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                ],
                ItemList.Timerball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                ],
                ItemList.Duskball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                    this.randomBerry(thirdGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                    SeededRand.intBetween(5, 10),
                ],
                ItemList.Luxuryball,
                1,
            ),
        ]);
    }

    public static generateDeals(date: Date) {
        SeededRand.seedWithDate(date);

        const berryMasterTowns = [BerryTraderLocations['Goldenrod City'], BerryTraderLocations['Mauville City'], BerryTraderLocations['Hearthome City'], BerryTraderLocations['Pinkan Pokémon Reserve'], BerryTraderLocations['Secret Berry Shop'], BerryTraderLocations['Driftveil City']];

        // Removing old deals
        for (const town of berryMasterTowns) {
            if (!BerryDeal.list[town]) {
                BerryDeal.list[town] = ko.observableArray();
            } else {
                BerryDeal.list[town].removeAll();
            }
        }
        BerryDeal.list[BerryTraderLocations['Goldenrod City']].push(...this.generateGoldenrodDeals());
        BerryDeal.list[BerryTraderLocations['Mauville City']].push(...this.generateMauvilleDeals());
        BerryDeal.list[BerryTraderLocations['Pinkan Pokémon Reserve']].push(...this.generatePinkanDeals());
        BerryDeal.list[BerryTraderLocations['Hearthome City']].push(...this.generateHearthomeDeals());
        BerryDeal.list[BerryTraderLocations['Secret Berry Shop']].push(...this.generateSecretBerryShopDeals());
        BerryDeal.list[BerryTraderLocations['Driftveil City']].push(...this.generateDriftveilDeals());
    }

    private static generateGoldenrodDeals() {
        const firstGen = Farming.getGeneration(0);
        const secondGen = Farming.getGeneration(1);
        const thirdGen = Farming.getGeneration(2);

        const list = [];

        list.push(new BerryDeal(
            [
                this.randomBerry(firstGen),
                this.randomBerry(secondGen),
            ],
            [
                SeededRand.intBetween(30, 70),
                SeededRand.intBetween(10, 30),
            ],
            this.randomBattleItem(),
            SeededRand.intBetween(3, 7),
        ));

        list.push(new BerryDeal(
            [
                this.randomBerry(firstGen),
                this.randomBerry(secondGen),
                this.randomBerry(thirdGen),
            ],
            [
                SeededRand.intBetween(70, 130),
                SeededRand.intBetween(30, 70),
                SeededRand.intBetween(10, 30),
            ],
            this.randomEvoItem(),
            SeededRand.intBetween(1, 3),
        ));

        list.push(this.randomPokeballDeal());

        return list;
    }

    private static generateMauvilleDeals() {
        const thirdGen = Farming.getGeneration(2);
        const fourthGen = Farming.getGeneration(3);

        const temp: BerryDeal[] = [];
        const maxTries = 30;
        let i = 0;
        while (i < maxTries && temp.length < 3) {
            const deal = new BerryDeal(
                [
                    this.randomBerry(thirdGen),
                    this.randomBerry(fourthGen),
                ],
                [
                    SeededRand.intBetween(30, 70),
                    SeededRand.intBetween(10, 30),
                ],
                this.randomUndergroundItem(),
                SeededRand.intBetween(1, 3),
            );
            if (temp.every(madeDeal => madeDeal.item.itemType.name !== deal.item.itemType.name)) {
                temp.push(deal);
            }
            i++;
        }
        return temp;
    }

    private static generateHearthomeDeals() {
        const firstGen = Farming.getGeneration(0);
        const secondGen = Farming.getGeneration(1);
        const thirdGen = Farming.getGeneration(2);
        const fourthGen = Farming.getGeneration(3);
        const fifthGen = [ // only use berries that can grow in under a day so players have time to grow them
            BerryType.Micle,
            BerryType.Custap,
            BerryType.Jaboca,
            BerryType.Rowap,
            BerryType.Kee,
            BerryType.Maranga,
        ];

        const list = [];

        list.push(new BerryDeal(
            [
                this.randomBerry(firstGen),
                this.randomBerry(secondGen),
                this.randomBerry(thirdGen),
                this.randomBerry(fourthGen),
                this.randomBerry(fifthGen),
            ],
            [
                SeededRand.intBetween(500, 1000),
                SeededRand.intBetween(200, 500),
                SeededRand.intBetween(100, 200),
                SeededRand.intBetween(50, 100),
                SeededRand.intBetween(10, 50),
            ],
            ItemList.Masterball,
            1,
        ));

        list.push(new BerryDeal(
            [this.randomBerry(fourthGen)],
            [SeededRand.intBetween(50, 100)],
            ItemList.Protein,
            1,
        ));

        list.push(new BerryDeal(
            [this.randomBerry(fifthGen)],
            [SeededRand.intBetween(10, 50)],
            ItemList.Calcium,
            1,
        ));

        return [SeededRand.fromArray(list)];
    }

    private static generatePinkanDeals() {
        const list = [];
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(40, 60)],
            ItemList['Pinkan Arbok'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(20, 40)],
            ItemList['Pinkan Oddish'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(40, 60)],
            ItemList['Pinkan Poliwhirl'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(20, 40)],
            ItemList['Pinkan Geodude'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(80, 100)],
            ItemList['Pinkan Weezing'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(80, 100)],
            ItemList['Pinkan Scyther'],
            1,
        ));
        list.push(new BerryDeal(
            [BerryType.Pinkan],
            [SeededRand.intBetween(80, 100)],
            ItemList['Pinkan Electabuzz'],
            1,
        ));

        return list;
    }

    private static generateSecretBerryShopDeals() {
        const list = [];
        list.push(new BerryDeal(
            [BerryType.Snover],
            [SeededRand.intBetween(80, 100)],
            ItemList['Grotle (Acorn)'],
            1,
        ));

        return list;
    }

    private static generateDriftveilDeals() {
        const firstGen = Farming.getGeneration(0);
        const secondGen = Farming.getGeneration(1);
        const thirdGen = Farming.getGeneration(2);
        const fourthGen = Farming.getGeneration(3);
        const fifthGen = [ // only use berries that can grow in under a day so players have time to grow them
            BerryType.Micle,
            BerryType.Custap,
            BerryType.Jaboca,
            BerryType.Rowap,
            BerryType.Kee,
            BerryType.Maranga,
        ];

        const pokeballList = [
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                    this.randomBerry(thirdGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                    SeededRand.intBetween(5, 10),
                ],
                ItemList.Diveball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                    this.randomBerry(thirdGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                    SeededRand.intBetween(5, 10),
                ],
                ItemList.Lureball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                    this.randomBerry(thirdGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                    SeededRand.intBetween(5, 10),
                ],
                ItemList.Nestball,
                1,
            ),
            new BerryDeal(
                [
                    this.randomBerry(firstGen),
                    this.randomBerry(secondGen),
                    this.randomBerry(thirdGen),
                ],
                [
                    SeededRand.intBetween(20, 40),
                    SeededRand.intBetween(5, 15),
                    SeededRand.intBetween(5, 10),
                ],
                ItemList.Repeatball,
                1,
            ),
        ];

        const vitaminList = [
            new BerryDeal(
                [this.randomBerry(fourthGen)],
                [SeededRand.intBetween(50, 100)],
                ItemList.Protein,
                1,
            ),
            new BerryDeal(
                [this.randomBerry(fifthGen)],
                [SeededRand.intBetween(10, 50)],
                ItemList.Calcium,
                1,
            ),
            new BerryDeal(
                [this.randomBerry(fifthGen)],
                [SeededRand.intBetween(10, 50)],
                ItemList.Carbos,
                1,
            ),
        ];

        return [
            SeededRand.fromArray(pokeballList),
            SeededRand.fromArray(vitaminList),
        ];
    }

    public static canUse(town: BerryTraderLocations, i: number): boolean {
        const deal: BerryDeal = BerryDeal.list[town]?.peek()[i];
        if (!deal) {
            return false;
        } else {
            return deal.berries.every((value) => App.game.farming.berryList[value.berryType]() >= value.amount);
        }
    }

    public static use(town: BerryTraderLocations, i: number, tradeTimes = 1) {
        const deal: BerryDeal = BerryDeal.list[town]?.peek()[i];
        if (BerryDeal.canUse(town, i)) {
            const trades = deal.berries.map(berry => {
                const amt = App.game.farming.berryList[berry.berryType]();
                const maxTrades = Math.floor(amt / berry.amount);
                return maxTrades;
            });
            const maxTrades = trades.reduce((a, b) => Math.min(a, b), tradeTimes);
            deal.berries.forEach((value) => GameHelper.incrementObservable(App.game.farming.berryList[value.berryType], -value.amount * maxTrades));
            if (deal.item.itemType instanceof UndergroundItem) {
                UndergroundController.gainMineItem(deal.item.itemType.id, deal.item.amount * maxTrades);
            } else {
                deal.item.itemType.gain(deal.item.amount * maxTrades);
            }
            GameHelper.incrementObservable(App.game.statistics.berryDailyDealTrades);

            const amount = deal.item.amount * maxTrades;
            Notifier.notify({
                message: `You traded for ${amount.toLocaleString('en-US')} × <img src="${deal.item.itemType.image}" height="24px"/> ${pluralizeString(humanifyString(deal.item.itemType.displayName), amount)}.`,
                type: NotificationConstants.NotificationOption.success,
                setting: NotificationConstants.NotificationSetting.Items.item_bought,
            });
        }
    }
}

export default BerryDeal;
