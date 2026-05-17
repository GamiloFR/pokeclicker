import { Currency, Pokerus, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import { ShopOptions } from '../types';
import HeldItem from './HeldItem';

class EVsGainedBonusHeldItem extends HeldItem {
    constructor(
        name: string,
        public gainedBonus: number,
        regionUnlocked: Region,
        basePrice?: number,
        currency?: Currency,
        shopOptions? : ShopOptions,
        displayName?: string,
    ) {
        super(
            name,
            regionUnlocked,
            (pokemon: PartyPokemon) => pokemon.pokerus > Pokerus.Uninfected,
            basePrice,
            currency,
            shopOptions,
            displayName,
            `A held item that increases EV gains for the holding Pokémon by ${(gainedBonus - 1).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 0 })}.`,
        );
    }
}

export default EVsGainedBonusHeldItem;
