/// <reference path="knockout.d.ts"/>
/// <reference path="./SettingOption.d.ts"/>
declare class Setting<T> {
    name: string;
    private defaultDisplayName;
    options: SettingOption<T>[];
    defaultValue: T;
    value: T;
    observableValue: KnockoutObservable<T>;
    private cachedTranslatedName;
    constructor(name: string, defaultDisplayName: string, options: SettingOption<T>[], defaultValue: T);
    set(value: T): void;
    validValue(value: T): boolean;
    isSelected(value: T): KnockoutComputed<boolean>;
    isUnlocked(value: T): boolean;
    get displayName(): string;
}
