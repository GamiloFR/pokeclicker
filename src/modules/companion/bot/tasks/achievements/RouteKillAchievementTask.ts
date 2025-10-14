import ko, { Observable } from 'knockout';
import Achievement from '../../../../achievements/Achievement';
import { RegionRoute } from '../../../../routes';
import { RouteSelectSetting } from '../../settings/SelectSetting';
import AchievementTask from '../AchievementTask';
import Tasks from '../Tasks';

class RouteKillAchievementTask extends AchievementTask {
    private _route: Observable<RegionRoute>;

    public constructor(route?: RegionRoute) {
        super();
        this._route = ko.observable(route);
        this.settings = ko.observableArray([new RouteSelectSetting('route', 'Route', this._route)]);
    }

    get _achievement(): Achievement {
        return Tasks.findRouteKillAchievement(this._route());
    }
}

export default RouteKillAchievementTask;
