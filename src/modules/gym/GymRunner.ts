import { Computed, Observable } from 'knockout';
import DungeonRunner from '../dungeons/DungeonRunner';
import BadgeEnums from '../enums/Badges';
import KeyItemType from '../enums/KeyItemType';
import { Currency, FluteItemType, GYM_COUNTDOWN, GYM_TICK, GYM_TIME, GameState, getGymIndex } from '../GameConstants';
import GameHelper from '../GameHelper';
import FluteEffectRunner from '../gems/FluteEffectRunner';
import KeyItemController from '../keyItems/KeyItemController';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import Settings from '../settings/Settings';
import Amount from '../wallet/Amount';
import Gym from './Gym';
import GymBattle from './GymBattle';
import GymList from './GymList';

class GymRunner {
    public static timeLeft: Observable<number>;
    public static timeLeftPercentage: Observable<number>;
    public static timeBonus: Observable<number>;

    public static gymObservable: Observable<Gym>;
    public static running: Observable<boolean>;
    public static autoRestart: Observable<boolean>;
    public static initialRun: boolean;

    public static timeLeftSeconds: Computed<string>;

    public static init() {
        this.timeLeft = ko.observable(GYM_TIME);
        this.timeLeftPercentage = ko.observable(100);
        this.timeBonus = ko.observable(1);
        this.gymObservable = ko.observable(GymList['Pewter City']);
        this.running = ko.observable(false);
        this.autoRestart = ko.observable(false);
        this.initialRun = true;
        this.timeLeftSeconds  = ko.pureComputed(() => {
            return (Math.ceil(GymRunner.timeLeft() / 100) / 10).toFixed(1);
        });
    }

    public static startGym(
        gym: Gym,
        autoRestart = false,
        initialRun = true,
    ) {
        GymRunner.initialRun = initialRun;
        GymRunner.autoRestart(autoRestart);
        GymRunner.running(false);
        GymRunner.gymObservable(gym);
        App.game.gameState = GameState.idle;
        DungeonRunner.timeBonus(FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute));
        GymRunner.timeLeft(GYM_TIME * GymRunner.timeBonus());
        GymRunner.timeLeftPercentage(100);

        GymBattle.gym = gym;
        GymBattle.totalPokemons(gym.getPokemonList().length);
        GymBattle.index(0);
        GymBattle.generateNewEnemy();
        App.game.gameState = GameState.gym;
        GymRunner.running(true);
        GymRunner.resetGif();

        setTimeout(() => {
            GymRunner.hideGif();
        }, GYM_COUNTDOWN);
    }

    private static hideGif() {
        $('#gymGoContainer').hide();
    }

    public static resetGif() {
        // If the user doesn't want the animation, just return
        if (!Settings.getSetting('showGymGoAnimation').value) {
            return;
        }

        if (!GymRunner.autoRestart() || GymRunner.initialRun) {
            $('#gymGoContainer').show();
            setTimeout(() => {
                $('#gymGo').attr('src', 'assets/gifs/go.gif');
            }, 0);
        }
    }

    public static tick() {
        if (!GymRunner.running()) {
            return;
        }
        if (GymRunner.timeLeft() < 0) {
            GymRunner.gymLost();
        }

        GymRunner.timeLeft(GymRunner.timeLeft() - GYM_TICK);
        GymRunner.timeLeftPercentage(Math.floor(GymRunner.timeLeft() / (GYM_TIME * FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute)) * 100));

        const currentFluteBonus = FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute);
        if (currentFluteBonus != GymRunner.timeBonus()) {
            if (currentFluteBonus > GymRunner.timeBonus()) {
                if (GymRunner.timeBonus() === 1) {
                    GymRunner.timeBonus(currentFluteBonus);
                    GymRunner.timeLeft(GymRunner.timeLeft() * GymRunner.timeBonus());
                } else {
                    GymRunner.timeLeft(GymRunner.timeLeft() / GymRunner.timeBonus());
                    GymRunner.timeBonus(currentFluteBonus);
                    GymRunner.timeLeft(GymRunner.timeLeft() * GymRunner.timeBonus());
                }
            } else {
                GymRunner.timeLeft(GymRunner.timeLeft() / GymRunner.timeBonus());
                GymRunner.timeBonus(currentFluteBonus);
            }
        }
    }

    public static gymLost() {
        if (GymRunner.running()) {
            GymRunner.running(false);
            Notifier.notify({
                message: `It appears you are not strong enough to defeat ${GymBattle.gym.leaderName.replace(/\d/g, '')}.`,
                type: NotificationConstants.NotificationOption.danger,
            });
            App.game.gameState = GameState.town;
        }
    }

    public static gymWon(gym: Gym) {
        if (GymRunner.running()) {
            GymRunner.running(false);
            Notifier.notify({
                message: `Congratulations, you defeated ${GymBattle.gym.leaderName.replace(/\d/g, '')}!`,
                type: NotificationConstants.NotificationOption.success,
                setting: NotificationConstants.NotificationSetting.General.gym_won,
            });
            // If this is the first time defeating this gym
            if (!App.game.badgeCase.hasBadge(gym.badgeReward)) {
                gym.firstWinReward();
            }
            GameHelper.incrementObservable(App.game.statistics.gymsDefeated[getGymIndex(gym.town)]);

            // Auto restart gym battle
            if (GymRunner.autoRestart()) {
                const clears = App.game.statistics.gymsDefeated[getGymIndex(gym.town)]();
                const cost = clears >= 100 ? 0 : (GymRunner.gymObservable().moneyReward || 10) * 2;
                const amt = new Amount(cost, Currency.money);
                const reward = GymRunner.gymObservable().autoRestartReward();
                // If the player can afford it, restart the gym
                if (cost === 0 || App.game.wallet.loseAmount(amt)) {
                    if (reward > 0) {
                        App.game.wallet.gainMoney(reward);
                    }
                    GymRunner.startGym(GymRunner.gymObservable(), GymRunner.autoRestart(), false);
                    return;
                }
            }

            // Award money for defeating gym
            App.game.wallet.gainMoney(gym.moneyReward);
            // Send the player back to a town state
            App.game.gameState = GameState.town;
        }
    }

    public static getEnvironmentArea() {
        const gym = GymRunner.gymObservable();
        return gym.optionalArgs.environment;
    }

    public static getBattleBackgroundImage() {
        const gym = GymRunner.gymObservable();
        return gym.optionalArgs.battleBackground;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    $('#receiveBadgeModal').on('hidden.bs.modal', () => {
        if (GymBattle.gym.badgeReward == BadgeEnums.Soul) {
            KeyItemController.showGainModal(KeyItemType.Safari_ticket);
        }
        if (GymBattle.gym.badgeReward == BadgeEnums.Earth) {
            KeyItemController.showGainModal(KeyItemType.Gem_case);
        }
    });
});

export default GymRunner;
