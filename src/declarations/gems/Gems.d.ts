/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Feature.d.ts"/>
/// <reference path="../enums/PokemonType.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
declare class Gems implements Feature {
    static readonly nTypes: number;
    static readonly nEffects: number;
    name: string;
    saveKey: string;
    defaults: {
        gemWallet: number[];
        gemUpgrades: number[];
        gemCollapsed: boolean[];
    };
    gemWallet: Array<KnockoutObservable<number>>;
    gemUpgrades: Array<KnockoutObservable<number>>;
    gemCollapsed: Array<boolean>;
    validUpgrades: {};
    constructor();
    static image(type: number): string;
    gainGems(amt: number, typeNum: PokemonType): void;
    getGemUpgradeCost(typeNum: PokemonType, effectNum: TypeEffectiveness): number;
    hasMaxUpgrade(typeNum: PokemonType, effectNum: TypeEffectiveness): boolean;
    canBuyGemUpgrade(typeNum: PokemonType, effectNum: TypeEffectiveness): boolean;
    buyGemUpgrade(typeNum: PokemonType, effectNum: TypeEffectiveness): void;
    isValidUpgrade(typeNum: PokemonType, effectNum: TypeEffectiveness): boolean;
    getGemUpgrade(typeNum: PokemonType, effectNum: TypeEffectiveness): number;
    initialize(): void;
    canAccess(): boolean;
    update(delta: number): void;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
    openGemModal(): void;
}
