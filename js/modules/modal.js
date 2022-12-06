// Modal script
export default class Modal {
  constructor(BtnOpen, containerModal, BtnClosed, classeName) {
    this.modalBtnOpen = document.querySelector(BtnOpen);
    this.modalContainer = document.querySelector(containerModal);
    this.modalBtnClosed = document.querySelector(BtnClosed);
    this.class = classeName;

    // Bind this ao callback para referenciar o objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outModal = this.outModal.bind(this);
  }

  // Abre ou fecha o modal adicionando/removendo a classe CSS (Default: ativo)
  toggleModal() {
    this.modalContainer.classList.toggle(this.class || "ativo");
  }

  // Adiciona o evento de toogle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.modalContainer.addEventListener("click", this.outModal);
    this.modalBtnClosed.addEventListener("click", this.eventToggleModal);
    this.modalBtnOpen.addEventListener("click", this.eventToggleModal);
  }

  // Fecha o modal no click fora do mesmo
  outModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.modalBtnOpen && this.modalContainer && this.modalBtnClosed) {
      this.addModalEvent();
    }
    return this;
  }
}
