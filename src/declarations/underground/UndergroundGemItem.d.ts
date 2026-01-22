/// <reference path="../enums/PokemonType.d.ts"/>
/// <reference path="../requirements/Requirement.d.ts"/>
/// <reference path="./UndergroundItem.d.ts"/>
declare class UndergroundGemItem extends UndergroundItem {
    name: string;
    id: number;
    value: number;
    type: PokemonType;
    requirement?: Requirement;
    constructor(name: string, id: number, space: Array<Array<number>>, value: number, type: PokemonType, requirement?: Requirement, weight?: (() => number) | number);
}
