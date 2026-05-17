import PokemonType from '../../enums/PokemonType';
import { Currency, Region } from '../../GameConstants';
import GameHelper from '../../GameHelper';
import PartyPokemon from '../../party/PartyPokemon';
import * as PokemonHelper from '../../pokemons/PokemonHelper';
import { ShopOptions } from '../types';
import AttackBonusHeldItem from './AttackBonusHeldItem';

class TypeRestrictedAttackBonusHeldItem extends AttackBonusHeldItem {
    constructor(
        name: string,
        _attackBonus: number,
        type: PokemonType,
        regionUnlocked: Region,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
    ) {
        super(
            name,
            _attackBonus,
            regionUnlocked,
            basePrice,
            currency,
            shopOptions,
            displayName,
            `${GameHelper.anOrA(PokemonType[type])} ${PokemonType[type]}-type Pokémon`,
            (pokemon: PartyPokemon) => {
                const dataPokemon = PokemonHelper.getPokemonById(pokemon.id);
                return dataPokemon.type1 == type || dataPokemon.type2 == type;
            },
        );
    }
}

export default TypeRestrictedAttackBonusHeldItem;
