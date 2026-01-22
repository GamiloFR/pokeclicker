/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Saveable.d.ts"/>
 declare type PokemonCategory = {
    name: KnockoutObservable<string>;
    color: KnockoutObservable<string>;
    subscriber?: KnockoutSubscription;
};
declare class PokemonCategories implements Saveable {
    static categories: KnockoutObservableArray<PokemonCategory>;
    saveKey: string;
    defaults: Record<string, any>;
    static initialize(): void;
    static reset(): void;
    static addCategory(name: string, color: string): void;
    static removeCategory(index: number, force?: boolean): void;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
