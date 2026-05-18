import { Loot } from '../dungeons/Dungeon';
import BerryType from '../enums/BerryType';
import FarmController from '../farming/FarmController';
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
        const rawTable = player.town.dungeon?.lootTable || {};
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
        return player.town.name;
    }

    private static getRegionName() {
        return camelCaseToString(Region[player.region]);
    }

    private static getSubregionName() {
        return player.subregionObject()?.name;
    }

    public static getLootImage(input: string) {
        switch (true) {
            case typeof BerryType[input] == 'number':
                return FarmController.getBerryImage(BerryType[humanifyString(input)]);
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
