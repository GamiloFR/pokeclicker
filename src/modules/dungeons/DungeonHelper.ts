import AchievementHandler from '../achievements/AchievementHandler';
import { getDungeonIndex } from '../GameConstants';
import ClearDungeonRequirement from '../requirements/ClearDungeonRequirement';
import Dungeon from './Dungeon';

class DungeonHelper {
    public static isAchievementsComplete(dungeon: Dungeon) {
        const dungeonIndex = getDungeonIndex(dungeon.name);
        return AchievementHandler.achievementList.every(achievement => {
            return !(achievement.property instanceof ClearDungeonRequirement && achievement.property.dungeonIndex === dungeonIndex && !achievement.isCompleted());
        });
    }
}

export default DungeonHelper;
