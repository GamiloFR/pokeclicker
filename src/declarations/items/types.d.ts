/**
 * Source event for decreasing shop multipliers
 */
 declare enum MultiplierDecreaser {
    Battle = 0,
    Berry = 1
}
/**
 * Additional shop options for an item
 */
declare interface ShopOptions {
    saveName?: string;
    maxAmount?: number;
    multiplier?: number;
    multiplierDecrease?: boolean;
    multiplierDecreaser?: MultiplierDecreaser;
}
