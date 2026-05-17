import Dungeon from '../dungeons/Dungeon';
import { DockTowns, Region, StartingTowns, SubRegions } from '../GameConstants';
import GymList from '../gym/GymList';
import Requirement from '../requirements/Requirement';
import NPC from './NPC';
import DockTownContent from './townContent/DockTownContent';
import NextRegionTownContent from './townContent/NextRegionTownContent';
import PickStarterContent from './townContent/PickStarterContent';
import TownContent from './townContent/TownContent';

export type TownOptionalArgument = {
    requirements?: Requirement[],
    npcs?: NPC[],
    ignoreAreaStatus?: boolean
};

class Town {
    public name: string;
    public region: Region;
    public requirements: Requirement[];
    public dungeon?: Dungeon;
    public npcs?: NPC[];
    public startingTown: boolean;
    public content: TownContent[];
    public subRegion: SubRegions;
    public ignoreAreaStatus: boolean;

    constructor(
        name: string,
        region: Region,
        subRegion: SubRegions,
        content: TownContent[] = [],
        // Optional arguments are in a named object, so that we don't need
        // to pass undefined to get to the one we want
        optional: TownOptionalArgument = {},
    ) {
        this.name = name;
        this.region = region;
        this.requirements = optional.requirements || [];
        this.npcs = optional.npcs;
        this.startingTown = StartingTowns.includes(this.name);
        this.content = content;
        this.subRegion = subRegion;
        this.ignoreAreaStatus = optional.ignoreAreaStatus ?? false;

        if (GymList[name]) {
            const gym = GymList[name];
            this.content.unshift(gym);
        }
        if (DockTowns.includes(name)) {
            this.content.push(new DockTownContent());
        }
        if (StartingTowns.includes(name)) {
            if (region > Region.kanto) {// Kanto is treated separately
                this.content.push(new PickStarterContent());
            }
            this.content.push(new NextRegionTownContent());
        }
        content.forEach((c) => {
            c.addParent(this);
        });
    }

    public isUnlocked() {
        return this.requirements.every(requirement => requirement.isCompleted());
    }
}

export default Town;
