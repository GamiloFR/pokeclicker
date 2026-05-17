import HatcheryHelper from '../breeding/HatcheryHelper';
import HatcheryHelpers from '../breeding/HatcheryHelpers';
import { Currency } from '../GameConstants';
import Item from './Item';

class HatcheryHelperItem extends Item {

    constructor(public hatcheryHelperName: string, basePrice: number, currency = Currency.money) {
        super(`HatcheryHelper${hatcheryHelperName}`, basePrice, currency, { maxAmount: 1 }, `Hatchery Helper ${hatcheryHelperName}`);
    }

    get hatcheryHelper(): HatcheryHelper {
        return HatcheryHelpers.list.find(f => f.name == this.hatcheryHelperName);
    }

    get description(): string {
        const hatcheryHelper = this.hatcheryHelper;
        return `Cost: <img src="assets/images/currency/${Currency[hatcheryHelper?.cost?.currency]}.svg" width="20px">&nbsp;${(hatcheryHelper?.cost?.amount ?? 0).toLocaleString('en-US')}/hatch<br/>
        Step Efficiency: ${(hatcheryHelper?.stepEfficiencyBase ?? 0).toLocaleString('en-US')}%<br/>
        Attack Efficiency: ${(hatcheryHelper?.attackEfficiencyBase ?? 0).toLocaleString('en-US')}%`;
    }

    isAvailable(): boolean {
        const purchased = this.hatcheryHelper?.isUnlocked() ?? true;
        return super.isAvailable() && !purchased;
    }

    get image() {
        const trainerID = this.hatcheryHelper?.trainerSprite || 0;
        return `assets/images/profile/trainer-${trainerID}.png`;
    }
}

export default HatcheryHelperItem;
