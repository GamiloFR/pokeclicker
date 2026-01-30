import { ObservableArray } from 'knockout';
import ScriptSetting from './ScriptSetting';
import SelectScriptSetting, { SelectOption } from './SelectScriptSetting';
import AutoDungeonScript, { AutoDungeonMode } from '../AutoDungeonScript';
import AutoGymScript, { AutoGymMode } from '../AutoGymScript';

const autoDungeonModeOptions: SelectOption<AutoDungeonMode>[] = [
    {
        name: 'Normal',
        value: 'NORMAL',
    },
    {
        name: 'Boss rush',
        value: 'BOSS_RUSH',
    },
    {
        name: 'Clears',
        value: 'CLEARS',
    },
    {
        name: 'All pokemons caught',
        value: 'ALL_CAUGHT',
    },
    {
        name: 'All pokemons caught shiny',
        value: 'ALL_SHINY',
    },
];

const autoGymModeOptions: SelectOption<AutoGymMode>[] = [
    {
        name: 'Normal',
        value: 'NORMAL',
    },
    {
        name: 'Clears',
        value: 'CLEARS',
    },
];

type ScriptSettingGroup = {
    id?: string;
    name: string;
    items: ObservableArray<ScriptSetting<unknown>>;
};

class ScriptsSettings {
    public static readonly groups: ObservableArray<ScriptSettingGroup> = ko.observableArray();

    public static init() {
        const autoDungeon = {
            id: 'custom.scripts.autodungeon',
            name: 'Auto-dungeon',
            items: ko.observableArray([
                new SelectScriptSetting(
                    'custom.scripts.autodungeon.mode',
                    'Mode',
                    AutoDungeonScript.mode,
                    autoDungeonModeOptions,
                ), new ScriptSetting(
                    'custom.scripts.autodungeon.clears',
                    'Clears',
                    AutoDungeonScript.clears,
                    'NumberScriptSettingTemplate',
                    () => AutoDungeonScript.mode() === 'CLEARS',
                ),
            ]),
        };
        const autoGym: ScriptSettingGroup = {
            id: 'custom.scripts.autogym',
            name: 'Auto-gym',
            items: ko.observableArray([
                new SelectScriptSetting(
                    'custom.scripts.autogym.mode',
                    'Mode',
                    AutoGymScript.mode,
                    autoGymModeOptions,
                ),
                new ScriptSetting(
                    'custom.scrips.autogym.clears',
                    'Clears',
                    AutoGymScript.clears,
                    'NumberScriptSettingTemplate',
                    () => AutoGymScript.mode() === 'CLEARS',
                ),
            ]),
        };
        this.groups.push(autoDungeon, autoGym);
    }

    public static setSetting<T>(id: string, value: T) {
        const setting = this.list.find(s => s.id === id);
        setting.value = value;
    }

    private static get list(): ScriptSetting<unknown>[] {
        return this.groups().flatMap(group => group.items());
    }
}

export default ScriptsSettings;
