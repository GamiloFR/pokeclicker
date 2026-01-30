import ScriptSetting from './ScriptSetting';
import { Observable } from 'knockout';

export type SelectOption<T> = {
    name: string;
    value: T;
};

class SelectScriptSetting<T> extends ScriptSetting<T> {
    public options: SelectOption<T>[];

    public constructor(
        id: string,
        name: string,
        value: Observable<T>,
        options: SelectOption<T>[],
        isVisible = () => true,
    ) {
        super(id, name, value, 'SelectScriptSettingTemplate', isVisible);
        this.options = options;
    }
}

export default SelectScriptSetting;
