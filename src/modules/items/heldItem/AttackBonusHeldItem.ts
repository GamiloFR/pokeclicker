import { Currency, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import { ShopOptions } from '../types';
import HeldItem from './HeldItem';

class AttackBonusHeldItem extends HeldItem {
    constructor(
        name: string,
        private _attackBonus: number,
        regionUnlocked: Region,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
        pokemonDescription = 'the Pokémon',
        canUse: (pokemon: PartyPokemon) => boolean = () => true,
        protected applyBonus = () => true,
        additionDescription = '',
    ) {
        super(name, regionUnlocked, canUse, basePrice, currency, shopOptions, displayName, `A held item that ${_attackBonus > 1 ? 'raises' : 'lowers'} the attack of ${pokemonDescription} by ${(Math.abs(_attackBonus - 1)).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 0 })}${additionDescription}.`);
    }

    get attackBonus(): number {
        return this.applyBonus() ? this._attackBonus : 1;
    }
}

export default AttackBonusHeldItem;
