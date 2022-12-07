import outsideClick from "./helper/outside-click.js";

// Menu-Mobile
export default class MenuMobile {
  constructor(menu, listmenu, classe, events) {
    this.menuButton = document.querySelector(menu);
    this.menuList = document.querySelector(listmenu);
    this.class = classe;

    if (events === undefined) this.eventos = ["click", "touchstart"];
    else this.eventos = events;

    // Método para referenciar o this do callback da função ao objeto da classe
    this.openMenu = this.openMenu.bind(this);
  }

  // Adiciona a classe definida para ativação do menu via CSS
  openMenu() {
    this.menuList.classList.add(this.class);
    this.menuButton.classList.add(this.class);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.class);
      this.menuButton.classList.remove(this.class);
    });
  }

  // Adiciona o evento(s) ao botão de menu
  addEventMenuMobile() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenuMobile();
    }
    return this;
  }
}
