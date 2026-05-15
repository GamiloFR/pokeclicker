import type { Computed } from 'knockout';
import BerryType from '../enums/BerryType';
import PlotStage from '../enums/PlotStage';
import { Currency, FARM_PLOT_HEIGHT, FARM_PLOT_WIDTH, formatTimeFullLetters, HOUR, MINUTE, SECOND, TICK_TIME } from '../GameConstants';
import GameHelper from '../GameHelper';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Rand from '../utilities/Rand';
import SeededRand from '../utilities/SeededRand';
import Amount from '../wallet/Amount';

const FarmHandSkills = [
    'energy',
    'efficiency',
    'accuracy',
    'cost',
];

export enum FarmHandSpeeds {
    Fastest,
    Faster,
    Fast,
    AboveAverage,
    Average,
    BelowAverage,
    Slow,
    Slower,
    Slowest,
    SnailPaced,
    Lazy,
}

/*
TODO:
Work in levels/experience somehow
Use accuracy to decide if they plant the right berry or plant a berry at all (still use up energy?)
Use accuracy to decide if they harvest a berry by accident? (still use up energy?)
*/
export enum FarmHandBerryType {
    'Random' = -3,
    'Replant' = -2,
}

export type FarmHandBerryTypes = FarmHandBerryType | BerryType;

class FarmHand {
    public defaults = {
        focus: BerryType.None,
        shouldHarvest: false,
        workTicks: 0,
        costTicks: 0,
        energy: 0,
        hired: false,
        plots: [],
        name: undefined,
        shouldCatch : false,
    };
    // Maximum Efficiency value
    public maxEfficiency = 50;
    // Negative value so they are charged on the first tick and work on the first tick
    public workTicks = ko.observable(-TICK_TIME).extend({ numeric: 0 });
    public costTicks = ko.observable(-TICK_TIME).extend({ numeric: 0 });
    // When to charge the player whatever the cost is, when to work
    public workTick;
    public costTick = HOUR;

    public cost = new Amount(+0, Currency.farmPoint);
    public trainerSprite = 0;
    public focus = ko.observable<FarmHandBerryTypes>(BerryType.None);
    public shouldHarvest = ko.observable(false).extend({ boolean: null });
    public energy = ko.observable(0).extend({ numeric: 0 });
    public hired = ko.observable(false).extend({ boolean: null });
    public plots = ko.observableArray(new Array(FARM_PLOT_WIDTH * FARM_PLOT_HEIGHT).fill(0).map((v, i) => i));
    public tooltip: Computed<string>;
    public shouldCatch = ko.observable(false);
    // public level: number;
    // public experience: number;

    constructor(
        public name: string,
        public maxEnergy: number, // 10 - 100
        public efficiency: number, // 1 - 50?
        public speed: FarmHandSpeeds,
        public accuracy: number, // 0 - 10 (80% - 100%)
        cost: number, // 0 - 10? (can go higher if needed)
        public unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement,
    ) {
        SeededRand.seed(parseInt(this.name, 36));
        this.trainerSprite = SeededRand.intBetween(0, 118);
        // Negative value so they are charged on the first tick and work on the first tick
        this.workTicks(-TICK_TIME);
        this.costTicks(-TICK_TIME);
        // Set initial energy to maximum energy
        this.energy(this.maxEnergy);
        // Calculate how much to charge the player in farm points
        this.cost = new Amount(+Math.pow(100, 1 + cost * 0.08).toPrecision(2), Currency.farmPoint);
        // Calculate how often they work
        this.workTick = this.calcWorkTick(this.speed);

        this.tooltip = ko.pureComputed(() => `<strong>${this.name}</strong><br/>
            Energy: ${this.energy()}/${this.maxEnergy}<br/>
            Work Cycle: ${formatTimeFullLetters((this.workTick - this.workTicks()) / SECOND)}<br/>
            Next Payment: ${formatTimeFullLetters((this.costTick - this.costTicks()) / SECOND)}`,
        );
    }

    private calcWorkTick(speed: FarmHandSpeeds): number {
        speed = ((speed + 1) * 0.03) + 1;
        let time = Math.pow(MINUTE, speed);
        time -= time > 5 * MINUTE ? time % MINUTE : time % (30 * SECOND);
        return time;
    }

    isUnlocked(): boolean {
        return this.unlockRequirement?.isCompleted() ?? true;
    }

    togglePlot(plotIndex: number): void {
        const index = this.plots().findIndex(p => p == plotIndex);
        if (index >= 0) {
            this.plots.splice(index, 1);
        } else {
            this.plots.push(plotIndex);
        }
        this.plots.sort((a, b) => a - b);
    }

    hire(): void {
        // Negative value so they are charged on the first tick and work on the first tick
        this.workTicks(-TICK_TIME);
        this.costTicks(-TICK_TIME);

        // Check the player has enough Farm Points to hire this Farm Hand
        if (!App.game.wallet.hasAmount(this.cost)) {
            Notifier.notify({
                title: `[FARM HAND] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
                message: `You don't have enough Farm Points to hire me...\nCost: <img src="./assets/images/currency/farmPoint.svg" height="24px"/> ${this.cost.amount.toLocaleString('en-US')}`,
                type: NotificationConstants.NotificationOption.warning,
                timeout: 30 * SECOND,
            });
            return;
        }
        // Farm hand is hired
        this.hired(true);
        Notifier.notify({
            title: `[FARM HAND] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
            message: 'Thanks for hiring me,\nI won\'t let you down!',
            type: NotificationConstants.NotificationOption.success,
            timeout: 30 * SECOND,
            setting: NotificationConstants.NotificationSetting.Farming.farm_hand,
        });
    }

    fire(): void {
        Notifier.notify({
            title: `[FARM HAND] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
            message: 'Thanks for the work.\nLet me know when you\'re hiring again!',
            type: NotificationConstants.NotificationOption.info,
            timeout: 30 * SECOND,
            setting: NotificationConstants.NotificationSetting.Farming.farm_hand,
        });
        this.hired(false);
        return;
    }

    tick(): void {

        if (!this.hired() && this.energy() >= this.maxEnergy) {
            return;
        }
        // Charge player when cost tick reached
        GameHelper.incrementObservable(this.costTicks, TICK_TIME);
        if (this.costTicks() % this.costTick < TICK_TIME && this.hired()) {
            this.costTicks(0);
            this.charge();
        }

        // Work/Restore energy when work ticks reached
        GameHelper.incrementObservable(this.workTicks, TICK_TIME);
        if (this.workTicks() % this.workTick < TICK_TIME) {
            this.workTicks(0);
            if (this.hired()) {
                this.work();
            } else if (this.energy() < this.maxEnergy) {
                this.addEnergy();
            }

        }
    }

    work(): void {
        // Out of energy cannot work right now..
        if (!this.energy()) {
            this.addEnergy();
            return;
        }

        // flip this if they worked, otherwise restore energy points
        let worked = false;
        let workTimes = this.efficiency;

        // Harvesting berries
        if (this.shouldHarvest()) {
            let readyPlotIndex;
            do {
                readyPlotIndex = App.game.farming.plotList
                    .findIndex((p, i) => p.isUnlocked && p.berry !== BerryType.None && p.stage() >= PlotStage.Berry && this.plots().includes(i) && !p.isSafeLocked);
                if (readyPlotIndex >= 0 && workTimes > 0) {
                    const berry = App.game.farming.plotList[readyPlotIndex].berry;
                    App.game.farming.harvest(readyPlotIndex);
                    workTimes--;
                    worked = true;
                    if (this.focus() == FarmHandBerryType.Replant) {
                        App.game.farming.plant(readyPlotIndex, berry);
                        workTimes--;
                    }
                }
            } while (readyPlotIndex >= 0 && workTimes > 0);
        }

        // Planting berries
        if (this.focus() != BerryType.None) {
            let emptyPlotIndex;
            let berry;
            do {
                // Find empty plots
                emptyPlotIndex = App.game.farming.plotList.findIndex((p, i) => p.isUnlocked && p.berry == BerryType.None && this.plots().includes(i) && !p.isSafeLocked);
                // Plant the berry
                if (emptyPlotIndex >= 0 && workTimes > 0) {
                    // Plant the expected berry
                    switch (this.focus()) {
                        case FarmHandBerryType.Replant: // Re-plant last berry used
                            berry = App.game.farming.plotList[emptyPlotIndex].lastPlanted;
                            break;
                        case FarmHandBerryType.Random: // Plant a random berry
                            berry = Rand.fromArray(App.game.farming.farmHands.availableBerries().filter(b => b >= 0));
                            break;
                        default:
                            berry = this.focus();
                    }
                    // If we somehow didn't find a berry to use, just plant a Cheri..
                    berry = berry < 0 ? BerryType.Cheri : berry;
                    // Only plant and work if the player has a berry to plant
                    if (App.game.farming.hasBerry(berry)) {
                        App.game.farming.plant(emptyPlotIndex, berry as BerryType);
                        workTimes--;
                        worked = true;
                    }
                }
            } while (emptyPlotIndex >= 0 && workTimes > 0 && App.game.farming.hasBerry(berry));
        }

        if (this.shouldCatch()) {
            // First handle plots whose wanderer might flee soon
            const prioPlots = App.game.farming.plotList.filter(p => p.wanderer && p.wanderer.distractTime() > 0 && !p.wanderer.catching());
            while (prioPlots.length > 0 && workTimes > 0) {
                const plot = prioPlots.shift();
                if (this.plots().includes(plot.index)) {
                    App.game.farming.handleWanderer(plot);
                    workTimes--;
                    worked = true;
                }
            }
            // Then handle any plot
            const plots = App.game.farming.plotList.filter(p => p.wanderer && !p.wanderer.catching());
            while (plots.length > 0 && workTimes > 0) {
                const plot = plots.shift();
                if (this.plots().includes(plot.index)) {
                    App.game.farming.handleWanderer(plot);
                    workTimes--;
                    worked = true;
                }
            }
        }

        if (!worked) {
            this.addEnergy();
        } else {
            this.useEnergy();
        }
    }

    addEnergy(amt = 1): void {
        // Only allow up to maximum value
        this.energy(Math.min(this.maxEnergy, this.energy() + amt));
    }

    useEnergy(amt = 1): void {
        // Only allow to go down to 0
        this.energy(Math.max(0, this.energy() - amt));
    }

    charge(): void {
        // Charge the player if they can afford it, otherwise notify that they cannot
        if (!App.game.wallet.loseAmount(this.cost)) {
            Notifier.notify({
                title: `[FARM HAND] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
                message: `It looks like you are a little short on Farm Points right now...\nLet me know when you're hiring again!\nCost: <img src="./assets/images/currency/farmPoint.svg" height="24px"/> ${this.cost.amount.toLocaleString('en-US')}`,
                type: NotificationConstants.NotificationOption.danger,
                timeout: 30 * MINUTE,
            });
            this.hired(false);
            App.game.logbook.newLog(
                LogBookTypes.OTHER,
                createLogContent.unableToPayFarmHand({ name: this.name }),
            );
            return;
        }
        // Charge the player for the hour
        Notifier.notify({
            title: `[FARM HAND] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
            message: `Here's your bill for the hour!\nCost: <img src="./assets/images/currency/farmPoint.svg" height="24px"/> ${this.cost.amount.toLocaleString('en-US')}`,
            type: NotificationConstants.NotificationOption.info,
            timeout: 30 * SECOND,
        });
    }

    toJSON(): Record<string, any> {
        const output = {
            focus: this.focus(),
            shouldHarvest: this.shouldHarvest(),
            workTicks: this.workTicks(),
            costTicks: this.costTicks(),
            energy: this.energy(),
            hired: this.hired(),
            plots: this.plots(),
            // It uses the name to look up the farmhand on load
            name: this.name,
            shouldCatch: this.shouldCatch(),
        };

        // Don't save anything that is the default option
        Object.entries(output).forEach(([key, value]) => {
            if (value === this.defaults[key]) {
                delete output[key];
            }
        });

        return output;
    }

    fromJSON(json: Record<string, any>): void {
        if (!json) {
            return;
        }
        this.focus(json.focus ?? this.defaults.focus);
        this.shouldHarvest(json.shouldHarvest ?? this.defaults.shouldHarvest);
        this.workTicks(json.workTicks ?? this.defaults.workTicks);
        this.costTicks(json.costTicks ?? this.defaults.costTicks);
        this.energy(json.energy ?? this.defaults.energy);
        this.hired(json.hired ?? this.defaults.hired);
        this.plots(json.plots ?? this.defaults.plots);
        this.shouldCatch(json.shouldCatch ?? this.defaults.shouldCatch);
    }
}

export default FarmHand;
