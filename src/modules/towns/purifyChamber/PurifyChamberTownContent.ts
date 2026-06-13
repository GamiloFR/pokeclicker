import App from '../../App';
import areaStatus from '../../enums/AreaStatus';
import { ShadowStatus } from '../../GameConstants';
import TownContent from '../townContent/TownContent';
import PurifyChamber from './PurifyChamber';

class PurifyChamberTownContent extends TownContent {
    constructor() {
        super([PurifyChamber.requirements]);
    }
    public cssClass(): string {
        return 'btn btn-info';
    }
    public text(): string {
        return 'Purify Chamber';
    }
    public onclick(): void {
        PurifyChamber.openPurifyChamberModal();
    }

    public isUnlocked(): boolean {
        return PurifyChamber.requirements.isCompleted();
    }

    public areaStatus(): areaStatus[] {
        if (!this.isUnlocked()) {
            return [areaStatus.locked];
        }
        const canPurify = App.game.purifyChamber.currentFlow() >= App.game.purifyChamber.flowNeeded() && App.game.party.caughtPokemon.some(p => p.shadow == ShadowStatus.Shadow);
        return [canPurify ? areaStatus.incomplete : areaStatus.completed];
    }
}

export default PurifyChamberTownContent;
