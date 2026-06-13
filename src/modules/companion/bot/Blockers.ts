import ko, { Observable } from 'knockout';

export class Blocker {
    private _active: Observable<boolean>;

    public constructor() {
        this._active = ko.observable(false);
    }

    public block(): void {
        this._active(true);
    }

    public unblock(): void {
        this._active(false);
    }

    public isBlocked(): boolean {
        return this._active();
    }
}

class Blockers {
    public map: Blocker;
    public route: Blocker;
    public dungeon: Blocker;
    public gym: Blocker;

    public constructor() {
        this.map = new Blocker();
        this.route = new Blocker();
        this.dungeon = new Blocker();
        this.gym = new Blocker();
    }

    public unblockAll() {
        this.map.unblock();
        this.route.unblock();
        this.dungeon.unblock();
        this.gym.unblock();
    }
}

export default Blockers;
