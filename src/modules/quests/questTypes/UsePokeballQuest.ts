import { DEFEAT_POKEMONS_BASE_REWARD, Pokeball } from '../../GameConstants';
import { ItemList } from '../../items/ItemList';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class UsePokeballQuest extends Quest implements QuestInterface {

    private pokeball: Pokeball;

    constructor(amount: number, reward: number, pokeball: Pokeball) {
        super(amount, reward);
        this.pokeball = pokeball;
        this.focus = App.game.statistics.pokeballsUsed[this.pokeball];
    }

    public static generateData(): any[] {
        const possiblePokeballs = [Pokeball.Pokeball];
        if (TownList['Lavender Town'].isUnlocked()) {
            possiblePokeballs.push(Pokeball.Greatball);
        }
        if (TownList['Fuchsia City'].isUnlocked()) {
            possiblePokeballs.push(Pokeball.Ultraball);
        }
        const pokeball = SeededRand.fromArray(possiblePokeballs);
        const amount = SeededRand.intBetween(100, 500);
        const reward = this.calcReward(amount, pokeball);
        return [amount, reward, pokeball];
    }

    private static calcReward(amount: number, pokeball: Pokeball) {
        // Reward for Greatballs is 4x Pokeballs, Ultraballs are 9x Pokeballs
        const reward = Math.ceil(amount * (pokeball + 1) * (pokeball + 1) * DEFEAT_POKEMONS_BASE_REWARD);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Use ${this.amount.toLocaleString('en-US')} ${ItemList[Pokeball[this.pokeball]].displayName}s.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        json.data.push(this.pokeball);
        return json;
    }
}

export default UsePokeballQuest;
