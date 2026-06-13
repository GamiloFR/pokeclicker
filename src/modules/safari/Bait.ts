import SafariPokemon from './SafariPokemon';

export enum BaitType {
    Bait = 0,
    Razz,
    Nanab,
}

class Bait {
    constructor(
        public type: BaitType,
        public name: string,
        public useName: string,
        public image: string,
        public amount: () => string | number,
        public use: (pokemon: SafariPokemon) => void,
    ) { }

    get btnName(): string {
        return `${this.name} (${this.amount()})`;
    }

}

export default Bait;
