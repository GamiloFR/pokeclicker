/* eslint-disable no-param-reassign */
/* eslint-disable quote-props */
import PokemonType from '../enums/PokemonType';
import {
    Region,
} from '../GameConstants';
import BagItem from '../interfaces/BagItem';
import LevelType from '../party/LevelType';
import GenericProxy from '../utilities/GenericProxy';
import Rand from '../utilities/Rand';
import {
    EvoData,
} from './evolutions/Base';
// import MoonCyclePhase from '../moonCycle/MoonCyclePhase';
import { setPokemonMap } from './mapProvider';
import { PokemonNameType } from './PokemonNameType';

export const pokemonBabyPrevolutionMap: { [name: string]: PokemonNameType } = {};

export type PokemonListData = {
    id: number;
    name: PokemonNameType;
    nativeRegion?: Region;
    catchRate: number;
    evolutions?: EvoData[];
    type: PokemonType[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    levelType: LevelType;
    exp: number;
    eggCycles: number;
    baby?: boolean;
    attack?: number;
    heldItem?: BagItem;
    gender?: {
        type?: number;
        femaleRatio?: number;
        visualDifference?: boolean;
    }
};

export let pokemonList: PokemonListData[] = [];

export type PokemonList = typeof pokemonList;

export type PokemonMapProxy
    = Record<PokemonNameType | number, PokemonListData>
    & {
        random: (max?: number, min?: number) => PokemonListData,
        randomRegion: (max?: Region, min?: Region) => PokemonListData,
    }
    & Array<PokemonListData>;

export const pokemonNameIndex = {};

export let pokemonMap = new GenericProxy<typeof pokemonList, PokemonMapProxy>(pokemonList, {
    get: (pokemon, prop: PokemonNameType | 'random' | 'randomRegion') => {
        if (!Number.isNaN(+prop)) {
            const id: number = +prop;
            const pokemonByID = pokemon.find((p) => p.id === id);
            if (pokemonByID) {
                return pokemonByID;
            }
        }
        switch (prop) {
            case 'random':
                return (_max = 0, _min = 0) => {
                    // minimum 0
                    const min = Math.max(0, Math.min(_min, _max));
                    // maximum is same as however many pokemon are available
                    const max = Math.min(pokemon.length, Math.max(_min, _max));
                    // Decide on a base ID first (so we aren't weighted towards pokemon with multiple forms such as Alcremie)
                    const basePokemonIDs: number[] = [...new Set(pokemon.filter((p) => p.id >= min && p.id <= max).map((p) => Math.floor(p.id)))];
                    const ID: number = Rand.fromArray(basePokemonIDs);
                    // Choose a Pokemon with that base ID
                    const poke: PokemonListData = Rand.fromArray(pokemon.filter((p) => Math.floor(p.id) === ID && p.id >= min && p.id <= max));
                    return poke || (pokemon.find((p) => p.id === 0) as PokemonListData);
                };
            case 'randomRegion':
                return (_max = Region.kanto, _min = Region.kanto) => {
                    // minimum 0 (Kanto)
                    const min = Math.max(Region.kanto, Math.min(_min, _max));
                    const max = Math.max(Region.kanto, _min, _max);
                    // Decide on a base ID first (so we aren't weighted towards pokemon with multiple forms such as Alcremie)
                    const basePokemonIDs: number[] = [
                        ...new Set(pokemon.filter(
                            (p) => p.id > 0
                            && (p as PokemonListData).nativeRegion >= min
                            && (p as PokemonListData).nativeRegion <= max,
                        ).map((p) => Math.floor(p.id))),
                    ];
                    const ID: number = Rand.fromArray(basePokemonIDs);
                    // Choose a Pokemon with that base ID
                    const poke: PokemonListData = Rand.fromArray(pokemon.filter(
                        (p) => Math.floor(p.id) === ID
                        && (p as PokemonListData).nativeRegion >= min
                        && (p as PokemonListData).nativeRegion <= max,
                    ));
                        // return a random Pokemon or MissingNo if none found
                    return poke || (pokemon.find((p) => p.id === 0) as PokemonListData);
                };
            default:
                return pokemonNameIndex[prop.toLowerCase()] || pokemon[prop]?.bind?.call(pokemon[prop], pokemon) || pokemon[prop] || pokemon.find((p) => p.id === 0);
        }
    },
});

setPokemonMap(pokemonMap, pokemonList);
