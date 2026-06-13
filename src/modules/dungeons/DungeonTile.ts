import type { Observable } from 'knockout';
import { DungeonTileType } from '../GameConstants';
import { Loot, LootTier } from './Dungeon';
import Point from './Point';

type ChestMetaData = NonNullable<{ loot: Loot, tier: LootTier }>;

class DungeonTile {
    _isVisible: boolean;
    _isVisited: boolean;
    _hasPlayer: boolean;
    type: Observable<DungeonTileType>;
    cssClass: Observable<string>;
    position: Point;

    constructor(type: DungeonTileType, public metadata: ChestMetaData | null = null) {
        this._isVisible = false;
        this._isVisited = false;
        this._hasPlayer = false;
        this.type = ko.observable(type);
        this.cssClass = ko.observable('');
        this.calculateCssClass();
    }

    get isVisible() {
        return this._isVisible;
    }

    set isVisible(val) {
        this._isVisible = val;
        this.calculateCssClass();
    }

    get isVisited() {
        return this._isVisited;
    }

    set isVisited(val) {
        this._isVisited = val;
        this.calculateCssClass();
    }

    get hasPlayer() {
        return this._hasPlayer;
    }

    set hasPlayer(val) {
        this._hasPlayer = val;
        this.calculateCssClass();
    }

    public calculateCssClass() {
        if (!this.isVisible) {
            this.cssClass('tile tile-invisible');
            return;
        }
        if (this.hasPlayer) {
            this.cssClass('tile tile-player');
            return;
        }
        // Base tile class
        const css = ['tile'];
        // If player visited tile add the class
        if (this.isVisited) {
            css.push('tile-visited');
        }
        // Add the tile type class
        css.push(`tile-${DungeonTileType[this.type()]}`);

        if (this.type() === DungeonTileType.chest) {
            css.push(`tile-chest-${(this.metadata as ChestMetaData).tier}`);
        }

        // Join all the classes
        this.cssClass(css.join(' '));
    }
}

export default DungeonTile;
