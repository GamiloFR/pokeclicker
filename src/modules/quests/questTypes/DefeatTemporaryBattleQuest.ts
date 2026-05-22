import App from '../../App';
import { getTemporaryBattlesIndex } from '../../GameConstants';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class DefeatTemporaryBattleQuest extends Quest implements QuestInterface {

    constructor(public temporaryBattle: string, customDescription: string, reward = 0) {
        super(1, reward);
        this.focus = App.game.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(this.temporaryBattle)];
        this.customDescription = customDescription;
    }
}

export default DefeatTemporaryBattleQuest;
