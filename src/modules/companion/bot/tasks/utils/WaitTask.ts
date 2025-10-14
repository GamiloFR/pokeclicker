import { GameState } from '../../../../GameConstants';
import Task from '../../Task';
import Tasks from '../Tasks';
import { TaskInterruptedError } from './errors';

/**
 * Wait for a condition to be true
 */
class WaitTask extends Task {
    private _isCompleted: () => boolean;

    private _intervalId: NodeJS.Timeout;
    private _rejectPromise: (reason: any) => void;

    public constructor(isCompleted: () => boolean) {
        super();
        this._isCompleted = isCompleted;
    }

    public isCompleted(): boolean {
        return this._isCompleted();
    }

    public execute(): Promise<void> {
        const { promise, resolve, reject } = Tasks.promiseWithResolvers<void>();
        this._rejectPromise = reject;

        this._intervalId = setInterval(() => {
            if (this._isCompleted()) {
                resolve();
            }
        }, 100);

        return promise;
    }

    public interrupt(): void {
        clearInterval(this._intervalId);
        this._rejectPromise(new TaskInterruptedError());
    }
}

export class WaitGameStateTask extends WaitTask {
    public constructor(targetState: GameState) {
        super(() => App.game.gameState === targetState);
    }
}

export default WaitTask;
