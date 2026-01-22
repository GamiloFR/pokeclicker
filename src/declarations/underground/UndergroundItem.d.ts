/// <reference path="../enums/UndergroundItemValueType.d.ts"/>
/// <reference path="../requirements/Requirement.d.ts"/>
declare class UndergroundItem {
    name: string;
    id: number;
    value: number;
    valueType: UndergroundItemValueType;
    requirement?: Requirement;
    space: Array<Array<any>>;
    type?: number;
    private weight;
    private customWeight?;
    constructor(name: string, id: number, space: Array<Array<number>>, value?: number, valueType?: UndergroundItemValueType, requirement?: Requirement, weight?: (() => number) | number);
    isUnlocked(): boolean;
    get displayName(): string;
    get image(): string;
    get undergroundImage(): string;
    getWeight(): number;
}
