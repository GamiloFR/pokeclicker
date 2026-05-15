import { TmpNPCType } from '../../TemporaryScriptTypes';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class TalkToNPCQuest extends Quest implements QuestInterface {
    npc: TmpNPCType;

    constructor(npc: TmpNPCType, description: string, reward = 0) {
        super(1, reward);
        this.npc = npc;
        this.customDescription = description;
        this.focus = npc.talkedTo;
    }

    begin() {
        this.npc.talkedTo(false);
        super.begin();
    }
}

export default TalkToNPCQuest;
