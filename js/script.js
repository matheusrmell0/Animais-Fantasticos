import SmoothScroll from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initScrollAnime from './modules/scroll-anime.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import fetchAnimals from './modules/fetch-animais.js';
import fetchBitcoins from './modules/fetch-bitcoins.js';
import initOpenOng from './modules/open-store.js';

const scrollSuave = new SmoothScroll('[data-menu="smooth"] a[href^="#"]', { behavior: "smooth", block: "start", })
scrollSuave.init()

const accordionList = new Accordion('[data-anime="accordion"] dt', 'show')
accordionList.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section', 'ativo')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="container"]', '[data-modal="fechar"]', 'ativo')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

initScrollAnime();
initDropDownMenu();
initMenuMobile();
initOpenOng();
fetchBitcoins('https://blockchain.info/ticker','.btc-preco');
fetchAnimals('../../animaisapi.json','.numeros-grid');
