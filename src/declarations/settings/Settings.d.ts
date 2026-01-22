/// <reference path="./Setting.d.ts"/>
/// <reference path="./SettingOption.d.ts"/>
declare class Settings {
    static list: Setting<any>[];
    static add(setting: Setting<any>): void;
    static setSettingByName(name: string, value: any): void;
    static getSetting(name: string): Setting<any>;
    static toJSON(): {};
    static fromJSON(dict: any): void;
    static enumToSettingOptionArray<T extends Record<string, unknown>>(obj: T, filter?: (v: any) => boolean, displayNames?: Record<keyof T, string>): SettingOption<string>[];
    static enumToNumberSettingOptionArray(obj: any, filter?: (v: any) => boolean): SettingOption<any>[];
    static selectOptionsToSettingOptions<T>(opts: Array<{
        name: string;
        value: T;
    }>): SettingOption<T>[];
    static saveDefault(): void;
    static loadDefault(): void;
    static resetDefault(): void;
}
