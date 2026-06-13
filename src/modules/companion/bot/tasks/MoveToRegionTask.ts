import { DockTowns, Region } from '../../../GameConstants';
import Bot from '../Bot';
import Task from '../Task';
import TaskRunner from '../TaskRunner';
import CloseModalTask from './utils/CloseModalTask';
import OpenModalTask from './utils/OpenModalTask';
import SimpleTask from './utils/SimpleTask';

/**
 * Move to a specific region and/or subregion.
 */
class MoveToRegionTask extends Task {
    private _region: Region;
    private _subregion: number | undefined;

    private _taskRunner: TaskRunner;

    public constructor(region: Region, subregion?: number) {
        super();
        this._region = region;
        this._subregion = subregion;
    }

    public isCompleted(): boolean {
        return player.region === this._region && (this._subregion === undefined || player.subregion === this._subregion);
    }

    public execute(): Promise<void> {
        Bot.blockers.map.block();

        this._taskRunner = TaskRunner.build();
        if (player.region !== this._region) {
            // /!\ We consider that every subregion has a dock
            this._taskRunner = this._taskRunner
                // TODO Check if player can access dock
                .thenTask(new OpenModalTask('#ShipModal'))
                .thenTask(new SimpleTask(() => MapHelper.moveToTown(DockTowns[this._region])))
                .thenTask(new CloseModalTask('#ShipModal'));
        }

        if (this._subregion !== undefined && player.subregion !== this._subregion) {
            this._taskRunner = this._taskRunner
                .thenTask(new OpenModalTask('#SubregionModal'))
                .thenTask(new SimpleTask(() => {
                    player.subregion = this._subregion;
                }))
                .thenTask(new CloseModalTask('#SubregionModal'));
        }

        return this._taskRunner.run().finally(() => {
            Bot.blockers.map.unblock();
        });
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }
}

export default MoveToRegionTask;
