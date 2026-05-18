// Get our polyfills loaded first
import './polyfill';

// Ensure that the Knockout Extenders are injected
import './koExtenders';

// Inject the Knockout bindingHandlers (may load other local modules due to imports)
import './koBindingHandlers';

// Load everything else
import './temporaryWindowInjection';

import initBattleFrontier from './battleFrontier';
import initGems from './gems';
import initGyms from './gym/index';
import initItems from './items/index';
import initPokemons from './pokemons';
import initRoutes from './routes/index';
import initSafari from './safari';
import initSettings from './settings/index';
import initShop from './shop/index';

initPokemons();
initGyms();
initItems();
initRoutes();
initSettings();
initShop();

initGems(); // After initItems
initBattleFrontier(); // After initItems

initSafari();
