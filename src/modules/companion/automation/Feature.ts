import ko, { Observable, Subscription } from 'knockout';

abstract class BotFeature {
    public enabled: Observable<boolean>;
    public canAccess: Observable<boolean>;
    private _canAccessSub: Subscription;

    private _intervalDuration: number;
    private _intervalId: NodeJS.Timeout;

    constructor(intervalDuration: number = 100) {
        this._intervalDuration = intervalDuration;
        this.enabled = ko.observable(false);
        this.enabled.subscribe((enabled) => {
            if (enabled) {
                this._enable();
            } else {
                this._disable();
            }
        });
    }

    abstract _tick(): void;

    _enable(): void {
        this._canAccessSub = this.canAccess.subscribe((canAccess) => {
            if (canAccess) {
                this._intervalId = setInterval(() => this._tick(), this._intervalDuration);
            }
        });
        this.canAccess.notifySubscribers(this.canAccess());
    }

    _disable(): void {
        if (this._canAccessSub) {
            this._canAccessSub.dispose();
        }
        if (this._intervalId) {
            clearInterval(this._intervalId);
        }
    }

    fromJSON(json: Record<string, any>): void {
        if (json && json.enabled) {
            this.enabled(json.enabled);
            return;
        }
    }

    toJSON(): Record<string, any> {
        return {
            enabled: this.enabled(),
        };
    }
}

export default BotFeature;
