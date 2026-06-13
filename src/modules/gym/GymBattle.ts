import App from '../App';
import Battle from '../battles/Battle';
import { Region } from '../GameConstants';
import { MultiplierDecreaser } from '../items/types';
import PokemonFactory from '../pokemons/PokemonFactory';
import Gym from './Gym';
import GymRunner from './GymRunner';

class GymBattle extends Battle {

    static gym: Gym;
    static index = ko.observable(0);
    static totalPokemons = ko.observable(0);

    public static pokemonsDefeatedComputable = ko.pureComputed(() => {
        return GymBattle.index();
    });

    public static pokemonsUndefeatedComputable = ko.pureComputed(() => {
        return GymBattle.totalPokemons() - GymBattle.index();
    });

    public static pokemonAttack() {
        if (GymRunner.running()) {
            super.pokemonAttack();
        }
    }

    public static clickAttack() {
        if (GymRunner.running()) {
            super.clickAttack();
        }
    }
    /**
     * Award the player with exp, and go to the next pokemon
     */
    public static defeatPokemon() {
        this.enemyPokemon().defeat(true);

        // Make gym "route" regionless
        App.game.breeding.progressEggsBattle(this.gym.badgeReward * 3 + 1, Region.none);
        this.index(this.index() + 1);

        if (this.index() >= this.gym.getPokemonList().length) {
            GymRunner.gymWon(this.gym);
        } else {
            this.generateNewEnemy();
        }
        App.player.lowerItemMultipliers(MultiplierDecreaser.Battle);
    }

    /**
     * Reset the counter.
     */
    public static generateNewEnemy() {
        this.counter = 0;
        this.enemyPokemon(PokemonFactory.generateGymPokemon(this.gym, this.index()));
    }
}

export default GymBattle;
