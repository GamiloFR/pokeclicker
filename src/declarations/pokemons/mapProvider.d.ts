/// <reference path="./PokemonList.d.ts"/>
declare const container: {
    pokemonMap: PokemonMapProxy;
    pokemonList: PokemonList;
};
 declare function setPokemonMap(map: PokemonMapProxy, list: PokemonList): void;
