/// <reference path="../../GameConstants.d.ts"/>
/// <reference path="../../items/ItemNameType.d.ts"/>
/// <reference path="../../weather/WeatherType.d.ts"/>
/// <reference path="./Base.d.ts"/>
 declare type EvoFn = (...args: unknown[]) => EvoData;
 declare const anyDungeonRestrict: (evo: EvoFn) => (...rest: Parameters<EvoFn>) => EvoData;
 declare const dungeonRestrict: <T extends EvoFn>(evo: T) => (dungeon: string, ...rest: Parameters<T>) => EvoData;
 declare const anyGymRestrict: (evo: EvoFn) => (...rest: Parameters<EvoFn>) => EvoData;
 declare const GymRestrict: <T extends EvoFn>(evo: T) => (town: string, ...rest: Parameters<T>) => EvoData;
 declare const regionRestrict: <T extends EvoFn>(evo: T) => (regions: Region[], ...rest: Parameters<T>) => EvoData;
 declare const environmentRestrict: <T extends EvoFn>(evo: T) => (environment: Environment, ...rest: Parameters<T>) => EvoData;
 declare const heldItemRestrict: <T extends EvoFn>(evo: T) => (heldItemName: ItemNameType, ...rest: Parameters<T>) => EvoData;
 declare const questlineRestrict: <T extends EvoFn>(evo: T) => (questName: string, ...rest: Parameters<T>) => EvoData;
 declare const weatherRestrict: <T extends EvoFn>(evo: T) => (weather: WeatherType[], ...rest: Parameters<T>) => EvoData;
 declare const timeRestrict: <T extends EvoFn>(evo: T) => (startHour: number, endHour: number, ...rest: Parameters<T>) => EvoData;
 declare const dayRestrict: <T extends EvoFn>(evo: T) => (...rest: Parameters<T>) => EvoData;
 declare const nightRestrict: <T extends EvoFn>(evo: T) => (...rest: Parameters<T>) => EvoData;
 declare const megaEvolveRestrict: <T extends EvoFn>(evo: T) => (...rest: Parameters<T>) => EvoData;
