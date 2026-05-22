import { Observable, PureComputed } from 'knockout';
import App from '../App';
import UndergroundItemValueType from '../enums/UndergroundItemValueType';
import { SECOND } from '../GameConstants';
import GameHelper from '../GameHelper';
import NotificationOption from '../notifications/NotificationOption';
import Notifier from '../notifications/Notifier';
import { UndergroundController } from './UndergroundController';
import UndergroundItem from './UndergroundItem';
import UndergroundItems from './UndergroundItems';

export const TRADE_DOWN_AMOUNT = 3;

export class UndergroundTrading {
    private static _selectedTradeFromItem: Observable<UndergroundItem | null> = ko.observable(null);
    private static _selectedTradeToItem: Observable<UndergroundItem | null> = ko.observable(null);
    private static _tradeAmount: Observable<number> = ko.observable(1).extend({ numeric: 0 });
    private static _sellAmount: Observable<number> = ko.observable(1).extend({ numeric: 0 });

    public static quickSellEnabled: Observable<boolean> = ko.observable(false);

    private static  _computedAvailableItemsToTradeList: PureComputed<UndergroundItem[]> = ko.pureComputed<UndergroundItem[]>(() => {
        return UndergroundItems.getUnlockedItems().filter(item => ![UndergroundItemValueType.Diamond, UndergroundItemValueType.MegaStone].includes(item.valueType));
    });

    private static  _computedTradeToItemList: PureComputed<UndergroundItem[]> = ko.pureComputed<UndergroundItem[]>(() => {
        if (this._selectedTradeFromItem() == null) {
            return [];
        }

        const tradeMap = new Map<UndergroundItemValueType, UndergroundItemValueType[]>;
        tradeMap.set(UndergroundItemValueType.Fossil, [UndergroundItemValueType.Fossil, UndergroundItemValueType.FossilPiece]);
        tradeMap.set(UndergroundItemValueType.FossilPiece, [UndergroundItemValueType.Fossil, UndergroundItemValueType.FossilPiece]);

        return this._computedAvailableItemsToTradeList().filter(item => {
            if (this._selectedTradeFromItem().id === item.id)
                return false;

            if (tradeMap.get(this._selectedTradeFromItem().valueType)?.includes(item.valueType)) {
                return true;
            }

            if (this._selectedTradeFromItem().valueType !== item.valueType)
                return false;

            return true;
        });
    });

    public static trade(): boolean {
        if (this.selectedTradeFromItem == null || this.selectedTradeToItem == null) {
            return false;
        }

        const tradeFromAmount = this.tradeAmount * TRADE_DOWN_AMOUNT;
        const tradeToAmount = this.tradeAmount;

        if (App.player.itemList[this.selectedTradeFromItem.itemName]() < tradeFromAmount) {
            return false;
        }

        App.player.loseItem(this.selectedTradeFromItem.itemName, tradeFromAmount);
        App.player.gainItem(this.selectedTradeToItem.itemName, tradeToAmount);

        GameHelper.incrementObservable(App.game.statistics.undergroundTrades, tradeToAmount);

        Notifier.notify({
            title: 'Underground',
            message: `<b><img src="${this.selectedTradeFromItem.image}" height="24px" class="pixelated"/> → <img src="${this.selectedTradeToItem.image}" height="24px" class="pixelated"/> Trade confirmed!</b><br/>${tradeFromAmount.toLocaleString('en-US')}× ${this.selectedTradeFromItem.displayName} → ${tradeToAmount.toLocaleString('en-US')}× ${this.selectedTradeToItem.displayName}.`,
            type: NotificationOption.success,
            timeout: 10 * SECOND,
        });

        return true;
    }

    static get canTrade(): boolean {
        return this.selectedTradeFromItem && this.tradeToItemList.includes(this.selectedTradeToItem) && this.tradeFromAmount <= App.player.itemList[this.selectedTradeFromItem.itemName]();
    }

    static get selectedTradeFromItem(): UndergroundItem | null {
        return this._selectedTradeFromItem();
    }

    static set selectedTradeFromItem(item: UndergroundItem | null) {
        this._selectedTradeFromItem(item);
    }

    static get selectedTradeToItem(): UndergroundItem | null {
        return this._selectedTradeToItem();
    }

    static set selectedTradeToItem(item: UndergroundItem | null) {
        this._selectedTradeToItem(item);
    }

    static get tradeFromAmount(): number {
        return Math.max(this._tradeAmount() * TRADE_DOWN_AMOUNT, 0);
    }

    static set tradeFromAmount(value: number) {
        this._tradeAmount(Math.max(Math.floor(value / TRADE_DOWN_AMOUNT), 0));
    }

    static get tradeAmount(): number {
        return Math.max(this._tradeAmount(), 0);
    }

    static set tradeAmount(value: number) {
        this._tradeAmount(Math.max(value, 0));
    }

    static get availableItemsToTrade(): Array<UndergroundItem> {
        return this._computedAvailableItemsToTradeList();
    }

    static get tradeToItemList(): Array<UndergroundItem> {
        return this._computedTradeToItemList();
    }

    // Selling

    static get sellAmount(): number {
        return Math.max(this._sellAmount(), 0);
    }

    static set sellAmount(amount: number) {
        this._sellAmount(Math.max(amount, 0));
    }

    static get canSell(): boolean {
        return this.selectedTradeFromItem && this.selectedTradeFromItem.hasSellValue() && this.sellAmount <= App.player.itemList[this.selectedTradeFromItem.itemName]();
    }

    public static sell() {
        UndergroundController.sellMineItem(this.selectedTradeFromItem, this.sellAmount);
        Notifier.notify({
            title: 'Underground',
            message: `<b><img src="${this.selectedTradeFromItem.image}" height="24px" class="pixelated"/> Sale Confirmed!</b><br/>${this.sellAmount.toLocaleString('en-US')}× ${this.selectedTradeFromItem.displayName} has been boxed up for sale. Good choice, Trainer!`,
            type: NotificationOption.success,
            timeout: 10 * SECOND,
        });
    }

    public static quickSell(item: UndergroundItem) {
        if (!item.hasSellValue()) return;
        UndergroundController.sellMineItem(item, App.player.itemList[item.itemName]());
    }
}
