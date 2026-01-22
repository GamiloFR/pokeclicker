/// <reference path="./Item.d.ts"/>
 declare class ShovelItem extends Item {
    constructor(basePrice: number, displayName: string, description: string);
    gain(amt: number): void;
}
 declare class MulchShovelItem extends Item {
    constructor(basePrice: number, displayName: string, description: string);
    gain(amt: number): void;
}
