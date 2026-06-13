import ko, { Computed, Observable } from 'knockout';
import Blockers from './Blockers';
import SelectSetting from './settings/SelectSetting';
import Setting from './settings/Setting';
import BotSettings, { TaskType } from './settings/Settings';
import Task from './Task';
import ClearDungeonAchievementTask from './tasks/achievements/ClearDungeonAchievementTask';
import ClearGymAchievementTask from './tasks/achievements/ClearGymAchievementTask';
import RouteKillAchievementTask from './tasks/achievements/RouteKillAchievementTask';
import CompleteRegionAchievementsTask from './tasks/CompleteRegionAchievementTask';
import { TaskInterruptedError } from './tasks/utils/errors';

class Bot {
    public static debug = false;

    public static settings: Computed<Setting<any>[]>;
    public static task: Observable<Task>;

    public static blockers = new Blockers();

    private static _taskType: Observable<TaskType>;

    public static initialize(): void {
        $(document).on('keydown', (event) => {
            if (event.shiftKey && event.key === 'B') {
                $('#botModal').modal('show');
            }
        });

        this._taskType = ko.observable<TaskType>();
        this.task = ko.observable();

        this._taskType.subscribe((taskType) => {
            if (!taskType) {
                return this.task(undefined);
            }

            switch (taskType) {
                case 'achievement.dungeon':
                    return this.task(new ClearDungeonAchievementTask());
                case 'achievement.route':
                    return this.task(new RouteKillAchievementTask());
                case 'achievement.gym':
                    return this.task(new ClearGymAchievementTask());
                case 'general.region':
                    return this.task(new CompleteRegionAchievementsTask());
            }
        });

        this.settings = ko.computed(() => {
            const settings: Setting<any>[] = [new SelectSetting('task', 'The task to run', this._taskType, BotSettings.taskOptions())];
            if (this.task()) {
                settings.push(...this.task().settings());
            }
            return settings;
        });
    }

    public static getSetting<T>(name: string): Setting<T> {
        return this.settings().find((setting) => setting.name === name);
    }

    public static canStart(): boolean {
        return this.task() && this.task().canStart();
    }

    public static start(): void {
        this.task()
            .run()
            .catch((reason) => {
                if (reason instanceof TaskInterruptedError) {
                    // eslint-disable-next-line no-console
                    console.info('Task interrupted');
                }
            });
    }

    public static stop(): void {
        this.task().interrupt();
        this.blockers.unblockAll();
    }
}

export default Bot;
