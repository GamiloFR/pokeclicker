import App from '../App';
import areaStatus from '../enums/AreaStatus';
import { BulletinBoards } from '../GameConstants';
import QuestLineCompletedRequirement from '../requirements/QuestLineCompletedRequirement';
import TownContent from '../towns/townContent/TownContent';
import QuestLineState from './QuestLineState';

class BulletinBoard extends TownContent {
    public static selectedBulletinBoard = ko.observable<BulletinBoard>();

    constructor(public board: BulletinBoards) {
        super([new QuestLineCompletedRequirement('Tutorial Quests')]);
    }

    public static getLocation(bulletinBoard: BulletinBoards) {
        switch (bulletinBoard) {
            case BulletinBoards.Sevii4567:
                return 'Sevii Islands 4567';
            case BulletinBoards.Hoppy:
                return 'Magikarp Jump';
            case BulletinBoards.Armor:
                return 'Isle of Armor';
            case BulletinBoards.Crown:
                return 'Crown Tundra';
            default:
                return BulletinBoards[bulletinBoard];
        }
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return 'Bulletin Board';
    }

    public onclick(): void {
        BulletinBoard.selectedBulletinBoard(this);
        $('#bulletinBoardModal').modal('show');
    }

    public areaStatus() {
        if (this.getQuests().filter((q) => q.state() == QuestLineState.inactive).length) {
            return [areaStatus.incomplete];
        }
        return [areaStatus.completed];
    }

    public getQuests() {
        return App.game.quests.questLines().filter(q => {
            if (q.state() == QuestLineState.ended) {
                return false;
            }
            if (q.requirement ? (!q.requirement.isCompleted() && q.state() !== QuestLineState.suspended) : false) {
                return false;
            }
            if (q.bulletinBoard !== BulletinBoards.All && q.bulletinBoard !== this.board) {
                return false;
            }
            return true;
        });
    }
}

export default BulletinBoard;
