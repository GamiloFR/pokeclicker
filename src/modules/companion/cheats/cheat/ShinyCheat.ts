import { GetMultiplierFunction, MultTypeString } from '../../../multiplier/Multiplier';
import Cheat from '../Cheat';

type Multiplier = {
    multipliers: Record<MultTypeString, Array<{
        bonusFunction: GetMultiplierFunction,
        source: string,
    }>>;
};

class ShinyCheat extends Cheat {
    _enable(): void {
        App.game.multiplier.addBonus('shiny', () => 10, 'Cheats');
    }

    _disable(): void {
        const cheatIndex = (App.game.multiplier as unknown as Multiplier).multipliers.shiny.findIndex(({ source }) => source === 'Cheats');
        (App.game.multiplier as unknown as Multiplier).multipliers.shiny.splice(cheatIndex, 1);
    }
}

export default ShinyCheat;
