
 declare enum AchievementSortOptions {
    default = 0,
    progress = 1,
    bonus = 2
}
 declare type AchievementSortOptionConfig = {
    text: string;
    getValue: (a: any) => any;
    invert?: boolean;
};
 declare const AchievementSortOptionConfigs: Record<AchievementSortOptions, AchievementSortOptionConfig>;
