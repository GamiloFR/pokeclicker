/// <reference path="../enums/KeyItemType.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Item.d.ts"/>
/// <reference path="./types.d.ts"/>
declare class BuyKeyItem extends Item {
    item: KeyItemType;
    constructor(item: KeyItemType, basePrice: number, currency?: Currency, options?: ShopOptions, displayName?: string);
    totalPrice(amount: number): number;
    gain(amt: number): void;
    isAvailable(): boolean;
    get image(): string;
}
