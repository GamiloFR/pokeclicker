import Trainer from '../battles/Trainer';
import GymPokemon from '../gym/GymPokemon';
import EnemyOptions from './EnemyOptions';

class DungeonTrainer extends Trainer {
    constructor(
        trainerClass: string,
        team: GymPokemon[],
        public options?: EnemyOptions,
        name?: string,
        subTrainerClass?: string,
    ) {
        super(trainerClass, team, name, subTrainerClass);
    }
}

export default DungeonTrainer;
