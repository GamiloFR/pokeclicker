import { initGemDealList } from './GemDealList';
import GemDeals from './GemDeals';

function initGems() {
    initGemDealList();

    GemDeals.init();
}

export default initGems;
