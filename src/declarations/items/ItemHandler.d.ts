/// <reference path="knockout.d.ts"/>
/// <reference path="../pokemons/PokemonNameType.d.ts"/>
declare class ItemHandler {
    static stoneSelected: Observable<string>;
    static pokemonSelected: Observable<PokemonNameType>;
    static amountSelected: Observable<number>;
    static amount: Observable<number>;
    static useItem(name: string, amount?: number): boolean;
    static hasItem(name: string): boolean;
    static resetAmount(): void;
    static increaseAmount(n: number): void;
    static useStones(): void;
    static initilizeEvoStones(): void;
}
