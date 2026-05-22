import App from '../../App';
import { MINE_ITEMS_BASE_REWARD } from '../../GameConstants';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class MineItemsQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number) {
        super(amount, reward);
        this.focus = App.game.statistics.undergroundItemsFound;
    }

    public static canComplete() {
        return App.game.underground.canAccess();
    }

    public static generateData(): any[] {
        const amount = SeededRand.intBetween(3, 15);
        const reward = this.calcReward(amount);
        return [amount, reward];
    }

    private static calcReward(amount: number): number {
        const reward = Math.ceil(amount * MINE_ITEMS_BASE_REWARD);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        const suffix = this.amount > 1 ? 's' : '';
        return `Collect ${this.amount.toLocaleString('en-US')} item${suffix} from the Underground mines.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default MineItemsQuest;
