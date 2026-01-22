/// <reference path="../enums/BerryType.d.ts"/>
/// <reference path="../enums/ItemType.d.ts"/>
/// <reference path="../enums/PokemonType.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../interfaces/BagItem.d.ts"/>
/// <reference path="./evolutions/Base.d.ts"/>
/// <reference path="../party/LevelType.d.ts"/>
/// <reference path="./PokemonNameType.d.ts"/>
 declare const pokemonBabyPrevolutionMap: {
    [name: string]: PokemonNameType;
};
 declare type PokemonListData = {
    id: number;
    name: PokemonNameType;
    nativeRegion?: Region;
    catchRate: number;
    evolutions?: EvoData[];
    type: PokemonType[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    levelType: LevelType;
    exp: number;
    eggCycles: number;
    baby?: boolean;
    attack?: number;
    heldItem?: BagItem;
    gender?: {
        type?: number;
        femaleRatio?: number;
        visualDifference?: boolean;
    };
};
 declare const pokemonList: [{
    id: number;
    name: "Bulbasaur";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bulbasaur (Clone)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Spooky Bulbasaur";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bulbasaur (Rose)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ivysaur";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ivysaur (Clone)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Spooky Ivysaur";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ivysaur (Rose)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Venusaur";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Venusaur (Clone)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Spooky Venusaur";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Dark)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Venusaur (Rose)";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Venusaur";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charmander";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charmander (Clone)";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charmeleon";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charmeleon (Clone)";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charizard";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charizard (Clone)";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Charizard";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Squirtle";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Squirtle (Clone)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Wartortle";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Wartortle (Clone)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Blastoise";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Blastoise (Clone)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Blastoise";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Caterpie";
    catchRate: number;
    type: PokemonType.Bug[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Caterpie";
    catchRate: number;
    type: PokemonType.Bug[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Metapod";
    catchRate: number;
    type: PokemonType.Bug[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Butterfree";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Valencian Butterfree";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pink Butterfree";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ash's Butterfree";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Butterfree";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Weedle";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Weedle";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Kakuna";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Beedrill";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pidgey";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Pidgey";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pidgeotto";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Pidgeotto";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pidgeot";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rattata";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Alolan Rattata";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Dark)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Rattata";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Raticate";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Alolan Raticate";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Dark)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Raticate";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Dark)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Valencian Raticate";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Spearow";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Red Spearow";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Fearow";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ekans";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Arbok";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Arbok";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pikachu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pikachu (Original Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Hoenn Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Sinnoh Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Unova Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Kalos Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Alola Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (Partner Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flying Pikachu";
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Surfing Pikachu";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Electric)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pikachu (Gengar)";
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Ghost)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Let's Go Pikachu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikachu (World Cap)";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinkan Pikachu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Pikachu";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Detective Pikachu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Raichu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Alolan Raichu";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Detective Raichu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sandshrew";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Sandshrew";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sandslash";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Sandslash";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Nidoran(F)";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinkan Nidoran(F)";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nidorina";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nidoqueen";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ground)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nidoran(M)";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinkan Nidoran(M)";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nidorino";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nidoking";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ground)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinkan Nidoking";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ground)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Clefairy";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Clefable";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Vulpix";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alolan Vulpix";
    nativeRegion: Region.alola;
    catchRate: number;
    type: PokemonType.Ice[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ninetales";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alolan Ninetales";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Fairy)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Jigglypuff";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Wigglytuff";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Zubat";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Golbat";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Oddish";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Oddish";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gloom";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Vileplume";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Valencian Vileplume";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Vileplume";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Paras";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Valencian Paras";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Paras";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Parasect";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Venonat";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Venonat";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Venomoth";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Diglett";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Diglett";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Diglett";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dugtrio";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Dugtrio";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Meowth";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Meowth";
    nativeRegion: Region.alola;
    catchRate: number;
    type: PokemonType.Dark[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Meowth";
    nativeRegion: Region.galar;
    catchRate: number;
    type: PokemonType.Steel[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gigantamax Meowth";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Persian";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Persian";
    nativeRegion: Region.alola;
    catchRate: number;
    type: PokemonType.Dark[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Psyduck";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Golduck";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mankey";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Mankey";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Primeape";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Primeape";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Growlithe";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Arcanine";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Poliwag";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Poliwhirl";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Pinkan Poliwhirl";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Poliwrath";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Fighting)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Abra";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Kadabra";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Alakazam";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Machop";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Machoke";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Machamp";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Machamp";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bellsprout";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Bellsprout";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Weepinbell";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Valencian Weepinbell";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Victreebel";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tentacool";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Poison)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tentacruel";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Poison)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Geodude";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Alolan Geodude";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Geodude";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Graveler";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Alolan Graveler";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Golem";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Alolan Golem";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ponyta";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Ponyta";
    nativeRegion: Region.galar;
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rapidash";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Rapidash";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Slowpoke";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Galarian Slowpoke";
    nativeRegion: Region.galar;
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Slowbro";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Galarian Slowbro";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Magnemite";
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Magneton";
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Farfetch'd";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Farfetch'd";
    nativeRegion: Region.galar;
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Doduo";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Dodrio";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pinkan Dodrio";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Seel";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dewgong";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ice)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Grimer";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Grimer";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Dark)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Muk";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Muk";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Dark)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shellder";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cloyster";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ice)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gastly";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ghost)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Haunter";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ghost)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gengar";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ghost)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gigantamax Gengar";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Ghost)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Onix";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Crystal Onix";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Drowzee";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Hypno";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Krabby";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Kingler";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gigantamax Kingler";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Voltorb";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Electrode";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Exeggcute";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Exeggutor";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Alolan Exeggutor";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Exeggutor";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cubone";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Marowak";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Alolan Marowak";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Marowak";
    nativeRegion: Region.alola;
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Hitmonlee";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hitmonchan";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Lickitung";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Koffing";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Weezing";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pinkan Weezing";
    catchRate: number;
    type: PokemonType.Poison[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Weezing";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Fairy)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rhyhorn";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pinkan Rhyhorn";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Rhydon";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pinkan Rhydon";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Chansey";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Charity Chansey";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Tangela";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Kangaskhan";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Horsea";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Seadra";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Goldeen";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Seaking";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Staryu";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Starmie";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mr. Mime";
    catchRate: number;
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Mr. Mime";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Scyther";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pinkan Scyther";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Jynx";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Electabuzz";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinkan Electabuzz";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Magmar";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pinsir";
    catchRate: number;
    type: PokemonType.Bug[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tauros";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Magikarp";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Skelly";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Calico (Orange, White)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Calico (Orange, White, Black)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Calico (White, Orange)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Calico (Orange, Gold)";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Orange Two Tone";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Orange Orca";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Orange Dapples";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Pink Two Tone";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Pink Orca";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Pink Dapples";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Grey Bubbles";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Grey Diamonds";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Grey Patches";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Purple Bubbles";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Purple Diamonds";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Purple Patches";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Apricot Tiger";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Apricot Zebra";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Apricot Stripes";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Brown Tiger";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Brown Zebra";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Brown Stripes";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Orange Forehead";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Orange Mask";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Black Forehead";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Black Mask";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Saucy Blue";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Blue Raindrops";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Saucy Violet";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magikarp Violet Raindrops";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Gyarados";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Lapras";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ice)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gigantamax Lapras";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ice)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ditto";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Eevee";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Let's Go Eevee";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Eevee";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Vaporeon";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Jolteon";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flareon";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Porygon";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Omanyte";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Omastar";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Kabuto";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Kabutops";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Aerodactyl";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Snorlax";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Santa Snorlax";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Snorlax";
    nativeRegion: Region.none;
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Articuno";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Galarian Articuno";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zapdos";
    catchRate: number;
    type: (PokemonType.Electric | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Galarian Zapdos";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Fighting | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Moltres";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Galarian Moltres";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Dark)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Dratini";
    catchRate: number;
    type: PokemonType.Dragon[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Dragonair";
    catchRate: number;
    type: PokemonType.Dragon[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Dragonite";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Mewtwo";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Armored Mewtwo";
    catchRate: number;
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mew";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.berry;
        id: BerryType;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Chikorita";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bayleef";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Meganium";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Cyndaquil";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Quilava";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Typhlosion";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Totodile";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Croconaw";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Feraligatr";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sentret";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furret";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Hoothoot";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Noctowl";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ledyba";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Ledian";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Spinarak";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ariados";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Bug)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Crobat";
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Flying)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Chinchou";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Electric)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Lanturn";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Electric)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Pichu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spiky-eared Pichu";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Cleffa";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Igglybuff";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Togepi";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Spooky Togepi";
    catchRate: number;
    type: PokemonType.Ghost[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Surprise Togepi";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Togetic";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Spooky Togetic";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Ghost)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Natu";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Xatu";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Mareep";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Flaaffy";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ampharos";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bellossom";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Marill";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Azumarill";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Fairy)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sudowoodo";
    catchRate: number;
    type: PokemonType.Rock[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Politoed";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Hoppip";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Skiploom";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Jumpluff";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Aipom";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Sunkern";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sunflora";
    catchRate: number;
    type: PokemonType.Grass[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Yanma";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Bug)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wooper";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ground)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Quagsire";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Ground)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Espeon";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Umbreon";
    catchRate: number;
    type: PokemonType.Dark[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Murkrow";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Dark)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Slowking";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Galarian Slowking";
    nativeRegion: Region.galar;
    catchRate: number;
    type: (PokemonType.Poison | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Misdreavus";
    catchRate: number;
    type: PokemonType.Ghost[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Unown (A)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (B)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (C)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (D)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (E)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (F)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (G)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (H)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (I)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (J)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (K)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (L)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (M)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (N)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (O)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (P)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (Q)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (R)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (S)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (T)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (U)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (V)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (W)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (X)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (Y)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (Z)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (!)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Unown (?)";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Wobbuffet";
    catchRate: number;
    type: PokemonType.Psychic[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Girafarig";
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Pineco";
    catchRate: number;
    type: PokemonType.Bug[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Forretress";
    catchRate: number;
    type: (PokemonType.Bug | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dunsparce";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gligar";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Steelix";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Crystal Steelix";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Snubbull";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Granbull";
    catchRate: number;
    type: PokemonType.Fairy[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Qwilfish";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Poison)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Scizor";
    catchRate: number;
    type: (PokemonType.Bug | PokemonType.Steel)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Shuckle";
    catchRate: number;
    type: (PokemonType.Bug | PokemonType.Rock)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Heracross";
    catchRate: number;
    type: (PokemonType.Fighting | PokemonType.Bug)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Sneasel";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Dark)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Teddiursa";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ursaring";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Slugma";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Magcargo";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Rock)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swinub";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Ground)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Piloswine";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Ground)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Corsola";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Rock)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Galarian Corsola";
    nativeRegion: Region.galar;
    catchRate: number;
    type: PokemonType.Ghost[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Remoraid";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Octillery";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Delibird";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Flying)[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mantine";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Skarmory";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Steel)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Houndour";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Dark)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Houndoom";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Dark)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Kingdra";
    catchRate: number;
    type: (PokemonType.Water | PokemonType.Dragon)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Phanpy";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Donphan";
    catchRate: number;
    type: PokemonType.Ground[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Porygon2";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Stantler";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Smeargle";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tyrogue";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hitmontop";
    catchRate: number;
    type: PokemonType.Fighting[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Smoochum";
    catchRate: number;
    type: (PokemonType.Ice | PokemonType.Psychic)[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Elekid";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Magby";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.mediumfast;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Miltank";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Blissey";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Blessing Blissey";
    catchRate: number;
    type: PokemonType.Normal[];
    levelType: LevelType.fast;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Raikou";
    catchRate: number;
    type: PokemonType.Electric[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Entei";
    catchRate: number;
    type: PokemonType.Fire[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Suicune";
    catchRate: number;
    type: PokemonType.Water[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Larvitar";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pupitar";
    catchRate: number;
    type: (PokemonType.Ground | PokemonType.Rock)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tyranitar";
    catchRate: number;
    type: (PokemonType.Rock | PokemonType.Dark)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lugia";
    catchRate: number;
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Ho-Oh";
    catchRate: number;
    type: (PokemonType.Fire | PokemonType.Flying)[];
    levelType: LevelType.slow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Celebi";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.berry;
        id: BerryType;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Grinch Celebi";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Dark)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.berry;
        id: BerryType;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Flowering Celebi";
    catchRate: number;
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.berry;
        id: BerryType;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Treecko";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Grovyle";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sceptile";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Torchic";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Combusken";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Blaziken";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Mudkip";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Marshtomp";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Swampert";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Poochyena";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mightyena";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Zigzagoon";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Galarian Zigzagoon";
    nativeRegion: Region.galar;
    type: (PokemonType.Normal | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Linoone";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Galarian Linoone";
    nativeRegion: Region.galar;
    type: (PokemonType.Normal | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wurmple";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silcoon";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Beautifly";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Cascoon";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dustox";
    type: (PokemonType.Poison | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Lotad";
    type: (PokemonType.Water | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lombre";
    type: (PokemonType.Water | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ludicolo";
    type: (PokemonType.Water | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Seedot";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Nuzleaf";
    type: (PokemonType.Grass | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Shiftry";
    type: (PokemonType.Grass | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Taillow";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swellow";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wingull";
    type: (PokemonType.Water | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pelipper";
    type: (PokemonType.Water | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ralts";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Kirlia";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gardevoir";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Surskit";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Masquerain";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shroomish";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Breloom";
    type: (PokemonType.Grass | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Slakoth";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vigoroth";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Slaking";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Nincada";
    type: (PokemonType.Ground | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ninjask";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shedinja";
    type: (PokemonType.Bug | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Whismur";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Loudred";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Exploud";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Makuhita";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hariyama";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Azurill";
    type: (PokemonType.Normal | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Nosepass";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Skitty";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Delcatty";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sableye";
    type: (PokemonType.Ghost | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mawile";
    type: (PokemonType.Steel | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Aron";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Lairon";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Aggron";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Meditite";
    type: (PokemonType.Fighting | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Medicham";
    type: (PokemonType.Fighting | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Electrike";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Manectric";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Plusle";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Minun";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Volbeat";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Illumise";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Roselia";
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Gulpin";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Swalot";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Carvanha";
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Sharpedo";
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Wailmer";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wailord";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Numel";
    type: (PokemonType.Fire | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Camerupt";
    type: (PokemonType.Fire | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Torkoal";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spoink";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Grumpig";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spinda";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Trapinch";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vibrava";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Flygon";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cacnea";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cacturne";
    type: (PokemonType.Grass | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Swablu";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Altaria";
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Zangoose";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Seviper";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lunatone";
    type: (PokemonType.Psychic | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Solrock";
    type: (PokemonType.Psychic | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Barboach";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Whiscash";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Corphish";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Crawdaunt";
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Baltoy";
    type: (PokemonType.Ground | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Claydol";
    type: (PokemonType.Ground | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Lileep";
    type: (PokemonType.Grass | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Cradily";
    type: (PokemonType.Grass | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Anorith";
    type: (PokemonType.Bug | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Armaldo";
    type: (PokemonType.Bug | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Feebas";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Milotic";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Castform";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Castform (Sunny)";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Castform (Rainy)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Castform (Snowy)";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Kecleon";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shuppet";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Banette";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Duskull";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dusclops";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tropius";
    type: (PokemonType.Grass | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Chimecho";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Absol";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mega Absol";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wynaut";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Snorunt";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Glalie";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spheal";
    type: (PokemonType.Water | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sealeo";
    type: (PokemonType.Water | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Walrein";
    type: (PokemonType.Water | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Clamperl";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Huntail";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Gorebyss";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Relicanth";
    type: (PokemonType.Water | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Luvdisc";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bagon";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Shelgon";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Salamence";
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Beldum";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Metang";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Metagross";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Regirock";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Regice";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Registeel";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Latias";
    type: (PokemonType.Psychic | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Latios";
    type: (PokemonType.Psychic | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Kyogre";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Groudon";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rayquaza";
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Jirachi";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Deoxys";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Deoxys (Attack)";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Deoxys (Defense)";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Deoxys (Speed)";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Turtwig";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Grotle";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Torterra";
    type: (PokemonType.Grass | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Chimchar";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Monferno";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Infernape";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Piplup";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Prinplup";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Empoleon";
    type: (PokemonType.Water | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Starly";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Staravia";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Staraptor";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Bidoof";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Bibarel";
    type: (PokemonType.Normal | PokemonType.Water)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Kricketot";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Kricketune";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Shinx";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Luxio";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Luxray";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Budew";
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Roserade";
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Cranidos";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Rampardos";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Shieldon";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bastiodon";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Burmy (Plant)";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Burmy (Sand)";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Burmy (Trash)";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wormadam (Plant)";
    type: (PokemonType.Grass | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Wormadam (Sand)";
    type: (PokemonType.Ground | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Wormadam (Trash)";
    type: (PokemonType.Bug | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Mothim";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Combee";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Vespiquen";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pachirisu";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Buizel";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Floatzel";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cherubi";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cherrim (Overcast)";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cherrim (Sunshine)";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shellos (West)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shellos (East)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gastrodon (West)";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gastrodon (East)";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ambipom";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Drifloon";
    type: (PokemonType.Flying | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Drifblim";
    type: (PokemonType.Flying | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.fluctuating;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Buneary";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lopunny";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mismagius";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Honchkrow";
    type: (PokemonType.Flying | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Glameow";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Purugly";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Chingling";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Stunky";
    type: (PokemonType.Poison | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Skuntank";
    type: (PokemonType.Poison | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bronzor";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Bronzong";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Bonsly";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mime Jr.";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Happiny";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Handout Happiny";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Chatot";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spiritomb";
    type: (PokemonType.Ghost | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gible";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Gabite";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Garchomp";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Munchlax";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Elf Munchlax";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Riolu";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Lucario";
    type: (PokemonType.Fighting | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Mega Lucario";
    type: (PokemonType.Fighting | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hippopotas";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Hippowdon";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Skorupi";
    type: (PokemonType.Poison | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Drapion";
    type: (PokemonType.Poison | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Croagunk";
    type: (PokemonType.Fighting | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Toxicroak";
    type: (PokemonType.Fighting | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Carnivine";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Finneon";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Lumineon";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Mantyke";
    type: (PokemonType.Water | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Snover";
    type: (PokemonType.Grass | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Abomasnow";
    type: (PokemonType.Grass | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Mega Abomasnow";
    type: (PokemonType.Grass | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Weavile";
    type: (PokemonType.Ice | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Magnezone";
    type: (PokemonType.Electric | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Lickilicky";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rhyperior";
    type: (PokemonType.Ground | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Tangrowth";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Electivire";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Magmortar";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Togekiss";
    type: (PokemonType.Flying | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Spooky Togekiss";
    type: (PokemonType.Flying | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Yanmega";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Leafeon";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Glaceon";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gliscor";
    type: (PokemonType.Ground | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mamoswine";
    type: (PokemonType.Ice | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Porygon-Z";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Gallade";
    type: (PokemonType.Fighting | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Probopass";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Dusknoir";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Froslass";
    type: (PokemonType.Ice | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Rotom";
    type: (PokemonType.Electric | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Heat)";
    type: (PokemonType.Fire | PokemonType.Electric)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Wash)";
    type: (PokemonType.Water | PokemonType.Electric)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Frost)";
    type: (PokemonType.Electric | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Fan)";
    type: (PokemonType.Electric | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Mow)";
    type: (PokemonType.Electric | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rotom (Discord)";
    type: (PokemonType.Electric | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Uxie";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mesprit";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Azelf";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Dialga";
    type: (PokemonType.Dragon | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Palkia";
    type: (PokemonType.Water | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Heatran";
    type: (PokemonType.Fire | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Regigigas";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Giratina (Altered)";
    type: (PokemonType.Ghost | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Giratina (Origin)";
    type: (PokemonType.Ghost | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Cresselia";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Phione";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Manaphy";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Darkrai";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Shaymin (Land)";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.berry;
        id: BerryType;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Shaymin (Sky)";
    type: (PokemonType.Grass | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Normal)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Fire)";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Water)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Electric)";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Grass)";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Ice)";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Fighting)";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Poison)";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Ground)";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Flying)";
    type: PokemonType.Flying[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Psychic)";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Bug)";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Rock)";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Ghost)";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Dragon)";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Dark)";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Steel)";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arceus (Fairy)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Victini";
    type: (PokemonType.Fire | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Snivy";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Servine";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Serperior";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Tepig";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pignite";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Emboar";
    type: (PokemonType.Fire | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Oshawott";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Dewott";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Samurott";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Patrat";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Watchog";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lillipup";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Herdier";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Stoutland";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Purrloin";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Liepard";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pansage";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Simisage";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pansear";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Simisear";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Panpour";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Simipour";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Munna";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Musharna";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pidove";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tranquill";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Unfezant";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Blitzle";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Zebstrika";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Roggenrola";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Boldore";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Gigalith";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Woobat";
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swoobat";
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Drilbur";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Excadrill";
    type: (PokemonType.Ground | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Audino";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mega Audino";
    type: (PokemonType.Normal | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Timburr";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gurdurr";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Conkeldurr";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Tympole";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Palpitoad";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Seismitoad";
    type: (PokemonType.Water | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Throh";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sawk";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sewaddle";
    type: (PokemonType.Grass | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swadloon";
    type: (PokemonType.Grass | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Leavanny";
    type: (PokemonType.Grass | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Venipede";
    type: (PokemonType.Poison | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Whirlipede";
    type: (PokemonType.Poison | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Scolipede";
    type: (PokemonType.Poison | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cottonee";
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Whimsicott";
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Petilil";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Lilligant";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Basculin (Red-Striped)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Basculin (Blue-Striped)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Sandile";
    type: (PokemonType.Ground | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Krokorok";
    type: (PokemonType.Ground | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Krookodile";
    type: (PokemonType.Ground | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Darumaka";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Darumaka";
    nativeRegion: Region.galar;
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Darmanitan";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Darmanitan (Zen)";
    type: (PokemonType.Fire | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Darmanitan";
    nativeRegion: Region.galar;
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Darmanitan (Zen)";
    nativeRegion: Region.galar;
    type: (PokemonType.Fire | PokemonType.Ice)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Maractus";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dwebble";
    type: (PokemonType.Bug | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Crustle";
    type: (PokemonType.Bug | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
}, {
    id: number;
    name: "Scraggy";
    type: (PokemonType.Fighting | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Scrafty";
    type: (PokemonType.Fighting | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sigilyph";
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Yamask";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Yamask";
    nativeRegion: Region.galar;
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cofagrigus";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tirtouga";
    type: (PokemonType.Water | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Carracosta";
    type: (PokemonType.Water | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Archen";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Archeops";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Trubbish";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Garbodor";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gigantamax Garbodor";
    nativeRegion: Region.none;
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Zorua";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Zoroark";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Minccino";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Cinccino";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gothita";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gothorita";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gothitelle";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Solosis";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Duosion";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Reuniclus";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ducklett";
    type: (PokemonType.Water | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swanna";
    type: (PokemonType.Water | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vanillite";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vanillish";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vanilluxe";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Deerling (Spring)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Deerling (Summer)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Deerling (Autumn)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Deerling (Winter)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sawsbuck (Spring)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sawsbuck (Summer)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sawsbuck (Autumn)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sawsbuck (Winter)";
    type: (PokemonType.Normal | PokemonType.Grass)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Emolga";
    type: (PokemonType.Electric | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Karrablast";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Escavalier";
    type: (PokemonType.Bug | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Foongus";
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Amoonguss";
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Frillish";
    type: (PokemonType.Water | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Jellicent";
    type: (PokemonType.Water | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Alomomola";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Joltik";
    type: (PokemonType.Electric | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galvantula";
    type: (PokemonType.Electric | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ferroseed";
    type: (PokemonType.Grass | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ferrothorn";
    type: (PokemonType.Grass | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Klink";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Klang";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Klinklang";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Tynamo";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Eelektrik";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Eelektross";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Elgyem";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Beheeyem";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Litwick";
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lampent";
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Chandelure";
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Axew";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Fraxure";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Haxorus";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cubchoo";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Beartic";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cryogonal";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Shelmet";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Accelgor";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Stunfisk";
    type: (PokemonType.Electric | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Galarian Stunfisk";
    nativeRegion: Region.galar;
    type: (PokemonType.Ground | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mienfoo";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mienshao";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Druddigon";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Golett";
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Golurk";
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Pawniard";
    type: (PokemonType.Dark | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bisharp";
    type: (PokemonType.Dark | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bouffalant";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rufflet";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Braviary";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Vullaby";
    type: (PokemonType.Flying | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Mandibuzz";
    type: (PokemonType.Flying | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Heatmor";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Durant";
    type: (PokemonType.Bug | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Deino";
    type: (PokemonType.Dragon | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Zweilous";
    type: (PokemonType.Dragon | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Hydreigon";
    type: (PokemonType.Dragon | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Larvesta";
    type: (PokemonType.Fire | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    baby: true;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Volcarona";
    type: (PokemonType.Fire | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Cobalion";
    type: (PokemonType.Fighting | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Terrakion";
    type: (PokemonType.Fighting | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Virizion";
    type: (PokemonType.Grass | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Tornadus";
    type: PokemonType.Flying[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Tornadus (Therian)";
    type: PokemonType.Flying[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Thundurus";
    type: (PokemonType.Electric | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Thundurus (Therian)";
    type: (PokemonType.Electric | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Reshiram";
    type: (PokemonType.Fire | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zekrom";
    type: (PokemonType.Electric | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Landorus";
    type: (PokemonType.Ground | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Landorus (Therian)";
    type: (PokemonType.Ground | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Kyurem";
    type: (PokemonType.Ice | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Kyurem (White)";
    type: (PokemonType.Ice | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Kyurem (Black)";
    type: (PokemonType.Ice | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Keldeo";
    type: (PokemonType.Water | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Keldeo (Resolute)";
    type: (PokemonType.Water | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Meloetta (Aria)";
    type: (PokemonType.Normal | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Meloetta (Pirouette)";
    type: (PokemonType.Normal | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Genesect";
    type: (PokemonType.Bug | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Chespin";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Quilladin";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Chesnaught";
    type: (PokemonType.Grass | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Fennekin";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Braixen";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Delphox";
    type: (PokemonType.Fire | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Froakie";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Frogadier";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Greninja";
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Ash-Greninja";
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Bunnelby";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Diggersby";
    type: (PokemonType.Normal | PokemonType.Ground)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Fletchling";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Fletchinder";
    type: (PokemonType.Fire | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Talonflame";
    type: (PokemonType.Fire | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Scatterbug";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spewpa";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Meadow)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Icy Snow)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Polar)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Tundra)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Continental)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Garden)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Elegant)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Modern)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Marine)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Archipelago)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (High Plains)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Sandstorm)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (River)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Monsoon)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Savanna)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Sun)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Ocean)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Jungle)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Poké Ball)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vivillon (Fancy)";
    type: (PokemonType.Flying | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Litleo";
    type: (PokemonType.Normal | PokemonType.Fire)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pyroar";
    type: (PokemonType.Normal | PokemonType.Fire)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
        visualDifference: true;
    };
}, {
    id: number;
    name: "Flabébé (Red)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flabébé (Yellow)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flabébé (Orange)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flabébé (Blue)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Flabébé (White)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (Red)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (Yellow)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (Orange)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (Blue)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (White)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Floette (Eternal)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Florges (Red)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Florges (Yellow)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Florges (Orange)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Florges (Blue)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Florges (White)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Skiddo";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gogoat";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pancham";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pangoro";
    type: (PokemonType.Fighting | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Heart)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Star)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Diamond)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Debutante)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Matron)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Dandy)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (La Reine)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Kabuki)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Furfrou (Pharaoh)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Espurr";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Meowstic";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        visualDifference: true;
    };
}, {
    id: number;
    name: "Honedge";
    type: (PokemonType.Ghost | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Doublade";
    type: (PokemonType.Ghost | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Aegislash (Shield)";
    type: (PokemonType.Ghost | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Aegislash (Blade)";
    type: (PokemonType.Ghost | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Spritzee";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Aromatisse";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Swirlix";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Slurpuff";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Inkay";
    type: (PokemonType.Psychic | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Malamar";
    type: (PokemonType.Psychic | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Binacle";
    type: (PokemonType.Water | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Barbaracle";
    type: (PokemonType.Water | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Skrelp";
    type: (PokemonType.Water | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dragalge";
    type: (PokemonType.Poison | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Clauncher";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Clawitzer";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Helioptile";
    type: (PokemonType.Normal | PokemonType.Electric)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Heliolisk";
    type: (PokemonType.Normal | PokemonType.Electric)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tyrunt";
    type: (PokemonType.Rock | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Tyrantrum";
    type: (PokemonType.Rock | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Amaura";
    type: (PokemonType.Ice | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Aurorus";
    type: (PokemonType.Ice | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sylveon";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hawlucha";
    type: (PokemonType.Fighting | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Dedenne";
    type: (PokemonType.Electric | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Carbink";
    type: (PokemonType.Rock | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Goomy";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sliggoo";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Goodra";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Klefki";
    type: (PokemonType.Steel | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Phantump";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Trevenant";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pumpkaboo (Average)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pumpkaboo (Small)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pumpkaboo (Large)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pumpkaboo (Super Size)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gourgeist (Average)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gourgeist (Small)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gourgeist (Large)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gourgeist (Super Size)";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bergmite";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Avalugg";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Noibat";
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Noivern";
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Xerneas";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Yveltal";
    type: (PokemonType.Flying | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zygarde";
    type: (PokemonType.Ground | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Diancie";
    type: (PokemonType.Rock | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Hoopa";
    type: (PokemonType.Psychic | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Volcanion";
    type: (PokemonType.Fire | PokemonType.Water)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Rowlet";
    type: (PokemonType.Grass | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Dartrix";
    type: (PokemonType.Grass | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Decidueye";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Litten";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Torracat";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Incineroar";
    type: (PokemonType.Fire | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Popplio";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Brionne";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Primarina";
    type: (PokemonType.Water | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Pikipek";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Trumbeak";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Toucannon";
    type: (PokemonType.Normal | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Yungoos";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Gumshoos";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Gumshoos";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Grubbin";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Charjabug";
    type: (PokemonType.Electric | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Vikavolt";
    type: (PokemonType.Electric | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Vikavolt";
    type: (PokemonType.Electric | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Crabrawler";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Crabominable";
    type: (PokemonType.Ice | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Oricorio (Baile)";
    type: (PokemonType.Fire | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Oricorio (Pom-Pom)";
    type: (PokemonType.Electric | PokemonType.Flying)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Oricorio (Pa'u)";
    type: (PokemonType.Flying | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Oricorio (Sensu)";
    type: (PokemonType.Flying | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Cutiefly";
    type: (PokemonType.Bug | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Ribombee";
    type: (PokemonType.Bug | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Ribombee";
    type: (PokemonType.Bug | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Rockruff";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lycanroc (Midday)";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lycanroc (Midnight)";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lycanroc (Dusk)";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wishiwashi (Solo)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wishiwashi (School)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Wishiwashi";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mareanie";
    type: (PokemonType.Water | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Toxapex";
    type: (PokemonType.Water | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mudbray";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mudsdale";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dewpider";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Araquanid";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Araquanid";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Fomantis";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Lurantis";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Lurantis";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Morelull";
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Shiinotic";
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Salandit";
    type: (PokemonType.Fire | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Salazzle";
    type: (PokemonType.Fire | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Totem Salazzle";
    type: (PokemonType.Fire | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Stufful";
    type: (PokemonType.Normal | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bewear";
    type: (PokemonType.Normal | PokemonType.Fighting)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bounsweet";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Steenee";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Tsareena";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Comfey";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Oranguru";
    type: (PokemonType.Normal | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Passimian";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Wimpod";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Golisopod";
    type: (PokemonType.Water | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Sandygast";
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Palossand";
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Pyukumuku";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Type: Null";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Silvally (Normal)";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Silvally (Fire)";
    type: PokemonType.Fire[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Water)";
    type: PokemonType.Water[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Electric)";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Grass)";
    type: PokemonType.Grass[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Ice)";
    type: PokemonType.Ice[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Fighting)";
    type: PokemonType.Fighting[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Poison)";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Ground)";
    type: PokemonType.Ground[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Flying)";
    type: PokemonType.Flying[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Psychic)";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Bug)";
    type: PokemonType.Bug[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Rock)";
    type: PokemonType.Rock[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Ghost)";
    type: PokemonType.Ghost[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Dragon)";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Dark)";
    type: PokemonType.Dark[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Steel)";
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Silvally (Fairy)";
    type: PokemonType.Fairy[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Minior (Meteor)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.underground;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Red Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Orange Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Yellow Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Green Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Blue Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Indigo Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Minior (Violet Core)";
    type: (PokemonType.Flying | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Komala";
    type: PokemonType.Normal[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Turtonator";
    type: (PokemonType.Fire | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Togedemaru";
    type: (PokemonType.Electric | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Togedemaru";
    type: (PokemonType.Electric | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mimikyu";
    type: (PokemonType.Ghost | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Totem Mimikyu";
    type: (PokemonType.Ghost | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Bruxish";
    type: (PokemonType.Water | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Drampa";
    type: (PokemonType.Normal | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Dhelmise";
    type: (PokemonType.Grass | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Jangmo-o";
    type: PokemonType.Dragon[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Hakamo-o";
    type: (PokemonType.Fighting | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Kommo-o";
    type: (PokemonType.Fighting | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Totem Kommo-o";
    type: (PokemonType.Fighting | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Tapu Koko";
    type: (PokemonType.Electric | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Tapu Lele";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Tapu Bulu";
    type: (PokemonType.Grass | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Tapu Fini";
    type: (PokemonType.Water | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Cosmog";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Cosmoem";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Solgaleo";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Solgaleo (Radiant Sun)";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: any;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Lunala";
    type: (PokemonType.Psychic | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Lunala (Full Moon)";
    type: (PokemonType.Psychic | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: any;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Nihilego";
    type: (PokemonType.Poison | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Buzzwole";
    type: (PokemonType.Fighting | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Pheromosa";
    type: (PokemonType.Fighting | PokemonType.Bug)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Xurkitree";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Celesteela";
    type: (PokemonType.Flying | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Kartana";
    type: (PokemonType.Grass | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Guzzlord";
    type: (PokemonType.Dragon | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Necrozma";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Necrozma (Dusk Mane)";
    type: (PokemonType.Psychic | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Necrozma (Dawn Wings)";
    type: (PokemonType.Psychic | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Ultra Necrozma";
    type: (PokemonType.Psychic | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Magearna";
    type: (PokemonType.Steel | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Magearna (Original Color)";
    type: (PokemonType.Steel | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Marshadow";
    type: (PokemonType.Fighting | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Poipole";
    type: PokemonType.Poison[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Naganadel";
    type: (PokemonType.Poison | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Stakataka";
    type: (PokemonType.Rock | PokemonType.Steel)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Blacephalon";
    type: (PokemonType.Fire | PokemonType.Ghost)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zeraora";
    type: PokemonType.Electric[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Meltan";
    nativeRegion: Region.none;
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Melmetal";
    nativeRegion: Region.none;
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Gigantamax Melmetal";
    nativeRegion: Region.none;
    type: PokemonType.Steel[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Grookey";
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Thwackey";
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Rillaboom";
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Rillaboom";
    nativeRegion: Region.none;
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Scorbunny";
    type: PokemonType.Fire[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Raboot";
    type: PokemonType.Fire[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Cinderace";
    type: PokemonType.Fire[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Cinderace";
    nativeRegion: Region.none;
    type: PokemonType.Fire[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sobble";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Drizzile";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Inteleon";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Inteleon";
    nativeRegion: Region.none;
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Skwovet";
    type: PokemonType.Normal[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Greedent";
    type: PokemonType.Normal[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Rookidee";
    type: PokemonType.Flying[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Corvisquire";
    type: PokemonType.Flying[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Corviknight";
    type: (PokemonType.Flying | PokemonType.Steel)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Corviknight";
    nativeRegion: Region.none;
    type: (PokemonType.Flying | PokemonType.Steel)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Blipbug";
    type: PokemonType.Bug[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Dottler";
    type: (PokemonType.Psychic | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Orbeetle";
    type: (PokemonType.Psychic | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Orbeetle";
    nativeRegion: Region.none;
    type: (PokemonType.Psychic | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Nickit";
    type: PokemonType.Dark[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Thievul";
    type: PokemonType.Dark[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gossifleur";
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Eldegoss";
    type: PokemonType.Grass[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Wooloo";
    type: PokemonType.Normal[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Dubwool";
    type: PokemonType.Normal[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Chewtle";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Drednaw";
    type: (PokemonType.Water | PokemonType.Rock)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Drednaw";
    nativeRegion: Region.none;
    type: (PokemonType.Water | PokemonType.Rock)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Yamper";
    type: PokemonType.Electric[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Boltund";
    type: PokemonType.Electric[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Rolycoly";
    type: PokemonType.Rock[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Carkol";
    type: (PokemonType.Fire | PokemonType.Rock)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Coalossal";
    type: (PokemonType.Fire | PokemonType.Rock)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Coalossal";
    nativeRegion: Region.none;
    type: (PokemonType.Fire | PokemonType.Rock)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Applin";
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Flapple";
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Flapple";
    nativeRegion: Region.none;
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Appletun";
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Appletun";
    nativeRegion: Region.none;
    type: (PokemonType.Grass | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.erratic;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Silicobra";
    type: PokemonType.Ground[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Sandaconda";
    type: PokemonType.Ground[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Sandaconda";
    nativeRegion: Region.none;
    type: PokemonType.Ground[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Cramorant";
    type: (PokemonType.Water | PokemonType.Flying)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Cramorant (Gulping)";
    type: (PokemonType.Water | PokemonType.Flying)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Cramorant (Gorging)";
    type: (PokemonType.Water | PokemonType.Flying)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Arrokuda";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Barraskewda";
    type: PokemonType.Water[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Toxel";
    type: (PokemonType.Electric | PokemonType.Poison)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    baby: true;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Toxtricity (Amped)";
    type: (PokemonType.Electric | PokemonType.Poison)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Toxtricity (Low Key)";
    type: (PokemonType.Electric | PokemonType.Poison)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Toxtricity";
    nativeRegion: Region.none;
    type: (PokemonType.Electric | PokemonType.Poison)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Sizzlipede";
    type: (PokemonType.Fire | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Centiskorch";
    type: (PokemonType.Fire | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Centiskorch";
    nativeRegion: Region.none;
    type: (PokemonType.Fire | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Clobbopus";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Grapploct";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Sinistea";
    type: PokemonType.Ghost[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Polteageist";
    type: PokemonType.Ghost[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Hatenna";
    type: PokemonType.Psychic[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hattrem";
    type: PokemonType.Psychic[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Hatterene";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Hatterene";
    nativeRegion: Region.none;
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Impidimp";
    type: (PokemonType.Dark | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Morgrem";
    type: (PokemonType.Dark | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Grimmsnarl";
    type: (PokemonType.Dark | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Grimmsnarl";
    nativeRegion: Region.none;
    type: (PokemonType.Dark | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Obstagoon";
    type: (PokemonType.Normal | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Perrserker";
    nativeRegion: Region.galar;
    type: PokemonType.Steel[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Cursola";
    type: PokemonType.Ghost[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Sirfetch'd";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
}, {
    id: number;
    name: "Mr. Rime";
    type: (PokemonType.Ice | PokemonType.Psychic)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Runerigus";
    type: (PokemonType.Ground | PokemonType.Ghost)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Milcery";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Milcery (Cheesy)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Strawberry Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Berry Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Love Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Star Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Clover Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Flower Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Vanilla)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Lemon)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Mint)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Matcha)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Ruby Cream)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Caramel)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Rainbow)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Ruby Swirl)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Alcremie (Ribbon Salted)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Alcremie";
    nativeRegion: Region.none;
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Falinks";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Pincurchin";
    type: PokemonType.Electric[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Snom";
    type: (PokemonType.Ice | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: EvoData[];
}, {
    id: number;
    name: "Frosmoth";
    type: (PokemonType.Ice | PokemonType.Bug)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Stonjourner";
    type: PokemonType.Rock[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Eiscue (Ice Face)";
    type: PokemonType.Ice[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Eiscue (No Ice Face)";
    type: PokemonType.Ice[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Indeedee (Male)";
    type: (PokemonType.Normal | PokemonType.Psychic)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Indeedee (Female)";
    type: (PokemonType.Normal | PokemonType.Psychic)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.fast;
    exp: number;
    catchRate: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Morpeko";
    type: (PokemonType.Electric | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Morpeko (Hangry)";
    type: (PokemonType.Electric | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Cufant";
    type: PokemonType.Steel[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Copperajah";
    type: PokemonType.Steel[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Copperajah";
    nativeRegion: Region.none;
    type: PokemonType.Steel[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Dracozolt";
    type: (PokemonType.Electric | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arctozolt";
    type: (PokemonType.Electric | PokemonType.Ice)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Dracovish";
    type: (PokemonType.Water | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Arctovish";
    type: (PokemonType.Water | PokemonType.Ice)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Duraludon";
    type: (PokemonType.Dragon | PokemonType.Steel)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Gigantamax Duraludon";
    nativeRegion: Region.none;
    type: (PokemonType.Dragon | PokemonType.Steel)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.mediumfast;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Dreepy";
    type: (PokemonType.Ghost | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Drakloak";
    type: (PokemonType.Ghost | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    evolutions: import("./evolutions/Base").LevelEvoData[];
}, {
    id: number;
    name: "Dragapult";
    type: (PokemonType.Ghost | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
}, {
    id: number;
    name: "Zacian (Battle Hero)";
    type: PokemonType.Fairy[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    evolutions: EvoData[];
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zacian (Crowned Sword)";
    type: (PokemonType.Steel | PokemonType.Fairy)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zamazenta (Battle Hero)";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    evolutions: EvoData[];
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zamazenta (Crowned Shield)";
    type: (PokemonType.Fighting | PokemonType.Steel)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Eternatus";
    type: (PokemonType.Poison | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Eternamax Eternatus";
    nativeRegion: Region.none;
    type: (PokemonType.Poison | PokemonType.Dragon)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Kubfu";
    type: PokemonType.Fighting[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Urshifu (Single Strike)";
    type: (PokemonType.Fighting | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Urshifu (Rapid Strike)";
    type: (PokemonType.Water | PokemonType.Fighting)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Urshifu (Single Strike)";
    nativeRegion: Region.none;
    type: (PokemonType.Fighting | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Gigantamax Urshifu (Rapid Strike)";
    nativeRegion: Region.none;
    type: (PokemonType.Water | PokemonType.Fighting)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Zarude";
    type: (PokemonType.Grass | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Zarude (Dada)";
    type: (PokemonType.Grass | PokemonType.Dark)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Regieleki";
    type: PokemonType.Electric[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Regidrago";
    type: PokemonType.Dragon[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Glastrier";
    type: PokemonType.Ice[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Spectrier";
    type: PokemonType.Ghost[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    heldItem: {
        type: ItemType.item;
        id: string;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Calyrex";
    type: (PokemonType.Grass | PokemonType.Psychic)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    evolutions: import("./evolutions/Base").StoneEvoData[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Ice Rider Calyrex";
    type: (PokemonType.Ice | PokemonType.Psychic)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Shadow Rider Calyrex";
    type: (PokemonType.Psychic | PokemonType.Ghost)[];
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    catchRate: number;
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "MissingNo.";
    nativeRegion: Region.none;
    catchRate: number;
    type: (PokemonType.Normal | PokemonType.Flying)[];
    levelType: LevelType.mediumslow;
    exp: number;
    eggCycles: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mega Venusaur";
    nativeRegion: Region.kanto;
    type: (PokemonType.Grass | PokemonType.Poison)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Mega Charizard X";
    nativeRegion: Region.kanto;
    type: (PokemonType.Fire | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.mediumslow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        femaleRatio: number;
    };
}, {
    id: number;
    name: "Mega Gyarados";
    nativeRegion: Region.kanto;
    type: (PokemonType.Water | PokemonType.Dark)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mega Mewtwo X";
    type: (PokemonType.Fighting | PokemonType.Psychic)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mega Mewtwo Y";
    type: PokemonType.Psychic[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "Mega Gardevoir";
    type: (PokemonType.Psychic | PokemonType.Fairy)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
}, {
    id: number;
    name: "Mega Rayquaza";
    nativeRegion: Region.hoenn;
    type: (PokemonType.Flying | PokemonType.Dragon)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}, {
    id: number;
    name: "???";
    nativeRegion: Region.alola;
    type: (PokemonType.Poison | PokemonType.Rock)[];
    eggCycles: number;
    levelType: LevelType.slow;
    exp: number;
    catchRate: number;
    base: {
        hitpoints: number;
        attack: number;
        specialAttack: number;
        defense: number;
        specialDefense: number;
        speed: number;
    };
    gender: {
        type: Genders;
    };
}];
 declare type PokemonList = typeof pokemonList;
 declare type PokemonMapProxy = Record<PokemonNameType | number, PokemonListData> & {
    random: (max?: number, min?: number) => PokemonListData;
    randomRegion: (max?: Region, min?: Region) => PokemonListData;
} & Array<PokemonListData>;
 declare const pokemonMap: PokemonMapProxy;
