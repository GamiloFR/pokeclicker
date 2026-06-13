import App from '../App';
import PokemonType from '../enums/PokemonType';
import { Region } from '../GameConstants';
import PokemonFactory from '../pokemons/PokemonFactory';
import Routes from '../routes/Routes';
import WeatherType from '../weather/WeatherType';

class QuestHelper {
    public static highestOneShotRoute(region: Region): number {
        const routes = Routes.getRoutesByRegion(region).map(r => r.number);
        const first = Math.min(...routes);
        const last = Math.max(...routes);
        const attack = Math.max(1, App.game.party.calculatePokemonAttack(PokemonType.None, PokemonType.None, false, region, true, false, WeatherType.Clear));

        for (let route = last; route >= first; route--) {
            if (PokemonFactory.routeHealth(route, region) < attack) {
                return route;
            }
        }

        return 0;
    }
}

export default QuestHelper;
