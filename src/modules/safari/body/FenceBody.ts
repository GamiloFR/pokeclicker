import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';
import { TileNeighbours } from './SafariBody';
import SandBody from './SandBody';

class FenceBody extends SandBody {
    edgeDetectCheck = 0;

    constructor() {
        super(7, 7, 'fence');
        this.openFence();
    }

    getNumber(neighbours: TileNeighbours): number {
        const plus = neighbours.plus;
        const cross = neighbours.cross;
        if (plus.equals([false, true, true, false])) {
            return SafariTile.fenceUL;
        }
        if (plus.equals([false, true, true, true])) {
            return SafariTile.fenceU;
        }
        if (plus.equals([false, false, true, true])) {
            return SafariTile.fenceUR;
        }
        if (plus.equals([true, true, true, false])) {
            return SafariTile.fenceL;
        }
        if (plus.equals([true, true, true, true])) {
            if (!cross[0]) {
                return SafariTile.fenceDRend;
            }
            if (!cross[1]) {
                return SafariTile.fenceURend;
            }
            if (!cross[2]) {
                return SafariTile.fenceULend;
            }
            if (!cross[3]) {
                return SafariTile.fenceDLend;
            }
            return SafariTile.grass;
        }
        if (plus.equals([true, false, true, true])) {
            return SafariTile.fenceR;
        }
        if (plus.equals([true, true, false, false])) {
            return SafariTile.fenceDL;
        }
        if (plus.equals([true, true, false, true])) {
            return SafariTile.fenceD;
        }
        if (plus.equals([true, false, false, true])) {
            return SafariTile.fenceDR;
        }
        return SafariTile.grass;
    }

    private openFence() {
        const removedTiles = [];
        const options = [SafariTile.fenceU, SafariTile.fenceL, SafariTile.fenceR, SafariTile.fenceD];
        const pick = Rand.fromArray(options);
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                if (this.grid[i][j] === pick) {
                    if (pick == SafariTile.fenceL || pick == SafariTile.fenceR) { // Only tiles connected to the left/right fence tiles are broken
                        removedTiles.push({ x: j, y: i });
                    }
                    this.grid[i][j] = SafariTile.ground;
                }
            }
        }
        // Check tiles above and below the removed ones to avoid broken fences tiles
        removedTiles?.map((pos) => {
            const tileAbove = this.grid[pos.y - 1] ? this.grid[pos.y - 1][pos.x] : undefined;
            const tileBelow = this.grid[pos.y + 1] ? this.grid[pos.y + 1][pos.x] : undefined;
            switch (pick) {
                case SafariTile.fenceL: // Left fence tile
                    if (tileAbove === SafariTile.fenceUL || tileAbove === SafariTile.fenceULend) {
                        this.grid[pos.y - 1][pos.x] = SafariTile.fenceU;
                    }
                    if (tileBelow === SafariTile.fenceDL || tileBelow === SafariTile.fenceDLend) {
                        this.grid[pos.y + 1][pos.x] = SafariTile.fenceD;
                    }
                    break;
                case SafariTile.fenceR: // Right fence tile
                    if (tileAbove === SafariTile.fenceUR || tileAbove === SafariTile.fenceURend) {
                        this.grid[pos.y - 1][pos.x] = SafariTile.fenceU;
                    }
                    if (tileBelow === SafariTile.fenceDR || tileBelow === SafariTile.fenceDRend) {
                        this.grid[pos.y + 1][pos.x] = SafariTile.fenceD;
                    }
                    break;
                default:
            }
        });
    }
}

export default FenceBody;
