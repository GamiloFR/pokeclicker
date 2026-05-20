import { Currency, LuxuryBallCurrencyRate, PokeballType, Region } from '../GameConstants';
import PokemonFactory from '../pokemons/PokemonFactory';
import Amount from '../wallet/Amount';

class BattleHelper {
    public static gainTokens(route: number, region: Region, pokeball: PokeballType): Amount {
        let currencyKinds = [Currency.dungeonToken];
        if (pokeball === PokeballType.Luxuryball) {
            currencyKinds = [
                Currency.dungeonToken,
                Currency.money,
                Currency.questPoint,
                Currency.diamond,
                Currency.farmPoint,
                Currency.battlePoint,
            ];
        }
        const currencyUnits = PokemonFactory.routeDungeonTokens(route, region) / LuxuryBallCurrencyRate[Currency.dungeonToken];
        const chosenCurrency = currencyKinds[Math.floor(Math.random() * currencyKinds.length)];
        return App.game.wallet.addAmount(new Amount(Math.ceil(currencyUnits * LuxuryBallCurrencyRate[chosenCurrency]), chosenCurrency), false);
    }
}

export default BattleHelper;
