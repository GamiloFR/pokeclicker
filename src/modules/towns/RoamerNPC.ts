import { camelCaseToString, Region } from '../GameConstants';
import GameHelper from '../GameHelper';
import RoamingPokemonList from '../pokemons/RoamingPokemonList';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import NPC from './NPC';

class RoamerNPC extends NPC {
    constructor(
        public name: string,
        public dialog: string[],
        public region: Region,
        public subRegionRoamerGroup: number,
        image: string = undefined,
        requirement?: Requirement | MultiRequirement | OneFromManyRequirement,
    ) {
        super(name, dialog, { image: image, requirement: requirement });
    }

    get dialogHTML(): string {
        const route = RoamingPokemonList.getIncreasedChanceRouteBySubRegionGroup(this.region, this.subRegionRoamerGroup);
        const roamers = RoamingPokemonList.getSubRegionalGroupRoamers(this.region, this.subRegionRoamerGroup);

        // If no roaming Pokemon yet
        if (!roamers.length) {
            const regionName = RoamingPokemonList.roamerGroups[this.region]?.[this.subRegionRoamerGroup]?.name ?? camelCaseToString(Region[this.region]);
            return `There haven't been any reports of roaming Pokémon around ${regionName} lately.`;
        }

        roamers.forEach((roamer) => {
            if (App.game.statistics.pokemonEncountered[roamer.pokemon.id]() === 0 && App.game.statistics.pokemonSeen[roamer.pokemon.id]() === 0) {
                GameHelper.incrementObservable(App.game.statistics.pokemonSeen[roamer.pokemon.id]);
            }
        });

        const roamersHTML = roamers.map((r) => `<img class="npc-roamer-image" src="assets/images/pokemon/${r.pokemon.id}.png" />`).join('');

        return super.dialogHTML.replace(/{ROUTE_NAME}/g, route()?.routeName) + roamersHTML;
    }
}

export default RoamerNPC;
