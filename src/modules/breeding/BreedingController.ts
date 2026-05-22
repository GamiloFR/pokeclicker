import { Computed, Observable } from 'knockout';
import App from '../App';
import { camelCaseToString, EggItemType, Region } from '../GameConstants';
import { SkippableRateLimit } from '../koExtenders';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import PartyController from '../party/PartyController';
import PartyPokemon from '../party/PartyPokemon';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { pokemonMap } from '../pokemons/PokemonList';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import Settings, { breedingFilterSettingKeys } from '../settings/Settings';
import { BootstrapState, modalState } from '../utilities/DisplayObservables';
import SeededRand from '../utilities/SeededRand';
import { HatcheryQueueEntry } from './Breeding';
import Egg from './Egg';
import EggSpots from './EggSpots';
import EggType from './EggType';

class BreedingController {
    public static selectedEggItem = ko.observable<EggItemType>(undefined);

    // Queue size limit setting
    public static queueSizeLimit = ko.observable(-1);

    // Used to pause hatchery list until all the filteredList changes are available
    // Otherwise changing the filters would render removing and adding entries at different times
    public static viewResetWaiting = ko.observable(false);
    private static viewResetReady = false;

    // Pausable access to the sorted list for the modal, with view logic
    private static _cachedSortedFilteredList: PartyPokemon[] = [];
    public static viewSortedFilteredList: Computed<PartyPokemon[]>;

    // Sorted list of pokemon that match hatchery filters
    private static hatcherySortedFilteredList: Computed<PartyPokemon[]> & SkippableRateLimit;

    // Filters for pokemon that match hatchery filters
    private static hatcheryFilteredList = ko.pureComputed(() => {
        // Subscribe to force view resets even when none of the pokemon.matchesHatcheryFilters() computeds change
        BreedingController.resetFilteredListNotifier();
        return App.game.party.caughtPokemon.filter((pokemon) => pokemon.matchesHatcheryFilters());
    }).extend({ rateLimit: 100 }); // deferUpdates isn't good enough to prevent lag

    // Used to reset the LazyLoaderdisplay
    public static resetHatcheryFlag = ko.computed(() => modalState.breedingModal === 'hidden');

    private static resetFilteredListNotifier = ko.observable(null);

    public static initialize() {
        this.viewSortedFilteredList  = ko.pureComputed(() => {
        // Pause updates while the modal is closed
            if (modalState.breedingModal === 'show') {
                BreedingController._cachedSortedFilteredList = BreedingController.hatcherySortedFilteredList();
                // Finish resetting the LazyLoader display after filters change
                if (BreedingController.viewResetReady) {
                    BreedingController.resetHatcheryView();
                }
            }
            return BreedingController._cachedSortedFilteredList;
        });

        this.hatcherySortedFilteredList = ko.pureComputed(() => {
            const hatcheryList = Array.from(BreedingController.hatcheryFilteredList());
            // Don't adjust attack based on region if debuff is disabled
            const region = App.game.challenges.list.regionalAttackDebuff.active() ? Settings.getSetting('breedingRegionalAttackDebuffSetting').observableValue() : -1;
            hatcheryList.sort(PartyController.compareBy(Settings.getSetting('hatcherySort').observableValue(), Settings.getSetting('hatcherySortDirection').observableValue(), region));
            // If a filter or sort order just changed
            if (BreedingController.viewResetWaiting.peek()) {
                // Ready to rerender now that the list is up to date
                BreedingController.viewResetReady = true;
            }
            return hatcheryList;
        }).extend({ skippableRateLimit: 500 }) as Computed<PartyPokemon[]> & SkippableRateLimit;  // Lets us rerender immediately after filter changes

        // Track view settings for hatchery list rerendering
        const hatcheryListSettings = [...breedingFilterSettingKeys, 'hatcherySort', 'hatcherySortDirection'];

        hatcheryListSettings.forEach((setting) => {
            Settings.getSetting(setting).observableValue.subscribe(() => {
                BreedingController.viewResetWaiting(true);
                BreedingController.hatcherySortedFilteredList.evaluateEarly();
            });
        });

        // Reset hatchery display upon modal close
        (modalState.breedingModalObservable as Observable<BootstrapState>).subscribe((state: BootstrapState) => {
            // Resetting scrolling only works before modal is fully hidden
            if (state === 'hide') {
                BreedingController.scrollToTop();
                BreedingController.resetFilteredListNotifier.notifySubscribers();
            } else if (state === 'hidden') {
                BreedingController.resetHatcheryView();
            }
        });
    }

    public static openBreedingModal() {
        if (App.game.breeding.canAccess()) {
            $('#breedingModal').modal('show');
        } else {
            Notifier.notify({
                message: 'You do not have access to the Day Care yet.\n<i>Clear Route 3 first.</i>',
                type: NotificationConstants.NotificationOption.warning,
            });
        }
    }

    public static getEggCssClass(egg: Egg): string {
        const animationType = Settings.getSetting('eggAnimation').observableValue();
        if (animationType === 'none') {
            return '';
        }

        if (egg.progress() >= 100) {
            return 'hatching';
        }

        return (animationType === 'almost' && egg.stepsRemaining() <= 50) ?  'hatchingSoon' : '';
    }

    public static getEggSpots(pokemonName: PokemonNameType) {
        const pokemon = pokemonMap[pokemonName];

        if (EggSpots.customPattern[pokemon.name]) {
            return EggSpots.customPattern[pokemon.name];
        }

        const seed = pokemon.id * pokemon.type.reduce((a, b) => a * (b + 1), 1);
        SeededRand.seed(seed);
        SeededRand.seed(SeededRand.intBetween(0, 1000));
        return SeededRand.fromArray(EggSpots.spotTypes);
    }

    public static getQueueImage([type, id]: HatcheryQueueEntry) {
        if (type == EggType.Pokemon) {
            return PokemonHelper.getImage(id);
        } else if (type == EggType.EggItem) {
            return `assets/images/breeding/${EggItemType[id]}.png`;
        }
        return '';
    }

    public static getEggPokemonName(egg: Egg): string | null {
        return egg.type === EggType.Pokemon ? egg.partyPokemon()?.name : null;
    }

    public static formatSearch(value: string) {
        if (/[^\d]/.test(value)) {
            // non-integer, use as name filter
            Settings.setSettingByName('breedingNameFilter', value);
            Settings.setSettingByName('breedingIDFilter', -1);
        } else {
            // integer, use as ID filter
            Settings.setSettingByName('breedingIDFilter', (value != '' ? +value : -1));
            Settings.setSettingByName('breedingNameFilter', '');
        }
    }

    public static getSearchString() {
        const name = Settings.getSetting('breedingNameFilter').value;
        const id = Settings.getSetting('breedingIDFilter').value;
        return id == -1 ? name : id;
    }

    public static getRegionFilterString() {
        const unlockedRegionsMask = (2 << App.player.highestRegion()) - 1;
        const showRegions = Settings.getSetting('breedingRegionFilter').observableValue() & unlockedRegionsMask;
        if (showRegions == unlockedRegionsMask) {
            return 'All';
        } else if (showRegions > 0) {
            const highestBit = Math.floor(Math.log2(showRegions));
            let txt = camelCaseToString(Region[highestBit]);
            if (showRegions > (1 << highestBit)) {
                txt += ' & more';
            }
            return txt;
        } else {
            return 'None';
        }
    }

    // Value displayed at bottom of image
    public static getDisplayValue(pokemon: PartyPokemon): string {
        const pokemonData = pokemonMap[pokemon.name];
        switch (Settings.getSetting('breedingDisplayTextSetting').observableValue()) {
            case 'attackBonus': return `Attack Bonus: ${Math.floor(pokemon.getBreedingAttackBonus() * BreedingController.calculateRegionalMultiplier(pokemon)).toLocaleString('en-US')}`;
            case 'baseAttack': return `Base Attack: ${pokemon.baseAttack.toLocaleString('en-US')}`;
            case 'eggSteps': return `Egg Steps: ${pokemon.getEggSteps().toLocaleString('en-US')}`;
            case 'timesHatched': return `Hatches: ${App.game.statistics.pokemonHatched[pokemonData.id]().toLocaleString('en-US')}`;
            case 'breedingEfficiency': return `Efficiency: ${(pokemon.breedingEfficiency() * BreedingController.calculateRegionalMultiplier(pokemon)).toLocaleString('en-US', { maximumFractionDigits: 3 })}`;
            case 'stepsPerAttack': return `Steps/Att: ${(pokemon.getEggSteps() / (pokemon.getBreedingAttackBonus() * BreedingController.calculateRegionalMultiplier(pokemon))).toLocaleString('en-US', { maximumFractionDigits: 3 })}`;
            case 'dexId': return `#${pokemon.id <= 0 ? '???' : Math.floor(pokemon.id).toString().padStart(3, '0')}`;
            case 'vitamins': return `Vitamins: ${pokemon.totalVitaminsUsed()}`;
            case 'evs': return `EVs: ${pokemon.evs().toLocaleString('en-US')}`;
            case 'attack':
            default:
                return `Attack: ${Math.floor(pokemon.attack * BreedingController.calculateRegionalMultiplier(pokemon)).toLocaleString('en-US')}`;
        }
    }

    public static calculateRegionalMultiplier(pokemon: PartyPokemon): number {
        // Check if regional debuff is active
        if (App.game.challenges.list.regionalAttackDebuff.active()) {
            // Check if regional debuff being applied for sorting
            const regionalAttackDebuff = Settings.getSetting('breedingRegionalAttackDebuffSetting').observableValue();
            if (regionalAttackDebuff > -1 && PokemonHelper.calcNativeRegion(pokemon.name) !== regionalAttackDebuff) {
                return App.game.party.getRegionAttackMultiplier();
            }
        }
        return 1.0;
    }

    public static calcEggOdds(eggItem: EggItemType, pokemon: PokemonNameType): number {
        const hatchList = App.game.breeding.hatchList[eggItem];
        const region = hatchList.findIndex(r => r.includes(pokemon));

        if (region === -1) {
            return 0;
        }

        const regionPoolCount = eggItem === EggItemType.Mystery_egg
            ? Object.values(App.game.breeding.hatchList).reduce((total, eggTypePool) => total + eggTypePool[region].length, 0)
            : hatchList[region].length;

        const regionDiff = 1 + (App.player.highestRegion() - Math.max(1, region));
        // odds of this region pool
        const odds = 1 / Math.pow(2, regionDiff);
        // odds of pokemon in this region pool
        return odds / regionPoolCount;
    }

    private static resetHatcheryView() {
        BreedingController.scrollToTop();
        BreedingController.resetHatcheryFlag.notifySubscribers();
        BreedingController.viewResetWaiting(false);
        BreedingController.viewResetReady = false;
    }

    private static scrollToTop() {
        document.querySelector('#breeding-pokemon-list-container .scrolling-div-breeding-list').scrollTop = 0;
    }
}

export default BreedingController;
