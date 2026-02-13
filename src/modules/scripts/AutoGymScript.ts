import Script from './Script';
import { Observable } from 'knockout';
import { ACHIEVEMENT_DEFEAT_GYM_VALUES, GameState, getDungeonIndex } from '../GameConstants';
import GameLoadState from '../utilities/GameLoadState';
import { TmpGymType } from '../TemporaryScriptTypes';

export type AutoGymMode = 'NORMAL' | 'CLEARS';

class AutoGymScriptClass extends Script {
    public mode: Observable<AutoGymMode>;
    public clears: Observable<number>;

    private started: boolean;
    private gym: TmpGymType;

    public constructor() {
        super('autogym', 'Auto-gym');
        this.mode = ko.observable('NORMAL');
        this.clears = ko.observable(ACHIEVEMENT_DEFEAT_GYM_VALUES.at(-1)).extend({ numeric: 0 });

        GameLoadState.onLoadState(GameLoadState.states.running, () => {
            const startGym = GymRunner.startGym;
            GymRunner.startGym = (gym, autoRestart, initialRun) => {
                startGym.bind(GymRunner)(gym, autoRestart, initialRun);
                this.gym = gym;
                this.started = true;
            };
        });
    }

    public isUnlocked(): boolean {
        // Once the Viridian Forest is cleared, player has access to the first gym.
        return App.game.statistics.dungeonsCleared[getDungeonIndex('Viridian Forest')]() > 0;
    }

    protected tick() {
        if (!this.started) {
            return;
        }

        if (App.game.gameState === GameState.town && !this.shouldStop()) {
            GymRunner.startGym(this.gym);
        } else if (App.game.gameState === GameState.gym) {
            // Nothing to do
            // Clicks can be handled with AutoclickScript
        } else {
            this.started = false;
        }
    }

    private shouldStop() {
        // 1. If gym isn't in the town anymore (e.g. player was moved)
        // 2. If number of wanted clears is met
        return !player.town.content.includes(this.gym) || (this.mode() === 'CLEARS' && this.gym.clears() >= this.clears());
    }
}

const AutoGymScript = new AutoGymScriptClass();

export default AutoGymScript;
