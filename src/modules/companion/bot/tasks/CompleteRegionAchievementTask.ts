import ko, { Observable } from 'knockout';
import Achievement from '../../../achievements/Achievement';
import { Region } from '../../../GameConstants';
import SubRegion from '../../../subRegion/SubRegion';
import SubRegions from '../../../subRegion/SubRegions';
import { RegionSelectSetting, SubregionSelectSetting } from '../settings/SelectSetting';
import Task from '../Task';
import TaskRunner from '../TaskRunner';
import ClearDungeonAchievementTask from './achievements/ClearDungeonAchievementTask';
import ClearGymAchievementTask from './achievements/ClearGymAchievementTask';
import RouteKillAchievementTask from './achievements/RouteKillAchievementTask';
import MoveToRegionTask from './MoveToRegionTask';
import Tasks from './Tasks';
import { DungeonInaccessibleError } from './utils/errors';

/**
 * Clear all achievements in a region related to clearing, i.e clear dungeon, clear gym and kill route achievements.
 * <p>
 * Strategy:
 *  - First, clear all routes
 *  - Then, clear all dungeons
 *  - Then, clear all gyms
 */
class CompleteRegionAchievementsTask extends Task {
    public region: Observable<Region>;
    public subregion: Observable<SubRegion | undefined>;

    private _taskRunner: TaskRunner;
    private _achievements: Achievement[];

    public constructor() {
        super();
        this.region = ko.observable<Region>();
        this.subregion = ko.observable<SubRegion>();
        this.settings = ko.observableArray([new RegionSelectSetting('region', 'Region', this.region)]);

        this.region.subscribe((region) => {
            this.settings.splice(1);
            if (region !== undefined && SubRegions.getSubRegions(region).length > 1) {
                this.settings.push(new SubregionSelectSetting('subregion', 'Subregion', region, this.subregion));
            }
        });
    }

    public canStart(): boolean {
        return this.region() !== undefined;
    }

    public isCompleted(): boolean {
        return this._achievements.every((achievement) => achievement.isCompleted());
    }

    public execute(): Promise<void> {
        this._taskRunner = TaskRunner.build().thenTask(new MoveToRegionTask(this.region()));

        for (const route of Tasks.findRegionRoutes(this.region(), this.subregion()?.id)) {
            this._taskRunner = this._taskRunner.thenTask(new RouteKillAchievementTask(route));
        }

        for (const dungeon of Tasks.findRegionDungeons(this.region(), this.subregion()?.id)) {
            this._taskRunner = this._taskRunner.thenTask(new ClearDungeonAchievementTask(dungeon)).catch((error) => {
                if (error instanceof DungeonInaccessibleError) {
                    console.warn(`Skipping ${error.dungeon}, dungeon is inaccessible`);
                } else {
                    throw error;
                }
            });
        }

        for (const gym of Tasks.findRegionGyms(this.region(), this.subregion()?.id)) {
            this._taskRunner = this._taskRunner.thenTask(new ClearGymAchievementTask(gym));
        }

        return this._taskRunner.run();
    }

    public run(): Promise<void> {
        this._achievements = Tasks.findRegionAchievements(this.region(), this.subregion()?.id);
        return super.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }
}

export default CompleteRegionAchievementsTask;
