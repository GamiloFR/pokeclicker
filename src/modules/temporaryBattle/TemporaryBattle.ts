import App from '../App';
import areaStatus from '../enums/AreaStatus';
import { BattleBackground, Environment, getTemporaryBattlesIndex } from '../GameConstants';
import GymPokemon from '../gym/GymPokemon';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import TemporaryBattleRequirement from '../requirements/TemporaryBattleRequirement';
import Town from '../towns/Town';
import TownContent from '../towns/townContent/TownContent';
import TownList from '../towns/TownList';
import TemporaryBattleRunner from './TemporaryBattleRunner';

type TemporaryBattleOptionalArgument = {
    rewardFunction?: () => void,
    firstTimeRewardFunction?: () => void,
    isTrainerBattle?: boolean,
    displayName?: string,
    returnTown?: string, // If in town, that town will be used. If not in town, this will be used, with the Dock town as default
    imageName?: string,
    visibleRequirement?: Requirement,
    hideTrainer?: boolean,
    environment?: Environment[],
    battleBackground?: BattleBackground,
    resetDaily?: boolean,
    finalPokemonImage?: string // trainer image when on final pokemon
};

class TemporaryBattle extends TownContent {
    completeRequirements: (Requirement | OneFromManyRequirement)[];

    constructor(
        public name: string,
        private pokemons: GymPokemon[],
        public defeatMessage?: string,
        requirements: Requirement[] = [],
        completeRequirements?: Requirement[],
        public optionalArgs: TemporaryBattleOptionalArgument = {},
    ) {
        super(requirements);
        if (!completeRequirements) {
            completeRequirements = [new TemporaryBattleRequirement(name)];
        }
        if (optionalArgs.isTrainerBattle == undefined) {
            optionalArgs.isTrainerBattle = true;
        }
        this.completeRequirements = completeRequirements;
    }

    public cssClass(): string {
        return App.game.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(this.name)]() ?
            'btn btn-success' :
            'btn btn-secondary';
    }

    public text(): string {
        return `Fight ${this.getDisplayName()}`;
    }

    public isVisible(): boolean {
        return (this.isUnlocked() || !!this.optionalArgs.visibleRequirement?.isCompleted()) && !this.completeRequirements.every(r => r.isCompleted());
    }

    public onclick(): void {
        TemporaryBattleRunner.startBattle(this);
    }

    public areaStatus() {
        if (!this.isUnlocked()) {
            return [areaStatus.locked];
        }
        if (App.game.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(this.name)]() == 0 && this.isVisible()) {
            return [areaStatus.incomplete];
        }
        return [areaStatus.completed];
    }

    public getDisplayName() {
        return this.optionalArgs.displayName ?? this.name.replace(/( route)? \d+$/, '');
    }

    public getTown(): Town | undefined {
        if (this.parent) {
            return this.parent;
        } else if (this.optionalArgs.returnTown) {
            return TownList[this.optionalArgs.returnTown];
        }
        return undefined;
    }

    public getImage() {
        const imageName = this.optionalArgs?.imageName ?? this.name;
        const finalMonImageName = this.optionalArgs?.finalPokemonImage ?? imageName;
        return TemporaryBattleRunner.finalPokemon() ? `assets/images/npcs/${finalMonImageName}.png` : `assets/images/npcs/${imageName}.png`;
    }

    public getPokemonList() {
        return this.pokemons.filter((p) => p.requirements.every((r => r.isCompleted())));
    }
}

export default TemporaryBattle;
