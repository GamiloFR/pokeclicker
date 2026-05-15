import areaStatus from '../../enums/AreaStatus';
import NotificationConstants from '../../notifications/NotificationConstants';
import Notifier from '../../notifications/Notifier';
import DevelopmentRequirement from '../../requirements/DevelopmentRequirement';
import MultiRequirement from '../../requirements/MultiRequirement';
import OneFromManyRequirement from '../../requirements/OneFromManyRequirement';
import Requirement from '../../requirements/Requirement';
import Town from '../Town';

abstract class TownContent {
    public tooltip?: string = undefined;

    public requirements: (Requirement | OneFromManyRequirement)[];
    public parent?: Town;

    constructor(requirements: Requirement[] = []) {
        this.requirements = requirements;
    }

    public abstract cssClass(): string;
    public abstract text(): string;
    public abstract onclick(): void;

    public addParent(parent: Town) {
        this.parent = parent;
    }

    public areaStatus() : areaStatus[] {
        return [this.isUnlocked() ? areaStatus.completed : areaStatus.locked];
    }

    public isUnlocked(): boolean {
        return this.requirements.every(requirement => requirement.isCompleted());
    }

    public clears(): number | undefined {
        return undefined;
    }

    public isVisible(): boolean {
        if (this.requirements.some(r => r instanceof DevelopmentRequirement || (r instanceof MultiRequirement && r.requirements.some(r2 => r2 instanceof DevelopmentRequirement)))) {
            return this.isUnlocked();
        }
        return true;
    }

    public protectedOnclick(): void {
        if (!this.isVisible()) {
            return;
        }
        const reqsList: string[] = [];
        this.requirements?.forEach(requirement => {
            if (!requirement.isCompleted()) {
                reqsList.push(requirement.hint());
            }
        });
        if (reqsList.length) {
            Notifier.notify({
                message: `You don't have access yet.\n<i>${reqsList.join('\n')}</i>`,
                type: NotificationConstants.NotificationOption.warning,
            });
        } else {
            this.onclick();
        }
    }
}

export default TownContent;
