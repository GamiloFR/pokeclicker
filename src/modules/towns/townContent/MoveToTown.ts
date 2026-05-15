import areaStatus from '../../enums/AreaStatus';
import Requirement from '../../requirements/Requirement';
import TownContent from './TownContent';

class MoveToTown extends TownContent {
    constructor(private townName: string, private visibleRequirement?: Requirement, private includeAreaStatus: boolean = true) {
        super([]);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }
    public text(): string {
        return this.townName;
    }
    public isVisible(): boolean {
        return this.visibleRequirement?.isCompleted() ?? true;
    }
    public onclick(): void {
        MapHelper.moveToTown(this.townName);
    }
    public isUnlocked(): boolean {
        return TownList[this.townName].isUnlocked();
    }

    public areaStatus(): areaStatus[] {
        if (this.includeAreaStatus) {
            return [areaStatus[MapHelper.calculateTownCssClass(this.townName) as keyof typeof areaStatus]];
        } else {
            return [areaStatus.completed];
        }
    }
}

export default MoveToTown;
