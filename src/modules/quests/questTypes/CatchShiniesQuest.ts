import App from '../../App';
import { SHINY_BASE_REWARD } from '../../GameConstants';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class CatchShiniesQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number) {
        super(amount, reward);
        this.focus = App.game.statistics.totalShinyPokemonCaptured;
    }

    public static generateData(): any[] {
        const amount = 1;
        const reward = this.calcReward(amount);
        return [amount, reward];
    }

    private static calcReward(amount: number): number {
        const reward = Math.ceil(amount * SHINY_BASE_REWARD);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Capture or hatch ${this.amount.toLocaleString('en-US')} shiny Pokémon.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default CatchShiniesQuest;
