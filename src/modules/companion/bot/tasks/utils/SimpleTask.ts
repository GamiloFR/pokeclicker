import Bot from '../../Bot';
import Task from '../../Task';

/**
 * A task performing a single action after a timeout.
 */
class SimpleTask extends Task {
    private _tick: () => void;
    private _isCompleted: boolean;

    private _timeoutId: NodeJS.Timeout;
    private _rejectPromise: () => void;

    public constructor(tick: () => void) {
        super();
        this._tick = tick;
        this._isCompleted = false;
    }

    public execute(): Promise<void> {
        throw new Error('Implementation isn\'t necessary');
    }

    public isCompleted(): boolean {
        return this._isCompleted;
    }

    public interrupt(): void {
        clearTimeout(this._timeoutId);
        this._rejectPromise();
    }

    public run(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._timeoutId = setTimeout(() => {
                try {
                    this._tick();
                } catch (error) {
                    reject(error);
                }

                this._isCompleted = true;
                resolve();
            }, Bot.debug ? 2000 : 100);

            this._rejectPromise = reject;
        });
    }
}

export default SimpleTask;
