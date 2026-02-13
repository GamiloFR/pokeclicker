import Script from './Script';
import KeyItemType from '../enums/KeyItemType';
import { coordinateEquals, findPath, GridCoordinate, GridTile, manhattanDistance } from './utils';
import { GameState, SAFARI_LEGAL_WALK_BLOCKS, SafariTile } from '../GameConstants';
import { Computed, Observable } from 'knockout';
import CaughtStatus from '../enums/CaughtStatus';
import { TmpSafariItemType, TmpSafariPokemonType } from '../TemporaryScriptTypes';

class SafariGridTile implements GridTile, GridCoordinate {
    public constructor(
        public tile: SafariTile,
        public x: number,
        public y: number,
    ) {
    }

    get isWalkable(): boolean {
        return SAFARI_LEGAL_WALK_BLOCKS.includes(this.tile);
    }
}

export type AutoSafariMode = 'NORMAL' | 'CAUGHT' | 'SHINY';

const compareDistanceToPlayer = <T extends GridCoordinate>(value: T, other: T) => {
    return manhattanDistance(value, Safari.playerXY) - manhattanDistance(other, Safari.playerXY);
};

class AutoSafariScriptClass extends Script {
    public mode: Observable<AutoSafariMode>;
    public shouldThrowRock: Observable<boolean>;

    private grassTile?: SafariGridTile;
    private neighborGrassTile?: SafariGridTile;
    private path?: GridCoordinate[];
    private readonly spawnPokemon: Computed<TmpSafariPokemonType | undefined>;
    private readonly spawnItem: Computed<TmpSafariItemType | undefined>;

    public constructor() {
        super('autosafari', 'Auto-safari');
        this.mode = ko.observable('NORMAL');
        this.shouldThrowRock = ko.observable(false);

        this.spawnPokemon = ko.computed({
            read: () => {
                return Safari.pokemonGrid()
                    .filter(pokemon => this.shouldCatch(pokemon, true))
                    .sort(compareDistanceToPlayer)[0];
            },
            deferEvaluation: true,
        });
        this.spawnItem = ko.computed({
            read: () => {
                return [...Safari.itemGrid()].sort(compareDistanceToPlayer)[0];
            },
            deferEvaluation: true,
        });
    }

    public isUnlocked(): boolean {
        return App.game.keyItems.hasKeyItem(KeyItemType.Safari_ticket);
    }

    // TODO different environments
    protected tick() {
        if (!Safari.inProgress() || App.game.gameState !== GameState.safari) {
            return;
        }

        if (Safari.inBattle()) {
            if (SafariBattle.busy()) {
                return;
            } else if (this.shouldCatch(SafariBattle.enemy)) {
                this.catch();
            } else if (this.shouldThrowRock()) {
                SafariBattle.throwRock();
            } else {
                SafariBattle.run();
            }
        } else if (!Safari.isMoving && !Safari.walking) {
            if (this.path?.length > 0) {
                this.moveTo(this.path.shift());
            } else if (this.spawnPokemon()) {
                this.path = findPath(this.grid, this.spawnPokemon(), Safari.playerXY);
                this.moveTo(this.path.shift());
            } else if (this.spawnItem()) {
                this.path = findPath(this.grid, this.spawnItem(), Safari.playerXY);
            } else if (coordinateEquals(Safari.playerXY, this.grassTile)) {
                this.moveTo(this.neighborGrassTile);
            } else if (coordinateEquals(Safari.playerXY, this.neighborGrassTile)) {
                this.moveTo(this.grassTile);
            } else {
                this.path = this.findPathToGrass();
                this.moveTo(this.path.shift());
            }
        }
    }

    /**
     * Find the path from the player position to the nearest grass spot
     * @private
     */
    private findPathToGrass(): GridCoordinate[] {
        const grid = this.grid;
        this.grassTile = this.grid.flat()
            .filter(gridTile => gridTile.tile === SafariTile.grass)
            .sort((gridTile, otherTile) => {
                const distance = manhattanDistance(gridTile, Safari.playerXY);
                const other = manhattanDistance(otherTile, Safari.playerXY);
                return distance - other;
            }).find((gridTile) => this.findNeighbors(grid, gridTile)
                .some(neighbor => neighbor.tile === SafariTile.grass));
        this.neighborGrassTile = this.findNeighbors(grid, this.grassTile)
            .find(neighbor => neighbor.tile === SafariTile.grass);
        return findPath(grid, this.grassTile, grid[Safari.playerXY.y][Safari.playerXY.x]);
    }

    private findNeighbors(grid: SafariGridTile[][], tile: SafariGridTile): SafariGridTile[] {
        return grid.flat()
            .filter(({ x, y }) => (y === tile.y && (x === tile.x - 1 || x === tile.x + 1))
                || (x === tile.x && (y === tile.y - 1 || y === tile.y + 1)));
    }

    /**
     * Move player to {@code coordinate}. Must be a neighbor tile.
     * @private
     */
    private moveTo(coordinate: GridCoordinate) {
        const currentPosition = Safari.playerXY;
        let direction: string;
        if (coordinateEquals(currentPosition, coordinate)) {
            return;
        } else if (coordinate.x === currentPosition.x - 1) {
            direction = 'left';
        } else if (coordinate.x === currentPosition.x + 1) {
            direction = 'right';
        } else if (coordinate.y === currentPosition.y - 1) {
            direction = 'up';
        } else if (coordinate.y === currentPosition.y + 1) {
            direction = 'down';
        } else {
            throw new Error(`Unable to move from (${currentPosition.x},${currentPosition.y}) to (${coordinate.x},${coordinate.y})`);
        }

        Safari.move(direction);
        Safari.stop(direction);
    }

    /**
     * Check if pokemon should be caught, according to the mode.
     * @private
     */
    private shouldCatch(pokemon: TmpSafariPokemonType, isSpawn: boolean = false): boolean {
        switch (this.mode()) {
            case 'NORMAL':
                // In NORMAL mode, we ignore spawn pokemons
                return !isSpawn;
            case 'CAUGHT':
                return PartyController.getCaughtStatus(pokemon.id) === CaughtStatus.NotCaught;
            case 'SHINY':
                return pokemon.shiny && [CaughtStatus.NotCaught, CaughtStatus.Caught].includes(
                    PartyController.getCaughtStatus(pokemon.id));
        }
    }

    private catch() {
        if (SafariBattle.enemy.angry > 0 || SafariBattle.enemy.eating > 0) {
            // Setup is already done, we just need to throw balls
            SafariBattle.throwBall();
        } else {
            // We want to maximize catch_factor/escape_factor
            // => bait is always better than rock, and razz and nanab result in the same ratio
            if (BaitList.Razz.amount() > 0) {
                SafariBattle.selectedBait(BaitList.Razz);
            } else if (BaitList.Nanab.amount() > 0) {
                SafariBattle.selectedBait(BaitList.Nanab);
            } else {
                SafariBattle.selectedBait(BaitList.Bait);
            }
            SafariBattle.throwBait();
        }
    }

    private get grid(): SafariGridTile[][] {
        return Safari.grid.map((row, y) => row.map((tile, x) => new SafariGridTile(tile, x, y)));
    }
}

const AutoSafariScript = new AutoSafariScriptClass();

export default AutoSafariScript;
