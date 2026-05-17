import { initBaitList } from './BaitList';
import SafariBattle from './SafariBattle';
import SafariItemController from './SafariItemController';

function initSafari() {
    initBaitList();

    SafariItemController.init();
    SafariBattle.init();
}

export default initSafari;
