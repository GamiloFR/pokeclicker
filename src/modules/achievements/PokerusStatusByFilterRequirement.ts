import { AchievementOption, AchievementType, Pokerus } from '../GameConstants';
import PartyPokemon from '../party/PartyPokemon';
import AchievementRequirement from '../requirements/AchievementRequirement';

class PokerusStatusByFilterRequirement extends AchievementRequirement {
    constructor(
        public filter: (pokemon: PartyPokemon) => boolean,
        amount: number,
        public statusRequired: Pokerus,
    ) {
        super(amount, AchievementOption.more, AchievementType.Pokerus);
    }

    public getProgress() {
        return Math.min(App.game.party.caughtPokemon.filter(p => this.filter(p) && p.pokerus >= this.statusRequired).length, this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} Pokémon needs to be infected.`;
    }
}

export default PokerusStatusByFilterRequirement;
