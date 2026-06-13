import App from '../../App';
import DungeonList from '../../dungeons/DungeonList';
import { GAIN_TOKENS_BASE_REWARD, getDungeonIndex, KantoDungeons } from '../../GameConstants';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class GainTokensQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number) {
        super(amount, reward);
        this.focus = App.game.statistics.totalDungeonTokens;
    }

    public static generateData(): any[] {
        const highestRegion = App.player.highestRegion();
        const dungeonAmount = Object.values(DungeonList).reduce((max, dungeon) => {
            if (App.game.statistics.dungeonsCleared[getDungeonIndex(dungeon.name)]()) {
                return Math.max(max, dungeon.tokenCost);
            }
            return max;
        }, 0) || DungeonList[KantoDungeons[0]].tokenCost;
        const baseAmount = dungeonAmount;
        const maxAmount = Math.ceil(baseAmount * (3 + highestRegion));
        const amount = SeededRand.intBetween(baseAmount, maxAmount);
        const reward = GainTokensQuest.calcReward(amount, baseAmount);
        return [amount, reward];
    }

    private static calcReward(amount: number, baseAmount: number): number {
        const reward =  Math.ceil(amount / baseAmount * GAIN_TOKENS_BASE_REWARD);
        return GainTokensQuest.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Gain ${this.amount.toLocaleString('en-US')} Dungeon Tokens.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default GainTokensQuest;
