/// <reference path="knockout.d.ts"/>
declare class GameHelper {
    static counter: number;
    static currentTime: KnockoutObservable<Date>;
    static tomorrow: Date;
    static msUntilTomorrow: KnockoutComputed<number>;
    static formattedTimeUntilTomorrow: KnockoutComputed<string>;
    static formattedLetterTimeUntilTomorrow: KnockoutComputed<string>;
    private static readonly MS_IN_MIN;
    private static readonly MS_IN_HOUR;
    static incrementObservable(obs: KnockoutObservable<number>, amt?: number): void;
    static enumLength(enumerable: any): number;
    static enumStrings(enumerable: any): string[];
    static enumNumbers(enumerable: any): number[];
    static enumSelectOption(enumerable: any): {
        name: string;
        value: any;
    }[];
    static objectFromEnumStrings<T extends {}, V>(enumerable: T, defaultValue: () => V): Record<keyof T, V>;
    static tick(): void;
    static updateTime(): void;
    static formatAmount(n: number): string;
    static getIndexFromDistribution(a: number[]): number;
    static createArray(start: number, max: number, step: number): Array<number>;
    static filterArrayEnd(arr: any): any[];
    static anOrA(name: string): string;
    static shallowEqual(object1: any, object2: any): boolean;
    static binarySearch(testTooHigh: (guess: number) => boolean, min: number, max: number): number;
    static chunk<T>(size: number, array: Array<T>): Array<Array<T>>;
    private static getTomorrow;
    private static twoDigitNumber;
}
