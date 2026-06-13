import { Observable } from 'knockout';

export type SettingTemplate = 'BotSelectSetting';

class Setting<T> {
    public constructor(
        public name: string,
        public description: string,
        public template: SettingTemplate,
        public observable: Observable<T>,
    ) {}
}

export default Setting;
