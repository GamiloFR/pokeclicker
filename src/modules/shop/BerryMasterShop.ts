import areaStatus from '../enums/AreaStatus';
import BerryDeal from '../farming/BerryDeal';
import { BerryTraderLocations } from '../GameConstants';
import Item from '../items/Item';
import PokemonItem from '../items/PokemonItem';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Shop from './Shop';
import ShopHandler from './ShopHandler';

class BerryMasterShop extends Shop {
    constructor(
        public location: BerryTraderLocations,
        public items: Item[],
        public name: string = 'Berry Master',
        requirements?: (Requirement | OneFromManyRequirement)[],
    ) {
        super(items, name, requirements);
    }
    public onclick(): void {
        ShopHandler.showShop(this);
        $('#berryMasterModal').modal('show');
    }

    public amountInput = () => $('#berryMasterModal').find('input[name="amountOfItems"]');

    public areaStatus() {
        const itemStatusArray = super.areaStatus();
        if (itemStatusArray.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }

        const berryListIndex = BerryTraderLocations[this.parent.name as keyof typeof BerryTraderLocations];
        if (berryListIndex > -1) {
            const berryDeals: BerryDeal[] = BerryDeal.list[berryListIndex]();
            const berryTraderPokemon = berryDeals
                .filter((d) => d.item.itemType instanceof PokemonItem)
                .map((d) => d.item.itemType.type) as PokemonNameType[];
            const statuses = MapHelper.getPokemonAreaStatus(berryTraderPokemon);
            itemStatusArray.push(...statuses);
        }
        return [...new Set(itemStatusArray)];
    }

}

export default BerryMasterShop;
