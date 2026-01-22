/// <reference path="i18next.d.ts"/>
/// <reference path="knockout.d.ts"/>
/// <reference path="../settings/Setting.d.ts"/>
/// <reference path="./Language.d.ts"/>
/// <reference path="../pokemons/PokemonNameType.d.ts"/>
 declare type TranslationVar = string | number | PokemonNameType;
 declare type TranslationVars = Record<string, TranslationVar>;
declare class Translate {
    get: (key: string, namespace: string, otherOptions?: TOptions<import("i18next").StringMap>) => PureComputed<string>;
    private languageUpdated;
    constructor(languageSetting: Setting<Language>);
}
