import { ObservableArray } from 'knockout';
import ScriptSetting, { BooleanScriptSetting, ButtonScriptSetting, NumberScriptSetting } from './ScriptSetting';
import SelectScriptSetting, { SelectOption } from './SelectScriptSetting';
import AutoDungeonScript, { AutoDungeonMode } from '../AutoDungeonScript';
import AutoGymScript, { AutoGymMode } from '../AutoGymScript';
import AutoSafariScript, { AutoSafariMode } from '../AutoSafariScript';
import AutoFarmScript from '../AutoFarmScript';

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

const autoSafariModeOptions: SelectOption<AutoSafariMode>[] = [
    {
        name: 'Normal',
        value: 'NORMAL',
    },
    {
        name: 'All pokemons caught',
        value: 'CAUGHT',
    },
    {
        name: 'All pokemons caught shiny',
        value: 'SHINY',
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
            id: 'autodungeon',
            name: 'Auto-dungeon',
            items: ko.observableArray([
                new SelectScriptSetting(
                    'autodungeon.mode',
                    'Mode',
                    AutoDungeonScript.mode,
                    autoDungeonModeOptions,
                ), new NumberScriptSetting(
                    'autodungeon.clears',
                    'Clears',
                    AutoDungeonScript.clears,
                    () => AutoDungeonScript.mode() === 'CLEARS',
                ),
            ]),
        };

        const autoGym: ScriptSettingGroup = {
            id: 'autogym',
            name: 'Auto-gym',
            items: ko.observableArray([
                new SelectScriptSetting(
                    'autogym.mode',
                    'Mode',
                    AutoGymScript.mode,
                    autoGymModeOptions,
                ),
                new NumberScriptSetting(
                    'autogym.clears',
                    'Clears',
                    AutoGymScript.clears,
                    () => AutoGymScript.mode() === 'CLEARS',
                ),
            ]),
        };

        const autoFarm: ScriptSettingGroup = {
            id: 'autofarm',
            name: 'Auto-farm',
            items: ko.observableArray([
                new ButtonScriptSetting(
                    'autofarm.setup',
                    'Setup',
                    '#autoFarmSetupModal',
                ),
                new BooleanScriptSetting(
                    'autofarm.harvestWhenReady',
                    'Harvest berry when it\'s ready',
                    AutoFarmScript.harvestWhenReady,
                ),
            ]),
        };

        const autoSafari: ScriptSettingGroup = {
            id: 'autosafari',
            name: 'Auto-safari',
            items: ko.observableArray([
                new SelectScriptSetting(
                    'autosafari.mode',
                    'Mode',
                    AutoSafariScript.mode,
                    autoSafariModeOptions,
                ),
                new BooleanScriptSetting(
                    'autosafari.shouldThrowRock',
                    'Throw rocks to end battle',
                    AutoSafariScript.shouldThrowRock,
                ),
            ]),
        };

        this.groups.push(autoDungeon, autoGym, autoFarm, autoSafari);
    }

    public static load(settings: Record<string, any>) {
        this.list.forEach(setting => {
            if (setting.id in settings) {
                this.setSetting(setting.id, settings[setting.id]);
            }
        });
    }

    public static store(): Record<string, unknown> {
        return this.list.reduce((acc, setting) => ({
            ...acc,
            [setting.id]: setting.value,
        }), {});
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
