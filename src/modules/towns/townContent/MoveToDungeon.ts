import Dungeon from '../../dungeons/Dungeon';
import areaStatus from '../../enums/AreaStatus';
import { getDungeonIndex } from '../../GameConstants';
import QuestLineHelper from '../../quests/QuestLineHelper';
import Requirement from '../../requirements/Requirement';
import TownContent from './TownContent';

class MoveToDungeon extends TownContent {
    constructor(private dungeon: Dungeon, private visibleRequirement?: Requirement) {
        super([]);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.dungeon.name;
    }

    public isVisible(): boolean {
        return this.visibleRequirement?.isCompleted() ?? true;
    }

    public onclick(): void {
        MapHelper.moveToTown(this.dungeon.name);
    }

    public isUnlocked(): boolean {
        return TownList[this.dungeon.name].isUnlocked();
    }

    public areaStatus(): areaStatus[] {
        return [areaStatus[MapHelper.calculateTownCssClass(this.dungeon.name) as keyof typeof areaStatus]];
    }

    public clears() {
        if (!QuestLineHelper.isQuestLineCompleted('Tutorial Quests')) {
            return undefined;
        }
        return App.game.statistics.dungeonsCleared[getDungeonIndex(this.dungeon.name)]();
    }
}

export default MoveToDungeon;
