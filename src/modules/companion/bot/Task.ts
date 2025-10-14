import { ObservableArray } from 'knockout';
import Setting from './settings/Setting';

abstract class Task {
    public settings: ObservableArray<Setting<any>>;

    /**
     * Indicates if the task can be started, i.e. all its settings have been set.
     */
    public canStart(): boolean {
        return this.settings().every((setting) => setting.observable() !== undefined);
    }

    /**
     * Executes a series of actions that leads to the success or failure of the task.
     */
    public abstract execute(): Promise<void>;

    /**
     * Indicates if the task is completed
     */
    public abstract isCompleted(): boolean;

    /**
     * Stops the execution of the task before its completion.
     *
     * In that case, the promise returned by `run` should be rejected.
     */
    public abstract interrupt(): void;

    public run(): Promise<void> {
        if (this.isCompleted()) {
            return Promise.resolve();
        }

        return this.execute();
    }
}

export default Task;
