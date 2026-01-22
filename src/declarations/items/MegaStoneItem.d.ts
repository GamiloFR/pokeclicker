/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../pokemons/PokemonNameType.d.ts"/>
/// <reference path="./Item.d.ts"/>
/// <reference path="./types.d.ts"/>
declare class MegaStoneItem extends Item {
    private pokemon;
    constructor(pokemon: PokemonNameType, megaStoneName: string, basePrice: number, currency?: Currency, options?: ShopOptions, displayName?: string);
    totalPrice(amount: number): number;
    gain(amt: number): void;
    isAvailable(): boolean;
    get image(): string;
}
