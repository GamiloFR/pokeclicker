import CaughtStatus from '../enums/CaughtStatus';
import { Currency, Pokerus, Region, StoneType } from '../GameConstants';
import PartyController from '../party/PartyController';
import PartyPokemon from '../party/PartyPokemon';
import { EvoTrigger, StoneEvoData } from '../pokemons/evolutions/Base';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { pokemonList, PokemonListData } from '../pokemons/PokemonList';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import PokerusIndicatingItem from './PokerusIndicatingItem';
import { ShopOptions } from './types';

class EvolutionStone extends PokerusIndicatingItem {

    type: StoneType;
    public unlockedRegion: Region;

    pokemonWithEvolution = ko.pureComputed(() => PartyController.getPokemonsWithEvolution(this.type));

    getCaughtStatus = ko.pureComputed((): CaughtStatus => {
        const statuses = this.pokemonWithEvolution().flatMap(
            (pokemon) => PartyController.getStoneEvolutionsCaughtData(pokemon.id, this.type),
        );

        return statuses.length > 0
            ? statuses.reduce((lowest, { status }) => Math.min(lowest, status), CaughtStatus.CaughtShiny)
            : undefined;
    });

    getPokerusStatus = ko.pureComputed((): Pokerus => {
        const statuses = this.pokemonWithEvolution().flatMap(
            (pokemon) => PartyController.getStoneEvolutionsPokerusData(pokemon.id, this.type),
        );

        return statuses.length > 0
            ? statuses.reduce((lowest, { status }) => Math.min(lowest, status), Pokerus.Resistant)
            : undefined;
    });

    getPokerusProgress = ko.pureComputed((): string => {
        const statuses = this.pokemonWithEvolution().flatMap(
            (pokemon) => PartyController.getStoneEvolutionsPokerusData(pokemon.id, this.type),
        );

        if (statuses.length > 0) {
            const current = statuses.reduce((progress, { evs }) => progress + Math.min(50, evs), 0);
            const total = statuses.length * 50;
            return total === current ? 'All Pokémon are resistant!' : `EVs until all Pokémon are resistant: ${current} / ${total}`;
        } else {
            return undefined;
        }
    });

    constructor(type: StoneType, basePrice: number, currency: Currency = Currency.questPoint, displayName: string, unlockedRegion?: Region, options?: ShopOptions) {
        super(StoneType[type], basePrice, currency, options, displayName, 'An evolution item. See your Item Bag for more information.', 'evolution');
        this.type = type;
        this.unlockedRegion = unlockedRegion;
    }

    public gain(n: number) {
        player.gainItem(StoneType[this.type], n);
    }

    public use(amount: number, pokemon?: PokemonNameType): boolean {
        const partyPokemon: PartyPokemon = App.game.party.getPokemon(PokemonHelper.getPokemonByName(pokemon).id);
        const shiny = partyPokemon.useStone(this.type);
        return shiny;
    }

    init() {
        // If a region has already been manually set
        if (this.unlockedRegion > Region.none) {
            return false;
        }

        // Get a list of evolutions that use this stone, set the unlock region to the lowest region
        this.unlockedRegion = Math.min(...pokemonList.filter((p) =>
            // Filter to only include pokemon that make use of this evolution stone
            (p as PokemonListData).nativeRegion > Region.none
            && (p as PokemonListData).evolutions != undefined
            && (p as PokemonListData).evolutions.some(e => e.trigger === EvoTrigger.STONE && (e as StoneEvoData).stone == this.type)).map((p) =>
            // Map to the native region for evolutions that use this stone
            Math.min(...(p as PokemonListData).evolutions.filter(e => e.trigger === EvoTrigger.STONE && (e as StoneEvoData).stone == this.type)
                .map((e) => Math.max((p as PokemonListData).nativeRegion, PokemonHelper.calcNativeRegion(e.evolvedPokemon)))
                .filter((r) => r > Region.none))));
    }
}

export default EvolutionStone;
