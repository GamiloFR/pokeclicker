import { SafariTile } from '../../GameConstants';
import SafariBody from './SafariBody';

class LandBody extends SafariBody {
    constructor(x: number, y: number) {
        super();

        this.grid = new Array(y - 2).fill(new Array(x - 2).fill(SafariTile.sandC));
        this.grid[0].unshift(SafariTile.waterR);
        this.grid[0].push(SafariTile.waterL);
        this.grid.unshift([SafariTile.waterDRCorner, ...new Array(x - 2).fill(SafariTile.waterD), SafariTile.waterDLCorner]);
        this.grid.push([SafariTile.waterURCorner, ...new Array(x - 2).fill(SafariTile.waterU), SafariTile.waterULCorner]);
        this.type = 'land';
    }
}

export default LandBody;
