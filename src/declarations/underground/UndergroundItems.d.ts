/// <reference path="./UndergroundItem.d.ts"/>
declare class UndergroundItems {
    static list: Array<UndergroundItem>;
    static addItem(item: UndergroundItem): void;
    static getByName(name: string): UndergroundItem;
    static getById(id: number): UndergroundItem;
    static getRandomItem(): UndergroundItem;
    static getFullResourceName(item: UndergroundItem, amt: number): string;
}
