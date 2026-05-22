import App from '../App';
import { Region } from '../GameConstants';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import MaxRegionRequirement from '../requirements/MaxRegionRequirement';
import MultiRequirement from '../requirements/MultiRequirement';
import ObtainedPokemonRequirement from '../requirements/ObtainedPokemonRequirement';
import QuestLineStepCompletedRequirement from '../requirements/QuestLineStepCompletedRequirement';
import BattleFrontierMilestone from './BattleFrontierMilestone';
import BattleFrontierMilestoneItem from './BattleFrontierMilestoneItem';
import BattleFrontierMilestonePokemon from './BattleFrontierMilestonePokemon';
import BattleFrontierRunner from './BattleFrontierRunner';

class BattleFrontierMilestones {

    public static milestoneRewards: BattleFrontierMilestone[];

    public static init() {
        this.milestoneRewards = [
            new BattleFrontierMilestoneItem(5, 'Pokeball', 25),
            new BattleFrontierMilestoneItem(10, 'Pokeball', 100),
            new BattleFrontierMilestoneItem(20, 'Greatball', 100),
            new BattleFrontierMilestoneItem(30, 'Ultraball', 100),
            new BattleFrontierMilestoneItem(35, 'xClick', 100),
            new BattleFrontierMilestoneItem(40, 'xAttack', 100),
            new BattleFrontierMilestoneItem(50, 'SmallRestore', 100),
            new BattleFrontierMilestoneItem(75, 'Rare_Candy', 5),
            new BattleFrontierMilestonePokemon(100, 'Deoxys', new QuestLineStepCompletedRequirement('Mystery of Deoxys', 2)),
            new BattleFrontierMilestoneItem(110, 'Water_stone', 10),
            new BattleFrontierMilestoneItem(120, 'Leaf_stone', 10),
            new BattleFrontierMilestoneItem(130, 'Thunder_stone', 10),
            new BattleFrontierMilestoneItem(140, 'Fire_stone', 10),
            new BattleFrontierMilestoneItem(150, 'MediumRestore', 200),
            new BattleFrontierMilestonePokemon(151, 'Deoxys (Attack)', new ObtainedPokemonRequirement('Deoxys')),
            new BattleFrontierMilestoneItem(160, 'Lucky_egg', 100),
            new BattleFrontierMilestoneItem(170, 'Lucky_incense', 100),
            new BattleFrontierMilestoneItem(180, 'Dowsing_machine', 100),
            new BattleFrontierMilestoneItem(190, 'Mystery_egg', 10),
            new BattleFrontierMilestoneItem(200, 'LargeRestore', 100),
            new BattleFrontierMilestoneItem(210, 'Water_stone', 40),
            new BattleFrontierMilestoneItem(220, 'Leaf_stone', 40),
            new BattleFrontierMilestoneItem(230, 'Thunder_stone', 40),
            new BattleFrontierMilestoneItem(240, 'Moon_stone', 40),
            new BattleFrontierMilestoneItem(250, 'Ultraball', 6400),
            new BattleFrontierMilestonePokemon(251, 'Deoxys (Defense)', new ObtainedPokemonRequirement('Deoxys')),
            new BattleFrontierMilestoneItem(275, 'Rare_Candy', 10),
            new BattleFrontierMilestoneItem(300, 'Linking_cord', 100),
            new BattleFrontierMilestoneItem(310, 'Dragon_scale', 20),
            new BattleFrontierMilestoneItem(320, 'Sun_stone', 40),
            new BattleFrontierMilestoneItem(330, 'Kings_rock', 20),
            new BattleFrontierMilestoneItem(340, 'Metal_coat', 20),
            new BattleFrontierMilestoneItem(350, 'Upgrade', 10),
            new BattleFrontierMilestoneItem(375, 'Rare_Candy', 15),
            new BattleFrontierMilestonePokemon(386, 'Deoxys (Speed)', new ObtainedPokemonRequirement('Deoxys')),
            new BattleFrontierMilestoneItem(400, 'Soothe_bell', 40),
            new BattleFrontierMilestoneItem(410, 'Deepsea_tooth', 10),
            new BattleFrontierMilestoneItem(420, 'Shiny_stone', 40),
            new BattleFrontierMilestoneItem(430, 'Deepsea_scale', 10),
            new BattleFrontierMilestoneItem(440, 'Dusk_stone', 40, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(450, 'Prism_scale', 10),
            new BattleFrontierMilestoneItem(460, 'Dawn_stone', 40, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(470, 'Razor_claw', 10, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(480, 'Razor_fang', 10, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(490, 'Dubious_disc', 10, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(500, 'Ultraball', 10000),
            new BattleFrontierMilestoneItem(525, 'Magmarizer', 15, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(550, 'Electirizer', 15, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(575, 'Protector', 15, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(600, 'Reaper_cloth', 15, new MaxRegionRequirement(Region.sinnoh)),
            new BattleFrontierMilestoneItem(660, 'Sachet', 15, new MaxRegionRequirement(Region.kalos)),
            new BattleFrontierMilestonePokemon(666, 'Vivillon (Poké Ball)', new QuestLineStepCompletedRequirement('The Great Vivillon Hunt!', 34)),
            new BattleFrontierMilestoneItem(670, 'Whipped_dream', 15, new MaxRegionRequirement(Region.kalos)),
            new BattleFrontierMilestoneItem(690, 'Lopunnite', 1, new MultiRequirement([new MaxRegionRequirement(Region.kalos), new ObtainedPokemonRequirement('Lopunny')])),
            new BattleFrontierMilestoneItem(700, 'Ice_stone', 40, new MaxRegionRequirement(Region.alola)),
            new BattleFrontierMilestoneItem(750, 'Rare_Candy', 20),
            new BattleFrontierMilestoneItem(1000, 'Masterball', 10),
            new BattleFrontierMilestoneItem(1500, 'Rare_Candy', 25),
            new BattleFrontierMilestonePokemon(2000, 'Mismagius (Illusion)', new ObtainedPokemonRequirement('Mismagius')),
        ];
        // Sort the milestones by lowest to highest stage incase they are added out of order
        this.milestoneRewards.sort((a, b) => a.stage - b.stage);
    }

    public static nextMileStone(): BattleFrontierMilestone {
        // Get next reward that is unlocked, not obtained, and earned past the latest stage beaten in the active run.
        return this.milestoneRewards.find(r => r.isUnlocked() && !r.obtained() && (r.stage > (BattleFrontierRunner.checkpoint() - 1)))!;
    }

    public static availableMilestones() {
        return BattleFrontierMilestones.milestoneRewards.filter(r => r.isUnlocked() && !r.obtained() && r.stage > (BattleFrontierRunner.checkpoint() - 1));
    }

    public static nextMileStoneStage(): number {
        // Return the stage number the next reward is unlocked at
        const reward = this.nextMileStone();
        if (reward) {
            return reward.stage;
        } else {
            return Infinity;
        }
    }

    public static nextMileStoneRewardDescription(): string {
        // Return the description of the next reward
        const reward = this.nextMileStone();
        if (reward) {
            return reward.description;
        } else {
            return 'Nothing';
        }
    }

    public static gainReward(defeatedStage: number): void {
        const reward = this.nextMileStone();
        if (reward && reward.stage == defeatedStage) {
            Notifier.notify({
                title: 'Battle Frontier',
                message: `You've successfully defeated stage ${defeatedStage.toLocaleString('en-US')} and earned:\n<span><img src="${reward.image}" height="24px"/> ${reward.description}</span>!`,
                type: NotificationConstants.NotificationOption.info,
                setting: NotificationConstants.NotificationSetting.General.battle_frontier,
                timeout: 1e4,
            });
            App.game.logbook.newLog(
                LogBookTypes.FRONTIER,
                createLogContent.gainBattleFrontierReward({
                    reward: reward.description,
                    stage: defeatedStage.toLocaleString('en-US'),
                }),
            );
            reward.gain();
        }
    }
}

export default BattleFrontierMilestones;
