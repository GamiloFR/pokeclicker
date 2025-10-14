import Achievement from '../../../achievements/Achievement';
import Dungeon from '../../../dungeons/Dungeon';
import {
    ACHIEVEMENT_DEFEAT_DUNGEON_VALUES,
    ACHIEVEMENT_DEFEAT_GYM_VALUES,
    ACHIEVEMENT_DEFEAT_ROUTE_VALUES,
    getDungeonIndex,
    getGymIndex,
    OrangeGyms,
    OrreGyms,
    Region,
    RegionDungeons,
    RegionGyms,
    SubRegions as SubRegionId,
} from '../../../GameConstants';
import Gym from '../../../gym/Gym';
import GymList from '../../../gym/GymList';
import ClearDungeonRequirement from '../../../requirements/ClearDungeonRequirement';
import ClearGymRequirement from '../../../requirements/ClearGymRequirement';
import Requirement from '../../../requirements/Requirement';
import RouteKillRequirement from '../../../requirements/RouteKillRequirement';
import { RegionRoute, Routes } from '../../../routes';
import SubRegions from '../../../subRegion/SubRegions';
import Town, { DungeonTown } from '../../../towns/Town';
import ClearDungeonRequirementTask from './requirements/ClearDungeonRequirementTask';
import ClearGymRequirementTask from './requirements/ClearGymRequirementTask';
import RouteKillRequirementTask from './requirements/RouteKillRequirementTask';
import RequirementTask from './RequirementTask';

type PromiseWithResolvers<T> = {
    promise: Promise<T>;
    resolve: (t: T) => void;
    reject: (reason: any) => void;
};

class Tasks {
    public static ACHIEVEMENT_DEFEAT_DUNGEON_MAX_VALUE = ACHIEVEMENT_DEFEAT_DUNGEON_VALUES[ACHIEVEMENT_DEFEAT_DUNGEON_VALUES.length - 1];
    public static ACHIEVEMENT_DEFEAT_ROUTE_MAX_VALUE = ACHIEVEMENT_DEFEAT_ROUTE_VALUES[ACHIEVEMENT_DEFEAT_ROUTE_VALUES.length - 1];
    public static ACHIEVEMENT_DEFEAT_GYM_MAX_VALUE = ACHIEVEMENT_DEFEAT_GYM_VALUES[ACHIEVEMENT_DEFEAT_GYM_VALUES.length - 1];

    public static createRequirementTask(requirement: Requirement): RequirementTask<Requirement> {
        if (requirement instanceof RouteKillRequirement) {
            return new RouteKillRequirementTask(requirement);
        } else if (requirement instanceof ClearDungeonRequirement) {
            return new ClearDungeonRequirementTask(requirement);
        } else if (requirement instanceof ClearGymRequirement) {
            return new ClearGymRequirementTask(requirement);
        } else {
            throw new Error(`Unsupported requirement: ${requirement.hint()}`);
        }
    }

    public static isClearDungeonAchievement(achievement: Achievement, dungeon: Dungeon): boolean {
        return (
            achievement.property instanceof ClearDungeonRequirement &&
            achievement.property.dungeonIndex === getDungeonIndex(dungeon.name) &&
            achievement.property.requiredValue === this.ACHIEVEMENT_DEFEAT_DUNGEON_MAX_VALUE
        );
    }

    public static findClearDungeonAchievement(dungeon: Dungeon): Achievement {
        return AchievementHandler.achievementList.find((achievement) => this.isClearDungeonAchievement(achievement, dungeon));
    }

    public static isRouteKillAchievement(achievement: Achievement, route: RegionRoute): boolean {
        return (
            achievement.property instanceof RouteKillRequirement &&
            achievement.property.region === route.region &&
            achievement.property.route === route.number &&
            achievement.property.requiredValue === this.ACHIEVEMENT_DEFEAT_ROUTE_MAX_VALUE
        );
    }

    public static findRouteKillAchievement(route: RegionRoute): Achievement {
        return AchievementHandler.achievementList.find((achievement) => this.isRouteKillAchievement(achievement, route));
    }

    public static isClearGymAchievement(achievement: Achievement, gym: Gym): boolean {
        return (
            achievement.property instanceof ClearGymRequirement &&
            achievement.property.gymIndex === getGymIndex(gym.town) &&
            achievement.property.requiredValue === this.ACHIEVEMENT_DEFEAT_GYM_MAX_VALUE
        );
    }

    public static findClearGymAchievement(gym: Gym): Achievement {
        return AchievementHandler.achievementList.find((achievement) => this.isClearGymAchievement(achievement, gym));
    }

    public static findRegionAchievements(region: Region, subregion?: SubRegionId): Achievement[] {
        const dungeons = this.findRegionDungeons(region, subregion);
        const routes = this.findRegionRoutes(region, subregion);
        const gyms = this.findRegionGyms(region, subregion);
        return AchievementHandler.achievementList.filter(
            (achievement) =>
                dungeons.some((dungeon) => this.isClearDungeonAchievement(achievement, dungeon)) ||
                routes.some((route) => this.isRouteKillAchievement(achievement, route)) ||
                gyms.some((gym) => this.isClearGymAchievement(achievement, gym)),
        );
    }

    public static findRegionDungeons(region: Region, subregion?: SubRegionId): Dungeon[] {
        let dungeons = RegionDungeons[region].map((dungeonName) => TownList[dungeonName] as DungeonTown).filter((town) => SubRegions.getSubRegionById(town.region, town.subRegion).unlocked());
        if (subregion !== undefined) {
            dungeons = dungeons.filter((town) => town.subRegion === subregion);
        }
        return dungeons.map((town) => town.dungeon);
    }

    public static findRegionRoutes(region: Region, subregionId?: SubRegionId): RegionRoute[] {
        let routes = Routes.getRoutesByRegion(region).filter((route) => SubRegions.getSubRegionById(route.region, route.subRegion).unlocked());
        if (subregionId !== undefined) {
            routes = routes.filter((route) => route.subRegion === subregionId);
        }
        return routes;
    }

    public static findRegionGyms(region: Region, subregion?: SubRegionId): Gym[] {
        let gymNames = RegionGyms[region];
        if (region === Region.kanto) {
            gymNames = gymNames.concat(OrangeGyms);
        } else if (region === Region.hoenn) {
            gymNames = gymNames.concat(OrreGyms);
        }

        let gyms = gymNames.map((gymName) => GymList[gymName]).filter((gym) => SubRegions.getSubRegionById(gym.parent.region, gym.parent.subRegion).unlocked());
        if (subregion !== undefined) {
            gyms = gyms.filter((gym) => gym.parent.subRegion === subregion);
        }
        return gyms;
    }

    public static findRegionTowns(region: Region, subregion?: SubRegionId): Town[] {
        return Object.values(TownList).filter((town) => town.region === region && (subregion === undefined || town.subRegion === subregion));
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
     */
    public static promiseWithResolvers<T>(): PromiseWithResolvers<T> {
        let resolvePromise: (t: T) => void;
        let rejectPromise: (reason: any) => void;
        const promise = new Promise<T>((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        return {
            promise,
            resolve: resolvePromise.bind(promise),
            reject: rejectPromise.bind(promise),
        };
    }
}

export default Tasks;
