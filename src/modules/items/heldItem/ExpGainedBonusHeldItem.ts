import { Currency, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import { ShopOptions } from '../types';
import HeldItem from './HeldItem';

class ExpGainedBonusHeldItem extends HeldItem {
    constructor(
        name: string,
        public gainedBonus: number,
        regionUnlocked: Region,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
        pokemonDescription = 'the holding Pokémon',
        canUse: (pokemon: PartyPokemon) => boolean = () => true,
    ) {
        super(name, regionUnlocked, canUse, basePrice, currency, shopOptions, displayName, `A held item that earns ${pokemonDescription} ${(gainedBonus - 1).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 0 })} bonus Experience Points.`);
    }
}

export default ExpGainedBonusHeldItem;
