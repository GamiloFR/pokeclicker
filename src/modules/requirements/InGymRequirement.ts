import { AchievementOption } from '../GameConstants';
import GymRunner from '../gym/GymRunner';
import Requirement from './Requirement';

export default class InGymRequirement extends Requirement {
    constructor(public gymTown: string, option = AchievementOption.more) {
        super(1, option);
    }

    public getProgress() {
        return Number(GymRunner.gymObservable().town === this.gymTown);
    }

    public hint(): string {
        return `You must be in the ${
            this.gymTown
        } gym.`;
    }
}
