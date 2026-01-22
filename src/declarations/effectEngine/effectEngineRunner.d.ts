/// <reference path="knockout.d.ts"/>
/// <reference path="../items/BattleItem.d.ts"/>
/// <reference path="../multiplier/Multiplier.d.ts"/>
declare class EffectEngineRunner {
    static counter: number;
    static multipliers: string[];
    static multIndex: import("knockout").Observable<number>;
    static amountToUse: import("knockout").PureComputed<number>;
    static initialize(multiplier: Multiplier, items: BattleItem[]): void;
    static tick(): void;
    static incrementMultiplier(): void;
    static decrementMultiplier(): void;
    static getEffect(itemName: string): any;
    static addEffect(itemName: string, amount: number): void;
    static updateFormattedTimeLeft(itemName: string): any;
    static getDungeonTokenMultiplier(): 1 | 1.5;
    static isActive(itemName: string): Computed<boolean>;
}
