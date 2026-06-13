import App from '../../App';
import areaStatus from '../../enums/AreaStatus';
import { Starter } from '../../GameConstants';
import TownContent from './TownContent';

class PickStarterContent extends TownContent {
    public cssClass() {
        return 'btn btn-warning';
    }

    public isVisible(): boolean {
        return App.player.regionStarters[App.player.region]() == Starter.None;
    }

    public onclick() {
        $('#pickStarterModal').modal('show');
    }

    public areaStatus(): areaStatus[] {
        return [this.isVisible() ? areaStatus.incomplete : areaStatus.completed];
    }

    public text() {
        return 'Pick your Starter';
    }
}

export default PickStarterContent;
