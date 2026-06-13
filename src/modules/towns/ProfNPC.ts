import AchievementHandler from '../achievements/AchievementHandler';
import App from '../App';
import { Region, StartingTowns, camelCaseToString } from '../GameConstants';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import NPC from './NPC';
import TownList from './TownList';

class ProfNPC extends NPC {

    constructor(
        public name: string,
        public region: Region,
        public pokedexCompleteText: string,
        public nextRegionUnlockedText: string,
        image?: string,
        requirement?: Requirement | MultiRequirement | OneFromManyRequirement,
    ) {
        super(name, undefined, { image: image, requirement: requirement });
    }

    get dialogHTML(): string {
        const requiresCompleteDex = App.game.challenges.list.requireCompletePokedex.active();
        const nextRegionUnlocked = TownList[StartingTowns[this.region + 1]]?.isUnlocked() ?? false;
        const completeDexAchievement = AchievementHandler.findByName(`${camelCaseToString(Region[this.region])} Master`);


        if (!nextRegionUnlocked) {
            return `<p>Hello, new Champion, you've come a long way!</p>
                    <p>Come see me once you've beat the Elite Four!</p>`;
        }

        let html = '';

        if (completeDexAchievement.isCompleted()) {
            html += `<p>${this.pokedexCompleteText}</p>`;
        } else {
            if (requiresCompleteDex) {
                html += '<p>To progress to the next region, you need to catch all Pokémon native to this region.</p>';
            }
            html += `<p>You still have ${completeDexAchievement.property.requiredValue - completeDexAchievement.getProgress()} left to catch in this region! You're almost there!</p>`;
        }

        if (nextRegionUnlocked && (completeDexAchievement.isCompleted() || !requiresCompleteDex)) {
            html += `<p>${this.nextRegionUnlockedText}</p>`;
        }

        return html;
    }
}

export default ProfNPC;
