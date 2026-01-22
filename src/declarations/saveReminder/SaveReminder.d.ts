/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Saveable.d.ts"/>
declare class SaveReminder implements Saveable {
    static counter: number;
    saveKey: string;
    defaults: Record<string, any>;
    lastDownloaded: KnockoutObservable<number>;
    lastReminder: KnockoutObservable<number>;
    constructor();
    static tick(): void;
    fromJSON(json: any): void;
    toJSON(): Record<string, any>;
}
