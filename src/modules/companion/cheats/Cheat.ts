import ko, { Observable } from 'knockout';

abstract class Cheat {
    public enabled: Observable<boolean>;

    public constructor() {
        this.enabled = ko.observable(false);
        this.enabled.subscribe((enabled) => {
            if (enabled) {
                this._enable();
            } else {
                this._disable();
            }
        });
    }

    abstract _enable(): void;

    abstract _disable(): void;
}

export default Cheat;
