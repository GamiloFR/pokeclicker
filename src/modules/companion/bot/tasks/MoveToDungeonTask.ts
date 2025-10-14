import Dungeon from '../../../dungeons/Dungeon';
import MoveToTownTask from './MoveToTownTask';
import { DungeonInaccessibleError, TownInaccessibleError } from './utils/errors';

class MoveToDungeonTask extends MoveToTownTask {
    public constructor(dungeon: Dungeon) {
        super(TownList[dungeon.name]);
    }

    public execute(): Promise<void> {
        return super.execute().catch((error) => {
            if (error instanceof TownInaccessibleError) {
                throw new DungeonInaccessibleError(error.town);
            }
            throw error;
        });
    }
}

export default MoveToDungeonTask;
