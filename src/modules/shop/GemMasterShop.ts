import areaStatus from '../enums/AreaStatus';
import * as GameConstants from '../GameConstants';
import GemDeals from '../gems/GemDeals';
import PokemonItem from '../items/PokemonItem';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Shop, { ShopHandler } from './Shop';

class GemMasterShop extends Shop {
    constructor(
        public shop: GameConstants.GemShops,
        public name: string = 'Gem Master',
        requirements: (Requirement | OneFromManyRequirement)[] = [],
        hideBeforeUnlocked = false,
    ) {
        super([], name, requirements, hideBeforeUnlocked);
    }

    public onclick(): void {
        ShopHandler.showShop(this);
        $('#gemMasterModal').modal('show');
    }

    public areaStatus() {
        const itemStatusArray = super.areaStatus();
        if (itemStatusArray.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }

        const deals = GemDeals.getDeals(this.shop);
        if (deals) {
            const pokemonDeals = deals.filter(d => d.item.itemType instanceof PokemonItem && d.isVisible()).map(d => d.item.itemType.type) as PokemonNameType[];
            const statuses = MapHelper.getPokemonAreaStatus(pokemonDeals);
            itemStatusArray.push(...statuses);
        }
        return [...new Set(itemStatusArray)];
    }
}

export default GemMasterShop;
