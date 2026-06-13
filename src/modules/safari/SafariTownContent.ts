import App from '../App';
import areaStatus from '../enums/AreaStatus';
import TownContent from '../towns/townContent/TownContent';
import MapHelper from '../worldmap/MapHelper';
import Safari from './Safari';
import SafariEncounter from './SafariEncounter';
import SafariPokemonList from './SafariPokemonList';

class SafariTownContent extends TownContent {
    constructor(private buttonText?: string) {
        super();
    }

    public cssClass(): string {
        return 'btn btn-primary';
    }
    public text(): string {
        return this.buttonText ?? 'Enter Safari Zone';
    }
    public onclick(): void {
        Safari.openModal();
    }
    public areaStatus(): areaStatus[] {
        if (!Safari.isSafariRegion(App.player.region)) {
            return [areaStatus.completed];
        }
        const safariEncounters = (<SafariEncounter[]>SafariPokemonList.list[App.player.region]())
            .filter(p => p.isAvailable())
            .map(p => p.name);
        return [areaStatus.completed, ...MapHelper.getPokemonAreaStatus(safariEncounters)];
    }
}

export default SafariTownContent;
