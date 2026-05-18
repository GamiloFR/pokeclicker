import { ItemList } from '../items/ItemList';
import Requirement from '../requirements/Requirement';
import BattleFrontierMilestone from './BattleFrontierMilestone';

class BattleFrontierMilestoneItem extends BattleFrontierMilestone {
    constructor(stage: number, itemName: string, amount: number, requirement?: Requirement ) {
        super(
            stage,
            () => {
                if (ItemList[itemName]) {
                    ItemList[itemName].gain(amount);
                }
            },
            ItemList[itemName].image,
            `${amount.toLocaleString('en-US')} x ${ItemList[itemName].displayName}`,
            requirement,
        );
    }
}

export default BattleFrontierMilestoneItem;
