/// <reference path="knockout.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./PokemonNameType.d.ts"/>
/// <reference path="./DataPokemon.d.ts"/>
 declare function calcNativeRegion(pokemonName: PokemonNameType): number;
 declare function calcUniquePokemonsByRegion(region: Region): number;
 declare function getPokemonById(id: number): DataPokemon;
 declare function getPokemonByName(name: PokemonNameType): DataPokemon;
 declare function typeStringToId(id: string): any;
 declare function typeIdToString(id: number): string;
 declare function getImage(pokemonId: number, shiny?: boolean, gender?: boolean): string;
 declare function getPokeballImage(pokemonName: PokemonNameType): string;
 declare function displayName(englishName: string): Computed<string>;
 declare function incrementPokemonStatistics(pokemonId: number, statistic: string, shiny: boolean, gender: number): void;
