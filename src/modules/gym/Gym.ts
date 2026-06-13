import SecretAchievement from '../achievements/SecretAchievement';
import areaStatus from '../enums/AreaStatus';
import BadgeEnums from '../enums/Badges';
import * as GameConstants from '../GameConstants';
import ClearGymRequirement from '../requirements/ClearGymRequirement';
import Requirement from '../requirements/Requirement';
import TownContent from '../towns/TownContent';
import GymList from './GymList';
import GymPokemon from './GymPokemon';
import GymRunner from './GymRunner';

/**
 * Data list that contains all gymLeaders, accessible by townName.
 */
export interface GymFlags {
    quest?: boolean;
    achievement?: boolean;
    champion?: boolean;
}

export interface OptionalGymArgs {
    displayName?: string;
    imageName?: string;
    environment?: GameConstants.Environment[];
    battleBackground?: GameConstants.BattleBackground;
    hideUntilUnlocked?: boolean;
    visibleRequirement?: Requirement;
}

// TODO Remove when DefeatGymQuest is moved to modules
// We need to declare a class in order to use the instanceof operator
declare class DefeatGymQuest {
    public gymTown: string;
}

/**
 * Gym class.
 */
class Gym extends TownContent {
    public town: string;
    buttonText: string;
    public tooltip = 'Battle Gym Leaders to earn badges';

    public flags = {
        quest: true,
        achievement: true,
        champion: false,
    };

    constructor(
        public leaderName: string,
        town: string,
        private pokemons: GymPokemon[],
        public badgeReward: BadgeEnums,
        public moneyReward: number,
        public defeatMessage: string,
        requirements: Requirement[] = [],
        public rewardFunction = () => {},
        { quest = true, achievement = true, champion = false }: GymFlags = {},
        public optionalArgs: OptionalGymArgs = {},
    ) {
        super(requirements);
        this.town = town;
        this.flags.quest = quest;
        this.flags.achievement = achievement;
        this.flags.champion = champion;
        if (optionalArgs.displayName) {
            this.buttonText = optionalArgs.displayName;
        } else if (!town.includes('Elite') && !town.includes('Champion') && !town.includes('Supreme')) {
            this.buttonText = `${leaderName}'s Gym`;
        } else {
            this.buttonText = town;
        }
    }

    public cssClass() {
        if (App.game.badgeCase.hasBadge(this.badgeReward)) {
            return 'btn btn-success';
        }
        return 'btn btn-secondary';
    }

    public text(): string {
        return this.buttonText;
    }

    public isVisible(): boolean {
        if (this.optionalArgs?.hideUntilUnlocked) {
            return this.isUnlocked();
        } else if (this.optionalArgs?.visibleRequirement) {
            return this.optionalArgs.visibleRequirement?.isCompleted();
        } else {
            return super.isVisible();
        }
    }

    public onclick(): void {
        GymRunner.startGym(this);
    }

    public areaStatus(): areaStatus[] {
        const states = [];
        if (!this.isUnlocked()) {
            return [areaStatus.locked];
        }
        if (!App.game.badgeCase.hasBadge(this.badgeReward)) {
            states.push(areaStatus.incomplete);
        }
        if (this.isThereQuestAtLocation()) {
            states.push(areaStatus.questAtLocation);
        }
        if (!this.isAchievementsComplete()) {
            states.push(areaStatus.missingAchievement);
        }
        return states;
    }

    public clears() {
        return App.game.statistics.gymsDefeated[GameConstants.getGymIndex(this.town)]();
    }

    private isAchievementsComplete() {
        const gymIndex = GameConstants.getGymIndex(this.town);
        return AchievementHandler.achievementList.every((achievement) => {
            return !(achievement.property instanceof ClearGymRequirement && achievement.property.gymIndex === gymIndex && !(achievement instanceof SecretAchievement) && !achievement.isCompleted());
        });
    }

    private isThereQuestAtLocation() {
        return App.game.quests.currentQuests().some((q) => {
            return q instanceof DefeatGymQuest && q.gymTown == this.town;
        });
    }

    public static getLeaderByBadge(badge: BadgeEnums): string {
        for (const item in GymList) {
            const gym = GymList[item];
            if (BadgeEnums[gym.badgeReward] == BadgeEnums[BadgeEnums[badge]]) {
                return gym.leaderName;
            }
        }
        return 'Brock';
    }

    public firstWinReward() {
    // Give the player this gyms badge
        App.game.badgeCase.gainBadge(this.badgeReward);
        // Show the badge modal
        $('#receiveBadgeModal').modal('show');
        // Run the first time reward function
        this.rewardFunction();
    }

    public autoRestartReward(): number {
        const [modifier] = GameConstants.GymAutoRepeatRewardTiers.find(([, threshold]) => this.clears() >= threshold);
        return this.moneyReward * modifier;
    }

    get imagePath(): string {
        return `assets/images/npcs/${this.imageName ?? this.leaderName}.png`;
    }

    public getPokemonList() {
        return this.pokemons.filter((p) => p.requirements.every((r) => r.isCompleted()));
    }

    get imageName() {
        return this.optionalArgs.imageName;
    }

    get displayName() {
        return this.optionalArgs.displayName;
    }

    get autoRestartTooltip(): string {
        let tooltip = 'Auto Restart Gym<br/>';
        const clears = this.clears() ?? 0;
        const cost = clears >= 100 ? 0 : this.moneyReward * 2;
        if (cost === 0) {
            tooltip += 'Cost: Free!<br/>';
        } else {
            tooltip += `Cost: <img src="assets/images/currency/money.svg" height="18px"/> ${cost.toLocaleString('en-US')} per battle<br/>`;
        }
        tooltip += '<br/><span class="text-success">10 Clears - Unlock auto-gym</span><br/>';
        tooltip += `<span class="${clears >= 100 ? 'text-success' : 'text-muted'}">100 Clears - Free auto-gym</span>`;
        GameConstants.GymAutoRepeatRewardTiers.slice(0, -1)
            .reverse()
            .forEach(([modifier, threshold]) => {
                tooltip += `<br/><span class="${clears >= threshold ? 'text-success' : 'text-muted'}">${threshold.toLocaleString()}
                Clears - ${modifier.toLocaleString('en-US', { style: 'percent' })} reward</span>`;
            });
        if (clears < 250) {
            tooltip += '<br/><br/><i class="text-warning">You will not receive Pokédollars for clearing the gym.</i>';
        }
        return tooltip;
    }
}

export default Gym;
