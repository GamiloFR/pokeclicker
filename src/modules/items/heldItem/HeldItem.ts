import { Currency, Region } from '../../GameConstants';
import PartyPokemon from '../../party/PartyPokemon';
import Item from '../Item';
import { ShopOptions } from '../types';

class HeldItem extends Item {
    public static heldItemSelected = ko.observable<HeldItem>(undefined);

    regionUnlocked: Region;

    constructor(
        name: string,
        regionUnlocked: Region,
        public canUse: (pokemon: PartyPokemon) => boolean,
        basePrice?: number,
        currency?: Currency,
        shopOptions?: ShopOptions,
        displayName?: string,
        description?: string,
    ) {
        super(name, basePrice, currency, shopOptions, displayName, description, 'heldItems');
        this.regionUnlocked = regionUnlocked;
    }

    public isUnlocked() {
        return player.highestRegion() >= this.regionUnlocked;
    }
}

export default HeldItem;
