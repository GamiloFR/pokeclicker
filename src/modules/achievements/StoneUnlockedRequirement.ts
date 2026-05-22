import App from '../App';
import { AchievementOption, MAX_AVAILABLE_REGION, Region, StoneType, camelCaseToString } from '../GameConstants';
import EvolutionStone from '../items/EvolutionStone';
import { ItemList } from '../items/ItemList';
import Requirement from '../requirements/Requirement';

class StoneUnlockedRequirement extends Requirement {
    stone: EvolutionStone;

    constructor(stoneType: StoneType, option: AchievementOption = AchievementOption.more) {
        const stone = ItemList[StoneType[stoneType]] as EvolutionStone;
        const requiredRegion = stone?.unlockedRegion ?? Region.none;
        super(requiredRegion, option);
        this.stone = stone;
    }

    public getProgress() {
        return Math.min(App.player.highestRegion(), this.requiredValue);
    }

    public isCompleted(): boolean {
        if (!this.stone) {
            return true;
        }
        return this.stone.unlockedRegion <= App.player.highestRegion();
    }

    public hint(): string {
        if (this.requiredValue > MAX_AVAILABLE_REGION) {
            return 'This item is from a region that hasn\'t been released yet.';
        }
        return `You need to reach the ${camelCaseToString(Region[this.requiredValue])} region.`;
    }
}

export default StoneUnlockedRequirement;
