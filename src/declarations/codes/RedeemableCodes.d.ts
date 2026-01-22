/// <reference path="../DataStore/common/Saveable.d.ts"/>
/// <reference path="./RedeemableCode.d.ts"/>
declare class RedeemableCodes implements Saveable {
    defaults: Record<string, any>;
    saveKey: string;
    codeList: RedeemableCode[];
    constructor();
    isDiscordCode(code: string): boolean;
    enterCode(code: string): void;
    /**
     * Insecure hash, but should keep some of the nosy people out.
     * @param text
     */
    hash(text: string): number;
    fromJSON(json: string[]): void;
    toJSON(): Record<string, any>;
}
