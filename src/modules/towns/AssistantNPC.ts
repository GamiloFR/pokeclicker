import App from '../App';
import { EvoTrigger } from '../pokemons/evolutions/Base';
import { pokemonBabyPrevolutionMap, pokemonMap } from '../pokemons/PokemonList';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import NPC from './NPC';

class AssistantNPC extends NPC {
    constructor(
        public name: string,
        public dialogue: string[],
        public listingDialogue: string[],
        public assistantType: string,
        image?: string,
        requirement?: Requirement | MultiRequirement | OneFromManyRequirement,
    ) {
        super(name, dialogue, { image: image, requirement: requirement });
    }

    get dialogHTML(): string {
        const pokemonList = (() => {
            switch (this.assistantType) {
                case 'baby':
                    return App.game.party.caughtPokemon.filter(p =>
                        pokemonBabyPrevolutionMap[p.name] &&
                        App.player.highestRegion() >= pokemonMap[pokemonBabyPrevolutionMap[p.name]].nativeRegion &&
                        !App.game.party.caughtPokemon.some(e => e.name === pokemonBabyPrevolutionMap[p.name]),
                    ).sort((a, b) => a.id - b.id);
                case 'evolution':
                    return App.game.party.caughtPokemon.filter(p => p.evolutions?.some(e =>
                        e.trigger !== EvoTrigger.NONE &&
                        !App.game.party.caughtPokemon.some(p => p.name === e.evolvedPokemon) &&
                        App.player.highestRegion() >= pokemonMap[e.evolvedPokemon].nativeRegion &&
                        Math.floor(pokemonMap[e.basePokemon].id) != Math.floor(pokemonMap[e.evolvedPokemon].id),
                    )).sort((a, b) => a.id - b.id);
                default:
                    return ['Pikachu'];
            }
        })();

        // If list, lead into it with dialogue
        let leadingDialogue = '';
        if (pokemonList?.length) {
            leadingDialogue = `<p>${this.listingDialogue.join('')}</p>`;
        }

        const imageListHTML = pokemonList?.map(p => `<img width="72" src="assets/images/pokemon/${p.id}.png" />`).join('');

        return super.dialogHTML + leadingDialogue + imageListHTML;
    }
}

export default AssistantNPC;
