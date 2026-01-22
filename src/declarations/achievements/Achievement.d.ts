/// <reference path="knockout.d.ts"/>
/// <reference path="../requirements/AchievementRequirement.d.ts"/>
/// <reference path="./AchievementCategory.d.ts"/>
declare class Achievement {
    name: string;
    description: string;
    property: AchievementRequirement;
    bonusWeight: number;
    category: AchievementCategory;
    achievableFunction: () => boolean | null;
    isCompleted: KnockoutComputed<boolean>;
    getProgressText: KnockoutComputed<string>;
    bonus: number;
    unlocked: boolean;
    constructor(name: string, description: string, property: AchievementRequirement, bonusWeight: number, category: AchievementCategory, achievableFunction?: () => boolean | null);
    check(): void;
    getProgress(): number;
    getProgressPercentage(): string;
    getBonus(): string;
    achievable(): boolean;
}
