import { RegionGyms } from '../../../../GameConstants';
import Gym from '../../../../gym/Gym';
import GymBattle from '../../../../gym/GymBattle';
import GymList from '../../../../gym/GymList';
import GymRunner from '../../../../gym/GymRunner';
import ClearGymRequirement from '../../../../requirements/ClearGymRequirement';
import Bot from '../../Bot';
import TaskRunner from '../../TaskRunner';
import MoveToTownTask from '../MoveToTownTask';
import RequirementTask from '../RequirementTask';

class ClearGymRequirementTask extends RequirementTask<ClearGymRequirement> {
    private _gym: Gym;
    private _taskRunner: TaskRunner;

    public execute(): Promise<void> {
        Bot.blockers.gym.block();

        this._gym = GymList[RegionGyms.flat()[this.requirement.gymIndex]];
        this._taskRunner = TaskRunner.build()
            .thenTask(new MoveToTownTask(this._gym.parent))
            .thenRepeat(
                () => this._tick(),
                () => this.isCompleted(),
            )
            .finally(() => Bot.blockers.gym.unblock());
        return this._taskRunner.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }

    private _tick(): void {
        if (!GymRunner.running()) {
            GymRunner.startGym(this._gym);
        } else {
            GymBattle.clickAttack();
        }
    }
}

export default ClearGymRequirementTask;
