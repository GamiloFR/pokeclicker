import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';
import LandBody from './LandBody';
import SafariBody from './SafariBody';

class ShapedLandBody extends SafariBody {
    /** sand is temporarily used as ground, because ground is temporarily used as water. This so we do not change too much code everywhere */
    constructor() {
        super();
        this.type = 'land';
        const tileArray = [];
        // The chance is weird, but it makes well-sized islands
        while (tileArray.length < 9 && Rand.chance(1 + tileArray.length / 5)) {
            tileArray.push(SafariTile.sandC);
        }
        // Fill the rest with "water" tiles
        while (tileArray.length < 9) {
            tileArray.push(SafariTile.ground);
        }
        LandBody.shuffle(tileArray);
        this.grid = [];
        while (tileArray.length > 0) {
            this.grid.push(tileArray.splice(0, 3));
        }
        this.fulfill();
        // Fulfill is directional so flippings will make it look more random
        if (Rand.boolean()) {
            this.grid.reverse();
        }
        if (Rand.boolean()) {
            this.grid.forEach(r => r.reverse());
        }
        this.grid.push(new Array(3).fill(SafariTile.ground));
        this.grid.unshift(new Array(3).fill(SafariTile.ground));
        this.grid.forEach(r => {
            r.push(SafariTile.ground);
            r.unshift(SafariTile.ground);
        });
        this.fulfill();
        this.trim();
        // https://static.wixstatic.com/media/997b44_90b0ef0cb8ef477c9d750565def78d0b~mv2.gif
        const landSize = this.grid.flat().reduce((acc, t) => acc + +(t === SafariTile.sandC), 0);
        this.grid.forEach((r, y) => {
            r.forEach((t, x) => {
                if (t === SafariTile.sandC && Rand.chance(Math.sqrt(landSize - 3) / 6)) {
                    this.grid[y][x] = SafariTile.grass;
                }
            });
        });
    }

    /** Replace illegal configurations and place edge tiles */
    fulfill() {
        let change = false;
        const UP = 1, UPRIGHT = 2, RIGHT = 4, DOWNRIGHT = 8, DOWN = 16, DOWNLEFT = 32, LEFT = 64, UPLEFT = 128;
        // We prevent tiles whose significant edges are more than two or not adjacent
        // Otherwise, we would need something like 50 different sprites...
        do {
            change = false;
            for (let y = 0; y < this.grid.length; y++) {
                const row = this.grid[y];
                for (let x = 0; x < row.length; x++) {
                    const cell = row[x];

                    if (cell === SafariTile.sandC) {
                        continue;
                    }

                    let mapValue = 0;
                    let tile = cell;
                    if (this.grid[y - 1]?.[x] === SafariTile.sandC) {
                        mapValue += UP;
                    }
                    if (this.grid[y + 1]?.[x] === SafariTile.sandC) {
                        mapValue += DOWN;
                    }
                    if (this.grid[y][x - 1] === SafariTile.sandC) {
                        mapValue += LEFT;
                    }
                    if (this.grid[y][x + 1] === SafariTile.sandC) {
                        mapValue += RIGHT;
                    }

                    if (this.grid[y - 1]?.[x - 1] === SafariTile.sandC && (mapValue & (UP + LEFT)) === 0) {
                        mapValue += UPLEFT;
                    }
                    if (this.grid[y - 1]?.[x + 1] === SafariTile.sandC && (mapValue & (UP + RIGHT)) === 0) {
                        mapValue += UPRIGHT;
                    }
                    if (this.grid[y + 1]?.[x + 1] === SafariTile.sandC && (mapValue & (DOWN + RIGHT)) === 0) {
                        mapValue += DOWNRIGHT;
                    }
                    if (this.grid[y + 1]?.[x - 1] === SafariTile.sandC && (mapValue & (DOWN + LEFT)) === 0) {
                        mapValue += DOWNLEFT;
                    }

                    switch (mapValue) {
                        case 0: tile = SafariTile.ground;
                            break;
                        case UP: tile = SafariTile.waterU;
                            break;
                        case DOWN: tile = SafariTile.waterD;
                            break;
                        case LEFT: tile = SafariTile.waterL;
                            break;
                        case RIGHT: tile = SafariTile.waterR;
                            break;
                        case UP | LEFT: tile = SafariTile.waterUL;
                            break;
                        case UP | RIGHT: tile = SafariTile.waterUR;
                            break;
                        case DOWN | LEFT: tile = SafariTile.waterDL;
                            break;
                        case DOWN | RIGHT: tile = SafariTile.waterDR;
                            break;
                        case UPRIGHT: tile = SafariTile.waterURCorner;
                            break;
                        case UPLEFT: tile = SafariTile.waterULCorner;
                            break;
                        case DOWNRIGHT: tile = SafariTile.waterDRCorner;
                            break;
                        case DOWNLEFT: tile = SafariTile.waterDLCorner;
                            break;
                        // Illegal water tile
                        default: change = true;
                            tile = SafariTile.sandC;
                    }
                    this.grid[y][x] = tile;
                }
            }
        } while (change);
    }

    trim() {
        let change = false;
        do {
            change = false;
            if (this.grid[this.grid.length - 1].every(tile => tile === SafariTile.ground)) {
                this.grid.pop();
                change = true;
            }
            if (this.grid[0].every(tile => tile === SafariTile.ground)) {
                this.grid.shift();
                change = true;
            }
        } while (change);
        do {
            change = false;
            if (this.grid.every(row => row[0] === SafariTile.ground)) {
                this.grid.forEach(r => r.shift());
                change = true;
            }
            if (this.grid.every(row => row[row.length - 1] === SafariTile.ground)) {
                this.grid.forEach(r => r.pop());
                change = true;
            }
        } while (change);
    }
}

export default ShapedLandBody;
