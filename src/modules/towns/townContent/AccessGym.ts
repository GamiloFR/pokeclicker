import Gym from '../../gym/Gym';
import GymRunner from '../../gym/GymRunner';
import Requirement from '../../requirements/Requirement';
import TownContent from './TownContent';

class AccessGym extends TownContent {
    // only use for gyms that disappear from a town
    constructor(private gym: Gym, private requirement: Requirement) {
        super([]);
    }

    public cssClass() {
        return this.gym.cssClass();
    }

    public text(): string {
        return this.gym.buttonText;
    }

    public isVisible(): boolean {
        return this.requirement?.isCompleted() ?? true;
    }

    public onclick(): void {
        GymRunner.startGym(this.gym);
    }
}

export default AccessGym;
