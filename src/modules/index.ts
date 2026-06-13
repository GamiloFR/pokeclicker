// Get our polyfills loaded first
import './polyfill';

// Ensure that the Knockout Extenders are injected
import './koExtenders';

// Inject the Knockout bindingHandlers (may load other local modules due to imports)
import './koBindingHandlers';

import App from './App';
import initBattleFrontier from './battleFrontier';
import initGems from './gems';
import initGyms from './gym/index';
import initItems from './items/index';
import initPokemons from './pokemons';
import initRoutes from './routes/index';
import initSafari from './safari';
import SaveSelector from './SaveSelector';
import initSettings from './settings/index';
import Settings from './settings/Settings';
import initShop from './shop/index';
import initTemporaryBattle from './temporaryBattle';
import initTowns from './towns';

// Load everything else
import initDungeons from './dungeons';
import GameController from './GameController';
import './temporaryWindowInjection';

initPokemons();
initGyms();
initItems();
initRoutes();
initSettings();
initShop();
initDungeons();

initGems(); // After initItems
initBattleFrontier(); // After initItems

initSafari();

initTemporaryBattle();
initTowns(); // After initTemporaryBattle

GameController.init();

/**
 * Start the application when all html elements are loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        Settings.loadDefault();
        document.body.className = `no-select ${Settings.getSetting('theme').observableValue()} ${Settings.getSetting('backgroundImage').observableValue()}`;
        (document.getElementById('theme-link') as HTMLLinkElement).href = `https://bootswatch.com/4/${Settings.getSetting('theme').observableValue()}/bootstrap.min.css`;

    } catch (e) {}
    if (!App.isUsingClient) {
        document.getElementById('use-our-client-message').style.display = 'block';
    }
    // Load list of saves
    SaveSelector.loadSaves();
});

// Nested modals can be opened while they are in the middle of hiding.
// This should raise their backdrop on top of any existing modals,
// preventing us from getting into that messy situation.
// Copied from https://stackoverflow.com/questions/19305821/multiple-modals-overlay#answer-24914782
$(document).on('show.bs.modal', '.modal', function () {
    const zIndex = Math.max(1040, Math.max(...$('.modal:visible').get().map(e => +e.style.zIndex)) + 10);
    $(this).css('z-index', zIndex);
    // setTimeout with 0 delay because the backdrop doesn't exist yet
    setTimeout(() => {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});
