/// <reference path="knockout.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./types.d.ts"/>
declare class Item {
    name: string;
    basePrice: number;
    currency: Currency;
    saveName: string;
    type: any;
    price: Observable<number>;
    multiplier: number;
    multiplierDecrease: boolean;
    multiplierDecreaser: MultiplierDecreaser;
    maxAmount: number;
    _description?: string;
    _displayName: string;
    imageDirectory?: string;
    constructor(name: string, basePrice: number, currency?: Currency, { saveName, maxAmount, multiplier, multiplierDecrease, multiplierDecreaser, }?: ShopOptions, displayName?: string, description?: string, imageDirectory?: string);
    totalPrice(amount: number): number;
    buy(amt: number): void;
    gain(n: number): void;
    use(amount?: number, ...rest: any[]): boolean;
    checkCanUse(): boolean;
    isAvailable(): boolean;
    isSoldOut(): boolean;
    getDescription(): string;
    increasePriceMultiplier(amount?: number): void;
    decreasePriceMultiplier(amount: number, multiplierDecreaser: MultiplierDecreaser): void;
    init(): void;
    get description(): string;
    get displayName(): string;
    get image(): string;
}
