import App from '../../../App';
import BerryType from '../../../enums/BerryType';
import PlotStage from '../../../enums/PlotStage';
import { MutationOptions } from '../Mutation';
import EvolveNearMutation from './EvolveNearMutation';
import { StrictBerryReq } from './GrowNearBerryStrictMutation';

/**
 * Mutation that requires at least some amount of specific Berry plants near an empty plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
class EvolveNearBerryMinMutation extends EvolveNearMutation {

    berryReqs: StrictBerryReq;

    constructor(mutationChance: number, mutatedBerry: BerryType, originalBerry: BerryType, berryReqs: StrictBerryReq, options?: MutationOptions) {
        super(mutationChance, mutatedBerry, originalBerry, options);
        this.berryReqs = berryReqs;
    }

    /**
     * Determines if the plots near fit the requirements
     * @param plots The list of nearby plots
     */
    nearPlotsFitRequirements(plots: number[]) {
        const currentReqs: StrictBerryReq = {};

        plots.forEach((idx) => {
            const plot = App.game.farming.plotList[idx];
            if (plot.stage() !== PlotStage.Berry) {
                return;
            }
            if (!currentReqs[plot.berry]) {
                currentReqs[plot.berry] = 1;
            } else {
                currentReqs[plot.berry] += 1;
            }
        });

        return Object.keys(this.berryReqs).every(key => {
            const berryReqsKey = key as unknown as keyof typeof this.berryReqs;
            return currentReqs[berryReqsKey] !== undefined && currentReqs[berryReqsKey] >= this.berryReqs[berryReqsKey];
        });
    }

    /**
     * Determines whether the player can even cause this mutation
     */
    get unlocked(): boolean {
        for (const berry in this.berryReqs) {
            if (!App.game.farming.unlockedBerries[berry]()) {
                return false;
            }
        }
        return super.unlocked;
    }

}

export default EvolveNearBerryMinMutation;
