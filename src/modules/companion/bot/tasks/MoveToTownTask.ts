import { GameState } from '../../../GameConstants';
import Town from '../../../towns/Town';
import Bot from '../Bot';
import Task from '../Task';
import TaskRunner from '../TaskRunner';
import MoveToRegionTask from './MoveToRegionTask';
import { TownInaccessibleError } from './utils/errors';
import SimpleTask from './utils/SimpleTask';
import { WaitGameStateTask } from './utils/WaitTask';

class MoveToTownTask extends Task {
    private _town: Town;

    private _taskRunner: TaskRunner;

    public constructor(town: Town) {
        super();
        this._town = town;
    }

    public isCompleted(): boolean {
        return player.town === this._town && App.game.gameState === GameState.town;
    }

    public execute(): Promise<void> {
        this._taskRunner = TaskRunner.build()
            .thenTask(new MoveToRegionTask(this._town.region, this._town.subRegion))
            .then(() => Bot.blockers.map.block())
            .thenTask(new SimpleTask(() => {
                if (MapHelper.accessToTown(this._town.name)) {
                    MapHelper.moveToTown(this._town.name);
                } else {
                    throw new TownInaccessibleError(this._town.name);
                }
            })).thenTask(new WaitGameStateTask(GameState.town))
            .finally(() => Bot.blockers.map.unblock());
        return this._taskRunner.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }
}

export default MoveToTownTask;
