import { Currency, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import { ShopOptions } from '../types';
import AttackBonusHeldItem from './AttackBonusHeldItem';

class HybridAttackBonusHeldItem extends AttackBonusHeldItem {
    constructor(
        name: string,
        attackBonus: number,
        private _clickAttackBonus: number,
        regionUnlocked: Region,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
        canUse: (pokemon: PartyPokemon) => boolean = () => true,
        applyBonus = () => true,
    ) {
        super(name, attackBonus, regionUnlocked, basePrice, currency, shopOptions, displayName, undefined, canUse, applyBonus,
            ` and ${_clickAttackBonus > 1 ? 'raises' : 'lowers'} its click attack contribution by ${(Math.abs(_clickAttackBonus - 1) * 100).toFixed(0)}%`);
    }

    get clickAttackBonus(): number {
        return this.applyBonus() ? this._clickAttackBonus : 1;
    }
}

export default HybridAttackBonusHeldItem;
