import { Feature } from '../DataStore/common/Feature';
import KeyItemType from '../enums/KeyItemType';
import Achievement from './Achievement';
import AchievementHandler from './AchievementHandler';
import SecretAchievement from './SecretAchievement';

class AchievementTracker implements Feature {
    name = 'AchievementTracker';
    saveKey = 'achievementTracker';

    defaults = {
        'trackedAchievement': null,
    };

    trackedAchievement = ko.observable<Achievement>(this.defaults.trackedAchievement);

    initialize(): void {

    }

    canAccess(): boolean {
        return App.game.keyItems.hasKeyItem(KeyItemType.Holo_caster);
    }

    update(): void {
    }

    nextAchievement(): void {
        if (!this.hasTrackedAchievement()) {
            return;
        }
        const tracked = this.trackedAchievement();
        let next = tracked;
        let max = Infinity;
        // Grabs the next tier achievement with the same custom signature.
        AchievementHandler.achievementList.forEach((current) => {
            if (`${tracked.property}` === `${current.property}`
                && tracked.property.requiredValue < current.property.requiredValue
                && current.property.requiredValue < max
                && !(current instanceof SecretAchievement)
            ) {
                next = current;
                max = current.property.requiredValue;
            }
        });
        if (tracked !== next) {
            this.trackAchievement(next);
        }
    }

    fromJSON(json: Record<string, any>): void {
        if (json == null) {
            return;
        }

        if (!!json.trackedAchievementName) {
            const achievement: Achievement = AchievementHandler.findByName(json.trackedAchievementName);
            if (!!achievement) {
                this.trackedAchievement(achievement);
            }
        }
    }

    toJSON(): Record<string, any> {
        return {
            trackedAchievementName: this.hasTrackedAchievement() ? this.trackedAchievement().name : null,
        };
    }

    trackAchievement(achievement: Achievement): void {
        this.trackedAchievement(achievement);
    }

    hasTrackedAchievement(): boolean {
        return this.trackedAchievement() !== null;
    }
}

export default AchievementTracker;
