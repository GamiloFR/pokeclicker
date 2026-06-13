import GameHelper from '../GameHelper';
import SeededRand from '../utilities/SeededRand';
import NPC from './NPC';

// TODO Remove when EnigmaMutation is moved to modules
// We need to declare a class in order to use the instanceof operator
declare class EnigmaMutation {
    partialHint: string;
}

class KantoBerryMasterNPC extends NPC {
    constructor(
        public name: string,
        public dialog: string[],
    ) {
        super(name, dialog);
    }

    get dialogHTML(): string {
    // Before the player has unlocked the farm
        if (!App.game.farming.canAccess()) {
            return super.dialogHTML;
        }

        // After the farm is unlocked
        return `<p>${KantoBerryMasterNPC.generateMessage(GameHelper.today())}</p>`;
    }

    public static generateMessage(date: Date): string {
        if (App.game.farming.unlockedBerries.every((berry) => berry())) {
            return 'The disciple has surpassed the master. I have nothing more to teach you.';
        }

        const possibleMutations = App.game.farming.mutations.filter((mut) => mut.unlocked && mut.showHint && !App.game.farming.unlockedBerries[mut.mutatedBerry]());

        if (possibleMutations.length === 0) {
            return 'It seems as though you have hit a roadblock in your Berry progress. Focus on other areas before returning.';
        }

        SeededRand.seedWithDate(date);
        possibleMutations.forEach(() => SeededRand.boolean());
        const mutationToShow = SeededRand.fromArray(possibleMutations);
        mutationToShow.hintSeen = true;

        if (mutationToShow instanceof EnigmaMutation) {
            return mutationToShow.partialHint;
        }
        return mutationToShow.hint;
    }
}

export default KantoBerryMasterNPC;
