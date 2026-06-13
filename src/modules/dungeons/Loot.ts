import BerryNameType from '../enums/BerryNameType';
import { ItemNameType } from '../items/ItemNameType';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import MultiRequirement from '../requirements/MultiRequirement';
import OneFromManyRequirement from '../requirements/OneFromManyRequirement';
import Requirement from '../requirements/Requirement';
import UndergroundItemNameType from '../underground/UndergroundItemNameType';

interface Loot {
    loot: ItemNameType | PokemonNameType | UndergroundItemNameType | BerryNameType;
    weight?: number;
    requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
    amount?: number;
    ignoreDebuff?: boolean;
}

export type LootTier = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type LootTable = Partial<Record<LootTier, Loot[]>>;

export default Loot;
