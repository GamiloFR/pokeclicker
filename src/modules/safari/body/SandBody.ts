import { SafariTile } from '../../GameConstants';
import Rand from '../../utilities/Rand';
import SafariBody, { TileNeighbours } from './SafariBody';

class SandBody extends SafariBody {
    edgeDetectCheck = SafariTile.sandC;

    constructor(
        x: number = SandBody.randomInt(),
        y: number = SandBody.randomInt(),
        type = 'sand',
    ) {
        super();
        this.type = type;
        this.grid = this.generateCube(x, y);

        this.edgeDetect();
    }

    static randomInt(): number {
        return Rand.intBetween(3, 5);
    }

    private generateCube(sizeX: number, sizeY: number): Array<Array<number>> {
        let body = [];
        for (let i = 0; i < sizeY; i++) {
            const row = [...Array(sizeX)].map(Number.prototype.valueOf, 0);
            body.push(row);
        }

        const amount = this.type === 'fence' ? 20 : 4;
        for (let i = 0; i < amount; i++) {
            const x = Rand.floor(sizeX - 2);
            const y = Rand.floor(sizeY - 2);
            body = SandBody.addCube(x, y, body);
        }
        return body;
    }

    private static addCube(x: number, y: number, body: Array<Array<number>>): Array<Array<number>> {
        if (Rand.boolean()) {
            body[y + 2][x] = SafariTile.sandC;
            body[y + 2][x + 1] = SafariTile.sandC;
            body[y][x + 2] = SafariTile.sandC;
            body[y + 1][x + 2] = SafariTile.sandC;
            body[y + 2][x + 2] = SafariTile.sandC;
        }
        body[y][x] = SafariTile.sandC;
        body[y + 1][x] = SafariTile.sandC;
        body[y][x + 1] = SafariTile.sandC;
        body[y + 1][x + 1] = SafariTile.sandC;
        return body;
    }

    private edgeDetect() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === this.edgeDetectCheck) {
                    this.grid[i][j] = this.getNumber(this.getTileNeighbours(j, i));
                }
            }
        }
    }

    getNumber(neighbours: TileNeighbours): number {
        const plus = neighbours.plus;
        const cross = neighbours.cross;
        if (plus.equals([false, true, true, false])) {
            return SafariTile.sandUL;
        }
        if (plus.equals([false, true, true, true])) {
            return SafariTile.sandU;
        }
        if (plus.equals([false, false, true, true])) {
            return SafariTile.sandUR;
        }
        if (plus.equals([true, true, true, false])) {
            return SafariTile.sandL;
        }
        if (plus.equals([true, true, true, true])) {
            if (!cross[0]) {
                return SafariTile.sandURinverted;
            }
            if (!cross[1]) {
                return SafariTile.sandDRinverted;
            }
            if (!cross[2]) {
                return SafariTile.sandDLinverted;
            }
            if (!cross[3]) {
                return SafariTile.sandULinverted;
            }
            return SafariTile.sandC;
        }
        if (plus.equals([true, false, true, true])) {
            return SafariTile.sandR;
        }
        if (plus.equals([true, true, false, false])) {
            return SafariTile.sandDL;
        }
        if (plus.equals([true, true, false, true])) {
            return SafariTile.sandD;
        }
        if (plus.equals([true, false, false, true])) {
            return SafariTile.sandDR;
        }
        return SafariTile.grass;
    }
}

export default SandBody;
