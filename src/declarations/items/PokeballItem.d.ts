/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Item.d.ts"/>
/// <reference path="./types.d.ts"/>
declare class PokeballItem extends Item {
    type: PokeballType;
    constructor(type: PokeballType, basePrice: number, currency?: Currency, options?: ShopOptions, displayName?: string);
    gain(amt: number): void;
}
