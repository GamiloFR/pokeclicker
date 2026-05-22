import App from '../App';
import BadgeEnums from '../enums/Badges';
import { Region, RegionGyms } from '../GameConstants';
import GymList from '../gym/GymList';

type DisplayableBadges = {
    [key: string]: string[]
};

class BadgeCaseController {
    private static optionalLeagueNames = ['Orange League', 'Magikarp Jump', 'Orre'];

    static getDisplayableBadges(): DisplayableBadges {
        const highestRegion = App.player.highestRegion();
        const result: DisplayableBadges = {};
        RegionGyms.forEach((region, i) => {
            // Optional leagues
            if (i >= Region.final) {
                if (!region.some(gym => App.game.badgeCase.hasBadge(GymList[gym].badgeReward))) {
                    return;
                }
                const badges = this.regionToBadges(region);
                if (badges.length) {
                    result[this.optionalLeagueNames[i - Region.final]] = badges;
                }
                return;
            }

            // Normal leagues
            if (i > highestRegion) {
                return;
            }
            result[Region[i].charAt(0).toUpperCase() + Region[i].slice(1)] = this.regionToBadges(region);
        });
        return result;
    }

    private static regionToBadges(region: string[]): string[] {
        return region
            .map(gym => BadgeEnums[GymList[gym].badgeReward])
            .filter(b => !b.startsWith('Elite') && b != 'None');
    }
}

export default BadgeCaseController;
