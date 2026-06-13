import App from '../App';
import { Feature } from '../DataStore/common/Feature';
import { GameState } from '../GameConstants';
import BattleFrontierBattle from './BattleFrontierBattle';
import BattleFrontierMilestones from './BattleFrontierMilestones';
import BattleFrontierRunner from './BattleFrontierRunner';

class BattleFrontier implements Feature {
    name = 'BattleFrontier';
    saveKey = 'battleFrontier';

    milestones = BattleFrontierMilestones;

    defaults = {};

    initialize(): void {}

    update(): void {}

    canAccess(): boolean {
        return true;
    }

    public enter(): void {
        BattleFrontierBattle.enemyPokemon(null);
        App.game.gameState = GameState.battleFrontier;
    }

    public start(useCheckpoint: boolean): void {
        BattleFrontierRunner.start(useCheckpoint);
    }

    public leave(): void {
        // Put the user back in the town
        App.game.gameState = GameState.town;
    }

    toJSON(): Record<string, any> {
        return {
            milestones: this.milestones.milestoneRewards.filter(m => m.obtained()).map(m => [m.stage, m.description]),
            checkpoint: BattleFrontierRunner.checkpoint(),
        };
    }

    fromJSON(json: Record<string, any>): void {
        if (json == null) {
            return;
        }

        json.milestones?.forEach(([stage, description]: [number, string]) => {
            this.milestones.milestoneRewards.find(m => m.stage == stage && m.description == description)?.obtained(true);
        });

        BattleFrontierRunner.checkpoint(json.checkpoint);
    }
}

export default BattleFrontier;
