import SmoothScroll from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
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

const accordionList = new Accordion('[data-anime="accordion"] dt', 'show')
accordionList.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section', 'ativo')
tabNav.init()

initScrollAnime();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFetchAnimais();
initOpenOng();
initFetchBitcoins();
