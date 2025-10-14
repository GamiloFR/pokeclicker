import ko, { Observable } from 'knockout';
import Achievement from '../../../../achievements/Achievement';
import Gym from '../../../../gym/Gym';
import { GymSelectSetting } from '../../settings/SelectSetting';
import AchievementTask from '../AchievementTask';
import Tasks from '../Tasks';

class ClearGymAchievementTask extends AchievementTask {
    public gym: Observable<Gym>;

    public constructor(gym?: Gym) {
        super();
        this.gym = ko.observable(gym);
        this.settings = ko.observableArray([new GymSelectSetting('gym', 'Gym', this.gym)]);
    }

    get _achievement(): Achievement {
        return Tasks.findClearGymAchievement(this.gym());
    }
}

export default ClearGymAchievementTask;
