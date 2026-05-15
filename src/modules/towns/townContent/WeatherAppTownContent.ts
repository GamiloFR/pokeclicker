import WeatherApp from '../../weather/WeatherApp';
import TownContent from './TownContent';

class WeatherAppTownContent extends TownContent {
    public cssClass() {
        return 'btn btn-secondary';
    }

    public isVisible() {
        return WeatherApp.isUnlocked();
    }

    public onclick(): void {
        WeatherApp.openWeatherAppModal();
    }

    public text() {
        return 'Open the Castform App';
    }
}

export default WeatherAppTownContent;
