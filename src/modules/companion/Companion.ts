import GameLoadState from '../utilities/GameLoadState';
import Bot from './automation/Bot';
import Cheats from './cheats/Cheats';
import CompanionSettings from './settings/Settings';

class Companion {
    public static cheats: Cheats;
    public static bot: Bot;

    public static initialize(): void {
        this.cheats = new Cheats();
        this.bot = new Bot();

        CompanionSettings.initialize();

        GameLoadState.onLoadState(GameLoadState.states.running, () => {
            this.load();
        });

        // When 'Shift + C' is pressed, the modal is showed
        document.addEventListener('keydown', event => {
            if (event.shiftKey && event.key === 'C') {
                $('#companionModal').modal('show');
            }
        });

        // When the modal is closed, the settings are saved
        $('#companionModal').on('hide.bs.modal', () => {
            this.save();
        });
    }

    public static load(): void {
        const json = JSON.parse(localStorage.getItem(`companion${Save.key}`)) || {};
        if (json.cheats) {
            this.cheats.fromJSON(json.cheats);
        }
        if (json.bot) {
            this.bot.fromJSON(json.bot);
        }
    }

    public static save(): void {
        const json = this.toJSON();
        localStorage.setItem(`companion${Save.key}`, JSON.stringify(json));
    }

    public static toJSON(): Record<string, any> {
        return {
            cheats: this.cheats.toJSON(),
            bot: this.bot.toJSON(),
        };
    }
}

export default Companion;
