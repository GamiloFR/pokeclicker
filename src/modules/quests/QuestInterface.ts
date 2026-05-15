import type { Computed, Observable } from 'knockout';

interface QuestInterface {
    index: number;                           // Index in Quest set
    progress: Computed<number>;      // A number between 0 and 1 representing the progress
    isCompleted: Computed<boolean>;  // True when quest requirements have been fulfilled
    claimed: Observable<boolean>;    // True when reward has been claimed
    initial: any;                            // Value of focus when quest was started
    notified: boolean;                       // If player has been notified of completion

    // Required in new quest type
    focus: Observable<any>;          // Variable to watch
    defaultDescription: string;              // Short description of how to complete the quest
    pointsReward: number;                    // Quest points rewarded for completion
    xpReward: number;                        // Questing xp points gained for completion
}

export default QuestInterface;
