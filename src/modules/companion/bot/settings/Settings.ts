/* eslint-disable @typescript-eslint/indent */
import Dungeon from '../../../dungeons/Dungeon';
import DungeonList from '../../../dungeons/DungeonList';
import { camelCaseToString, Region } from '../../../GameConstants';
import GameHelper from '../../../GameHelper';
import Gym from '../../../gym/Gym';
import GymList from '../../../gym/GymList';
import { RegionRoute, Routes } from '../../../routes';
import SubRegion from '../../../subRegion/SubRegion';
import SubRegions from '../../../subRegion/SubRegions';
import Tasks from '../tasks/Tasks';
import { SelectOption } from './SelectSetting';

const taskList = {
    ['general.region']: 'Complete clearing-related achievements in region',
    ['achievement.dungeon']: 'Complete dungeon achievement',
    ['achievement.route']: 'Complete route achievement',
    ['achievement.gym']: 'Complete gym achievement',
} as const;

export type TaskType = keyof typeof taskList;

const defaultOption = {
    value: undefined,
    text: '',
};

class BotSettings {
    public static defaultOption<T>(): SelectOption<T>[] {
        return [
            {
                value: undefined,
                text: '',
            },
        ];
    }

    public static taskOptions(): SelectOption<TaskType>[] {
        return this.recordOptions(taskList, (text) => text);
    }

    public static dungeonOptions(): SelectOption<Dungeon>[] {
        return Object.values(DungeonList)
            .filter((dungeon) => dungeon.isUnlocked() && TownList[dungeon.name].region <= player.highestRegion() && !Tasks.findClearDungeonAchievement(dungeon).isCompleted())
            .map((dungeon) => ({
                value: dungeon,
                text: dungeon.name,
                group: this.getDungeonGroup(dungeon),
            }));
    }

    public static routeOptions(): SelectOption<RegionRoute>[] {
        return Routes.regionRoutes
            .filter((route) => route.isUnlocked() && player.highestRegion() >= route.region && !Tasks.findRouteKillAchievement(route).isCompleted())
            .map<SelectOption<RegionRoute>>((route) => ({
                value: route,
                text: this.getRouteName(route),
                group: this.getRouteGroup(route),
            }));
    }

    public static gymOptions(): SelectOption<Gym>[] {
        return Object.values(GymList)
            .filter((gym) => gym.isUnlocked() && gym.parent.region <= player.highestRegion() && !Tasks.findClearGymAchievement(gym).isCompleted())
            .map((gym) => ({
                value: gym,
                text: gym.text(),
                group: this.getGymGroup(gym),
            }));
    }

    public static regionOptions(): SelectOption<Region>[] {
        const options = GameHelper.enumNumbers(Region)
            .filter((region) => region > Region.none && region <= player.highestRegion() && !Tasks.findRegionAchievements(region).every((achievement) => achievement.isCompleted()))
            .map((region) => ({
                value: region,
                text: camelCaseToString(Region[region]),
            }));
        options.unshift(defaultOption);
        return options;
    }

    public static subregionOptions(region: Region): SelectOption<SubRegion>[] {
        const options = SubRegions.getSubRegions(region)
            .filter((subregion) => subregion.unlocked() && !Tasks.findRegionAchievements(region, subregion.id).every((achievement) => achievement.isCompleted()))
            .map((subregion) => ({
                value: subregion,
                text: subregion.name,
            }));
        options.unshift({
            value: undefined,
            text: 'All',
        });
        return options;
    }

    private static recordOptions<T extends string, V>(record: Record<T, V>, textMapper: (value: V) => string): SelectOption<T>[] {
        const options = Object.entries<V>(record).map(([key, value]) => ({
            value: key as T,
            text: textMapper(value),
        }));
        options.unshift({
            value: undefined,
            text: '',
        });
        return options;
    }

    /**
     * Construct the name of the route, depending of the properties `routeName` and `region`.
     *
     * If `routeName` follows the pattern '<region> Route <number>', the name of the route will be 'Route <number>'.
     * Else, it will be `routeName`.
     */
    private static getRouteName(route: RegionRoute): string {
        const regionName = camelCaseToString(Region[route.region]);
        if (route.routeName.includes(regionName)) {
            const pattern = new RegExp(`${regionName} (?<routeName>Route \\d+)`);
            return pattern.exec(route.routeName).groups.routeName;
        }
        return route.routeName;
    }

    /**
     * Construct the group containing `route`.
     *
     * Considering `route` is in the kanto region, and the Sevii123 subregion, the group will be 'Kanto - Sevii123'.
     */
    private static getRouteGroup(route: RegionRoute): string {
        return this.getGroup(route.region, route.subRegion);
    }

    private static getGymGroup(gym: Gym): string {
        return this.getGroup(gym.parent.region, gym.parent.subRegion);
    }

    private static getDungeonGroup(dungeon: Dungeon): string {
        const town = TownList[dungeon.name];
        return this.getGroup(town.region, town.subRegion);
    }

    private static getGroup(region: Region, subregionId?: number): string {
        let group = camelCaseToString(Region[region]);
        if (subregionId) {
            group += ' - ' + SubRegions.getSubRegionById(region, subregionId).name;
        }
        return group;
    }
}

export default BotSettings;
