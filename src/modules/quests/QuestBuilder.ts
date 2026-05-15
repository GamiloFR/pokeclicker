import SeededRand from '../utilities/SeededRand';
import Quest from './Quest';
import CapturePokemonsQuest from './questTypes/CapturePokemonsQuest';
import CapturePokemonTypesQuest from './questTypes/CapturePokemonTypesQuest';
import CatchShadowsQuest from './questTypes/CatchShadowsQuest';
import CatchShiniesQuest from './questTypes/CatchShiniesQuest';
import ClearBattleFrontierQuest from './questTypes/ClearBattleFrontierQuest';
import DefeatDungeonQuest from './questTypes/DefeatDungeonQuest';
import DefeatGymQuest from './questTypes/DefeatGymQuest';
import DefeatPokemonsQuest from './questTypes/DefeatPokemonsQuest';
import GainFarmPointsQuest from './questTypes/GainFarmPointsQuest';
import GainGemsQuest from './questTypes/GainGemsQuest';
import GainMoneyQuest from './questTypes/GainMoneyQuest';
import GainTokensQuest from './questTypes/GainTokensQuest';
import HarvestBerriesQuest from './questTypes/HarvestBerriesQuest';
import HatchEggsQuest from './questTypes/HatchEggsQuest';
import MineItemsQuest from './questTypes/MineItemsQuest';
import MineLayersQuest from './questTypes/MineLayersQuest';
import UseOakItemQuest from './questTypes/UseOakItemQuest';
import UsePokeballQuest from './questTypes/UsePokeballQuest';

type QuestConstructor = {
    new (...args: any[]): Quest;
    generateData(): any[];
};

class QuestBuilder {
    public static quests = {
        DefeatPokemonsQuest,
        CapturePokemonsQuest,
        CapturePokemonTypesQuest,
        ClearBattleFrontierQuest,
        GainFarmPointsQuest,
        GainMoneyQuest,
        GainTokensQuest,
        GainGemsQuest,
        HatchEggsQuest,
        MineLayersQuest,
        MineItemsQuest,
        CatchShiniesQuest,
        CatchShadowsQuest,
        DefeatGymQuest,
        DefeatDungeonQuest,
        UsePokeballQuest,
        UseOakItemQuest,
        HarvestBerriesQuest,
    };

    public static createQuest(type: string, data?: any[]): Quest {
        if (!(type in this.quests)) {
            throw new Error(`Error: Invalid quest type - ${type}.`);
        }

        const QuestClass: QuestConstructor = this.quests[type as keyof typeof this.quests];
        // Creating randomly generated quest
        if (!data) {
            return new QuestClass(...QuestClass.generateData());
        }
        return new QuestClass(...data);
    }

    public static generateQuestList(seed: number, amount = 10, uniqueQuestTypes = true) {
        const quests = [];

        SeededRand.seed(+seed);

        // Only use unlocked quest types
        const QuestTypes = new Set(Object.entries(this.quests).filter(([, quest]) => quest.canComplete()).map(([key]) => key));
        while (quests.length < amount && QuestTypes.size) {
            const QuestType = SeededRand.fromArray(Array.from(QuestTypes));
            if (uniqueQuestTypes) {
                QuestTypes.delete(QuestType);
            }
            const quest = this.createQuest(QuestType);
            quest.index = quests.length;
            quests.push(quest);
        }
        return quests;
    }
}

export default QuestBuilder;
