import FarmHand from '../farming/FarmHand';
import FarmHands from '../farming/FarmHands';
import { Currency, formatTimeFullLetters, MINUTE } from '../GameConstants';
import Item from './Item';

class FarmHandItem extends Item {

    constructor(public farmHandName: string, basePrice: number, currency = Currency.farmPoint) {
        super(`FarmHand${farmHandName}`, basePrice, currency, { maxAmount: 1 }, `Farm Hand ${farmHandName}`);
    }

    get farmHand(): FarmHand {
        return FarmHands.list.find(f => f.name == this.farmHandName);
    }

    get description(): string {
        const farmHand = this.farmHand;
        return `Cost: <img alt="Farm Points" src="assets/images/currency/farmPoint.svg" width="20px">&nbsp;${(farmHand?.cost?.amount ?? 0).toLocaleString('en-US')}/hour<br/>
        Work Speed: ${formatTimeFullLetters((farmHand?.workTick ?? MINUTE) / 1000)}<br/>
        Efficiency: ${(farmHand?.efficiency ?? 0).toLocaleString('en-US')}<br/>
        Max Energy: ${(farmHand?.maxEnergy ?? 0).toLocaleString('en-US')}`;
    }

    isAvailable(): boolean {
        const purchased = this.farmHand?.isUnlocked() ?? true;
        return super.isAvailable() && !purchased;
    }

    get image() {
        const trainerID = this.farmHand?.trainerSprite || 0;
        return `assets/images/profile/trainer-${trainerID}.png`;
    }
}

export default FarmHandItem;
