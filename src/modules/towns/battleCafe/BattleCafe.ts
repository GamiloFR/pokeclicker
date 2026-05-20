import areaStatus from '../../enums/AreaStatus';
import ObtainedPokemonRequirement from '../../requirements/ObtainedPokemonRequirement';
import MapHelper from '../../worldmap/MapHelper';
import TownContent from '../townContent/TownContent';
import BattleCafeController from './BattleCafeController';

class BattleCafe extends TownContent {
    constructor() {
        super([new ObtainedPokemonRequirement('Milcery')]);
    }

    public cssClass() {
        return 'btn btn-info';
    }

    public onclick(): void {
        $('#battleCafeModal').modal('show');
    }

    public text() {
        return 'Battle Café';
    }

    public areaStatus(): areaStatus[] {
        const status = super.areaStatus();
        if (status.includes(areaStatus.locked)) {
            return [areaStatus.locked];
        }
        const alcremieList = Object.values(BattleCafeController.evolutions).flatMap(sweet => Object.values(sweet)).map(pi => pi.type);
        status.push(...MapHelper.getPokemonAreaStatus(alcremieList));
        return status;
    }
}

export default BattleCafe;
