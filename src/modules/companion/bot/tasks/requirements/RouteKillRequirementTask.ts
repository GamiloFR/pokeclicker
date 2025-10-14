import Battle from '../../../../battles/Battle';
import RouteKillRequirement from '../../../../requirements/RouteKillRequirement';
import { Routes } from '../../../../routes';
import Bot from '../../Bot';
import TaskRunner from '../../TaskRunner';
import MoveToRouteTask from '../MoveToRouteTask';
import RequirementTask from '../RequirementTask';

class RouteKillRequirementTask extends RequirementTask<RouteKillRequirement> {
    private _taskRunner: TaskRunner;

    public execute(): Promise<void> {
        Bot.blockers.map.block();
        Bot.blockers.route.block();

        const route = Routes.getRoute(this.requirement.region, this.requirement.route);
        this._taskRunner = TaskRunner.build()
            .thenTask(new MoveToRouteTask(route))
            .then(() => {
                Bot.blockers.route.block();
                Bot.blockers.map.block();
            })
            .thenRepeat(() => this._tick(), () => this.isCompleted())
            .finally(() => {
                Bot.blockers.route.unblock();
                Bot.blockers.map.unblock();
            });
        return this._taskRunner.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }

    private _tick(): void {
        if (!Battle.catching()) {
            Battle.clickAttack();
        }
    }
}

export default RouteKillRequirementTask;
