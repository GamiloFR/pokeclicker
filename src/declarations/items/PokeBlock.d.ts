/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Item.d.ts"/>
declare class PokeBlock extends Item {
    type: PokeBlockColor;
    constructor(color: PokeBlockColor, basePrice: number, currency?: Currency);
}
