// import { Region } from '../../../GameConstants';
// import SubRegion from '../../../subRegion/SubRegion';
// import SubRegions from '../../../subRegion/SubRegions';
// import SelectSetting from './SelectSetting';
// import BotSettings from './Settings';

// class SubregionSelectSetting extends SelectSetting {
//     private _region: Region;
//     private _subregion: KnockoutObservable<SubRegion>;

//     public constructor(name: string, description: string, region: Region, observable: KnockoutObservable<SubRegion>) {
//         super(name, description, ko.observable<string>(), BotSettings.subregionOptions(region));
//         this._region = region;
//         this._subregion = observable;
//     }

//     public get value(): string {
//         return this._observable();
//     }

//     public set value(newValue: string) {
//         this._observable(newValue);

//         const subregion = newValue ? SubRegions.getSubRegionById(this._region, Number(newValue)) : undefined;
//         this._subregion(subregion);
//     }
// }

// export default SubregionSelectSetting;
