/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Saveable.d.ts"/>
/// <reference path="../enums/OakItemType.d.ts"/>
/// <reference path="./OakItemLoadout.d.ts"/>
declare class OakItemLoadouts implements Saveable {
    private static MAX_SLOTS;
    saveKey: string;
    defaults: {};
    loadouts: Array<OakItemLoadout>;
    selectedLoadout: KnockoutObservable<number>;
    activateLoadout(index: number): void;
    toggleItem(item: OakItemType): void;
    hasItem(item: OakItemType): KnockoutComputed<boolean>;
    getSelectedLoadout(): OakItemLoadout;
    fromJSON(json: Array<{
        name: string;
        loadout: Array<number>;
    }>): void;
    toJSON(): {
        name: string;
        loadout: number[];
    }[];
}
