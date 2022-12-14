import SmoothScroll from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnime from './modules/scroll-anime.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import fetchAnimals from './modules/fetch-animais.js';
import fetchBitcoins from './modules/fetch-bitcoins.js';
import openOng from './modules/open-store.js';
import SlideNav from "./modules/slide.js";

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

const scrollAnime = new ScrollAnime('[data-anime="scroll"]', 'anime')
scrollAnime.init()

const dropDownMenu = new DropDownMenu("[data-dropdown]", "ativo");
dropDownMenu.init()

const menuMobile = new MenuMobile("[data-menu='button']", '[data-menu="list"]', "ativo");
menuMobile.init()

openOng('[data-semana]', 'open');
fetchBitcoins('https://blockchain.info/ticker','.btc-preco');
fetchAnimals('.numeros-grid');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init()
slide.addControl('.custom-controls')
