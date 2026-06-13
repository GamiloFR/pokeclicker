import App from '../App';
import { Currency, Region } from '../GameConstants';
import GameHelper from '../GameHelper';
import Multiplier from '../multiplier/Multiplier';
import PartyController from '../party/PartyController';
import HatchRequirement from '../requirements/HatchRequirement';
import QuestRequirement from '../requirements/QuestRequirement';
import UndergroundLayersMinedRequirement from '../requirements/UndergroundLayersMinedRequirement';
import UniqueItemOwnedRequirement from '../requirements/UniqueItemOwnedRequirement';
import Settings from '../settings/Settings';
import Amount from '../wallet/Amount';
import Breeding from './Breeding';
import Egg from './Egg';
import HatcheryHelper from './HatcheryHelper';

class HatcheryHelpers {
    public static list: HatcheryHelper[] = [];

    public MAX_HIRES = 3;
    public available = ko.pureComputed(() => HatcheryHelpers.list.filter(f => f.isUnlocked()));
    public hired = ko.pureComputed(() => HatcheryHelpers.list.filter(f => f.hired()));
    public canHire =  ko.pureComputed(() => this.hired().length < Math.min(this.MAX_HIRES, this.hatchery.eggSlots));
    public requirement = new HatchRequirement(100);


    constructor(public hatchery: Breeding) {}

    public static add(helper: HatcheryHelper) {
        this.list.push(helper);
    }

    public isUnlocked() {
        return this.requirement.isCompleted();
    }

    public addSteps(amount: number, multiplier: Multiplier): void {
        // Add steps and attack based on efficiency
        this.hired().forEach((helper, index) => {
            // Calculate how many steps should be applied
            const steps = Math.max(1, Math.round(amount * (helper.stepEfficiency() / 100)));

            // Add steps to the egg we are managing
            let egg = this.hatchery.eggList[index]();
            egg.addSteps(steps, multiplier, true);

            // Check if the egg is ready to hatch
            if (egg.canHatch()) {
                const hatched = egg.hatch(helper.attackEfficiency());
                if (hatched) {
                    // Reset egg
                    this.hatchery.eggList[index](new Egg());
                    egg = this.hatchery.eggList[index]();
                }
            }

            // Check if egg slot empty
            if (egg.isNone()) {
                // Check if there's a pokemon we can chuck into an egg
                const regionalAttackDebuff = App.game.challenges.list.regionalAttackDebuff.active() ? Settings.getSetting('breedingRegionalAttackDebuffSetting').value : Region.none;
                const compare = PartyController.compareBy(helper.sortOption(), helper.sortDirection(), regionalAttackDebuff);

                const categories = helper.categories();
                const useHatcheryFilters = helper.useHatcheryFilters();
                const pokemon = App.game.party.caughtPokemon.reduce((best, caughtPokemon) => {
                    if (useHatcheryFilters && !caughtPokemon.isHatchableFiltered()) {
                        return best;
                    } else if (!caughtPokemon.isHatchable()) {
                        return best;
                    } else if (categories.length && !categories.some((cat) => caughtPokemon.category.includes(cat))) {
                        return best;
                    }
                    return compare(best, caughtPokemon) <= 0 ? best : caughtPokemon;
                });

                if (pokemon) {
                    this.hatchery.gainPokemonEgg(pokemon, index);
                    // Charge the player when we put a pokemon in the hatchery
                    helper.charge();
                    // Increment our hatched counter
                    GameHelper.incrementObservable(helper.hatched, 1);
                }
            }
        });
    }

    public toJSON(): Record<string, any>[] {
        return this.available().map(f => f.toJSON());
    }

    public fromJSON(json: Array<any>): void {
        if (!json || !json.length) {
            return;
        }

        HatcheryHelpers.list.forEach(f => {
            const data = json?.find(_f => _f.name == f.name);
            if (data) {
                f.fromJSON(data);
            }
        });
    }
}

// Note: Mostly Gender-neutral names used as the trainer sprite is (seeded) randomly generated, or check the sprite
HatcheryHelpers.add(new HatcheryHelper('Sam', new Amount(1000, Currency.money), 10, 10, new HatchRequirement(100)));
HatcheryHelpers.add(new HatcheryHelper('Blake', new Amount(10000, Currency.money), 10, 20, new HatchRequirement(500)));
HatcheryHelpers.add(new HatcheryHelper('Jasmine', new Amount(50000, Currency.money), 15, 50, new UniqueItemOwnedRequirement('HatcheryHelperJasmine', 'purchase', 'Purchased in the Hoenn region.')));
HatcheryHelpers.add(new HatcheryHelper('Leslie', new Amount(777777, Currency.money), 150, 50, new UniqueItemOwnedRequirement('HatcheryHelperLeslie', 'purchase', 'Obtain and redeem a code from the PokéClicker Discord server.')));
HatcheryHelpers.add(new HatcheryHelper('Parker', new Amount(1000, Currency.dungeonToken), 15, 25, new HatchRequirement(1000)));
HatcheryHelpers.add(new HatcheryHelper('Dakota', new Amount(10000, Currency.dungeonToken), 50, 50, new UniqueItemOwnedRequirement('HatcheryHelperDakota', 'purchase', 'Purchased in the Johto region.')));
HatcheryHelpers.add(new HatcheryHelper('Cameron', new Amount(75, Currency.farmPoint), 75, 75, new UniqueItemOwnedRequirement('HatcheryHelperCameron', 'purchase', 'Purchased in the Hoenn region.')));
HatcheryHelpers.add(new HatcheryHelper('Justice', new Amount(10, Currency.questPoint), 100, 50, new QuestRequirement(200)));
HatcheryHelpers.add(new HatcheryHelper('Carey', new Amount(20, Currency.questPoint), 50, 125, new UniqueItemOwnedRequirement('HatcheryHelperCarey', 'purchase', 'Purchased in the Johto region.')));
HatcheryHelpers.add(new HatcheryHelper('Aiden', new Amount(20, Currency.diamond), 100, 100, new UndergroundLayersMinedRequirement(100)));
HatcheryHelpers.add(new HatcheryHelper('Kris', new Amount(40, Currency.diamond), 100, 150, new UniqueItemOwnedRequirement('HatcheryHelperKris', 'purchase', 'Purchased in the Kanto region.')));
HatcheryHelpers.add(new HatcheryHelper('Noel', new Amount(25, Currency.battlePoint), 100, 200, new UniqueItemOwnedRequirement('HatcheryHelperNoel', 'purchase', 'Purchased in the Hoenn region.')));

export default HatcheryHelpers;
