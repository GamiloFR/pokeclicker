import { AchievementOption, AchievementType } from '../GameConstants';
import AchievementRequirement from '../requirements/AchievementRequirement';
import Safari from '../safari/Safari';

class SafariLevelRequirement extends AchievementRequirement {
    constructor(levelRequired: number) {
        super(levelRequired, AchievementOption.more, AchievementType.Safari);
    }

    public getProgress() {
        return Math.min(Safari.safariLevel(), this.requiredValue);
    }

    public hint(): string {
        return `Needs Safari Level ${this.requiredValue}.`;
    }
}

export default SafariLevelRequirement;
