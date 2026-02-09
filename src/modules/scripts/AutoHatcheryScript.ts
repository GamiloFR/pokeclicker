import Script from './Script';

class AutoHatcheryScriptClass extends Script {
    public constructor() {
        super('custom.scripts.autohatchery', 'Auto-hatchery');
    }

    public isUnlocked(): boolean {
        return App.game.breeding.canAccess();
    }

    protected tick() {
        // First, we try to breed a pokemon
        if (App.game.party.hasMaxLevelPokemon() && App.game.breeding.hasFreeEggSlot()) {
            const breedablePokemon = BreedingController.viewSortedFilteredList()
                .find(pokemon => pokemon.isHatchableFiltered());
            if (breedablePokemon && App.game.breeding.addPokemonToHatchery(breedablePokemon)) {
                return;
            }
        }

        // If we cannot breed, we try to hatch an egg
        const hatchableEgg = App.game.breeding.eggList.findIndex(egg => egg().canHatch());
        if (hatchableEgg !== -1) {
            App.game.breeding.hatchPokemonEgg(hatchableEgg);
        }
    }
}

const AutoHatcheryScript = new AutoHatcheryScriptClass();

export default AutoHatcheryScript;
