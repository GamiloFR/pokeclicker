import App from '../App';
import { Loot } from '../dungeons/Dungeon';
import BerryType from '../enums/BerryType';
import FarmHelper from '../farming/FarmHelper';
import { camelCaseToString, humanifyString, Region } from '../GameConstants';
import { ItemList } from '../items/ItemList';
import { pokemonMap } from '../pokemons/PokemonList';
import UndergroundItem from '../underground/UndergroundItem';
import UndergroundItems from '../underground/UndergroundItems';

class DungeonInfo {
    public static lootList = ko.pureComputed(() => {
        return DungeonInfo.getLootList();
    });

    private static getLootList() {
        const rawTable = App.player.town.dungeon?.lootTable || {};
        const displayTable = {};
        Object.entries(rawTable).forEach(([tier, loots]) => {
            const filteredLoots = (loots as Loot[]).filter(l => ItemList[l.loot] || pokemonMap[l.loot].name == 'MissingNo.');
            if (filteredLoots.length) {
                displayTable[tier] = filteredLoots;
            }
        });
        return displayTable;
    }

    public static getFullName() {
        return `${DungeonInfo.getDungeonName()} - ${DungeonInfo.getRegionName()} (${DungeonInfo.getSubregionName()})`;
    }

    private static getDungeonName() {
        return App.player.town.name;
    }

    private static getRegionName() {
        return camelCaseToString(Region[App.player.region]);
    }

    private static getSubregionName() {
        return App.player.subregionObject()?.name;
    }

    public static getLootImage(input: string) {
        switch (true) {
            case typeof BerryType[input] == 'number':
                return FarmHelper.getBerryImage(BerryType[humanifyString(input)]);
            case UndergroundItems.getByName(input) instanceof UndergroundItem:
                return UndergroundItems.getByName(input).image;
            default:
                return ItemList[input].image;
        }
    }

    public static getLootName(input: string) {
        switch (true) {
            case input in ItemList:
                return ItemList[input]?.displayName;
            case typeof BerryType[input] == 'number':
                return `${input} Berry`;
            default:
                return camelCaseToString(humanifyString(input.toLowerCase()));
        }
    }
}

export default DungeonInfo;
