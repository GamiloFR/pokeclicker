import Script from './Script';
import { Computed } from 'knockout';
import { TmpPartyPokemonType } from '../TemporaryScriptTypes';
import Settings from '../settings';
import GameLoadState from '../utilities/GameLoadState';

class AutoHatcheryScriptClass extends Script {
    private breedingList: Computed<TmpPartyPokemonType[]>;
    private cachedBreedingList: TmpPartyPokemonType[];

    public constructor() {
        super('autohatchery', 'Auto-hatchery');
        this.cachedBreedingList = [];
        GameLoadState.onLoadState(GameLoadState.states.running, () => {
            this.breedingList = ko.computed(() => {
                if (this.isActive) {
                    const region = App.game.challenges.list.regionalAttackDebuff.active() ? Settings.getSetting(
                        'breedingRegionalAttackDebuffSetting').observableValue() : -1;
                    this.cachedBreedingList = App.game.party.caughtPokemon
                        .filter((pokemon) => pokemon.isHatchableFiltered())
                        .sort(PartyController.compareBy(
                            Settings.getSetting('hatcherySort').observableValue(),
                            Settings.getSetting('hatcherySortDirection').observableValue(),
                            region,
                        ));
                }
                return this.cachedBreedingList;
            });
        });
    }

    public isUnlocked(): boolean {
        return App.game.breeding.canAccess();
    }

    protected tick() {
        // First, we try to breed a pokemon
        if (App.game.party.hasMaxLevelPokemon() && App.game.breeding.hasFreeEggSlot()) {
            const breedablePokemon = this.breedingList()[0];
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
