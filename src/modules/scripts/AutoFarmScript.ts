import { Observable } from 'knockout';
import BerryType from '../enums/BerryType';
import PlotStage from '../enums/PlotStage';
import { FARM_PLOT_HEIGHT, FARM_PLOT_WIDTH } from '../GameConstants';
import { TmpPlotType } from '../TemporaryScriptTypes';
import Script from './Script';
import { parseTime } from './utils';

class AutoFarmScriptClass extends Script {
    public setup: BerryType[];
    public readonly harvestWhenReady: Observable<boolean>;

    public constructor() {
        super('autofarm', 'Auto-farm');
        this.setup = new Array(FARM_PLOT_WIDTH * FARM_PLOT_HEIGHT).fill(BerryType.None);
        this.harvestWhenReady = ko.observable(false);
    }

    public isUnlocked(): boolean {
        return App.game.farming.canAccess();
    }

    public load(value: any) {
        const { active, setup } = value;
        if (active) {
            super.load(active);
        }

        if (setup) {
            this.setup = setup;
        }
    }

    public store(): any {
        return {
            active: super.store(),
            setup: this.setup,
        };
    }

    protected tick() {
        // Check if a plot can be harvested
        const plotToHarvest = App.game.farming.plotList.findIndex(plot => this.shouldHarvestPlot(plot));
        if (plotToHarvest !== -1) {
            App.game.farming.harvest(plotToHarvest);
            return;
        }

        // Checks if it's time to plant the next berry
        const { stage, timeLeft } = App.game.farming.plotList
            .filter(plot => !plot.isEmpty())
            .map(plot => ({ stage: plot.stage(), timeLeft: parseTime(plot.formattedTimeLeft()) }))
            .reduce(
                (dataMin, data) => {
                    if (dataMin.timeLeft === -1
                        || data.stage > dataMin.stage
                        || (data.stage === dataMin.stage && data.timeLeft < dataMin.timeLeft)
                    ) {
                        return data;
                    }
                    return dataMin;
                },
                { stage: PlotStage.Seed, timeLeft: -1 },
            );
        if (timeLeft !== -1) {
            const plotToPlant = this.setup.findIndex((berryType, index) => {
                if (berryType === BerryType.None || !App.game.farming.plotList[index].isEmpty()) {
                    return false;
                }

                const data = App.game.farming.berryData[berryType];
                if (stage < PlotStage.Berry) {
                    return data.growthTime[PlotStage.Bloom] >= timeLeft;
                }
                // If one berry is ready to harvest, we should plant the next berry before it dies
                return data.growthTime[PlotStage.Bloom] < timeLeft;
            });
            if (plotToPlant !== -1) {
                App.game.farming.plant(plotToPlant, this.setup[plotToPlant]);
            }
            return;
        }

        // Plant the berry in setup with the longest growth time to bloom
        const plotToPlant = this.setup.reduce(
            (indexToPlant, berry, index, setup) => {
                const maxGrowthTime = indexToPlant !== -1
                    ? App.game.farming.berryData[setup[indexToPlant]].growthTime[PlotStage.Bloom]
                    : 0;
                if (berry !== BerryType.None && maxGrowthTime < App.game.farming.berryData[berry].growthTime[PlotStage.Bloom]) {
                    return index;
                }
                return indexToPlant;
            }, -1,
        );
        if (plotToPlant !== -1) {
            App.game.farming.plant(plotToPlant, this.setup[plotToPlant]);
        }
    }

    /**
     * Checks if the plot should be harvested. Depending on the setting `harvestWhenReady`,
     * the plot is harvested when it enters stage berry, or when its 'time to death' is less than 5s.
     * @private
     */
    private shouldHarvestPlot(plot: TmpPlotType): boolean {
        if (plot.isEmpty()) {
            return false;
        } else if (this.harvestWhenReady()) {
            return plot.stage() === PlotStage.Berry;
        }
        return parseTime(plot.formattedTimeLeft()) < 5;
    }
}

const AutoFarmScript = new AutoFarmScriptClass();

export default AutoFarmScript;
