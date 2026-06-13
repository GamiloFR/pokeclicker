import CompanionFeature from '../Feature';
import AttackCheat from './cheat/AttackCheat';
import BerryCheat from './cheat/BerryCheat';
import ItemCheat from './cheat/ItemCheat';
import PokeballQuantityCheat from './cheat/PokeballQuantityCheat';
import PokeballRateCheat from './cheat/PokeballRateCheat';
import SafariCheat from './cheat/SafariCheat';
import ShinyCheat from './cheat/ShinyCheat';
import WalletCheat from './cheat/WalletCheat';

class Cheats implements CompanionFeature {
    public wallet: WalletCheat;
    public pokeballRate: PokeballRateCheat;
    public pokeballQuantity: PokeballQuantityCheat;
    public safari: SafariCheat;
    public attack: AttackCheat;
    public item: ItemCheat;
    public berry: BerryCheat;
    public shiny: ShinyCheat;

    public constructor() {
        this.wallet = new WalletCheat();
        this.pokeballRate = new PokeballRateCheat();
        this.pokeballQuantity = new PokeballQuantityCheat();
        this.safari = new SafariCheat();
        this.attack = new AttackCheat();
        this.item = new ItemCheat();
        this.berry = new BerryCheat();
        this.shiny = new ShinyCheat();
    }

    public fromJSON(json: Record<string, any>) {
        this.wallet.enabled(json.wallet ?? false);
        this.pokeballRate.enabled(json.pokeballRate ?? false);
        this.pokeballQuantity.enabled(json.pokeballQuantity ?? false);
        this.safari.enabled(json.safari ?? false);
        this.attack.enabled(json.attack ?? false);
        this.item.enabled(json.item ?? false);
        this.berry.enabled(json.berry ?? false);
        this.shiny.enabled(json.shiny ?? false);
    }

    public toJSON(): Record<string, any> {
        return {
            wallet: this.wallet.enabled(),
            pokeballRate: this.pokeballRate.enabled(),
            pokeballQuantity: this.pokeballQuantity.enabled(),
            safari: this.safari.enabled(),
            attack: this.attack.enabled(),
            item: this.item.enabled(),
            berry: this.berry.enabled(),
            shiny: this.shiny.enabled(),
        };
    }
}

export default Cheats;
