/// <reference path="./Setting.d.ts"/>
declare class CssVariableSetting extends Setting<string> {
    constructor(name: string, displayName: string, options?: any[], defaultValue?: string);
}
