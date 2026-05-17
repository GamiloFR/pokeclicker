import BerryType from '../enums/BerryType';
import FarmController from '../farming/FarmController';
import GameHelper from '../GameHelper';
import Rand from '../utilities/Rand';
import Bait, { BaitType } from './Bait';
import SafariPokemon from './SafariPokemon';

const BaitList: { [name: string]: Bait } = {};

export function initBaitList() {
    BaitList.Bait = new Bait(BaitType.Bait, 'Bait', 'some bait', 'assets/images/safari/bait.png',
        () => '∞',
        (pokemon: SafariPokemon) => {
            pokemon.eatingBait = BaitType.Bait;
            pokemon.eating = Math.max(pokemon.eating, Rand.intBetween(2, 6));
            pokemon.angry = 0;

        },
    );
    BaitList.Razz = new Bait(BaitType.Razz, 'Razz Berry', 'a Razz Berry', FarmController.getBerryImage(BerryType.Razz),
        () => App.game.farming.berryList[BerryType.Razz](),
        (pokemon: SafariPokemon) => {
            GameHelper.incrementObservable(App.game.farming.berryList[BerryType.Razz], -1);
            pokemon.eatingBait = BaitType.Razz;
            pokemon.eating = Math.max(pokemon.eating, Rand.intBetween(2, 7));
            pokemon.angry = 0;
        },
    );
    BaitList.Nanab = new Bait(BaitType.Nanab, 'Nanab Berry', 'a Nanab Berry', FarmController.getBerryImage(BerryType.Nanab),
        () => App.game.farming.berryList[BerryType.Nanab](),
        (pokemon: SafariPokemon) => {
            GameHelper.incrementObservable(App.game.farming.berryList[BerryType.Nanab], -1);
            pokemon.eatingBait = BaitType.Nanab;
            pokemon.eating = Math.max(pokemon.eating, Rand.intBetween(2, 7));
            pokemon.angry = 0;
        },
    );
}

export default BaitList;
