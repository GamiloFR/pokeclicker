import Companion from '../Companion';
import CompanionSetting, { CompanionBooleanSetting, CompanionSettingName } from './Setting';

type CompanionTab = {
    id: string;
    list: CompanionSetting<any>[];
};

class CompanionSettings {
    static list: CompanionSetting<any>[];

    public static initialize(): void {
        this.list = [
            new CompanionBooleanSetting('cheats.pokeball.rate', 'All balls have a 100% catch rate', Companion.cheats.pokeballRate.enabled),
            new CompanionBooleanSetting('cheats.safari', 'Catch chance in safari is 100%', Companion.cheats.safari.enabled),
            new CompanionBooleanSetting('cheats.wallet', 'Infinite money', Companion.cheats.wallet.enabled),
            new CompanionBooleanSetting('cheats.attack', 'Infinite attack', Companion.cheats.attack.enabled),
            new CompanionBooleanSetting('cheats.pokeball.quantity', 'Infinite balls', Companion.cheats.pokeballQuantity.enabled),
            new CompanionBooleanSetting('cheats.item', 'Infinite items', Companion.cheats.item.enabled),
            new CompanionBooleanSetting('cheats.berry', 'Infinite berries', Companion.cheats.berry.enabled),
            new CompanionBooleanSetting('cheats.shiny', 'Boost shiny chance (x10)', Companion.cheats.shiny.enabled),
            new CompanionBooleanSetting('bot.battle', 'Autoclick in wild battles', Companion.bot.wildBattle.enabled),
            new CompanionBooleanSetting('bot.gym', 'Autoclick in gym battles', Companion.bot.gymBattle.enabled),
            new CompanionBooleanSetting('bot.temporaryBattle', 'Autoclick in temporary battles', Companion.bot.temporaryBattle.enabled),
        ];
    }

    public static setSetting<T>(name: CompanionSettingName, value: T) {
        this.list
            .filter(setting => setting.name === name)
            .forEach(setting => {
                setting.value = value;
            });
    }

    public static get tabs(): CompanionTab[] {
        return this.list.reduce((tabs, setting) => {
            const category = setting.name.split('.')[0];
            const tabIndex = tabs.findIndex(tab => tab.id.endsWith(category));
            if (tabIndex !== -1) {
                tabs[tabIndex].list.push(setting);
                return tabs;
            } else {
                return [
                    ...tabs,
                    {
                        id: `companion-${category}`,
                        list: [setting],
                    },
                ];
            }
        }, [] as CompanionTab[]);
    }
}

export default CompanionSettings;
