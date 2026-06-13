import EVsGainedBonusHeldItem from './heldItem/EvsGainedBonusHeldItem';
import ExpGainedBonusHeldItem from './heldItem/ExpGainedBonusHeldItem';
import HeldItem from './heldItem/HeldItem';
import PokemonRestrictedAttackBonusHeldItem from './heldItem/PokemonRestrictedAttackBonusHeldItem';
import TypeRestrictedAttackBonusHeldItem from './heldItem/TypeRestrictedAttackBonusHeldItem';
import { ItemList } from './ItemList';

class ItemHelper {
    public static getSortedHeldItems() {
        const sortedHeldItems = Object.values(ItemList).filter(i => i instanceof HeldItem).sort((a: HeldItem, b: HeldItem) => {
            return a.regionUnlocked - b.regionUnlocked;
        });
        return {
            attack: {
                title: 'Pokémon Restricted',
                items: sortedHeldItems.filter(i => i instanceof PokemonRestrictedAttackBonusHeldItem),
            },
            typeRestricted: {
                title: 'Type Restricted',
                items: sortedHeldItems.filter(i => i instanceof TypeRestrictedAttackBonusHeldItem),
            },
            ev: {
                title: 'EV Gain',
                items: sortedHeldItems.filter(i => i instanceof EVsGainedBonusHeldItem),
            },
            exp: {
                title: 'EXP Gain',
                items: sortedHeldItems.filter(i => i instanceof ExpGainedBonusHeldItem),
            },
            other: {
                title: 'Other',
                items: sortedHeldItems.filter(i => i.constructor.name === 'AttackBonusHeldItem' || i.constructor.name === 'HeldItem'),
            },
        };
    }
}

export default ItemHelper;
