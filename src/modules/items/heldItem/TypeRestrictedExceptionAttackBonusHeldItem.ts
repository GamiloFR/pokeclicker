import PokemonType from '../../enums/PokemonType';
import { Currency, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import { PokemonNameType } from '../../pokemons/PokemonNameType';
import { ShopOptions } from '../types';
import TypeRestrictedAttackBonusHeldItem from './TypeRestrictedAttackBonusHeldItem';

class TypeRestrictedExceptionAttackBonusHeldItem extends TypeRestrictedAttackBonusHeldItem {
    constructor(
        name: string,
        _attackBonus: number,
        type: PokemonType,
        regionUnlocked: Region,
        exceptions: Partial<Record<PokemonNameType, boolean>>,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
    ) {
        super(name, _attackBonus, type, regionUnlocked, basePrice, currency, shopOptions, displayName);
        const canUse = this.canUse;
        this.canUse = (pokemon: PartyPokemon) => {
            return exceptions[pokemon.name] ?? canUse(pokemon);
        };
    }
}

export default TypeRestrictedExceptionAttackBonusHeldItem;
