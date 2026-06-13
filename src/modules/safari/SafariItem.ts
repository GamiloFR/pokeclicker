import BagItem from '../interfaces/BagItem';
import Requirement from '../requirements/Requirement';

export type SafariItemWeighed = {
    item: BagItem,
    weight: number,
    requirement?: Requirement
};

class SafariItem {
    constructor(public x: number, public y: number) {
    }
}

export default SafariItem;
