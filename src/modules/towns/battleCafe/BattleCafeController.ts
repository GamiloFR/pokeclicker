import type { Computed } from 'knockout';
import App from '../../App';
import DayCycle from '../../dayCycle/DayCycle';
import DayCyclePart from '../../dayCycle/DayCyclePart';
import BerryType from '../../enums/BerryType';
import CaughtStatus from '../../enums/CaughtStatus';
import { AlcremieSpins, AlcremieSweet, Pokerus } from '../../GameConstants';
import GameHelper from '../../GameHelper';
import PokemonItem from '../../items/PokemonItem';
import NotificationConstants from '../../notifications/NotificationConstants';
import Notifier from '../../notifications/Notifier';

class BattleCafeController {
    static selectedSweet = ko.observable<AlcremieSweet>(undefined);
    static baseDailySpins = 3;
    static spinsLeft = ko.observable<number>(BattleCafeController.baseDailySpins);
    static isSpinning = ko.observable<boolean>(false);
    static clockwise = ko.observable<boolean>(false);

    public static evolutions: Record<AlcremieSweet, Record<Exclude<AlcremieSpins, AlcremieSpins.Any3600>, PokemonItem>> = {
        [AlcremieSweet['Strawberry Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Strawberry Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Strawberry Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Strawberry Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Strawberry Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Strawberry Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Strawberry Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Strawberry Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Strawberry Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Strawberry Rainbow)'),
        },

        [AlcremieSweet['Love Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Love Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Love Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Love Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Love Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Love Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Love Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Love Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Love Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Love Rainbow)'),
        },

        [AlcremieSweet['Berry Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Berry Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Berry Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Berry Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Berry Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Berry Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Berry Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Berry Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Berry Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Berry Rainbow)'),
        },

        [AlcremieSweet['Clover Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Clover Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Clover Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Clover Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Clover Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Clover Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Clover Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Clover Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Clover Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Clover Rainbow)'),
        },

        [AlcremieSweet['Flower Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Flower Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Flower Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Flower Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Flower Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Flower Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Flower Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Flower Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Flower Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Flower Rainbow)'),
        },

        [AlcremieSweet['Star Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Star Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Star Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Star Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Star Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Star Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Star Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Star Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Star Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Star Rainbow)'),
        },

        [AlcremieSweet['Ribbon Sweet']]: {
            [AlcremieSpins.dayClockwiseBelow5]: new PokemonItem('Alcremie (Ribbon Vanilla)'),
            [AlcremieSpins.dayCounterclockwiseBelow5]: new PokemonItem('Alcremie (Ribbon Ruby Cream)'),
            [AlcremieSpins.nightClockwiseBelow5]: new PokemonItem('Alcremie (Ribbon Matcha)'),
            [AlcremieSpins.nightCounterclockwiseAbove5]: new PokemonItem('Alcremie (Ribbon Mint)'),
            [AlcremieSpins.nightClockwiseAbove5]: new PokemonItem('Alcremie (Ribbon Lemon)'),
            [AlcremieSpins.nightCounterclockwiseBelow5]: new PokemonItem('Alcremie (Ribbon Salted)'),
            [AlcremieSpins.dayCounterclockwiseAbove5]: new PokemonItem('Alcremie (Ribbon Ruby Swirl)'),
            [AlcremieSpins.dayClockwiseAbove5]: new PokemonItem('Alcremie (Ribbon Caramel)'),
            [AlcremieSpins.at5Above10]: new PokemonItem('Alcremie (Ribbon Rainbow)'),
        },

    };

    static spinsPerDay() : number {
        // Give additional spins for each sweet type completed, shiny, and resistant
        let spins = this.baseDailySpins;
        const sweetStatus = GameHelper.enumStrings(AlcremieSweet)
            .map((s) => ({
                caught: BattleCafeController.getCaughtStatus(AlcremieSweet[s])(),
                pokerus: BattleCafeController.getPokerusStatus(AlcremieSweet[s])(),
            }));
        // Caught
        spins += sweetStatus.filter((s) => s.caught >= CaughtStatus.Caught).length;
        // Caught Shiny
        spins += sweetStatus.filter((s) => s.caught == CaughtStatus.CaughtShiny).length;
        // Resistant
        spins += sweetStatus.filter((s) => s.pokerus == Pokerus.Resistant).length;
        return spins;
    }

    public static spin(clockwise: boolean) {
        if (!BattleCafeController.canSpin()) {
            return;
        }

        BattleCafeController.clockwise(clockwise);
        BattleCafeController.isSpinning(true);
        const spinTime = +$('#battleCafeDuration').val();
        const sweet = BattleCafeController.selectedSweet();


        setTimeout(() => {
            BattleCafeController.isSpinning(false);
            BattleCafeController.unlockAlcremie(clockwise, spinTime, sweet);
            BattleCafeController.spinsLeft(BattleCafeController.spinsLeft() - 1);
            BattleCafeController.getPrice(sweet).forEach(b => GameHelper.incrementObservable(App.game.farming.berryList[b.berry], b.amount * -1));
        },
        spinTime * 1000);
    }

    private static unlockAlcremie(clockwise: boolean, spinTime: number, sweet: AlcremieSweet) {
        let spin: keyof typeof BattleCafeController.evolutions[AlcremieSweet];
        if (spinTime == 3600) {
            (new PokemonItem('Milcery (Cheesy)', 0)).gain(1);
            return;
        }
        if (DayCycle.currentDayCyclePart() === DayCyclePart.Dusk && !clockwise && spinTime > 10) {
            spin = AlcremieSpins.at5Above10;
        } else if ([DayCyclePart.Night, DayCyclePart.Dawn].includes(DayCycle.currentDayCyclePart())) {
            if (clockwise && spinTime < 5) {
                spin = AlcremieSpins.nightClockwiseBelow5;
            } else if (clockwise && spinTime >= 5) {
                spin = AlcremieSpins.nightClockwiseAbove5;
            } else if (!clockwise && spinTime < 5) {
                spin = AlcremieSpins.nightCounterclockwiseBelow5;
            } else {
                // !clockwise && spinTime >= 5
                spin = AlcremieSpins.nightCounterclockwiseAbove5;
            }
        } else { // Is day
            if (clockwise && spinTime < 5) {
                spin = AlcremieSpins.dayClockwiseBelow5;
            } else if (clockwise && spinTime >= 5) {
                spin = AlcremieSpins.dayClockwiseAbove5;
            } else if (!clockwise && spinTime < 5) {
                spin = AlcremieSpins.dayCounterclockwiseBelow5;
            } else {
                // !clockwise && spinTime >= 5
                spin = AlcremieSpins.dayCounterclockwiseAbove5;
            }
        }
        BattleCafeController.evolutions[sweet][spin].gain(1);
    }

    private static canSpin() {
        if (BattleCafeController.selectedSweet() == undefined) {
            Notifier.notify({
                message: 'No sweet selected.',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        if (BattleCafeController.isSpinning()) {
            Notifier.notify({
                message: 'Already spinning.',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        if (BattleCafeController.spinsLeft() < 1) {
            Notifier.notify({
                message: 'No spins left today.',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        if (+$('#battleCafeDuration').val() > 20 && +$('#battleCafeDuration').val() != 3600) {
            Notifier.notify({
                message: 'Can\'t spin for more than 20 seconds, unless...',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        if (+$('#battleCafeDuration').val() < 1) {
            Notifier.notify({
                message: 'It only counts as spinning, if you spin for some time...',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        if (!BattleCafeController.canBuySweet(BattleCafeController.selectedSweet())()) {
            Notifier.notify({
                message: 'Not enough berries for this sweet.',
                type: NotificationConstants.NotificationOption.danger,
            });
            return false;
        }
        return true;
    }

    public static canBuySweet(sweet: AlcremieSweet): Computed<boolean> {
        return ko.pureComputed(() => {
            return BattleCafeController.getPrice(sweet).every(b => {
                if (App.game.farming.berryList[b.berry]() < b.amount) {
                    return false;
                }
                return true;
            });
        });
    }

    public static getCaughtStatus(sweet: AlcremieSweet) : Computed<CaughtStatus> {
        return ko.pureComputed(() => {
            return Math.min(...Object.values(BattleCafeController.evolutions[sweet]).map((pokemon: PokemonItem) => pokemon.getCaughtStatus()));
        });
    }

    public static getPokerusStatus(sweet: AlcremieSweet) : Computed<Pokerus> {
        return ko.pureComputed(() => {
            return Math.min(...Object.values(BattleCafeController.evolutions[sweet]).map((pokemon: PokemonItem) => pokemon.getPokerusStatus()));
        });
    }


    private static getPrice(sweet: AlcremieSweet) : { berry: BerryType, amount: number }[] {
        switch (sweet) {
            // should be easy to do, without touching the farm
            case AlcremieSweet['Strawberry Sweet']:
                return [
                    { berry: BerryType.Cheri, amount: 500 },
                    { berry: BerryType.Leppa, amount: 500 },
                    { berry: BerryType.Razz, amount: 50 },
                ];
            // max gen 2
            case AlcremieSweet['Clover Sweet']:
                return [
                    { berry: BerryType.Wepear, amount: 1000 },
                    { berry: BerryType.Aguav, amount: 2000 },
                    { berry: BerryType.Lum, amount: 10 },
                ];
            // max gen 3
            case AlcremieSweet['Star Sweet']:
                return [
                    { berry: BerryType.Pinap, amount: 2000 },
                    { berry: BerryType.Grepa, amount: 100 },
                    { berry: BerryType.Nomel, amount: 50 },
                ];
            // max gen 4
            case AlcremieSweet['Berry Sweet']:
                return [
                    { berry: BerryType.Passho, amount: 1000 },
                    { berry: BerryType.Yache, amount: 75 },
                    { berry: BerryType.Coba, amount: 150 },
                ];
            // max gen 4
            case AlcremieSweet['Ribbon Sweet']:
                return [
                    { berry: BerryType.Bluk, amount: 3000 },
                    { berry: BerryType.Pamtre, amount: 50 },
                    { berry: BerryType.Payapa, amount: 100 },
                ];
            // max gen 5
            case AlcremieSweet['Flower Sweet']:
                return [
                    { berry: BerryType.Figy, amount: 15000 },
                    { berry: BerryType.Iapapa, amount: 20000 },
                    { berry: BerryType.Liechi, amount: 3 },
                ];
            // max gen 5
            case AlcremieSweet['Love Sweet']:
                return [
                    { berry: BerryType.Haban, amount: 200 },
                    { berry: BerryType.Roseli, amount: 700 },
                    { berry: BerryType.Lansat, amount: 5 },
                ];

        }
    }

    public static calcMaxSpins(sweet: AlcremieSweet): number {
        const maxSpins = BattleCafeController.getPrice(sweet)
            .map((cost) => Math.floor(App.game.farming.berryList[cost.berry]() / cost.amount));
        return Math.min(...maxSpins);
    }
}

export default BattleCafeController;
