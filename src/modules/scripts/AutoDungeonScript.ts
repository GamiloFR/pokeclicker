import Script from './Script';
import KeyItemType from '../enums/KeyItemType';
import { ACHIEVEMENT_DEFEAT_DUNGEON_VALUES, DungeonTileType, GameState, getDungeonIndex } from '../GameConstants';
import Rand from '../utilities/Rand';
import { Observable } from 'knockout';
import GameLoadState from '../utilities/GameLoadState';
import { TmpDungeonTileType, TmpDungeonType } from '../TemporaryScriptTypes';

export type AutoDungeonMode = 'NORMAL' | 'BOSS_RUSH' | 'CLEARS' | 'ALL_CAUGHT' | 'ALL_SHINY';

class AutoDungeonScriptClass extends Script {
    public readonly mode: Observable<AutoDungeonMode>;
    public readonly clears: Observable<number>;

    private started: boolean;
    private dungeon: TmpDungeonType;

    public constructor() {
        super('autodungeon', 'Auto-dungeon');
        this.mode = ko.observable('NORMAL');
        this.clears = ko.observable(ACHIEVEMENT_DEFEAT_DUNGEON_VALUES.at(-1)).extend({ numeric: 0 });
        this.started = false;

        GameLoadState.onLoadState(GameLoadState.states.running, () => {
            const initializeDungeon = DungeonRunner.initializeDungeon;
            DungeonRunner.initializeDungeon = (dungeon) => {
                initializeDungeon.bind(DungeonRunner)(dungeon);
                this.started = true;
                this.dungeon = dungeon;
            };
        });
    }

    public isUnlocked(): boolean {
        return App.game.keyItems.hasKeyItem(KeyItemType.Dungeon_ticket);
    }

    public deactivate() {
        super.deactivate();
        this.started = false;
    }

    protected tick() {
        if (!this.started) {
            return;
        }

        if (App.game.gameState === GameState.town && !this.shouldStop()) {
            DungeonRunner.initializeDungeon(this.dungeon);
        } else if (App.game.gameState === GameState.dungeon) {
            if (!this.handleInteraction()) {
                // If no interaction was made, we can move on to the next tile
                this.moveToNextTile();
            }
        } else {
            this.started = false;
        }
    }

    /**
     * Checks if the script shouldn't start the next attempt.
     *
     * It happens when :
     * - the player doesn't have enough dungeon tokens ;
     * - the stop condition of the current mode is met.
     * @private
     */
    private shouldStop(): boolean {
        if (player.town.dungeon !== this.dungeon || !DungeonRunner.canStartDungeon(this.dungeon)) {
            return true;
        }

        switch (this.mode()) {
            case 'CLEARS':
                return App.game.statistics.dungeonsCleared[getDungeonIndex(this.dungeon.name)]() >= this.clears();
            case 'ALL_CAUGHT':
                // FIXME Include uncaught mimics ?
                return DungeonRunner.dungeonCompleted(this.dungeon, false);
            case 'ALL_SHINY':
                return DungeonRunner.dungeonCompleted(this.dungeon, true);
            default:
                return false;
        }
    }

    /**
     * Handle the interaction with the current tile.
     * @returns {boolean} `true` if an interaction was made, `false` otherwise.
     * @private
     */
    private handleInteraction(): boolean {
        switch (DungeonRunner.map.currentTile().type()) {
            case DungeonTileType.boss:
            case DungeonTileType.ladder:
                DungeonRunner.handleInteraction();
                return true;
            case DungeonTileType.enemy:
                // We wait until the battle ends before moving to the next tile
                // By default, `AutoDungeonScript` doesn't click. `AutoclickScript` will handle the clicks if active.
                return DungeonRunner.fighting();
            case DungeonTileType.chest:
                // TODO Add setting to open chest
                break;
            case DungeonTileType.empty:
                // We wait until the catching ends before moving to the next tile
                return DungeonBattle.catching();
        }
        return false;
    }

    private moveToNextTile() {
        const currentPosition = DungeonRunner.map.playerPosition();
        const accessibleTiles = DungeonRunner.map.board()[currentPosition.floor].flat()
            .filter(tile => !tile.isVisited && DungeonRunner.map.hasAccessToTile(tile.position));
        if (accessibleTiles.length > 0) {
            const weights = accessibleTiles.map(tile => {
                if (!tile.isVisible) {
                    return 0;
                }

                switch (this.mode()) {
                    case 'BOSS_RUSH':
                    case 'CLEARS':
                        return [DungeonTileType.ladder, DungeonTileType.boss].includes(tile.type()) ? 1 : 0;
                    default:
                        return 0;
                }
            });
            const nextTile = this.selectRandomTile(accessibleTiles, weights);
            DungeonRunner.map.moveToTile(nextTile.position);
        } else {
            throw new Error('Unable to move in dungeon: no accessible tiles');
        }
    }

    private selectRandomTile(tiles: TmpDungeonTileType[], weights: number[]): TmpDungeonTileType {
        const maxWeight = Math.max(...weights);
        const tilesWithMaxWeight = tiles.filter((_, index) => weights[index] === maxWeight);
        return Rand.fromArray(tilesWithMaxWeight);
    }
}

const AutoDungeonScript = new AutoDungeonScriptClass();

export default AutoDungeonScript;
