import { ItemList } from '../items/ItemList';
import { ItemNameType } from '../items/ItemNameType';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import DiscordCode from './DiscordCode';

class DiscordItemCode extends DiscordCode {
    constructor(itemName: ItemNameType, description: string, amount = 1) {
        const item = ItemList[itemName];
        const claimFunction = () => {
            item.gain(amount);
            // Notify that the code was activated successfully
            Notifier.notify({
                message: `You obtained ${amount > 1 ? `${amount}×` : ''}${item.displayName}!`,
                type: NotificationConstants.NotificationOption.success,
                timeout: 1e4,
            });
            return true;
        };
        super(item.displayName, item.image, item.basePrice, description, claimFunction);
    }
}

export default DiscordItemCode;
