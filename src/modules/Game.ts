/* eslint-disable no-console */
import AchievementHandler from './achievements/AchievementHandler';
import AchievementTracker from './achievements/AchievementTracker';
import App from './App';
import BattleFrontier from './battleFrontier/BattleFrontier';
import BattleFrontierBattle from './battleFrontier/BattleFrontierBattle';
import BattleFrontierRunner from './battleFrontier/BattleFrontierRunner';
import Battle from './battles/Battle';
import BattlePokemon from './battles/BattlePokemon';
import Breeding, { HatcheryQueueEntry } from './breeding/Breeding';
import BreedingController from './breeding/BreedingController';
import EggType from './breeding/EggType';
import Challenges from './challenges/Challenges';
import RedeemableCodes from './codes/RedeemableCodes';
import BadgeCase from './DataStore/BadgeCase';
import Statistics from './DataStore/StatisticStore';
import GenericDeal from './deal/GenericDeal';
import Discord from './discord/Discord';
import DungeonBattle from './dungeons/DungeonBattle';
import DungeonRunner from './dungeons/DungeonRunner';
import EffectEngineRunner from './effectEngine/effectEngineRunner';
import BadgeEnums from './enums/Badges';
import EncounterType from './enums/EncounterType';
import KeyItemType from './enums/KeyItemType';
import PokemonType from './enums/PokemonType';
import BerryDeal from './farming/BerryDeal';
import FarmController from './farming/FarmController';
import Farming from './farming/Farming';
import EnigmaMutation from './farming/mutation/mutationTypes/EnigmaMutation';
import { ACHIEVEMENT_TICK, BATTLE_FRONTIER_TICK, BATTLE_TICK, BattleItemType, BattlePokemonGender, Currency, EFFECT_ENGINE_TICK, formatDate, GameState, getGymIndex, getTemporaryBattlesIndex, HOUR, MINUTE, Region, SAVE_TICK, SECOND, ShadowStatus, SPECIAL_EVENT_TICK, Starter, StartingRoutes, TICK_TIME, ZMOVE_TICK } from './GameConstants';
import GameHelper from './GameHelper';
import FluteEffectRunner from './gems/FluteEffectRunner';
import GemDeals from './gems/GemDeals';
import Gems from './gems/Gems';
import GymBattle from './gym/GymBattle';
import GymRunner from './gym/GymRunner';
import ItemHandler from './items/ItemHandler';
import { ItemList } from './items/ItemList';
import KeyItems from './keyItems/KeyItems';
import LogBook from './logbook/LogBook';
import Multiplier from './multiplier/Multiplier';
import NotificationConstants from './notifications/NotificationConstants';
import Notifier from './notifications/Notifier';
import OakItemLoadouts from './oakItems/OakItemLoadouts';
import OakItems from './oakItems/OakItems';
import PokemonCategories from './party/Category';
import Party from './party/Party';
import PokeballFilters from './pokeballs/PokeballFilters';
import Pokeballs from './pokeballs/Pokeballs';
import PokedexHelper from './pokedex/PokedexHelper';
import PokemonFactory from './pokemons/PokemonFactory';
import { pokemonMap } from './pokemons/PokemonList';
import RoamingPokemonList from './pokemons/RoamingPokemonList';
import Profile from './profile/Profile';
import QuestLineState from './quests/QuestLineState';
import Quests from './quests/Quests';
import MultipleQuestsQuest from './quests/questTypes/MultipleQuestsQuest';
import SafariPokemonList from './safari/SafariPokemonList';
import Save from './Save';
import SaveReminder from './saveReminder/SaveReminder';
import Settings from './settings/Settings';
import SpecialEvents from './specialEvents/SpecialEvents';
import StartSequenceRunner from './StartSequenceRunner';
import TemporaryBattleBattle from './temporaryBattle/TemporaryBattleBattle';
import TemporaryBattleList from './temporaryBattle/TemporaryBattleList';
import TemporaryBattleRunner from './temporaryBattle/TemporaryBattleRunner';
import BattleCafeController from './towns/battleCafe/BattleCafeController';
import BattleCafeSaveObject from './towns/battleCafe/BattleCafeSaveObject';
import DreamOrbController, { DreamOrbTownContent } from './towns/DreamOrbController';
import PurifyChamber from './towns/purifyChamber/PurifyChamber';
import DamageCalculator from './types/DamageCalculator';
import { ShardDeal } from './underground/ShardDeal';
import { Underground } from './underground/Underground';
import Update from './Update';
import Rand from './utilities/Rand';
import SeededDateRand from './utilities/SeededDateRand';
import Amount from './wallet/Amount';
import Wallet from './wallet/Wallet';
import Weather from './weather/Weather';
import WeatherApp from './weather/WeatherApp';
import RouteHelper from './wildBattle/RouteHelper';
import MapHelper from './worldmap/MapHelper';
import ZMoves from './ZMoves/ZMoves';

/**
 * Main game class.
 */
class Game {
    frameRequest;
    public static achievementCounter = 0;
    private _gameState = ko.observable(GameState.loading);
    private worker: Worker;

    // Features
    public update: Update;
    public profile: Profile;
    public breeding: Breeding;
    public pokeballs: Pokeballs;
    public pokeballFilters: PokeballFilters;
    public wallet: Wallet;
    public keyItems: KeyItems;
    public badgeCase: BadgeCase;
    public oakItems: OakItems;
    public oakItemLoadouts: OakItemLoadouts;
    public categories: PokemonCategories;
    public party: Party;
    public gems: Gems;
    public underground: Underground;
    public farming: Farming;
    public logbook: LogBook;
    public redeemableCodes: RedeemableCodes;
    public statistics: Statistics;
    public quests: Quests;
    public specialEvents: SpecialEvents;
    public discord: Discord;
    public achievementTracker: AchievementTracker;
    public challenges: Challenges;
    public battleFrontier: BattleFrontier;
    public multiplier: Multiplier;
    public saveReminder: SaveReminder;
    public battleCafe: BattleCafeSaveObject;
    public dreamOrbController: DreamOrbController;
    public purifyChamber: PurifyChamber;
    public weatherApp: WeatherApp;
    public zMoves: ZMoves;

    constructor() {
        // Needs to be loaded first so save data can be updated (specifically "player" data)
        this.update = new Update();
        this.multiplier = new Multiplier();

        // Load player
        App.player = Save.load();

        // Load other Features
        this.profile = new Profile();
        this.breeding = new Breeding(this.multiplier);
        this.pokeballs = new Pokeballs();
        this.pokeballFilters = new PokeballFilters();
        this.wallet = new Wallet(this.multiplier);
        this.keyItems = new KeyItems();
        this.badgeCase = new BadgeCase();
        this.oakItems = new OakItems([20, 50, 100], this.multiplier);
        this.oakItemLoadouts = new OakItemLoadouts();
        this.categories = new PokemonCategories();
        this.party = new Party(this.multiplier);
        this.gems = new Gems();
        this.underground = new Underground();
        this.farming = new Farming(this.multiplier);
        this.logbook = new LogBook();
        this.redeemableCodes = new RedeemableCodes();
        this.statistics = new Statistics();
        this.quests = new Quests();
        this.specialEvents = new SpecialEvents();
        this.discord = new Discord();
        this.achievementTracker = new AchievementTracker();
        this.challenges = new Challenges();
        this.battleFrontier = new BattleFrontier();
        this.saveReminder = new SaveReminder();
        this.battleCafe = new BattleCafeSaveObject();
        this.dreamOrbController = new DreamOrbController();
        this.purifyChamber = new PurifyChamber();
        this.weatherApp = new WeatherApp();
        this.zMoves = new ZMoves();
    }

    load() {
        const saveJSON = localStorage.getItem(`save${Save.key}`);

        const saveObject = JSON.parse(saveJSON || '{}');

        Object.keys(this).filter(key => this[key]?.saveKey).forEach(key => {
            try {
                const saveKey = this[key].saveKey;
                // Load our save object or the default save data
                this[key].fromJSON(saveObject[saveKey] || this[key].toJSON());
            } catch (error) {
                console.error('Unable to load sava data from JSON for:', key, '\nError:\n', error);
            }
        });

        AchievementHandler.fromJSON(saveObject.achievements);
    }

    initialize() {
        AchievementHandler.initialize(this.multiplier, this.challenges);
        FarmController.initialize();
        EffectEngineRunner.initialize(this.multiplier, GameHelper.enumStrings(BattleItemType).map((name) => ItemList[name]));
        ItemHandler.initializeItems();
        BreedingController.initialize();
        PokedexHelper.initialize();
        this.profile.initialize();
        this.breeding.initialize();
        this.pokeballs.initialize();
        this.keyItems.initialize();
        this.oakItems.initialize();
        this.underground.initialize();
        this.farming.initialize();
        this.specialEvents.initialize();
        this.pokeballFilters.initialize();
        this.load();

        // Unlock achievements that have already been completed, avoids renotifying
        AchievementHandler.preCheckAchievements();
        // Flute bonuses depend on achievements so should be initialized afterwards
        // but the bonuses can affect some achievements so we need to recheck them once flutes are online
        FluteEffectRunner.initialize(this.multiplier);
        AchievementHandler.preCheckAchievements();

        // TODO refactor to proper initialization methods
        if (App.player.regionStarters[Region.kanto]() != Starter.None) {
            Battle.generateNewEnemy();
        } else {
            const battlePokemon = new BattlePokemon('MissingNo.', 0, PokemonType.None, PokemonType.None, 0, 0, 0, 0, new Amount(0, Currency.money), false, 0, BattlePokemonGender.NoGender, ShadowStatus.None, EncounterType.route);
            Battle.enemyPokemon(battlePokemon);
        }
        //Safari.load();
        AchievementHandler.calculateMaxBonus(); //recalculate bonus based on active challenges

        const now = new Date();
        SeededDateRand.seedWithDate(now);
        BerryDeal.generateDeals(now);
        Weather.generateWeather(now);
        GemDeals.generateDeals();
        ShardDeal.generateDeals();
        GenericDeal.generateDeals();
        SafariPokemonList.generateSafariLists();
        RoamingPokemonList.generateIncreasedChanceRoutes(now);
        WeatherApp.initialize();
        DamageCalculator.initialize();

        if (Settings.getSetting('disableOfflineProgress').value === false) {
            this.computeOfflineEarnings();
        }
        this.checkAndFix();

        if (Settings.getSetting('disableAutoSave').value === true) {
            Notifier.notify({
                type: NotificationConstants.NotificationOption.danger,
                title: 'Auto Save Disabled',
                message: 'You have disabled auto saving! Be sure to manually save before exiting or any progress will be lost!',
                timeout: 5 * MINUTE,
            });
        }

        // If the player isn't on a route, they're in a town/dungeon
        this.gameState = App.player.route ? GameState.fighting : GameState.town;
    }

    computeOfflineEarnings() {
        const now = Date.now();
        const timeDiffInSeconds = Math.floor((now - App.player._lastSeen) / 1000);
        if (timeDiffInSeconds > 1) {
            // Only allow up to 24 hours worth of bonuses
            const timeDiffOverride = Math.min(86400, timeDiffInSeconds);
            let region: Region = App.player.region;
            let route: number = App.player.route || StartingRoutes[region];
            if (!MapHelper.validRoute(route, region)) {
                route = 1;
                region = Region.kanto;
            }
            const availablePokemonMap = RouteHelper.getAvailablePokemonList(route, region).map(name => pokemonMap[name]);
            const maxHealth: number = PokemonFactory.routeHealth(route, region);
            let hitsToKill = 0;
            for (const pokemon of availablePokemonMap) {
                const type1: PokemonType = pokemon.type[0];
                const type2: PokemonType = pokemon.type.length > 1 ? pokemon.type[1] : PokemonType.None;
                const attackAgainstPokemon = App.game.party.calculatePokemonAttack(type1, type2);
                const currentHitsToKill: number = Math.ceil(maxHealth / attackAgainstPokemon);
                hitsToKill += currentHitsToKill;
            }
            hitsToKill = Math.ceil(hitsToKill / availablePokemonMap.length);
            const numberOfPokemonDefeated = Math.floor(timeDiffOverride / hitsToKill);
            if (numberOfPokemonDefeated === 0) {
                return;
            }
            const routeMoney: number = PokemonFactory.routeMoney(App.player.route, App.player.region, false);
            const baseMoneyToEarn = numberOfPokemonDefeated * routeMoney;
            const moneyToEarn = Math.floor(baseMoneyToEarn * 0.5);//Debuff for offline money
            App.game.wallet.gainMoney(moneyToEarn, true);

            Notifier.notify({
                type: NotificationConstants.NotificationOption.info,
                title: 'Offline Bonus',
                message: `Defeated: ${numberOfPokemonDefeated.toLocaleString('en-US')} Pokémon\nEarned: <img src="./assets/images/currency/money.svg" height="24px"/> ${moneyToEarn.toLocaleString('en-US')}`,
                strippedMessage: `Defeated: ${numberOfPokemonDefeated.toLocaleString('en-US')} Pokémon\nEarned: ${moneyToEarn.toLocaleString('en-US')} Pokédollars`,
                timeout: 2 * MINUTE,
                setting: NotificationConstants.NotificationSetting.General.offline_earnings,
            });

            // Dream orbs
            if ((new DreamOrbTownContent()).isUnlocked()) {
                const orbsUnlocked = App.game.dreamOrbController.orbs.filter((o) => !o.requirement || o.requirement.isCompleted());
                const orbsEarned = Math.floor(timeDiffOverride / 3600);
                if (orbsEarned > 0) {
                    const orbAmounts = Object.fromEntries(orbsUnlocked.map(o => [o.color, 0]));
                    for (let i = 0; i < orbsEarned; i++) {
                        const orb = Rand.fromArray(orbsUnlocked);
                        GameHelper.incrementObservable(orb.amount);
                        orbAmounts[orb.color]++;
                    }
                    const messageAppend = Object.keys(orbAmounts).filter(key => orbAmounts[key] > 0).map(key => `<li>${orbAmounts[key]} ${key}</li>`).join('');
                    Notifier.notify({
                        type: NotificationConstants.NotificationOption.info,
                        title: 'Dream Orbs',
                        message: `Gained ${orbsEarned} Dream Orbs while offline:<br /><ul class="mb-0">${messageAppend}</ul>`,
                        timeout: 2 * MINUTE,
                        setting: NotificationConstants.NotificationSetting.General.offline_earnings,
                    });
                }
            }
        }
    }

    checkAndFix() {
        // Quest box not showing (game thinking tutorial is not completed)
        if (App.game.quests.getQuestLine('Tutorial Quests').state() == QuestLineState.inactive) {
            if (App.game.statistics.gymsDefeated[getGymIndex('Pewter City')]() >= 1) {
                // Defeated Brock, Has completed the Tutorial
                App.game.quests.getQuestLine('Tutorial Quests').state(QuestLineState.ended);
            } else if (App.player.regionStarters[Region.kanto]() > Starter.None) {
                // Has chosen a starter, Tutorial is started
                App.game.quests.getQuestLine('Tutorial Quests').state(QuestLineState.started);
                App.game.quests.getQuestLine('Tutorial Quests').beginQuest(App.game.quests.getQuestLine('Tutorial Quests').curQuest());
            }
        }
        // Mining expedition questline
        if (App.game.quests.getQuestLine('Mining Expedition').state() == QuestLineState.inactive) {
            if (App.game.party.alreadyCaughtPokemon(142)) {
                // Has obtained Aerodactyl
                App.game.quests.getQuestLine('Mining Expedition').state(QuestLineState.ended);
            } else if (App.game.badgeCase.badgeList[BadgeEnums.Soul]()) {
                // Has the soul badge, Quest is started
                App.game.quests.getQuestLine('Mining Expedition').state(QuestLineState.started);
                App.game.quests.getQuestLine('Mining Expedition').beginQuest(App.game.quests.getQuestLine('Mining Expedition').curQuest());
            }
        }

        // Check if Koga has been defeated, but have no safari ticket yet
        if (App.game.badgeCase.badgeList[BadgeEnums.Soul]() && !App.game.keyItems.itemList[KeyItemType.Safari_ticket].isUnlocked()) {
            App.game.keyItems.gainKeyItem(KeyItemType.Safari_ticket, true);
        }
        // Check if Giovanni has been defeated, but have no gem case yet
        if (App.game.badgeCase.badgeList[BadgeEnums.Earth]() && !App.game.keyItems.itemList[KeyItemType.Gem_case].isUnlocked()) {
            App.game.keyItems.gainKeyItem(KeyItemType.Gem_case, true);
        }
        // Check that none of our quest are less than their initial value
        App.game.quests.questLines().filter(q => q.state() == 1 && q.curQuest() < q.quests().length).forEach(questLine => {
            const quest = questLine.curQuestObject();
            if (quest instanceof MultipleQuestsQuest) {
                quest.quests.forEach((q) => {
                    if (q.initial() > q.focus()) {
                        q.initial(q.focus());
                    }
                });
            } else {
                if (quest.initial() > quest.focus()) {
                    quest.initial(quest.focus());
                    questLine.curQuestInitial(quest.initial());
                }
            }
        });
        // Check for breeding pokemons not in list or queue
        const breeding = new Set([
            ...App.game.breeding.eggList.map((l) => l().pokemon),
            ...App.game.breeding.queueList().filter((q: HatcheryQueueEntry) => q[0] === EggType.Pokemon).map(q => q[1]),
        ]);
        App.game.party.caughtPokemon.filter((p) => p.breeding).forEach((p) => {
            if (!breeding.has(p.id)) {
                p.breeding = false;
            }
        });
        // Egg partyPokemon requires App.game.party and cannot be set until after loading is complete
        App.game.breeding.eggList.filter(e => e().pokemon).forEach(e => {
            e().setPartyPokemon();
        });

        // Kick player out of Client Island if they are not on the client
        if (!App.isUsingClient && App.player.townName === 'Client Island') {
            MapHelper.moveToTown('One Island');
        }
    }

    start() {
        console.log(`[${formatDate(new Date())}] %cGame started`, 'color:#2ecc71;font-weight:900;');
        if (App.player.regionStarters[Region.kanto]() === Starter.None) {
            StartSequenceRunner.start();
        }

        let pageHidden = document.hidden;

        // requestAnimationFrame (consistent if page visible)
        let lastFrameTime = 0;
        let ticks = 0;
        const tick = (currentFrameTime: number) => {
            // Don't process while page hidden
            if (pageHidden) {
                this.frameRequest = requestAnimationFrame(tick);
                return;
            }

            const delta = currentFrameTime - lastFrameTime;
            ticks += delta;
            lastFrameTime = currentFrameTime;
            if (ticks >= TICK_TIME) {
                // Skip the ticks if we have too many...
                if (ticks >= TICK_TIME * 2) {
                    ticks = 0;
                } else {
                    ticks -= TICK_TIME;
                }
                this.gameTick();
            }
            this.frameRequest = requestAnimationFrame(tick);
        };
        this.frameRequest = requestAnimationFrame(tick);

        // Try start our webworker so we can process stuff while the page isn't focused
        try {
            console.log(`[${formatDate(new Date())}] %cStarting web worker..`, 'color:#8e44ad;font-weight:900;');
            const blob = new Blob([
                `
                // Window visibility state
                let pageHidden = false;
                self.onmessage = function(e) {
                    if (e.data.pageHidden != undefined) {
                        pageHidden = e.data.pageHidden;
                    }
                };

                // setInterval (slightly slower on FireFox)
                const tickInterval = setInterval(() => {
                    // Don't process while page visible
                    if (!pageHidden) return;

                    postMessage('tick')
                }, ${TICK_TIME});
                `,
            ]);
            const blobURL = window.URL.createObjectURL(blob);

            this.worker = new Worker(blobURL);
            // use a setTimeout to queue the event
            this.worker?.addEventListener('message', () => Settings.getSetting('useWebWorkerForGameTicks').value ? this.gameTick() : null);

            document.addEventListener('visibilitychange', () => {
                // Let our worker know if the page is visible or not
                if (pageHidden != document.hidden) {
                    pageHidden = document.hidden;
                    this.worker.postMessage({ 'pageHidden': pageHidden });
                }

                // Save resources by not displaying updates if game is not currently visible
                const gameEl = document.getElementById('game');
                document.hidden ? gameEl.classList.add('hidden') : gameEl.classList.remove('hidden');
            });
            this.worker.postMessage({ 'pageHidden': pageHidden });
            if (this.worker) {
                console.log(`[${formatDate(new Date())}] %cWeb worker started`, 'color:#2ecc71;font-weight:900;');
            }
        } catch (e) {
            console.error(`[${formatDate(new Date())}] Web worker error`, e);
        }

        window.onbeforeunload = () => {
            this.save();
        };

        console.log('%cStop!', 'color: red; font-size: 36px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers. If you were told to copy-paste or enter something here to obtain an easter egg or unlock a secret, it can corrupt your save file, cause bugs, or otherwise break your game.', 'color: red; font-size: 16px;');
    }

    stop() {
        cancelAnimationFrame(this.frameRequest);
        window.onbeforeunload = () => {};
    }

    gameTick() {
        // Acheivements
        Game.achievementCounter += TICK_TIME;
        if (Game.achievementCounter >= ACHIEVEMENT_TICK) {
            Game.achievementCounter = 0;
            AchievementHandler.checkAchievements();
            GameHelper.incrementObservable(App.game.statistics.secondsPlayed);
        }

        // Battles
        switch (this.gameState) {
            case GameState.fighting: {
                Battle.counter += TICK_TIME;
                if (Battle.counter >= BATTLE_TICK) {
                    Battle.tick();
                }
                break;
            }
            case GameState.gym: {
                GymBattle.counter += TICK_TIME;
                if (GymBattle.counter >= BATTLE_TICK) {
                    GymBattle.tick();
                }
                GymRunner.tick();
                break;
            }
            case GameState.dungeon: {
                DungeonBattle.counter += TICK_TIME;
                if (DungeonBattle.counter >= BATTLE_TICK) {
                    DungeonBattle.tick();
                }
                DungeonRunner.tick();
                break;
            }
            case GameState.battleFrontier: {
                BattleFrontierBattle.counter += TICK_TIME;
                if (BattleFrontierBattle.counter >= BATTLE_FRONTIER_TICK) {
                    BattleFrontierBattle.tick();
                }
                BattleFrontierRunner.tick();
                break;
            }
            case GameState.temporaryBattle: {
                TemporaryBattleBattle.counter += TICK_TIME;
                if (TemporaryBattleBattle.counter >= BATTLE_TICK) {
                    TemporaryBattleBattle.tick();
                }
                TemporaryBattleRunner.tick();
                break;
            }
        }

        // Auto Save
        Save.counter += TICK_TIME;
        if (Save.counter > SAVE_TICK) {
            const old = new Date(App.player._lastSeen);
            const now = new Date();


            // Check if it's a new day
            if (old.toLocaleDateString() !== now.toLocaleDateString()) {
                // Time traveller flag
                if (old > now) {
                    Notifier.notify({
                        title: 'Welcome Time Traveller!',
                        message: `Please ensure you keep a backup of your old save as travelling through time can cause some serious problems.

                        Any Pokémon you may have obtained in the future could cease to exist which could corrupt your save file!`,
                        type: NotificationConstants.NotificationOption.danger,
                        timeout: HOUR,
                    });
                    App.player.timeTraveller = true;
                }

                GameHelper.updateDay();
                (App.game.farming.mutations.find(m => m instanceof EnigmaMutation) as EnigmaMutation).resetIndex();

                SeededDateRand.seedWithDate(now);
                // Give the player a free quest refresh
                this.quests.freeRefresh(true);
                //Refresh the Underground deals
                BerryDeal.generateDeals(now);
                if (App.game.quests.isDailyQuestsUnlocked()) {
                    Notifier.notify({
                        title: 'It\'s a new day!',
                        message: `${App.game.quests.isDailyQuestsUnlocked() ? '<i>You have a free quest refresh.</i>' : ''}`,
                        type: NotificationConstants.NotificationOption.info,
                        timeout: 3e4,
                    });
                }
                // Give the players more Battle Cafe spins
                BattleCafeController.spinsLeft(BattleCafeController.spinsPerDay());
                // Generate the weather forecast
                WeatherApp.initialize();
                // Refresh Friend Safari Pokemon List
                SafariPokemonList.generateKalosSafariList();

                // Reset some temporary battles
                Object.values(TemporaryBattleList).forEach(t => {
                    if (t.optionalArgs?.resetDaily) {
                        this.statistics.temporaryBattleDefeated[getTemporaryBattlesIndex(t.name)](0);
                    }
                });
            }

            // Check if it's a new hour
            if (old.getHours() !== now.getHours()) {
                Weather.generateWeather(now);
                RoamingPokemonList.generateIncreasedChanceRoutes(now);
                // Check if it's weather change time
                if (now.getHours() % Weather.period === 0) {
                    WeatherApp.checkDateHasPassed();
                }
            }

            App.player._lastSeen = Date.now();
            this.save();
        }

        // Underground
        if (this.underground.canAccess()) {
            this.underground.update(TICK_TIME / SECOND);
        }

        // Farm
        this.farming.update(TICK_TIME / SECOND);

        // Effect Engine (battle items and flutes)
        EffectEngineRunner.counter += TICK_TIME;
        if (EffectEngineRunner.counter >= EFFECT_ENGINE_TICK) {
            EffectEngineRunner.tick();
        }
        FluteEffectRunner.counter += TICK_TIME;
        if (FluteEffectRunner.counter >= EFFECT_ENGINE_TICK) {
            FluteEffectRunner.tick();
        }

        this.zMoves.counter += TICK_TIME;
        if (this.zMoves.counter >= ZMOVE_TICK) {
            this.zMoves.tick();
        }

        // Game timers
        GameHelper.counter += TICK_TIME;
        if (GameHelper.counter >= MINUTE) {
            GameHelper.tick();
        }

        // Check our save reminder once every 5 minutes
        SaveReminder.counter += TICK_TIME;
        if (SaveReminder.counter >= 5 * MINUTE) {
            SaveReminder.tick();
        }

        // update event calendar
        this.specialEvents.counter += TICK_TIME;
        if (this.specialEvents.counter >= SPECIAL_EVENT_TICK) {
            this.specialEvents.tick();
        }
    }

    save() {
        if (Settings.getSetting('disableAutoSave').value === false) {
            Save.store(App.player);
        }
    }

    // Knockout getters/setters
    get gameState() {
        return this._gameState();
    }

    set gameState(value) {
        this._gameState(value);
    }
}

export default Game;
