import { Observable } from 'knockout';

abstract class Script {
    public id: string;
    public name: string;

    protected active: Observable<boolean>;
    protected interval: NodeJS.Timeout;

    protected constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.active = ko.observable(false);
        this.active.subscribe(active => {
            if (active) {
                this.interval = setInterval(() => this.tick(), 100);
            } else if (this.interval) {
                clearInterval(this.interval);
                this.interval = undefined;
            }
        });
    }

    public abstract isUnlocked(): boolean;

    protected abstract tick(): void;

    public activate(): void {
        this.active(true);
    }

    public deactivate(): void {
        this.active(false);
    }

    public get isActive(): boolean {
        return this.active();
    }
}

export default Script;
