import { Region, SubRegions } from '../GameConstants';
import Requirement from '../requirements/Requirement';
import { TmpDungeonType } from '../TemporaryScriptTypes';
import Town, { TownOptionalArgument } from './Town';
import TownContent from './townContent/TownContent';

class DungeonTown extends Town {
    dungeon: TmpDungeonType;

    constructor(name: string, region: Region, subregion: SubRegions, requirements: Requirement[] = [], content: TownContent[] = [], optional: TownOptionalArgument = {}) {
        optional.requirements = requirements;
        super(name, region, subregion, content, optional);
        this.dungeon = dungeonList[name];
    }
}

export default DungeonTown;
