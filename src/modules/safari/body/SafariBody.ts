import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';

export type TileNeighbours = {
    plus: boolean[];
    cross: boolean[];
};

abstract class SafariBody {
    grid: Array<Array<number>> = [];
    type = '';

    public getTileNeighbours(x: number, y: number) {
        const ret = Array<boolean>(4);//["N", "E", "S", "W"]
        const cross = Array<boolean>(4);//["NE", "SE", "SW", "NW"]
        if (x === 0) {
            ret[3] = false;
        } else {
            ret[3] = this.grid[y][x - 1] !== SafariTile.ground;
        }
        if (y === 0) {
            ret[0] = false;
        } else {
            ret[0] = this.grid[y - 1][x] !== SafariTile.ground;
        }
        if (x === this.grid[0].length - 1) {
            ret[1] = false;
        } else {
            ret[1] = this.grid[y][x + 1] !== SafariTile.ground;
        }

        if (y === this.grid.length - 1) {
            ret[2] = false;
        } else {
            ret[2] = this.grid[y + 1][x] !== SafariTile.ground && this.grid[y + 1][x] !== undefined;
        }

        if (ret.equals([true, true, true, true])) {
            cross[0] = this.grid[y - 1][x + 1] !== SafariTile.ground;
            cross[1] = this.grid[y + 1][x + 1] !== SafariTile.ground;
            cross[2] = this.grid[y + 1][x - 1] !== SafariTile.ground;
            cross[3] = this.grid[y - 1][x - 1] !== SafariTile.ground;
        }
        return {
            plus: ret,
            cross: cross,
        };
    }

    // duplicated in DungeonMap
    public static shuffle<T>(a: T[]) {
        let j, x, i;
        for (i = a.length; i; i--) {
            j = Rand.floor(i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    public maxY() {
        return this.grid.length;
    }

    public maxX() {
        let max = 0;
        for (const row of this.grid) {
            if (row.length > max) {
                max = row.length;
            }
        }
        return max;
    }
}

export default SafariBody;

declare global {
    interface Array<T> {
        equals(array: Array<T>): boolean;
    }
}

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array) {
        return false;
    }

    // compare lengths - can save a lot of time
    if (this.length != array.length) {
        return false;
    }

    for (let i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i])) {
                return false;
            }
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
