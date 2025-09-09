import ko, { Computed as KnockoutComputed, Observable as KnockoutObservable } from 'knockout';
import areaStatus from '../enums/AreaStatus';
import * as GameConstants from '../GameConstants';
import GameHelper from '../GameHelper';
import Item from '../items/Item';
import PokemonItem from '../items/PokemonItem';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Settings from '../settings';
import TownContent from '../towns/TownContent';
import Amount from '../wallet/Amount';

class Shop extends TownContent {
    public tooltip = 'Visit shops to buy items.';

    constructor(
        public items: Item[],
        public name = undefined,
        requirements: (Requirement | OneFromManyRequirement)[] = [],
        private hideBeforeUnlocked = false,
    ) {
        super(requirements);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.name ?? 'Poké Mart';
    }

    public isVisible(): boolean {
        if (!super.isVisible()) {
            return false;
        }
        return !(this.hideBeforeUnlocked && !this.isUnlocked());
    }

    public onclick(): void {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
        ShopHandler.showShop(this);
        $('#shopModal').modal('show');
    }

    public areaStatus() {
        const itemStatusArray = super.areaStatus();
        if (itemStatusArray.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }
        const pokemon = this.items.filter((i) => i instanceof PokemonItem).map((i) => i.type);
        itemStatusArray.push(...MapHelper.getPokemonAreaStatus(pokemon));
        return itemStatusArray;
    }

    get displayName() {
        if (this.name) {
            return this.name;
        }
        if (!this.parent) {
            return 'Poké Mart';
        }
        return `Poké Mart ${this.parent.name}`;
    }

    public amountInput = () => $('#shopModal').find('input[name="amountOfItems"]');
}

export class ShopHandler {
    static shopObservable: KnockoutObservable<Shop> = ko.observable(new Shop([]));
    static selected: KnockoutObservable<number> = ko.observable(0);
    static amount: KnockoutObservable<number> = ko.observable(1);

    public static shortcutVisible: KnockoutComputed<boolean> = ko.pureComputed(() => {
        return App.game.statistics.gymsDefeated[GameConstants.getGymIndex('Champion Lance')]() > 0;
    });

    public static showShop(shop: Shop) {
        this.setSelected(0);
        this.resetAmount();
        this.shopObservable(shop);

        shop.items.forEach((item) => {
            item.price(Math.round(item.basePrice * (player.itemMultipliers[item.saveName] || 1)));
        });
    }

    //#region Controls

    public static setSelected(i: number) {
        this.selected(i);
    }

    public static buyItem() {
        const item: Item = this.shopObservable().items[ShopHandler.selected()];
        item.buy(this.amount());

        if (Settings.getSetting('resetShopAmountOnPurchase').observableValue()) {
            ShopHandler.resetAmount();
        }
    }

    public static resetAmount() {
        this.shopObservable().amountInput().val(1).change();
    }

    public static increaseAmount(n: number) {
        const newVal = (parseInt(this.shopObservable().amountInput().val().toString(), 10) || 0) + n;
        this.shopObservable()
            .amountInput()
            .val(newVal > 1 ? newVal : 1)
            .change();
    }

    public static multiplyAmount(n: number) {
        const newVal = (parseInt(this.shopObservable().amountInput().val().toString(), 10) || 0) * n;
        this.shopObservable()
            .amountInput()
            .val(newVal > 1 ? newVal : 1)
            .change();
    }

    public static maxAmount() {
        const item: Item = this.shopObservable().items[ShopHandler.selected()];

        if (!item || !item.isAvailable()) {
            return this.shopObservable().amountInput().val(0).change();
        }

        const tooMany = (amt: number) => amt > item.maxAmount || !App.game.wallet.hasAmount(new Amount(item.totalPrice(amt), item.currency));
        const amt = GameHelper.binarySearch(tooMany, 0, Number.MAX_SAFE_INTEGER);

        this.shopObservable().amountInput().val(amt).change();
    }

    //#endregion

    //#region UI

    public static calculateCss(i: number): string {
        if (this.selected() == i) {
            return 'shopItem clickable btn btn-secondary active';
        } else {
            return 'shopItem clickable btn btn-secondary';
        }
    }

    public static calculateButtonCss(): string {
        const item: Item = this.shopObservable().items[ShopHandler.selected()];

        if ((item && !(item.isAvailable() && App.game.wallet.hasAmount(new Amount(item.totalPrice(this.amount()), item.currency)))) || this.amount() < 1) {
            return 'btn btn-danger smallButton smallFont';
        } else {
            return 'btn btn-success smallButton smallFont';
        }
    }

    //#endregion
}

export default Shop;
