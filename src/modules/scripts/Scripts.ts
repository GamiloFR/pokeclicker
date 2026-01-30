import Script from './Script';
import AutoclickScriptClass from './AutoclickScript';
import AutoDungeonScript from './AutoDungeonScript';
import { ObservableArray } from 'knockout';
import AutoGymScript from './AutoGymScript';

class Scripts {
    public static readonly list: ObservableArray<Script> = ko.observableArray();

    public static init() {
        this.list.push(AutoclickScriptClass, AutoDungeonScript, AutoGymScript);
    }

    public static setScript(id: string, checked: boolean) {
        const script = this.list().find(s => s.id === id);
        if (checked) {
            script.activate();
        } else {
            script.deactivate();
        }
    }
}

export default Scripts;
