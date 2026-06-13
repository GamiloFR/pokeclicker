import ko, { ObservableArray } from 'knockout';
import { Region } from '../GameConstants';
import WeatherForecast from './WeatherForecast';


export default class RegionalForecast {
    public region: Region;
    public weatherForecastList: ObservableArray<Array<WeatherForecast>>;

    constructor(
        region: Region,
        weatherForecastList: Array<Array<WeatherForecast>> = [],
    ) {
        this.region = region;
        this.weatherForecastList = ko.observableArray(weatherForecastList);
    }
}
