import { Pokeball } from '../../GameConstants';
import { ItemList } from '../../items/ItemList';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class BuyPokeballsQuest extends Quest implements QuestInterface {

    private pokeball: Pokeball;

    constructor(amount: number, reward: number, pokeball: Pokeball) {
        super(amount, reward);
        this.pokeball = pokeball;
        this.focus = App.game.statistics.pokeballsPurchased[this.pokeball];
    }

    get defaultDescription(): string {
        return `Buy ${this.amount.toLocaleString('en-US')} ${ItemList[Pokeball[this.pokeball]].displayName}s.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        json.data.push(this.pokeball);
        return json;
    }
}

export default BuyPokeballsQuest;
