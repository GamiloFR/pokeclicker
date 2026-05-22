import App from '../../App';
import { SHADOW_BASE_REWARD } from '../../GameConstants';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class CatchShadowsQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number) {
        super(amount, reward);
        this.focus = App.game.statistics.totalShadowPokemonCaptured;
    }

    public static canComplete() {
        return App.game.statistics.totalShadowPokemonCaptured() > 1;
    }

    public static generateData(): any[] {
        const amount = Math.ceil(Math.random() * 5);
        const reward = this.calcReward(amount);
        return [amount, reward];
    }

    private static calcReward(amount: number): number {
        const reward = Math.ceil(amount * SHADOW_BASE_REWARD);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Catch ${this.amount.toLocaleString('en-US')} Shadow Pokémon.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default CatchShadowsQuest;
