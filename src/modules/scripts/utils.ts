export type GridTile = {
    isWalkable?: boolean;
};

export type GridCoordinate = {
    x: number;
    y: number;
};

type GridNode = GridCoordinate & {
    parent?: GridNode;
    cost: number;
    heuristic: number;
};

const pushSorted = (list: GridNode[], node: GridNode) => {
    // TODO Optimize
    list.push(node);
    list.sort((listNode, other) => other.heuristic - listNode.heuristic);
};

const findWalkableNeighbors = <T extends GridTile>(grid: T[][], tile: GridCoordinate): GridCoordinate[] => {
    return [{ x: tile.x - 1, y: tile.y }, { x: tile.x + 1, y: tile.y }, { x: tile.x, y: tile.y - 1 }, {
        x: tile.x,
        y: tile.y + 1,
    }]
        .filter(coordinate => coordinate.x >= 0 && coordinate.x < grid[0].length
            && coordinate.y >= 0 && coordinate.y < grid.length
            && (grid[coordinate.y][coordinate.x]?.isWalkable ?? true));
};

export const coordinateEquals = (coordinate: GridCoordinate, other?: GridCoordinate): boolean => {
    return coordinate.x === other?.x && coordinate.y === other?.y;
};

export const manhattanDistance = (start: GridCoordinate, end: GridCoordinate): number => {
    return Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
};

const buildPath = (node: GridNode): GridCoordinate[] => {
    const path = [node];
    while (node.parent) {
        node = node.parent;
        path.unshift(node);
    }
    return path;
};

export const findPath = <T extends GridTile>(grid: T[][], goal: GridCoordinate, start: GridCoordinate) => {
    const startNode: GridNode = {
        ...start,
        cost: 0,
        heuristic: 0,
    };
    const closedList = [];
    const openList = [startNode];

    while (openList.length > 0) {
        const node = openList.pop();
        if (coordinateEquals(node, goal)) {
            return buildPath(node);
        }
        findWalkableNeighbors(grid, node)
            .map(coordinate => ({
                ...coordinate,
                cost: node.cost + 1,
            }))
            .filter(({ cost, ...coordinate }) =>
                !closedList.some(closedNode => coordinateEquals(coordinate, closedNode))
                && !openList.some(openNode => coordinateEquals(coordinate, openNode) && openNode.cost < cost))
            .forEach(({ cost, ...coordinate }) => {
                pushSorted(openList, {
                    ...coordinate,
                    parent: node,
                    cost,
                    heuristic: cost + manhattanDistance(coordinate, goal),
                });
            });
        closedList.push(node);
    }
    throw new Error(`Unable to find path from (${start.x},${start.y}) to (${goal.x},${goal.y})`);
};
