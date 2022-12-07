import outsideClick from "./helper/outside-click.js";
// DropDown
export default class DropDownMenu {
  constructor(target, classe, events) {
    this.dropdownMenus = document.querySelectorAll(target);
    this.activeClass = classe;

// Define argumentos (["touchstart", "click"]) se o parâmetro events não for definido
    if (events === undefined) this.eventsList = ["touchstart", "click"];
    else this.eventsList = events;

    this.showMenu = this.showMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a função que observa o click fora 
  showMenu(event) {
event.preventDefault();
const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.eventsList, () => {
      element.classList.remove(this.activeClass);
    });
  }

// Adiciona os eventos ao dropdown menu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventsList.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.showMenu);
      });
    });
}

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}