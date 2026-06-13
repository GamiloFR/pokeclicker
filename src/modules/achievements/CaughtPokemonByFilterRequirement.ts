import App from '../App';
import { AchievementOption, AchievementType } from '../GameConstants';
import PartyPokemon from '../party/PartyPokemon';
import AchievementRequirement from '../requirements/AchievementRequirement';

class CaughtUniquePokemonByFilterRequirement extends AchievementRequirement {
    constructor(
        public filter: (pokemon: PartyPokemon) => boolean,
        private hintText: string,
        amount: number,
        public shiny = false,
        option: AchievementOption = AchievementOption.more,
    ) {
        super(amount, option, AchievementType[shiny ? 'Shiny Pokemon' : 'Caught Pokemon']);
    }

    public getProgress() {
        return Math.min(App.game.party.caughtPokemon.filter(p => this.filter(p) && (p.shiny || !this.shiny)).length, this.requiredValue);
    }

    public hint(): string {
        return this.hintText;
    }

    public toString(): string {
        return `${super.toString()} ${this.filter} ${this.shiny}`;
    }
}

export default CaughtUniquePokemonByFilterRequirement;
