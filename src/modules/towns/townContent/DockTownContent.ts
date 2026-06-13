import App from '../../App';
import MapHelper from '../../worldmap/MapHelper';
import TownContent from './TownContent';

class DockTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-info';
    }

    public isVisible() {
        return App.player.highestRegion() > 0;
    }

    public onclick(): void {
        MapHelper.openShipModal();
    }

    public text() {
        return 'Dock';
    }
}

export default DockTownContent;
