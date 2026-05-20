import { Feature } from '../DataStore/common/Feature';
import KeyItemType from '../enums/KeyItemType';
import PokemonType from '../enums/PokemonType';
import { formatTime, SECOND, ZMOVE_ACTIVE_MULTIPLIER, ZMOVE_ACTIVE_TIME, ZMOVE_COUNTERACTIVE_MULTIPLIER, ZMOVE_COUNTERACTIVE_TIME, ZMOVE_TICK, ZMoveStatus } from '../GameConstants';
import GameHelper from '../GameHelper';

class ZMoves implements Feature {
    name = 'Z Moves';
    saveKey = 'zMoves';
    defaults = {};

    public counter = 0;

    type = ko.observable(PokemonType.Normal);
    time = ko.observable(0);
    formattedTime = ko.computed(() => formatTime(this.time() / SECOND).split(':').slice(1).join(':'));
    status = ko.observable(ZMoveStatus.inactive);

    initialize(): void {
    }

    getMultiplier(...types: PokemonType[]): number {
        if (this.status() === ZMoveStatus.inactive) {
            return 1;
        }
        return types.includes(this.type()) || !types.length ? this.multiplier : 1;
    }

    isActive(): boolean {
        return this.status() > ZMoveStatus.inactive;
    }

    activate(type: PokemonType) {
        if (this.isActive()) {
            return;
        }
        this.type(type);
        this.time(ZMOVE_ACTIVE_TIME);
        this.status(ZMoveStatus.active);
    }

    fromJSON(json: any): void {
        if (!json) {
            return;
        }
        this.type(json.type ?? PokemonType.None);
        this.time(json.time ?? 0);
        this.status(json.status ?? ZMoveStatus.inactive);
    }

    toJSON() {
        return {
            type : this.type(),
            time : this.time(),
            status : this.status(),
        };
    }

    canAccess(): boolean {
        return App.game.keyItems.hasKeyItem(KeyItemType['Z-Power_Ring']);
    }

    update(): void {}  // This method intentionally left blank

    tick(): void {
        if (this.status() !== ZMoveStatus.inactive) {
            GameHelper.incrementObservable(this.time, -ZMOVE_TICK);
            if (this.time() === 0) {
                GameHelper.incrementObservable(this.status, -1);
                if (this.status() === ZMoveStatus.counteractive) {
                    this.time(ZMOVE_COUNTERACTIVE_TIME);
                }
            }
        }
        this.counter = 0;
    }

    get multiplier(): number {
        switch (this.status()) {
            case ZMoveStatus.counteractive:
                return ZMOVE_COUNTERACTIVE_MULTIPLIER;
            case ZMoveStatus.active:
                return ZMOVE_ACTIVE_MULTIPLIER;
        }
        return 1;
    }
}

export default ZMoves;
