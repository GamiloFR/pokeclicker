import Achievement from '../../../achievements/Achievement';
import Requirement from '../../../requirements/Requirement';
import Task from '../Task';
import TaskRunner from '../TaskRunner';
import RequirementTask from './RequirementTask';
import Tasks from './Tasks';

abstract class AchievementTask extends Task {
    _requirementTask: RequirementTask<Requirement>;

    abstract get _achievement(): Achievement;

    public isCompleted(): boolean {
        return this._achievement.isCompleted();
    }

    public execute(): Promise<void> {
        this._requirementTask = Tasks.createRequirementTask(this._achievement.property);
        return TaskRunner.run(this._requirementTask);
    }

    public interrupt(): void {
        this._requirementTask.interrupt();
    }
}

export default AchievementTask;
