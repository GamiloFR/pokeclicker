import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import Amount from '../wallet/Amount';

interface EnemyOptions {
    weight?: number;
    requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
    reward?: Amount;
    hide?: boolean;
    hideTrainer?: boolean;
}

export default EnemyOptions;
