// Modal script
export default function initModal() {
  const loginHeader = document.querySelector('[data-modal="abrir"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  const modalClosed = document.querySelector('[data-modal="fechar"]');

  if (loginHeader && modalContainer && modalClosed) {
    function toggleModal(event){
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }
    function outModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    
    modalContainer.addEventListener("click", outModal);
    modalClosed.addEventListener("click", toggleModal);
    loginHeader.addEventListener("click", toggleModal);
  }
}
