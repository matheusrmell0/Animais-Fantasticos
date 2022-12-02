// Animação da section numeros
export default function initAnimeNumbers() {
  function numberAnimationON() {
    const numbersData = document.querySelectorAll('[data-numero]');

    numbersData.forEach((number) => {
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
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('anime')) {
      observer.disconnect();
      numberAnimationON();
    }
  }
  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
