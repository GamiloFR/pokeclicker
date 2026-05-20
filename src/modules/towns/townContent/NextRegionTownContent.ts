import { camelCaseToString, Region } from '../../GameConstants';
import MapHelper from '../../worldmap/MapHelper';
import TownContent from './TownContent';

class NextRegionTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-warning';
    }

    public isVisible() {
        return MapHelper.ableToTravel();
    }

    public onclick(): void {
        $('#nextRegionModal').modal('show');
    }

    public text() {
        return `Travel to ${camelCaseToString(Region[player.highestRegion() + 1])}`;
    }
}

export default NextRegionTownContent;
