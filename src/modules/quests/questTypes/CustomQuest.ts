import type { Observable } from 'knockout';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class CustomQuest extends Quest implements QuestInterface {

    constructor(amount: number, reward: number, description: string, focus: () => any) {
        super(amount, reward);
        this.customDescription = description;
        this.focus = ko.pureComputed(focus) as unknown as Observable<any>;
    }
}

export default CustomQuest;
