import DungeonBattle from '../../../../dungeons/DungeonBattle';
import DungeonList from '../../../../dungeons/DungeonList';
import DungeonRunner from '../../../../dungeons/DungeonRunner';
import { DungeonTileType, GameState, RegionDungeons } from '../../../../GameConstants';
import ClearDungeonRequirement from '../../../../requirements/ClearDungeonRequirement';
import Rand from '../../../../utilities/Rand';
import Bot from '../../Bot';
import TaskRunner from '../../TaskRunner';
import MoveToDungeonTask from '../MoveToDungeonTask';
import RequirementTask from '../RequirementTask';

class ClearDungeonRequirementTask extends RequirementTask<ClearDungeonRequirement> {
    private _taskRunner: TaskRunner;

    public execute(): Promise<void> {
        Bot.blockers.dungeon.block();

        const dungeonName = RegionDungeons.flat()[this.requirement.dungeonIndex];
        const dungeon = DungeonList[dungeonName];
        this._taskRunner = TaskRunner.build()
            .thenTask(new MoveToDungeonTask(dungeon))
            .thenRepeat(
                () => this._tick(),
                () => this.isCompleted(),
            )
            .finally(() => Bot.blockers.dungeon.unblock());
        return this._taskRunner.run();
    }

    public interrupt(): void {
        this._taskRunner.interrupt();
    }

    private _tick(): void {
        if (App.game.gameState === GameState.town) {
            DungeonRunner.initializeDungeon(player.town.dungeon);
            return;
        }

        if (DungeonRunner.fighting() || DungeonRunner.currentTileType()() === DungeonTileType.chest || DungeonRunner.currentTileType()() === DungeonTileType.boss) {
            DungeonRunner.handleInteraction();
            return;
        } else if (DungeonBattle.catching()) {
            // Tile type is switch to empty before catching the pokemon
            return;
        }

        DungeonRunner.map.playerMoved(true); // `playerMoved` isn't updated in `moveToTile`

        // TODO handle multiple floors
        const position = DungeonRunner.map.playerPosition();

        // First, we try to go straight to the boss
        const bossTile = DungeonRunner.map
            .board()
            [position.floor].flat()
            .find((tile) => tile.type() === DungeonTileType.boss);
        if (bossTile.isVisible) {
            // TODO Try to avoid fights
            const path = DungeonRunner.map.findShortestPath(position, bossTile.position);
            DungeonRunner.map.moveToTile(path[0]);
            return;
        }

        // If not, we try to go to the nearest chest
        const chestTiles = DungeonRunner.map
            .board()
            [position.floor].flat()
            .filter((tile) => tile.type() === DungeonTileType.chest && tile.isVisible);
        if (chestTiles.length > 0) {
            const path = chestTiles
                .map((tile) => DungeonRunner.map.findShortestPath(position, tile.position))
                .reduce((shortestPath, currentPath) => (!shortestPath || currentPath.length < shortestPath.length ? currentPath : shortestPath));
            DungeonRunner.map.moveToTile(path[0]);
            return;
        }

        // Else, we go to the best accessible tile (empty / chest if we have flash, random otherwise)
        let possibleTiles = DungeonRunner.map
            .board()
            [position.floor].flat()
            .filter((tile) => DungeonRunner.map.hasAccessToTile(tile.position) && !tile.isVisited);

        if (possibleTiles.some((tile) => tile.isVisible && tile.type() === DungeonTileType.empty)) {
            possibleTiles = possibleTiles.filter((tile) => tile.isVisible && tile.type() === DungeonTileType.empty);
        } else if (possibleTiles.some((tile) => tile.isVisible && tile.type() === DungeonTileType.chest)) {
            possibleTiles = possibleTiles.filter((tile) => tile.isVisible && tile.type() === DungeonTileType.chest);
        }

        const nextTile = Rand.fromArray(possibleTiles);
        DungeonRunner.map.moveToTile(nextTile.position);
    }
}

export default ClearDungeonRequirementTask;
