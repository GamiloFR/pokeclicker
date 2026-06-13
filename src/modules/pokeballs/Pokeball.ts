import { Observable } from 'knockout';
import { PokeballType } from '../GameConstants';
import MultiRequirement from '../requirements/MultiRequirement';
import Requirement from '../requirements/Requirement';
import { CatchOptions } from './CatchOptions';

class Pokeball {
    public quantity: Observable<number>;

    constructor(
        public type: PokeballType,
        public catchBonus: (opts: CatchOptions) => number,
        public catchTime: number,
        public description: string,
        public unlockRequirement: Requirement | MultiRequirement = new MultiRequirement(),
        quantity = 0,
    ) {
        this.quantity = ko.observable(quantity);
    }

    public unlocked() {
        return this.unlockRequirement.isCompleted();
    }
}

export default Pokeball;
