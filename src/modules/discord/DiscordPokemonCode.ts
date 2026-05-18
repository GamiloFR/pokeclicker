import { SHINY_CHANCE_SHOP } from '../GameConstants';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import PokemonFactory from '../pokemons/PokemonFactory';
import { PokemonListData } from '../pokemons/PokemonList';
import DiscordCode from './DiscordCode';

class DiscordPokemonCode extends DiscordCode {
    constructor(pokemon: PokemonListData, price: number, description: string) {
        const image = `assets/images/pokemon/${pokemon.id}.png`;
        const claimFunction = () => {
            if (pokemon.nativeRegion > player.highestRegion()) {
                Notifier.notify({
                    message: 'You need to progress further to unlock this pokemon.',
                    type: NotificationConstants.NotificationOption.warning,
                });
                return false;
            }

            const shiny = PokemonFactory.generateShiny(SHINY_CHANCE_SHOP);
            App.game.party.gainPokemonById(pokemon.id, shiny, true);
            // Notify that the code was activated successfully
            Notifier.notify({
                message: `You obtained a${shiny ? ' shiny' : ''} ${pokemon.name}!`,
                type: NotificationConstants.NotificationOption.success,
                timeout: 1e4,
            });
            return true;
        };
        super(pokemon.name, image, price, description, claimFunction);
    }
}

export default DiscordPokemonCode;
