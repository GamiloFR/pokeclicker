import { BulletinBoards, GameState, MINUTE } from '../GameConstants';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import Requirement from '../requirements/Requirement';
import Quest from './Quest';
import { QuestLineNameType } from './QuestLineNameType';
import QuestLineState from './QuestLineState';
import MultipleQuestsQuest from './questTypes/MultipleQuestsQuest';

class QuestLine {
    public state = ko.observable(QuestLineState.inactive).extend({ numeric: 0 });
    public quests = ko.observableArray<Quest>();
    public curQuest = ko.pureComputed(() => {
        return this.quests().map((quest: Quest) => {
            return +quest.isCompleted();
        })
            .reduce( ( acc, iscompleted) => {
                return acc + iscompleted;
            }, 0);
    });
    public curQuestObject = ko.pureComputed<any>(() => {
        this.quests(); //register dependency on this computed so it will update
        if (this.totalQuests > 0 && this.curQuest() < this.totalQuests) {
            return this.quests()[this.curQuest()];
        } else {
            return { progress: () => {
                return 0;
            }, progressText: () => {
                return '';
            } };
        }
    });
    public curQuestInitial = ko.observable<number>();
    public totalQuests: number;
    public autoBegin = this.curQuest.subscribe(() => {
        if (this.curQuest() < this.totalQuests) {
            if (this.curQuestObject().initial() == null && this.state() != QuestLineState.suspended) {
                this.beginQuest(this.curQuest());
            }
        } else {
            this.state(QuestLineState.ended);
        }
    });

    private pausableStates = [GameState.town, GameState.fighting];
    private cachedTranslatedName?: string;
    private _description: string;
    private cachedTranslatedDescription?: string;

    constructor(
        public name: QuestLineNameType,
        description: string,
        public requirement?: Requirement,
        public bulletinBoard: BulletinBoards = BulletinBoards.None,
        private disablePausing = false, // applies to bulletin board quests only
    ) {
        this.name = name;
        this._description = description;
        this.totalQuests = 0;
        this.curQuestInitial.equalityComparer = () => {
            return false;
        }; //Always update subscriptions, even if same data pushed in
    }

    addQuest(quest: Quest) {
        this.totalQuests++;
        quest.index = this.totalQuests;
        quest.inQuestLine = true;
        quest.parentQuestLine = this;
        quest.createAutoCompleter();
        this.quests.push(quest);
    }

    beginQuest(index = 0, initial?: number, notifyStart = false) {
        const quest = this.quests()[index];
        if (initial != undefined) {
            quest.initial(initial);
        } else {
            quest.begin();
        }
        quest.onLoad();
        this.curQuestInitial(quest.initial());
        this.state(QuestLineState.started);
        if (notifyStart) {
            Notifier.notify({
                title: 'New Quest Line Started!',
                message: `${this.description}\n<i>"${this.name}" added to the Quest List!</i>`,
                type: NotificationConstants.NotificationOption.success,
                timeout: 5 * MINUTE,
            });
        }
    }

    resumeAt(index: number, initial?: number) {
        if (initial != undefined) {
            for (let i = 0; i < Math.min(index, this.totalQuests); i++) {
                this.quests()[i].complete(true);
            }
            if (index < this.totalQuests) {
                this.beginQuest(index, initial);
            }
        } else {
            this.beginQuest(0);
        }
    }

    suspendQuest(skipPausableCheck = false) {
        if ((!skipPausableCheck && !this.isPausable()) || this.state() == QuestLineState.suspended) {
            // Do nothing if already suspended or not pausable.
            return;
        }

        // Mark quest (or sub quests if multi quest) as suspended to prevent progress
        const quest = this.quests()[this.curQuest()];
        if (quest instanceof MultipleQuestsQuest) {
            quest.quests.forEach((q) => {
                q.suspended = true;
            });
        }

        quest.suspended = true;
        this.state(QuestLineState.suspended);
    }

    resumeSuspendedQuest() {
        if (this.state() != QuestLineState.suspended) {
            return;
        }

        // Re-activate suspended quest
        const quest = this.quests()[this.curQuest()];
        if (quest instanceof MultipleQuestsQuest) {
            quest.quests.forEach((q) => {
                q.suspended = false;
            });
        }

        quest.suspended = false;
        this.state(QuestLineState.started);
    }

    isPausable(): boolean {
        if (this.disablePausing || this.bulletinBoard == BulletinBoards.None
            || !this.pausableStates.includes(App.game.gameState)
        ) {
            return false;
        }

        return true;
    }

    get displayName(): string {
        if (!this.cachedTranslatedName) {
            this.cachedTranslatedName = App.translation.getHashed(
                `${this.name}.displayName`,
                'questlines',
                this.name,
            )();
        }
        return this.cachedTranslatedName;
    }

    get description(): string {
        if (!this.cachedTranslatedDescription) {
            this.cachedTranslatedDescription = App.translation.getHashed(
                `${this.name}.description`,
                'questlines',
                this._description,
            )();
        }
        return this.cachedTranslatedDescription;
    }

    get pauseTooltip(): string {
        if (this.disablePausing || this.bulletinBoard == BulletinBoards.None) {
            return 'This quest line cannot be paused. It is either a story, progression related, or otherwise required quest.';
        }

        if (!this.pausableStates.includes(App.game.gameState)) {
            return 'Quest Lines can only be paused while in a town or fighting on a route.';
        }

        return 'Pausing this quest line will remove it from your quest list and prevent any progress.<br /><br />It can be resumed from the current step at the Bulletin Board it was originally accepted.';
    }

    toJSON() {
        const json = {
            state: this.state(),
            name: this.name,
            quest: this.curQuest(),
            initial: this.curQuestObject().initial?.() ?? this.curQuestInitial(),
        };
        if (this.curQuestObject() instanceof MultipleQuestsQuest) {
            json.initial = this.curQuestObject().quests.map((q: Quest) => q.isCompleted() ? true : q.initial());
        }
        return json;
    }
}

export default QuestLine;
