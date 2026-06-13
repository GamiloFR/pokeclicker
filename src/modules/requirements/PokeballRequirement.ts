import App from '../App';
import * as GameConstants from '../GameConstants';
import AchievementRequirement from './AchievementRequirement';

export default class PokeballRequirement extends AchievementRequirement {
    constructor(value: number, public pokeball: GameConstants.PokeballType, option: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(value, option, GameConstants.AchievementType['Poke Balls']);
    }

    public getProgress() {
        return Math.min(App.game.statistics.pokeballsObtained[this.pokeball](), this.requiredValue);
    }

    public hint(): string {
        return `${this.requiredValue} ${GameConstants.PokeballType[this.pokeball]} need to be obtained.`;
    }

    public toString(): string {
        return `${super.toString()} ${this.pokeball}`;
    }
}
