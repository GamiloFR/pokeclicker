import { AchievementOption, AchievementType, Region } from '../GameConstants';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import AchievementRequirement from '../requirements/AchievementRequirement';

class CaughtUniqueShinyPokemonsByRegionRequirement extends AchievementRequirement {
    public region: Region;
    constructor(region: Region, amount = 0, option: AchievementOption = AchievementOption.more) {
        super(amount || PokemonHelper.calcUniquePokemonsByRegion(region), option, AchievementType['Shiny Pokemon']);
        this.region = region;
    }

    public getProgress() {
        const caughtShiny = App.game.party.caughtPokemon.filter(p => p.id > 0 && p.shiny && PokemonHelper.calcNativeRegion(p.name) === this.region).map(p => Math.floor(p.id));
        return Math.min(new Set(caughtShiny).size, this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} unique Pokémon need to be caught.`;
    }

    public toString(): string {
        return `${super.toString()} ${this.region}`;
    }
}

export default CaughtUniqueShinyPokemonsByRegionRequirement;
