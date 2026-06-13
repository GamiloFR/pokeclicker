import App from '../../App';
import { CAPTURE_POKEMONS_BASE_REWARD } from '../../GameConstants';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class CapturePokemonsQuest extends Quest implements QuestInterface {

    constructor(capturesNeeded: number, reward: number) {
        super(capturesNeeded, reward);
        this.focus = App.game.statistics.totalPokemonCaptured;
    }

    public static generateData(): any[] {
        const amount = SeededRand.intBetween(100, 500);
        const reward = this.calcReward(amount);
        return [amount, reward];
    }

    private static calcReward(amount: number): number {
        const reward = amount * CAPTURE_POKEMONS_BASE_REWARD;
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Capture or hatch ${this.amount.toLocaleString('en-US')} Pokémon.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default CapturePokemonsQuest;
