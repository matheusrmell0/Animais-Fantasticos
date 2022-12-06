// Accordion List
export default class Accordion {
  constructor(list, className) {
    this.questList = document.querySelectorAll(list);
    this.showContent = className;

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(item) {
    item.classList.toggle(this.showContent);
    item.nextElementSibling.classList.toggle(this.showContent);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.questList.forEach((item) => {
      item.addEventListener("click", () => this.toggleContent(item));
    });
  }

  // Iniciar a função
  init() {
    if (this.questList.length) {
      // Ativar a classe no primeiro item
      this.toggleContent(this.questList[0]);
      this.addAccordionEvent();
    }
  }
}
