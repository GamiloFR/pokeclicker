import App from '../App';
import PokemonType from '../enums/PokemonType';
import { zCrystalItemType } from '../GameConstants';
import Notifier from '../notifications/Notifier';

class ZMovesHelper {
    // Alola z crystals, also used for temp battles
    public static zCrystalGet(crystalType: PokemonType) {
        return function () {
            App.player.gainItem(zCrystalItemType[crystalType], 1);
            Notifier.notify({
                title: 'Z Crystal',
                message: `<img width="60" src="assets/images/items/zCrystal/${zCrystalItemType[crystalType]}.svg"/> You got the ${zCrystalItemType[crystalType]}!`,
                timeout: 1e4,
            });
        };
    }
}

export default ZMovesHelper;
