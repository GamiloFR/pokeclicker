import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';
import SafariBody from './SafariBody';

class WaterBody extends SafariBody {
    constructor(x = Rand.intBetween(3, 5), y = Rand.intBetween(3, 5)) {
        super();
        const body = [];
        for (let i = 0; i < y; i++) {
            const row = [];
            for (let j = 0; j < x; j++) {
                if (i === 0) {
                    if ( j === 0) {
                        row.push(SafariTile.waterUL);
                    } else if (j < x - 1) {
                        row.push(SafariTile.waterU);
                    } else if (j === x - 1) {
                        row.push(SafariTile.waterUR);
                    }
                } else if (i < y - 1) {
                    if ( j === 0) {
                        row.push(SafariTile.waterL);
                    } else if (j < x - 1) {
                        row.push(SafariTile.waterC);
                    } else if (j === x - 1) {
                        row.push(SafariTile.waterR);
                    }
                } else if (i === y - 1) {
                    if ( j === 0) {
                        row.push(SafariTile.waterDL);
                    } else if (j < x - 1) {
                        row.push(SafariTile.waterD);
                    } else if (j === x - 1) {
                        row.push(SafariTile.waterDR);
                    }
                }
            }
            body.push(row);
        }

        this.grid = body;
        this.type = 'water';
    }
}

export default WaterBody;
