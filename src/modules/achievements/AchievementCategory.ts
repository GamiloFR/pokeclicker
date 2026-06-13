class AchievementCategory {
    totalWeight = 0;

    constructor(public name: string, public achievementBonus: number, public isUnlocked: () => boolean) { }
}

export default AchievementCategory;
