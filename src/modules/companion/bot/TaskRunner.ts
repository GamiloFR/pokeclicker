import Task from './Task';
import RepeatableTask from './tasks/utils/RepeatableTask';

/**
 * Promise-like class, to perform a sequence of tasks.
 */
class TaskRunner {
    private _promise: Promise<void>;
    private _currentTask: Task;

    private constructor() {
        this._promise = Promise.resolve();
    }

    public static run(task: Task): Promise<void> {
        return task.run();
    }

    public static build(): TaskRunner {
        return new TaskRunner();
    }

    public thenTask(task: Task): TaskRunner {
        this._promise = this._promise.then(() => {
            // New tasks are pushed only when executed, so that `interrupt` won't be called on unstarted tasks
            this._currentTask = task;
            return task.run();
        });
        return this;
    }

    public thenRepeat(tick: () => void, isCompleted: () => boolean) {
        return this.thenTask(new RepeatableTask(tick, isCompleted));
    }

    public then(onFulfilled?: (() => void), onRejected?: ((reason: Error) => void)): TaskRunner {
        this._promise = this._promise.then(onFulfilled, onRejected);
        return this;
    }

    public catch(onRejected?: ((reason: Error) => void)): TaskRunner {
        this._promise = this._promise.catch(onRejected);
        return this;
    }

    public finally(handler?: () => void): TaskRunner {
        this._promise = this._promise.finally(handler);
        return this;
    }

    public run(): Promise<void> {
        return this._promise;
    }

    public interrupt(): void {
        if (this._currentTask) {
            this._currentTask.interrupt();
        }
    }
}

export default TaskRunner;
