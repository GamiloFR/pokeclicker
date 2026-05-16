import { DEFEAT_POKEMONS_BASE_REWARD, Region, StartingRoutes } from '../../GameConstants';
import Routes from '../../routes/Routes';
import SeededRand from '../../utilities/SeededRand';
import Quest from '../Quest';
import QuestInterface from '../QuestInterface';

class DefeatPokemonsQuest extends Quest implements QuestInterface {

    constructor(
        killsNeeded: number,
        reward: number,
        public route: number,
        public region: Region,
        customDescription?: string,
    ) {
        super(killsNeeded, reward);
        this.focus = App.game.statistics.routeKills[this.region][this.route];
        this.customDescription = customDescription;
    }

    public static generateData(): any[] {
        const amount = SeededRand.intBetween(100, 500);
        const region = SeededRand.intBetween(0, player.highestRegion());
        // Only use unlocked routes
        const possibleRoutes = Routes.getRoutesByRegion(region).map(route => route.number).filter(route => MapHelper.accessToRoute(route, region));
        // If no routes unlocked in this region, just use the first route of the region
        const route = possibleRoutes.length ? SeededRand.fromArray(possibleRoutes) : StartingRoutes[region];
        const reward = this.calcReward(amount, route, region);
        return [amount, reward, route, region];
    }

    private static calcReward(killsNeeded: number, route: number, region: number): number {
        const attacksPerPokemon = Math.ceil(Math.min(4, PokemonFactory.routeHealth(route, region) / Math.max(1, App.game.party.pokemonAttackObservable())));
        const reward = Math.ceil(DEFEAT_POKEMONS_BASE_REWARD * attacksPerPokemon * killsNeeded);
        return super.randomizeReward(reward);
    }

    get defaultDescription(): string {
        return `Defeat ${this.amount.toLocaleString('en-US')} Pokémon on ${Routes.getName(this.route, this.region, false, true)}.`;
    }

    toJSON() {
        const json = super.toJSON();
        json.name = this.constructor.name;
        json.data.push(this.route);
        json.data.push(this.region);
        return json;
    }
}

export default DefeatPokemonsQuest;
