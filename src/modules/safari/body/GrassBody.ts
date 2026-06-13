import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';
import SafariBody from './SafariBody';

class GrassBody extends SafariBody {
    constructor() {
        super();
        const x = Rand.intBetween(4, 6);
        const y = Rand.intBetween(4, 6);
        const body = [];
        for (let i = 0; i < y; i++) {
            const row = [];
            for (let j = 0; j < x; j++) {
                if (j < x * 2 / 3 - 1) {
                    row.push(SafariTile.grass);
                } else {
                    row.push(SafariTile.ground);
                }
            }
            SafariBody.shuffle(row);
            body.push(row);
        }

        this.grid = body;
        this.fillHoles();
        this.type = 'grass';
    }

    private fillHoles() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                if (this.grid[i][j] === SafariTile.ground) {
                    if (i !== 0 && i !== this.grid.length - 1) {
                        if (this.grid[i - 1][j] === SafariTile.grass && this.grid[i + 1][j] === SafariTile.grass) {
                            this.grid[i][j] = SafariTile.grass;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                if (this.grid[i][j] === SafariTile.ground) {

                    if (j !== 0 && j !== this.grid[0].length - 1) {
                        if (this.grid[i][j - 1] === SafariTile.grass && this.grid[i][j + 1] === SafariTile.grass) {
                            this.grid[i][j] = SafariTile.grass;
                        }
                    }
                }
            }
        }
    }
}

export default GrassBody;
