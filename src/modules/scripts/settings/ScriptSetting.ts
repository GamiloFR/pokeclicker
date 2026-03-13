import { Computed, Observable } from 'knockout';

export type ScriptSettingTemplate =
    'SelectScriptSettingTemplate'
    | 'NumberScriptSettingTemplate'
    | 'BooleanScriptSettingTemplate'
    | 'ButtonScriptSettingTemplate';

class ScriptSetting<T> {
    public readonly id: string;
    public readonly name: string;
    public readonly template: ScriptSettingTemplate;
    public readonly isVisible: Computed<boolean>;

    private readonly _value: Observable<T>;

    public constructor(
        id: string,
        name: string,
        value: Observable<T>,
        template: ScriptSettingTemplate,
        isVisible = () => true,
    ) {
        this.id = id;
        this.name = name;
        this._value = value;
        this.template = template;
        this.isVisible = ko.computed(isVisible);
    }

    public get value(): T {
        return this._value();
    }

    public set value(t: T) {
        this._value(t);
    }
}

export class NumberScriptSetting extends ScriptSetting<number> {
    public constructor(
        id: string,
        name: string,
        value: Observable<number>,
        isVisible = () => true,
    ) {
        super(id, name, value, 'NumberScriptSettingTemplate', isVisible);
    }
}

export class BooleanScriptSetting extends ScriptSetting<boolean> {
    public constructor(
        id: string,
        name: string,
        value: Observable<boolean>,
        isVisible = () => true,
    ) {
        super(id, name, value, 'BooleanScriptSettingTemplate', isVisible);
    }
}

export class ButtonScriptSetting extends ScriptSetting<unknown> {
    public target: string;

    public constructor(id: string, name: string, target: string, isVisible = () => true) {
        super(id, name, ko.observable(), 'ButtonScriptSettingTemplate', isVisible);
        this.target = target;
    }
}

export default ScriptSetting;
