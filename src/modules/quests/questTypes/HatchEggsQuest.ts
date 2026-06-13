import App from '../../App';
import { HATCH_EGGS_BASE_REWARD, pluralizeString } from '../../GameConstants';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class HatchEggsQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number) {
        super(amount, reward);
        this.focus = App.game.statistics.totalPokemonHatched;
    }

    public static canComplete() {
        return App.game.breeding.canAccess();
    }

    public static generateData(): any[] {
        const highestRegion = App.player.highestRegion();
        const amount = SeededRand.intBetween(1, (10 + (5 * highestRegion)));
        const reward = this.calcReward(amount);
        return [amount, reward];
    }

    private static calcReward(amount: number): number {
        const reward = Math.ceil(amount * HATCH_EGGS_BASE_REWARD);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Hatch ${this.amount.toLocaleString('en-US')} ${pluralizeString('Egg', this.amount)}.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        return json;
    }
}

export default HatchEggsQuest;
