import areaStatus from '../enums/AreaStatus';
import { camelCaseToString, getDungeonIndex, Region, Starter } from '../GameConstants';
import Gym from '../gym/Gym';
import GymRunner from '../gym/GymRunner';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import DevelopmentRequirement from '../requirements/DevelopmentRequirement';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import { TmpDungeonType } from '../TemporaryScriptTypes';
import WeatherApp from '../weather/WeatherApp';
import Town from './Town';

abstract class TownContent {
    public tooltip: string = undefined;

    public requirements: (Requirement | OneFromManyRequirement)[];
    public parent: Town;

    constructor(requirements: Requirement[] = []) {
        this.requirements = requirements;
    }

    public abstract cssClass(): string;

    public abstract text(): string;

    public abstract onclick(): void;

    public addParent(parent: Town) {
        this.parent = parent;
    }

    public areaStatus(): areaStatus[] {
        return [this.isUnlocked() ? areaStatus.completed : areaStatus.locked];
    }

    public isUnlocked(): boolean {
        return this.requirements.every((requirement) => requirement.isCompleted());
    }

    public clears(): number {
        return undefined;
    }

    public isVisible(): boolean {
        if (this.requirements.some((r) => r instanceof DevelopmentRequirement || (r instanceof MultiRequirement && r.requirements.some((r2) => r2 instanceof DevelopmentRequirement)))) {
            return this.isUnlocked();
        }
        return true;
    }

    public protectedOnclick(): void {
        if (!this.isVisible()) {
            return;
        }
        const reqsList = [];
        this.requirements?.forEach((requirement) => {
            if (!requirement.isCompleted()) {
                reqsList.push(requirement.hint());
            }
        });
        if (reqsList.length) {
            Notifier.notify({
                message: `You don't have access yet.\n<i>${reqsList.join('\n')}</i>`,
                type: NotificationConstants.NotificationOption.warning,
            });
        } else {
            this.onclick();
        }
    }
}

export class DockTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-info';
    }

    public isVisible() {
        return player.highestRegion() > 0;
    }

    public onclick(): void {
        MapHelper.openShipModal();
    }

    public text() {
        return 'Dock';
    }
}

export class BattleFrontierTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-primary';
    }

    public onclick(): void {
        App.game.battleFrontier.enter();
    }

    public text() {
        return 'Enter Battle Frontier';
    }
}

export class NextRegionTownContent extends TownContent {
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

export class MoveToDungeon extends TownContent {
    constructor(
        private dungeon: TmpDungeonType,
        private visibleRequirement: Requirement = undefined,
    ) {
        super([]);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.dungeon.name;
    }

    public isVisible(): boolean {
        return this.visibleRequirement?.isCompleted() ?? true;
    }

    public onclick(): void {
        MapHelper.moveToTown(this.dungeon.name);
    }

    public isUnlocked(): boolean {
        return TownList[this.dungeon.name].isUnlocked();
    }

    public areaStatus(): areaStatus[] {
        return [areaStatus[MapHelper.calculateTownCssClass(this.dungeon.name)]];
    }

    public clears() {
        if (!QuestLineHelper.isQuestLineCompleted('Tutorial Quests')) {
            return undefined;
        }
        return App.game.statistics.dungeonsCleared[getDungeonIndex(this.dungeon.name)]();
    }
}

export class MoveToTown extends TownContent {
    constructor(
        private townName: string,
        private visibleRequirement: Requirement = undefined,
        private includeAreaStatus: boolean = true,
    ) {
        super([]);
    }

    public cssClass() {
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.townName;
    }

    public isVisible(): boolean {
        return this.visibleRequirement?.isCompleted() ?? true;
    }

    public onclick(): void {
        MapHelper.moveToTown(this.townName);
    }

    public isUnlocked(): boolean {
        return TownList[this.townName].isUnlocked();
    }

    public areaStatus(): areaStatus[] {
        if (this.includeAreaStatus) {
            return [areaStatus[MapHelper.calculateTownCssClass(this.townName)]];
        } else {
            return [areaStatus.completed];
        }
    }
}

export class AccessGym extends TownContent {
    // only use for gyms that disappear from a town
    constructor(
        private gym: Gym,
        private requirement: Requirement,
    ) {
        super([]);
    }

    public cssClass() {
        return this.gym.cssClass();
    }

    public text(): string {
        return this.gym.buttonText;
    }

    public isVisible(): boolean {
        return this.requirement?.isCompleted() ?? true;
    }

    public onclick(): void {
        GymRunner.startGym(this.gym);
    }
}

export class WeatherAppTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-secondary';
    }

    public isVisible() {
        return WeatherApp.isUnlocked();
    }

    public onclick(): void {
        WeatherApp.openWeatherAppModal();
    }

    public text() {
        return 'Open the Castform App';
    }
}

export class PickStarterContent extends TownContent {
    public cssClass() {
        return 'btn btn-warning';
    }

    public isVisible(): boolean {
        return player.regionStarters[player.region]() == Starter.None;
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

export default TownContent;
