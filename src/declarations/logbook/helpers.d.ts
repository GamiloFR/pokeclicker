/// <reference path="../pokemons/PokemonNameType.d.ts"/>
/// <reference path="../translation/Translation.d.ts"/>
 declare type LogContent = {
    key: LogContentKey;
    vars?: TranslationVars;
};
 declare enum LogContentKey {
    'notTranslated' = "notTranslated",
    'earnedAchievement' = "earnedAchievement",
    'escapedShiny' = "escapedShiny",
    'escapedShinyDupe' = "escapedShinyDupe",
    'escapedWild' = "escapedWild",
    'encounterShiny' = "encounterShiny",
    'encounterShinyDupe' = "encounterShinyDupe",
    'encounterWild' = "encounterWild",
    'gainBattleFrontierReward' = "gainBattleFrontierReward",
    'gainBattleFrontierPoints' = "gainBattleFrontierPoints",
    'hatchedShiny' = "hatchedShiny",
    'hatchedShinyDupe' = "hatchedShinyDupe",
    'unableToPayHatcheryHelper' = "unableToPayHatcheryHelper",
    'unableToPayFarmHand' = "unableToPayFarmHand",
    'registeredBerry' = "registeredBerry",
    'shinyWander' = "shinyWander",
    'shinyWanderDupe' = "shinyWanderDupe",
    'wildWander' = "wildWander",
    'fluteRanOutOfGems' = "fluteRanOutOfGems",
    'purchasedShiny' = "purchasedShiny",
    'purchasedShinyDupe' = "purchasedShinyDupe",
    'evolvedShiny' = "evolvedShiny",
    'evolvedShinyDupe' = "evolvedShinyDupe",
    'captured' = "captured",
    'capturedShiny' = "capturedShiny",
    'capturedShinyDupe' = "capturedShinyDupe",
    'enemyDrop' = "enemyDrop",
    'roamer' = "roamer",
    'roamerShiny' = "roamerShiny",
    'roamerShinyDupe' = "roamerShinyDupe",
    'completedQuest' = "completedQuest",
    'completedQuestWithPoints' = "completedQuestWithPoints",
    'questLevelUp' = "questLevelUp",
    'resistantToPokerus' = "resistantToPokerus"
}
 declare const createLogContent: {
    notTranslated: (vars: {
        text: string;
    }) => {
        key: LogContentKey;
        vars: {
            text: string;
        };
    };
    earnedAchievement: (vars: {
        name: string;
    }) => {
        key: LogContentKey;
        vars: {
            name: string;
        };
    };
    escapedShiny: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    escapedShinyDupe: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    escapedWild: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    encounterShiny: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    encounterShinyDupe: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    encounterWild: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    gainBattleFrontierReward: (vars: {
        reward: string;
        stage: string;
    }) => {
        key: LogContentKey;
        vars: {
            reward: string;
            stage: string;
        };
    };
    gainBattleFrontierPoints: (vars: {
        points: string;
        stage: string;
    }) => {
        key: LogContentKey;
        vars: {
            points: string;
            stage: string;
        };
    };
    hatchedShiny: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    hatchedShinyDupe: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    unableToPayHatcheryHelper: (vars: {
        currency: string;
        name: string;
    }) => {
        key: LogContentKey;
        vars: {
            currency: string;
            name: string;
        };
    };
    unableToPayFarmHand: (vars: {
        name: string;
    }) => {
        key: LogContentKey;
        vars: {
            name: string;
        };
    };
    registeredBerry: (vars: {
        berry: string;
    }) => {
        key: LogContentKey;
        vars: {
            berry: string;
        };
    };
    shinyWander: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    shinyWanderDupe: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    wildWander: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    fluteRanOutOfGems: (vars: {
        flute: string;
    }) => {
        key: LogContentKey;
        vars: {
            flute: string;
        };
    };
    purchasedShiny: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    purchasedShinyDupe: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    evolvedShiny: (vars: {
        basePokemon: PokemonNameType;
        evolvedPokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            basePokemon: PokemonNameType;
            evolvedPokemon: PokemonNameType;
        };
    };
    evolvedShinyDupe: (vars: {
        basePokemon: PokemonNameType;
        evolvedPokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            basePokemon: PokemonNameType;
            evolvedPokemon: PokemonNameType;
        };
    };
    captured: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    capturedShiny: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    capturedShinyDupe: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
    enemyDrop: (vars: {
        pokemon: PokemonNameType;
        item: string;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
            item: string;
        };
    };
    roamer: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    roamerShiny: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    roamerShinyDupe: (vars: {
        location: string;
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            location: string;
            pokemon: PokemonNameType;
        };
    };
    completedQuest: (vars: {
        quest: string;
    }) => {
        key: LogContentKey;
        vars: {
            quest: string;
        };
    };
    completedQuestWithPoints: (vars: {
        quest: string;
        points: string;
    }) => {
        key: LogContentKey;
        vars: {
            quest: string;
            points: string;
        };
    };
    questLevelUp: (vars: {
        level: string;
    }) => {
        key: LogContentKey;
        vars: {
            level: string;
        };
    };
    resistantToPokerus: (vars: {
        pokemon: PokemonNameType;
    }) => {
        key: LogContentKey;
        vars: {
            pokemon: PokemonNameType;
        };
    };
};
