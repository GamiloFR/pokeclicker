import { RegionRoute } from '../../../routes';
import Task from '../Task';
import TaskRunner from '../TaskRunner';
import MoveToRegionTask from './MoveToRegionTask';
import SimpleTask from './utils/SimpleTask';

class MoveToRouteTask extends Task {
    private _route: RegionRoute;

    private _taskRunner: TaskRunner;

    public constructor(route: RegionRoute) {
        super();
        this._route = route;
    }

    public isCompleted(): boolean {
        return player.route === this._route.number;
    }

    public execute(): Promise<void> {
        this._taskRunner = TaskRunner.build()
            .thenTask(new MoveToRegionTask(this._route.region, this._route.subRegion))
            .thenTask(new SimpleTask(() => MapHelper.moveToRoute(this._route.number, this._route.region)));
        return this._taskRunner.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }
}

export default MoveToRouteTask;
