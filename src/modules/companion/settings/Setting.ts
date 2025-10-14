import { Observable } from 'knockout';

export type CompanionSettingName =
    | 'cheats.wallet'
    | 'cheats.pokeball.rate'
    | 'cheats.safari'
    | 'cheats.attack'
    | 'cheats.pokeball.quantity'
    | 'cheats.item'
    | 'cheats.berry'
    | 'cheats.shiny'
    | 'bot.battle'
    | 'bot.gym'
    | 'bot.temporaryBattle';

export type CompanionSettingTemplate = 'CompanionBooleanSetting';

class CompanionSetting<T> {
    public name: CompanionSettingName;
    public description: string;
    public template: CompanionSettingTemplate;
    private _observable: Observable<T>;

    public constructor(name: CompanionSettingName, description: string, template: CompanionSettingTemplate, observable: Observable<T>) {
        this.name = name;
        this.description = description;
        this.template = template;
        this._observable = observable;
    }

    public get value(): T {
        return this._observable();
    }

    public set value(newValue: T) {
        this._observable(newValue);
    }
}

export class CompanionBooleanSetting extends CompanionSetting<boolean> {
    public constructor(name: CompanionSettingName, description: string, observable: Observable<boolean>) {
        super(name, description, 'CompanionBooleanSetting', observable);
    }
}

export default CompanionSetting;
