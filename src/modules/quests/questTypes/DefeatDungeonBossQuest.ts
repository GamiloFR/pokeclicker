import { getDungeonRegion, Region } from '../../GameConstants';
import { PokemonNameType } from '../../pokemons/PokemonNameType';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class DefeatDungeonBossQuest extends Quest implements QuestInterface {

    constructor(public dungeon: string, public dungeonBoss : PokemonNameType | string, reward = 0) {
        super(1, reward);
        const region = getDungeonRegion(this.dungeon);
        if (region == Region.none) {
            throw new Error(`Invalid dungeon for quest: ${this.dungeon}`);
        }
        this.focus = ko.observable(0);
    }

    get defaultDescription() {
        return `Defeat ${this.dungeonBoss} in ${this.dungeon}.`;
    }

    onLoad() {
        super.onLoad();
        // TODO : @types/knockout@3.4.66 → 3.5.1
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ko.when(
            () => DungeonRunner.defeatedBoss() === this.dungeonBoss && DungeonRunner.dungeon?.name === this.dungeon,
            () => this.focus(1),
        );
    }
}

export default DefeatDungeonBossQuest;
