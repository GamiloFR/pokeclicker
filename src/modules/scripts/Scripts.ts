import Script from './Script';
import AutoclickScriptClass from './AutoclickScript';
import AutoDungeonScript from './AutoDungeonScript';
import { ObservableArray } from 'knockout';
import AutoGymScript from './AutoGymScript';
import AutoHatcheryScript from './AutoHatcheryScript';
import { ScriptsSettings } from './index';

class Scripts {
    public static readonly list: ObservableArray<Script> = ko.observableArray();

    public static init() {
        this.list.push(AutoclickScriptClass, AutoDungeonScript, AutoGymScript, AutoHatcheryScript);

        document.addEventListener('DOMContentLoaded', () => {
            const load = Save.load;
            Save.load = () => {
                const player = load.bind(Save)();
                this.load();
                return player;
            };

            const store = Save.store;
            Save.store = (player) => {
                store.bind(Save)(player);
                this.store();
            };
        });
    }

    public static load() {
        const saved = localStorage.getItem(`custom${Save.key}`);
        if (saved) {
            const { scripts, settings } = JSON.parse(saved);

            this.list().forEach(script => {
                if (script.id in scripts) {
                    this.setScript(script.id, scripts[script.id]);
                }
            });
            ScriptsSettings.load(settings);
        }
    }

    public static store() {
        const scripts = this.list().reduce((acc, script) => ({
            ...acc,
            [script.id]: script.isActive,
        }), {});
        const settings = ScriptsSettings.store();

        const saved = JSON.stringify({ scripts, settings });
        localStorage.setItem(`custom${Save.key}`, saved);
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
