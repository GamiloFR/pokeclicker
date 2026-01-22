/// <reference path="./Setting.d.ts"/>
declare class HotkeySetting extends Setting<string> {
    prefix: string;
    suffix: string;
    constructor(name: string, displayName: string, defaultValue?: string, settings?: {
        prefix?: string;
        suffix?: string;
    });
}
