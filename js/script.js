import SmoothScroll from './modules/scroll-suave.js';
import initTabNav from './modules/tab-nav.js';
import initaccordion from './modules/accordion-list.js';
import initScrollAnime from './modules/scroll-anime.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoins from './modules/fetch-bitcoins.js';
import initOpenOng from './modules/open-store.js';


const scrollSuave = new SmoothScroll('[data-menu="smooth"] a[href^="#"]', { behavior: "smooth", block: "start", })
scrollSuave.init()


initTabNav();
initaccordion();
initScrollAnime();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFetchAnimais();
initOpenOng();
initFetchBitcoins();
