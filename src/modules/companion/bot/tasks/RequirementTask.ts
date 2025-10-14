import Requirement from '../../../requirements/Requirement';
import Task from '../Task';

abstract class RequirementTask<R extends Requirement> extends Task {
    requirement: R;

    constructor(requirement: R) {
        super();
        this.requirement = requirement;
    }

    public isCompleted(): boolean {
        return this.requirement.isCompleted();
    }
}

export default RequirementTask;
