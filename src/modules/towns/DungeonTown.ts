import Dungeon from '../dungeons/Dungeon';
import DungeonList from '../dungeons/DungeonList';
import { Region, SubRegions } from '../GameConstants';
import Requirement from '../requirements/Requirement';
import Town, { TownOptionalArgument } from './Town';
import TownContent from './townContent/TownContent';

class DungeonTown extends Town {
    dungeon: Dungeon;

    constructor(name: string, region: Region, subregion: SubRegions, requirements: Requirement[] = [], content: TownContent[] = [], optional: TownOptionalArgument = {}) {
        optional.requirements = requirements;
        super(name, region, subregion, content, optional);
        this.dungeon = DungeonList[name];
    }
}

export default DungeonTown;
