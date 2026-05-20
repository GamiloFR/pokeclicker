import areaStatus from '../enums/AreaStatus';
import Item from '../items/Item';
import PokemonItem from '../items/PokemonItem';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import TownContent from '../towns/townContent/TownContent';
import MapHelper from '../worldmap/MapHelper';
import ShopHandler from './ShopHandler';

class Shop extends TownContent {
    public tooltip = 'Visit shops to buy items.';

    constructor(
        public items: Item[],
        public name?: string,
        requirements: (Requirement | OneFromManyRequirement)[] = [],
        private hideBeforeUnlocked = false,
    ) {
        super(requirements);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.name ?? 'Poké Mart';
    }

    public isVisible(): boolean {
        if (!super.isVisible()) {
            return false;
        }
        return !(this.hideBeforeUnlocked && !this.isUnlocked());
    }

    public onclick(): void {
        ShopHandler.showShop(this);
        $('#shopModal').modal('show');
    }

    public areaStatus() {
        const itemStatusArray = super.areaStatus();
        if (itemStatusArray.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }
        const pokemon = this.items.filter(i => i instanceof PokemonItem).map(i => i.type);
        itemStatusArray.push(...MapHelper.getPokemonAreaStatus(pokemon));
        return itemStatusArray;
    }

    public amountInput() {
        return $('#shopModal').find('input[name="amountOfItems"]');
    }

    get displayName() {
        if (this.name) {
            return this.name;
        }
        if (!this.parent) {
            return 'Poké Mart';
        }
        return `Poké Mart ${this.parent.name}`;
    }
}

export default Shop;
