import { Computed, Observable } from 'knockout';
import AuraType from '../enums/AuraType';
import BerryType from '../enums/BerryType';
import FarmNotificationType from '../enums/FarmNotificationType';
import MulchType from '../enums/MulchType';
import { TmpBerryType, TmpPlotType } from '../TemporaryScriptTypes';
import GameLoadState from '../utilities/GameLoadState';
import AutoFarmScript from './AutoFarmScript';

declare class Plot implements TmpPlotType {
    saveKey: string;
    defaults: {
        isUnlocked: boolean;
        berry: BerryType;
        age: number;
        mulch: MulchType;
        mulchTimeLeft: number;
        isSafeLocked: boolean;
    };
    formattedStageTimeLeft: Computed<string>;
    formattedTimeLeft: Computed<string>;
    calcFormattedStageTimeLeft: (includeGrowthMultiplier: boolean) => string;
    calcFormattedTimeLeft: (includeGrowthMultiplier: boolean) => string;
    formattedBaseStageTimeLeft: Computed<string>;
    formattedBaseTimeLeft: Computed<string>;
    formattedMulchTimeLeft: Computed<string>;
    formattedAuras: Computed<string>;
    auraGrowth: Computed<number>;
    auraHarvest: Computed<number>;
    auraMutation: Computed<number>;
    auraReplant: Computed<number>;
    auraDeath: Computed<number>;
    auraDecay: Computed<number>;
    auraBoost: Computed<number>;
    isEmpty: Computed<boolean>;
    isMulched: Computed<boolean>;
    stage: Computed<number>;
    tooltip: Computed<string>;
    notifications: FarmNotificationType[];
    emittingAura: { type: Computed<AuraType>; value: Computed<number>; };

    constructor(
        isUnlocked: boolean,
        berry: BerryType,
        age: number,
        mulch: MulchType,
        mulchTimeLeft: number,
        index: number,
    );

    update(seconds: number): boolean;

    plant(berry: BerryType): void;

    harvestAmount(): number;

    die(harvested?: boolean): void;

    generateWanderPokemon();

    getGrowthMultiplier(): number;

    getHarvestMultiplier(): number;

    getReplantMultiplier(): number;

    getMutationMultiplier(): number;

    clearMulch(): boolean;

    fromJSON(json: Record<string, any>): void;

    toJSON(): Record<string, any>;

    neighbours(): TmpPlotType[];

    canCatchWanderer(): boolean;

    get berryData(): TmpBerryType;

    get isUnlocked(): boolean;
    set isUnlocked(value: boolean);

    get isSafeLocked(): boolean;
    set isSafeLocked(value: boolean);

    get berry(): BerryType;
    set berry(berry: BerryType);

    get lastPlanted(): BerryType;
    set lastPlanted(berry: BerryType);

    get age(): number;
    set age(value: number);

    get mulch(): MulchType;
    set mulch(value: MulchType);

    get mulchTimeLeft(): number;
    set mulchTimeLeft(value: number);

    get wanderer(): any;
    set wanderer(wanderer: any);
}

class AutoFarmScriptControllerClass {
    public readonly selectedBerry: Observable<BerryType>;
    public plotList: TmpPlotType[];

    public constructor() {
        this.selectedBerry = ko.observable(BerryType.Cheri);
        GameLoadState.onLoadState(GameLoadState.states.initialized, () => {
            this.plotList = AutoFarmScript.setup.map((berryType, index) => new Plot(
                false,
                berryType,
                0,
                MulchType.None,
                0,
                index,
            ));

            $('#autoFarmSetupModal').on('show.bs.modal', () => {
                this.updatePlotList();
            });
        });
    }

    public plotClick(index: number) {
        if (AutoFarmScript.setup[index] === this.selectedBerry()) {
            AutoFarmScript.setup[index] = BerryType.None;
            this.updatePlotList();
        } else if (this.plotList[index].isUnlocked) {
            AutoFarmScript.setup[index] = this.selectedBerry();
            this.updatePlotList();
        }
    }

    public plantAll() {
        this.plotList.forEach((plot, index) => {
            if (plot.isUnlocked) {
                AutoFarmScript.setup[index] = this.selectedBerry();
            }
        });
        this.updatePlotList();
    }

    public removeAll() {
        this.plotList.forEach((_, index) => {
            AutoFarmScript.setup[index] = BerryType.None;
        });
        this.updatePlotList();
    }

    private updatePlotList() {
        this.plotList.forEach((plot, index) => {
            if (App.game.farming.plotList[index].isUnlocked !== plot.isUnlocked) {
                plot.isUnlocked = App.game.farming.plotList[index].isUnlocked;
            }

            if (AutoFarmScript.setup[index] !== plot.berry) {
                plot.berry = AutoFarmScript.setup[index];
            }
        });
    }
}

const AutoFarmScriptController = new AutoFarmScriptControllerClass();

export default AutoFarmScriptController;
