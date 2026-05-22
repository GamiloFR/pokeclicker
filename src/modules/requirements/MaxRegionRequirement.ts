import App from '../App';
import { AchievementOption, camelCaseToString, MAX_AVAILABLE_REGION, Region } from '../GameConstants';
import Requirement from './Requirement';

export default class MaxRegionRequirement extends Requirement {
    constructor(maxRegion = Region.none, option: AchievementOption = AchievementOption.more) {
        super(maxRegion, option);
    }

    public getProgress() {
        return Math.min(App.player.highestRegion(), this.requiredValue);
    }

    public hint(): string {
        if (this.requiredValue > MAX_AVAILABLE_REGION) {
            return 'This is from a region that hasn\'t been released yet.';
        }
        return `You need to reach the ${camelCaseToString(Region[this.requiredValue])} region.`;
    }
}
