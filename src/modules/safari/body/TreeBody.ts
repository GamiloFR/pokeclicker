import { SafariTile } from '../../GameConstants';
import SafariBody from './SafariBody';

class TreeBody extends SafariBody {
    constructor() {
        super();
        this.grid = [
            [SafariTile.treeTopL, SafariTile.treeTopC, SafariTile.treeTopR],
            [SafariTile.treeLeavesL, SafariTile.treeLeavesC, SafariTile.treeLeavesR],
            [SafariTile.treeTrunkL, SafariTile.treeTrunkC, SafariTile.treeTrunkR],
            [SafariTile.treeRootsL, SafariTile.treeRootsC, SafariTile.treeRootsR],
        ];
        this.type = 'tree';
    }
}

export default TreeBody;
