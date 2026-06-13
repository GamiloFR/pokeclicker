import { Observable } from 'knockout';
import Dungeon from '../../../dungeons/Dungeon';
import { Region } from '../../../GameConstants';
import Gym from '../../../gym/Gym';
import { RegionRoute } from '../../../routes';
import SubRegion from '../../../subRegion/SubRegion';
import Setting from './Setting';
import BotSettings from './Settings';

export type SelectOption<T> = {
    value: T;
    text: string;
    group?: string;
};

type SelectOptionGroup<T> = {
    label: string;
    options: SelectOption<T>[];
};

class SelectSetting<T> extends Setting<T> {
    public groups: SelectOptionGroup<T>[];

    public constructor(
        name: string,
        description: string,
        observable: Observable<T>,
        public options: SelectOption<T>[],
        optionsForGroup: SelectOption<T>[] = [],
    ) {
        super(name, description, 'BotSelectSetting', observable);
        this.groups = optionsForGroup.reduce((groups, option) => {
            const groupIndex = groups.findIndex((group) => group.label === option.group);
            if (groupIndex !== -1) {
                groups[groupIndex].options.push(option);
            } else {
                groups.push({
                    label: option.group!,
                    options: [option],
                });
            }
            return groups;
        }, [] as SelectOptionGroup<T>[]);
    }
}

export class RouteSelectSetting extends SelectSetting<RegionRoute> {
    public constructor(name: string, description: string, observable: Observable<RegionRoute>) {
        super(name, description, observable, BotSettings.defaultOption(), BotSettings.routeOptions());
    }
}

export class DungeonSelectSetting extends SelectSetting<Dungeon> {
    public constructor(name: string, description: string, observable: Observable<Dungeon>) {
        super(name, description, observable, BotSettings.defaultOption(), BotSettings.dungeonOptions());
    }
}

export class GymSelectSetting extends SelectSetting<Gym> {
    public constructor(name: string, description: string, observable: Observable<Gym>) {
        super(name, description, observable, BotSettings.defaultOption(), BotSettings.gymOptions());
    }
}

export class RegionSelectSetting extends SelectSetting<Region> {
    public constructor(name: string, description: string, observable: Observable<Region>) {
        super(name, description, observable, BotSettings.regionOptions());
    }
}

export class SubregionSelectSetting extends SelectSetting<SubRegion> {
    public constructor(name: string, description: string, region: Region, observable: Observable<SubRegion>) {
        super(name, description, observable, BotSettings.subregionOptions(region));
    }
}

export default SelectSetting;
