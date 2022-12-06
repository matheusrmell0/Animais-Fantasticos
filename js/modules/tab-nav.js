// Navegação por Tabs
export default class TabNav {
  constructor(menu, content, ativo) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = ativo;
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const dataAnime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, dataAnime);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativa o evento no primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this
  }
}
