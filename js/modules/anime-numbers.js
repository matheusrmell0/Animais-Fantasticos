// Animação da section numeros
export default class AnimeNumbers {
  constructor(dataset, observerTarget, observerClass) {
    this.numbersData = document.querySelectorAll(dataset);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM, com número em seu texto
  // Incrementa a partir de 0 até o número final
  static incrementarNumero(number) {
    const total = +number.innerText;
    let zero = 0;
    const increment = total / 100;
    const timer = setInterval(() => {
      zero += increment;
      number.innerText = zero.toFixed();
      if (zero > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 30 * Math.random());
  }

  // Ativa incrementar número para cada número selecionado do DOM
  numberAnimationON() {
    this.numbersData.forEach((number) =>
      this.constructor.incrementarNumero(number)
    );
  }

  // Adiciona o MutationObserver para verificar quando a classe é adicionada ao elemento Target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numberAnimationON();
    }
  }

  init() {
    if (this.numbersData.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
