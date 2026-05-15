import { Saveable } from '../../DataStore/common/Saveable';
import { AchievementOption, MINUTE, ShadowStatus } from '../../GameConstants';
import NotificationConstants from '../../notifications/NotificationConstants';
import Notifier from '../../notifications/Notifier';
import MultiRequirement from '../../requirements/MultiRequirement';
import QuestLineStepCompletedRequirement from '../../requirements/QuestLineStepCompletedRequirement';
import ShadowPokemonRequirement from '../../requirements/ShadowPokemonRequirement';
import { TmpPartyPokemonType } from '../../TemporaryScriptTypes';

class PurifyChamber implements Saveable {
    saveKey = 'PurifyChamber';
    defaults = {};

    public static requirements = new QuestLineStepCompletedRequirement('Shadows in the Desert', 17);

    public selectedPokemon = ko.observable<TmpPartyPokemonType>();
    public currentFlow = ko.observable(0);
    public flowNeeded = ko.pureComputed(() => {
        const purifiedPokemon = App.game.party.caughtPokemon.filter((p) => p.shadow == ShadowStatus.Purified).length;
        const flow = 15 * purifiedPokemon * purifiedPokemon +
                15 * purifiedPokemon +
                1500 * Math.exp(0.1 * purifiedPokemon);
        return Math.round(flow);
    });
    private notified = false;

    private static shortcutRequirement = new MultiRequirement([
        new ShadowPokemonRequirement(1, ShadowStatus.Purified),
        new ShadowPokemonRequirement(131, ShadowStatus.Purified, AchievementOption.less),
    ]);
    public static shortcutVisible = ko.pureComputed((): boolean => {
        return PurifyChamber.shortcutRequirement.isCompleted();
    });

    public canPurify() : boolean {
        const selectedPokemon = this.selectedPokemon();
        if (!selectedPokemon) {
            return false;
        } else if (selectedPokemon.shadow != ShadowStatus.Shadow) {
            return false;
        } else if (this.currentFlow() < this.flowNeeded()) {
            return false;
        }
        return true;
    }

    public purify() {
        if (!this.canPurify()) {
            return;
        }

        const selectedPokemon = this.selectedPokemon();
        if (selectedPokemon) {
            selectedPokemon.shadow = ShadowStatus.Purified;
        }
        this.currentFlow(0);
        this.notified = false;
    }

    public gainFlow(exp: number) {
        if (!PurifyChamber.requirements.isCompleted() || !App.game.party.hasShadowPokemon()) {
            return;
        }
        const newFlow = Math.round(this.currentFlow() + exp / 1000);
        this.currentFlow(Math.min(newFlow, this.flowNeeded()));

        if (!this.notified && this.currentFlow() >= this.flowNeeded()) {
            this.notified = true;
            Notifier.notify({
                title: 'Purify Chamber',
                message: 'Maximum Flow has accumulated at the Purify Chamber in Orre!',
                type: NotificationConstants.NotificationOption.primary,
                sound: NotificationConstants.NotificationSound.General.max_flow,
                timeout: 15 * MINUTE,
            });
        }
    }

    public static openPurifyChamberModal() {
        if (PurifyChamber.requirements.isCompleted()) {
            $('#purifyChamberModal').modal('show');
        } else {
            Notifier.notify({
                message: 'You need to progress in the Shadows in the Desert quest line to unlock this feature.',
                type: NotificationConstants.NotificationOption.warning,
            });
        }
    }

    toJSON(): Record<string, any> {
        return {
            selectedPokemon: this.selectedPokemon()?.id,
            currentFlow: this.currentFlow(),
        };
    }

    fromJSON(json: Record<string, any>): void {
        if (json) {
            if (json.selectedPokemon) {
                let selectedPokemon = App.game.party.getPokemon(json.selectedPokemon);
                if (selectedPokemon?.shadow != ShadowStatus.Shadow) {
                    selectedPokemon = undefined;
                }
                this.selectedPokemon(selectedPokemon);

                this.currentFlow(json.currentFlow ?? 0);
            }
        }
    }
}

export default PurifyChamber;
