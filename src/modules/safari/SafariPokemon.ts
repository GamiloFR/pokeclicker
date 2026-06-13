import { Computed } from 'knockout';
import App from '../App';
import OakItemType from '../enums/OakItemType';
import PokemonType from '../enums/PokemonType';
import SafariEnvironments from '../enums/SafariEnvironments';
import { BattlePokemonGender, PokemonStatisticsType, ShadowStatus, SHINY_CHANCE_SAFARI } from '../GameConstants';
import PokemonInterface from '../interfaces/Pokemon';
import NotificationConstants from '../notifications/NotificationConstants';
import Notifier from '../notifications/Notifier';
import PokemonFactory from '../pokemons/PokemonFactory';
import * as PokemonHelper from '../pokemons/PokemonHelper';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import Rand from '../utilities/Rand';
import { BaitType } from './Bait';
import Safari from './Safari';
import SafariEncounter from './SafariEncounter';
import SafariPokemonList, { OverworldSpriteType } from './SafariPokemonList';

class SafariPokemon implements PokemonInterface {
    name: PokemonNameType;
    id: number;
    type1: PokemonType;
    type2: PokemonType;
    shiny: boolean;
    baseCatchFactor: number;
    baseEscapeFactor: number;
    gender: BattlePokemonGender;
    shadow = ShadowStatus.None;

    // Used for overworld sprites
    x = 0;
    y = 0;
    steps = 0;

    // Affects catch/flee chance
    private _angry = ko.observable(0);
    private _eating = ko.observable(0);
    private _eatingBait = ko.observable(BaitType.Bait);
    private _displayName: Computed<string>;
    levelModifier: number;
    spriteID: number;

    constructor(name: PokemonNameType, sprite: OverworldSpriteType) {
        const data = PokemonHelper.getPokemonByName(name);

        this.name = data.name;
        this.id = data.id;
        this.type1 = data.type1;
        this.type2 = data.type2;
        this.shiny = PokemonFactory.generateShiny(SHINY_CHANCE_SAFARI);
        this._displayName = PokemonHelper.displayName(name);
        this.gender = PokemonFactory.generateGender(data.gender.femaleRatio, data.gender.type);
        PokemonHelper.incrementPokemonStatistics(this.id, PokemonStatisticsType.Encountered, this.shiny, this.gender, ShadowStatus.None);
        // Shiny
        if (this.shiny) {
            Notifier.notify({
                message: `✨ You encountered a shiny ${this.displayName}! ✨`,
                pokemonImage: PokemonHelper.getImage(this.id, this.shiny, this.gender, ShadowStatus.None),
                type: NotificationConstants.NotificationOption.warning,
                sound: NotificationConstants.NotificationSound.General.shiny_long,
                setting: NotificationConstants.NotificationSetting.General.encountered_shiny,
            });
        }
        this.baseCatchFactor = data.catchRate * 1 / 6;
        this.baseEscapeFactor = 30;
        this.levelModifier = (Safari.safariLevel() - 1) / 50;

        switch (sprite) {
            case 'base' : this.spriteID = Math.floor(this.id);
                break;
            case 'self' : this.spriteID = this.id;
                break;
            default : this.spriteID = PokemonHelper.getPokemonByName(sprite).id;
        }
    }

    public static calcPokemonWeight(pokemon: SafariEncounter): number {
        return pokemon.weight * (App.game.party.alreadyCaughtPokemonByName(pokemon.name) ? 1 : 2);
    }

    public get catchFactor(): number {
        const oakBonus = App.game.oakItems.calculateBonus(OakItemType.Magic_Ball);
        let catchF = this.baseCatchFactor + oakBonus + (this.levelModifier * 10);
        if (this.eating > 0) {
            catchF /= 2 - this.levelModifier;
        }
        if (this.angry > 0) {
            catchF *= 2 + this.levelModifier;
        }
        if (this.eatingBait === BaitType.Nanab) {
            catchF *= 1.5 + this.levelModifier;
        }

        return Math.min(100, catchF);
    }

    public get escapeFactor(): number {
        let escapeF = this.baseEscapeFactor;
        if (this.eating > 0) {
            escapeF /= 4 + this.levelModifier;
        }
        if (this.angry > 0) {
            escapeF *= 2 - this.levelModifier;
        }
        if (this.eatingBait === BaitType.Razz) {
            escapeF /= 1.5 + this.levelModifier;
        }

        return escapeF;
    }

    public get angry(): number {
        return this._angry();
    }

    public set angry(value: number) {
        this._angry(value);
    }

    public get eating(): number {
        return this._eating();
    }

    public set eating(value: number) {
        this._eating(value);
    }

    public get eatingBait(): BaitType {
        return this._eatingBait();
    }

    public set eatingBait(value: BaitType) {
        this._eatingBait(value);
    }

    public static random(environment = SafariEnvironments.Grass) {
        // Get a random pokemon from current region and zone for Safari Zone
        const safariPokemon = (<SafariEncounter[]>SafariPokemonList.list[Safari.activeRegion()]()).filter(
            (p) => p.isAvailable() && p.environments.includes(environment),
        );
        const pokemon = Rand.fromWeightedArray(safariPokemon, safariPokemon.map(p => p.weight));
        return new SafariPokemon(pokemon.name, pokemon.sprite);
    }

    public get displayName() {
        return this._displayName();
    }
}

export default SafariPokemon;
