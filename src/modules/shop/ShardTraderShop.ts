import areaStatus from '../enums/AreaStatus';
import { ShardTraderLocations } from '../GameConstants';
import PokemonItem from '../items/PokemonItem';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import { ShardDeal } from '../underground/ShardDeal';
import MapHelper from '../worldmap/MapHelper';
import Shop from './Shop';
import ShopHandler from './ShopHandler';

class ShardTraderShop extends Shop {
    constructor(
        public location: ShardTraderLocations,
        public name: string = 'Shard Trader',
        public hidePlayerInventory: boolean = false,
        public currencyName: string = 'Item',
    ) {
        super([], name);
    }

    public onclick(): void {
        ShopHandler.showShop(this);
        $('#shardTraderModal').modal('show');
    }

    public areaStatus() {
        const itemStatusArray = super.areaStatus();
        if (itemStatusArray.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }

        const deals = ShardDeal.getDeals(this.location)?.();
        if (deals) {
            const pokemonDeals = deals.filter(d => d.item.itemType instanceof PokemonItem && d.item.itemType.isVisible()).map(d => d.item.itemType.type) as PokemonNameType[];
            const statuses = MapHelper.getPokemonAreaStatus(pokemonDeals);
            itemStatusArray.push(...statuses);
        }
        return [...new Set(itemStatusArray)];
    }

    public isVisible(): boolean {
        if (super.isVisible()) {
            const deals = ShardDeal.getDeals(this.location)?.();
            return deals?.some(d => d.item.itemType.isVisible()) ?? true;
        }
        return false;
    }
}

export default ShardTraderShop;
