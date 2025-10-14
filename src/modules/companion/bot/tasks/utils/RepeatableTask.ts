import Bot from '../../Bot';
import Task from '../../Task';
import Tasks from '../Tasks';
import { TaskInterruptedError } from './errors';

/**
 * A task repeating a action every 100ms, until a condition is completed
 */
class RepeatableTask extends Task {
    private _condition: () => boolean;
    private _tick: () => void;

    private _intervalId: NodeJS.Timeout;
    private _rejectPromise: (reason?: any) => void;

    public constructor(tick: () => void, condition: () => boolean) {
        super();
        this._tick = tick;
        this._condition = condition;
    }

    public isCompleted(): boolean {
        return this._condition();
    }

    public interrupt(): void {
        clearInterval(this._intervalId);
        this._rejectPromise(new TaskInterruptedError());
    }

    public execute(): Promise<void> {
        const { promise, resolve, reject } = Tasks.promiseWithResolvers<void>();
        this._rejectPromise = reject;

        this._intervalId = setInterval(() => {
            if (this._condition()) {
                clearInterval(this._intervalId);
                resolve();
            } else {
                this._tick();
            }
        }, Bot.debug ? 2000 : 100);

        return promise;
    }
}

export default RepeatableTask;
