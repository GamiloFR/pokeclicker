import ko, { Observable } from 'knockout';
import Achievement from '../../../../achievements/Achievement';
import Dungeon from '../../../../dungeons/Dungeon';
import { DungeonSelectSetting } from '../../settings/SelectSetting';
import AchievementTask from '../AchievementTask';
import Tasks from '../Tasks';

class ClearDungeonAchievementTask extends AchievementTask {
    public dungeon: Observable<Dungeon>;

    public constructor(dungeon?: Dungeon) {
        super();
        this.dungeon = ko.observable(dungeon);
        this.settings = ko.observableArray([new DungeonSelectSetting('dungeon', 'Dungeon', this.dungeon)]);
    }

    get _achievement(): Achievement {
        return Tasks.findClearDungeonAchievement(this.dungeon());
    }
}

export default ClearDungeonAchievementTask;
