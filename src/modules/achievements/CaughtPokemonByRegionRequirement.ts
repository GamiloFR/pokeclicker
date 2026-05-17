import { AchievementOption, AchievementType, Region } from '../GameConstants';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import AchievementRequirement from '../requirements/AchievementRequirement';

class CaughtUniquePokemonsByRegionRequirement extends AchievementRequirement {
    public region: Region;

    constructor(region: Region, amount = 0, option: AchievementOption = AchievementOption.more) {
        super(amount || PokemonHelper.calcUniquePokemonsByRegion(region), option, AchievementType['Caught Pokemon']);
        this.region = region;
    }

    public getProgress() {
        return Math.min(new Set(App.game.party.caughtPokemon.filter(p => p.id > 0 && PokemonHelper.calcNativeRegion(p.name) === this.region).map(p => Math.floor(p.id))).size, this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} unique Pokémon need to be caught.`;
    }

    public toString(): string {
        return `${super.toString()} ${this.region}`;
    }
}

export default CaughtUniquePokemonsByRegionRequirement;
