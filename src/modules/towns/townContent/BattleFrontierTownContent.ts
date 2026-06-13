import App from '../../App';
import TownContent from './TownContent';

class BattleFrontierTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-primary';
    }

    public onclick(): void {
        App.game.battleFrontier.enter();
    }

    public text() {
        return 'Enter Battle Frontier';
    }
}

export default BattleFrontierTownContent;
