import BerryType from '../enums/BerryType';
import GameHelper from '../GameHelper';
import BerriesUnlockedRequirement from '../requirements/BerriesUnlockedRequirement';
import UniqueItemOwnedRequirement from '../requirements/UniqueItemOwnedRequirement';
import FarmHand, { FarmHandBerryType, FarmHandSpeeds } from './FarmHand';

class FarmHands {
    public static list: FarmHand[] = [];

    public MAX_HIRES = 3;
    public available = ko.pureComputed(() => FarmHands.list.filter(f => f.isUnlocked()));
    public hired = ko.pureComputed(() => FarmHands.list.filter(f => f.hired()));
    public availableBerries = ko.pureComputed(() => [
        ...GameHelper.enumNumbers(FarmHandBerryType),
        ...GameHelper.enumNumbers(BerryType),
    ].filter(b => App.game.farming.unlockedBerries[b]?.() || b < 0).sort((a, b) => a - b));
    public canHire =  ko.pureComputed(() => this.hired().length < this.MAX_HIRES);
    public requirement = new BerriesUnlockedRequirement(8);

    public static add(farmHand: FarmHand) {
        this.list.push(farmHand);
    }


    public isUnlocked() {
        return this.requirement.isCompleted();
    }

    public tick() {
        // run game tick for all farmhands
        FarmHands.list.forEach(f => f.tick());
    }

    public toJSON(): Record<string, any>[] {
        return this.available().map(f => f.toJSON());
    }

    public fromJSON(json: Array<any>): void {
        if (!json || !json.length) {
            return;
        }

        FarmHands.list.forEach(f => {
            const data = json?.find(_f => _f.name == f.name);
            if (data) {
                f.fromJSON(data);
            }
        });
    }
}

// Note: Gender-neutral names used as the trainer sprite is (seeded) randomly generated
FarmHands.add(new FarmHand('Alex', 10, 1, FarmHandSpeeds.Lazy, 1, 1, new BerriesUnlockedRequirement(8)));
FarmHands.add(new FarmHand('Logan', 15, 3, FarmHandSpeeds.Slowest, 2, 4, new BerriesUnlockedRequirement(16)));
FarmHands.add(new FarmHand('Joey', 10, 5, FarmHandSpeeds.Slow, 2, 5, new BerriesUnlockedRequirement(24)));
FarmHands.add(new FarmHand('Charlie', 30, 10, FarmHandSpeeds.BelowAverage, 7, 6, new BerriesUnlockedRequirement(32)));
FarmHands.add(new FarmHand('Bailey', 10, 12, FarmHandSpeeds.Average, 7, 7, new UniqueItemOwnedRequirement('FarmHandBailey', 'purchase', 'Purchased in the Johto region.')));
FarmHands.add(new FarmHand('Kerry', 50, 16, FarmHandSpeeds.AboveAverage, 8, 8, new UniqueItemOwnedRequirement('FarmHandKerry', 'purchase', 'Purchased in the Hoenn region.')));
FarmHands.add(new FarmHand('Riley', 70, 25, FarmHandSpeeds.Fast, 8, 10, new UniqueItemOwnedRequirement('FarmHandRiley', 'purchase', 'Purchased in the Sinnoh region.')));
FarmHands.add(new FarmHand('Jamie', 65, 5, FarmHandSpeeds.Faster, 9, 10, new UniqueItemOwnedRequirement('FarmHandJamie', 'purchase', 'Purchased in the Hoenn region.')));
FarmHands.add(new FarmHand('Jessie', 100, 50, FarmHandSpeeds.Fastest, 10, 12, new BerriesUnlockedRequirement(56)));

export default FarmHands;
