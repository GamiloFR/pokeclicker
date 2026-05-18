import Battle from '../battles/Battle';
import DungeonRunner from '../dungeons/DungeonRunner';
import { FluteItemType, GYM_COUNTDOWN, GameState, StartingTowns, TEMP_BATTLE_TICK, TEMP_BATTLE_TIME, getTemporaryBattlesIndex } from '../GameConstants';
import GameHelper from '../GameHelper';
import FluteEffectRunner from '../gems/FluteEffectRunner';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import Settings from '../settings/Settings';
import TownList from '../towns/TownList';
import TemporaryBattle from './TemporaryBattle';
import TemporaryBattleBattle from './TemporaryBattleBattle';

class TemporaryBattleRunner {
    public static timeLeft = ko.observable(TEMP_BATTLE_TIME);
    public static timeLeftPercentage = ko.observable(100);
    public static timeBonus = ko.observable(1);

    public static battleObservable = ko.observable<TemporaryBattle>();
    public static running = ko.observable(false);

    public static timeLeftSeconds = ko.pureComputed(() => {
        return (Math.ceil(TemporaryBattleRunner.timeLeft() / 100) / 10).toFixed(1);
    });

    public static startBattle(
        battle: TemporaryBattle,
    ) {
        this.running(false);
        this.battleObservable(battle);
        App.game.gameState = GameState.idle;
        DungeonRunner.timeBonus(FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute));
        this.timeLeft(TEMP_BATTLE_TIME * this.timeBonus());
        this.timeLeftPercentage(100);

        player.route = 0;
        Battle.route = 0;
        Battle.catching(!(battle.optionalArgs.isTrainerBattle ?? true));
        TemporaryBattleBattle.totalPokemons(battle.getPokemonList().length);
        TemporaryBattleBattle.index(0);
        TemporaryBattleBattle.generateNewEnemy();
        App.game.gameState = GameState.temporaryBattle;
        this.running(true);
        this.resetGif();

        setTimeout(() => {
            this.hideGif();
        }, GYM_COUNTDOWN);
    }

    private static hideGif() {
        $('#temporaryBattleGoContainer').hide();
    }

    public static resetGif() {
        if (!Settings.getSetting('showGymGoAnimation').value) {
            return;
        }
        $('#temporaryBattleGoContainer').show();
        setTimeout(() => {
            $('#temporaryBattleGo').attr('src', 'assets/gifs/go.gif');
        }, 0);
    }

    public static tick() {
        if (!this.running()) {
            return;
        }
        if (this.timeLeft() < 0) {
            this.battleLost();
        }
        this.timeLeft(this.timeLeft() - TEMP_BATTLE_TICK);
        this.timeLeftPercentage(Math.floor(this.timeLeft() / (TEMP_BATTLE_TIME * FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute)) * 100));

        const currentFluteBonus = FluteEffectRunner.getFluteMultiplier(FluteItemType.Time_Flute);
        if (currentFluteBonus != this.timeBonus()) {
            if (currentFluteBonus > this.timeBonus()) {
                if (this.timeBonus() === 1) {
                    this.timeBonus(currentFluteBonus);
                    this.timeLeft(this.timeLeft() * this.timeBonus());
                } else {
                    this.timeLeft(this.timeLeft() / this.timeBonus());
                    this.timeBonus(currentFluteBonus);
                    this.timeLeft(this.timeLeft() * this.timeBonus());
                }
            } else {
                this.timeLeft(this.timeLeft() / this.timeBonus());
                this.timeBonus(currentFluteBonus);
            }
        }
    }

    public static battleLost() {
        if (this.running()) {
            this.running(false);
            Notifier.notify({
                message: `It appears you are not strong enough to defeat ${TemporaryBattleBattle.battle.getDisplayName()}.`,
                type: NotificationConstants.NotificationOption.danger,
            });
            player.town = TemporaryBattleBattle.battle.getTown() ?? TownList[StartingTowns[player.region]];
            App.game.gameState = GameState.town;
        }
    }

    public static battleWon(battle: TemporaryBattle) {
        if (this.running()) {
            this.running(false);
            if (App.game.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(battle.name)]() == 0) {
                battle.optionalArgs.firstTimeRewardFunction?.();
                if (battle.defeatMessage) {
                    $('#temporaryBattleWonModal').modal('show');
                }
            }
            battle.optionalArgs.rewardFunction?.();
            GameHelper.incrementObservable(App.game.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(battle.name)]);
            player.town = battle.getTown() ?? TownList[StartingTowns[player.region]];
            App.game.gameState = GameState.town;
        }
    }

    public static finalPokemon() : boolean {
        return TemporaryBattleBattle.pokemonsUndefeatedComputable() === 1;
    }

    public static getEnvironmentArea() {
        const battle = TemporaryBattleRunner.battleObservable();
        return battle?.optionalArgs.environment;
    }

    public static getBattleBackgroundImage() {
        const battle = TemporaryBattleRunner.battleObservable();
        return battle?.optionalArgs.battleBackground
        ?? battle?.parent?.name
        ?? battle?.optionalArgs.returnTown;
    }
}

/* Uncomment once Z-Moves are ready
document.addEventListener('DOMContentLoaded', () => {
    $('#temporaryBattleWonModal').on('hidden.bs.modal', () => {
        if (TemporaryBattleBattle.battle.name === 'Hau 2') {
            KeyItemController.showGainModal(KeyItemType['Z-Power_Ring']);
        }
    });
});*/

export default TemporaryBattleRunner;
