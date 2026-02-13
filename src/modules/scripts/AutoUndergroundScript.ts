import Script from './Script';
import UndergroundToolType from '../underground/tools/UndergroundToolType';
import Rand from '../utilities/Rand';

class AutoUndergroundScriptClass extends Script {
    public constructor() {
        super('autounderground', 'Auto-underground');
    }

    public isUnlocked(): boolean {
        return App.game.underground.canAccess();
    }

    protected tick() {
        if (!App.game.underground.mine || App.game.underground.mine.completed || App.game.underground.mine.timeUntilDiscovery > 0) {
            return;
        }

        let tool: UndergroundToolType;
        let x = -1, y = -1;
        if (App.game.underground.mine.itemsPartiallyFound < App.game.underground.mine.itemsBuried) {
            tool = UndergroundToolType.Bomb;
        } else {
            // Given a partially found item, if there is at least 3 blocks buried near each other, we use the hammer
            const item = App.game.underground.mine.grid
                .find(tile => tile.reward && tile.layerDepth > 0 && this.itemIsPartiallyFound(tile.reward.rewardID))
                .reward.rewardID;
            const itemIndexes = this.getItemIndexes(item);
            const { index: hammerIndex } = itemIndexes.reduce(
                ({ index, maxNearbyItemIndexes }, itemIndex) => {
                    const nearbyItemIndexes = this.getNearbyItemIndexes(itemIndexes, itemIndex);
                    if (nearbyItemIndexes.length > 2 && nearbyItemIndexes.length > maxNearbyItemIndexes) {
                        index = itemIndex;
                        maxNearbyItemIndexes = nearbyItemIndexes.length;
                    }
                    return { index, maxNearbyItemIndexes };
                },
                { index: -1, maxNearbyItemIndexes: 0 },
            );
            if (hammerIndex === -1) {
                // We use the chisel: we choose a random tile between the item tiles that aren't completely dug up
                tool = UndergroundToolType.Chisel;
                const itemIndexesNotDugUp = itemIndexes.filter(index => App.game.underground.mine.grid[index].layerDepth > 0);
                ({ x, y } = App.game.underground.mine.getCoordinateForGridIndex(Rand.fromArray(itemIndexesNotDugUp)));
            } else {
                // We use the hammer
                tool = UndergroundToolType.Hammer;
                ({ x, y } = App.game.underground.mine.getCoordinateForGridIndex(hammerIndex));
            }
        }
        App.game.underground.tools.useTool(tool, x, y);
    }

    private itemIsPartiallyFound(rewardID: number): boolean {
        return App.game.underground.mine.grid.some(tile => tile.reward?.rewardID === rewardID && tile.layerDepth === 0);
    }

    private getItemIndexes(rewardID: number): number[] {
        return App.game.underground.mine.grid
            .map((tile, index) => {
                if (tile.reward?.rewardID === rewardID) {
                    return index;
                }
                return undefined;
            }).filter(Boolean);
    }

    private getNearbyItemIndexes(itemIndexes: number[], index: number): number[] {
        const { x, y } = App.game.underground.mine.getCoordinateForGridIndex(index);
        return [
            { x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 },
            { x: x - 1, y }, { x: x + 1, y },
            { x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 },
        ].map(coordinate => App.game.underground.mine.getGridIndexForCoordinate(coordinate))
            .filter(nearbyIndex => nearbyIndex !== -1
                && itemIndexes.includes(nearbyIndex)
                && App.game.underground.mine.grid[nearbyIndex].layerDepth > 0);
    }
}

const AutoUndergroundScript = new AutoUndergroundScriptClass();

export default AutoUndergroundScript;
