import { camelCaseToString, Currency, MINUTE, SECOND } from '../GameConstants';
import { createLogContent } from '../logbook/helpers';
import { LogBookTypes } from '../logbook/LogBookTypes';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import { SortOptions } from '../settings/SortOptions';
import SeededRand from '../utilities/SeededRand';
import Amount from '../wallet/Amount';

const HatcheryHelperCalcHatchBonus = (hatched: number) => Math.min(50, Math.floor(Math.sqrt(hatched / 50) * 10) / 10);

const HatcheryHelperMinBonusMap: Record<number, number> = {};
// Generate our bonus amounts map
(() => {
    let bonus = -1;
    for (let hatched = 0; bonus < 50; hatched++) {
        const b = HatcheryHelperCalcHatchBonus(hatched);
        if (b > bonus) {
            HatcheryHelperMinBonusMap[b] = hatched;
            bonus = b;
        }
    }
})();


class HatcheryHelper {
    public trainerSprite = 0;
    public hired = ko.observable(false).extend({ boolean: null });
    public tooltip = ko.pureComputed(() => `<strong>${this.name}</strong><br/>
        Cost: <img src="assets/images/currency/${Currency[this.cost.currency]}.svg" width="20px">&nbsp;${(this.cost.amount).toLocaleString('en-US')}/hatch<br/>
        Step Efficiency: ${this.stepEfficiency()}%<br/>
        Attack Efficiency: ${this.attackEfficiency()}%<br/>
        Hatched: ${this.hatched().toLocaleString('en-US')}<br/>`,
    );
    public sortOption = ko.observable(SortOptions.id).extend({ numeric: 0 });
    public sortDirection = ko.observable(false).extend({ boolean: null });
    public hatched = ko.observable(0).extend({ numeric: 0 });
    public hatchBonus = ko.observable(0).extend({ numeric: 1 });
    public stepEfficiency = ko.observable(0).extend({ numeric: 1 });
    public attackEfficiency = ko.observable(0).extend({ numeric: 1 });
    public prevBonus = ko.observable(0).extend({ numeric: 0 });
    public nextBonus = ko.observable(1).extend({ numeric: 0 });
    public categories = ko.observableArray<number>([]);
    public useHatcheryFilters = ko.observable(true);

    constructor(
        public name: string,
        public cost: Amount,
        public stepEfficiencyBase: number, // 1 - 200
        public attackEfficiencyBase: number,
        public unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement,
    ) {
        SeededRand.seed(parseInt(this.name, 36));
        this.trainerSprite = SeededRand.intBetween(0, 118);

        // Update our bonus values
        this.updateBonus();
        // Update our bonus values whenever our hatched amount changes
        this.hatched.subscribe((hatched) => {
            if (hatched >= this.nextBonus() || hatched <= this.prevBonus()) {
                this.updateBonus();
            }
        });
    }

    updateBonus(): void {
        this.hatchBonus(HatcheryHelperCalcHatchBonus(this.hatched()));
        this.stepEfficiency(this.stepEfficiencyBase + this.hatchBonus());
        this.attackEfficiency(this.attackEfficiencyBase + this.hatchBonus());
        this.prevBonus(HatcheryHelperMinBonusMap[this.hatchBonus()] || 0);
        this.nextBonus(HatcheryHelperMinBonusMap[((this.hatchBonus() * 10) + 1) / 10] || 1);
    }

    isUnlocked(): boolean {
        return this.unlockRequirement?.isCompleted() ?? true;
    }

    // String for currency in Notifications and Logs
    currencyString() {
        switch (Currency[this.cost.currency]) {
            case 'money':
                return 'Pokédollars';
            default:
                return `${camelCaseToString(Currency[this.cost.currency])}s`;
        }
    }

    hire(): void {

        // Check the player has enough Currency to hire this Hatchery Helper
        if (!App.game.wallet.hasAmount(this.cost)) {
            Notifier.notify({
                title: `[HATCHERY HELPER] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
                message: `You don't have enough ${this.currencyString()} to hire me...\nCost: <img src="./assets/images/currency/${Currency[this.cost.currency]}.svg" height="24px"/> ${this.cost.amount.toLocaleString('en-US')}`,
                type: NotificationConstants.NotificationOption.warning,
                timeout: 30 * SECOND,
            });
            return;
        }
        // Hatchery helper is hired
        this.hired(true);
        Notifier.notify({
            title: `[HATCHERY HELPER] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
            message: 'Thanks for hiring me,\nI won\'t let you down!',
            type: NotificationConstants.NotificationOption.success,
            timeout: 30 * SECOND,
            setting: NotificationConstants.NotificationSetting.Hatchery.hatchery_helper,
        });
    }

    fire(): void {
        Notifier.notify({
            title: `[HATCHERY HELPER] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
            message: 'Thanks for the work.\nLet me know when you\'re hiring again!',
            type: NotificationConstants.NotificationOption.info,
            timeout: 30 * SECOND,
            setting: NotificationConstants.NotificationSetting.Hatchery.hatchery_helper,
        });
        this.hired(false);
        return;
    }

    charge(): void {
        // Charge the player if they can afford it, otherwise notify that they cannot
        if (!App.game.wallet.loseAmount(this.cost)) {
            Notifier.notify({
                title: `[HATCHERY HELPER] <img src="assets/images/profile/trainer-${this.trainerSprite}.png" height="24px" class="pixelated"/> ${this.name}`,
                message: `It looks like you are a little short on ${this.currencyString()} right now...\nLet me know when you're hiring again!\nCost: <img src="./assets/images/currency/${Currency[this.cost.currency]}.svg" height="24px"/> ${this.cost.amount.toLocaleString('en-US')}`,
                type: NotificationConstants.NotificationOption.danger,
                timeout: 30 * MINUTE,
            });
            this.hired(false);
            App.game.logbook.newLog(
                LogBookTypes.OTHER,
                createLogContent.unableToPayHatcheryHelper({
                    currency: this.currencyString(),
                    name: this.name,
                }),
            );
            return;
        }
    }

    toJSON(): Record<string, any> {
        return {
            name: this.name,
            hired: this.hired(),
            sortOption: this.sortOption(),
            sortDirection: this.sortDirection(),
            hatched: this.hatched(),
            categories: this.categories(),
            useHatcheryFilters: this.useHatcheryFilters(),
        };
    }

    fromJSON(json: Record<string, any>): void {
        if (!json) {
            return;
        }
        this.hired(json.hired || false);
        this.sortOption(json.sortOption || 0);
        this.sortDirection(json.sortDirection || false);
        this.hatched(json.hatched || 0);
        this.categories(json.categories || []);
        this.useHatcheryFilters(json.useHatcheryFilters ?? true);
    }
}

export default HatcheryHelper;
