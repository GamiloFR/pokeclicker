import AuraType from '../../enums/AuraType';
import PlotStage from '../../enums/PlotStage';

class Aura {

    constructor(
        public auraType: AuraType,
        public auraMultipliers: number[],
    ) { }

    getAuraValue(stage: PlotStage): number {
        if (!stage || stage < PlotStage.Taller) {
            return 1;
        }
        return this.auraMultipliers[stage - 2];
    }

}

export default Aura;
