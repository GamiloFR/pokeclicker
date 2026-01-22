/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../items/ItemNameType.d.ts"/>
/// <reference path="../pokemons/PokemonNameType.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class HoldingItemRequirement extends Requirement {
    pokemon: PokemonNameType;
    itemName: ItemNameType;
    constructor(pokemon: PokemonNameType, itemName: ItemNameType, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
