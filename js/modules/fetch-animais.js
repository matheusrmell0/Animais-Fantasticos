// FETCH ANIMALS API
import AnimeNumbers from "./helper/anime-numbers.js";

export default function fetchAnimals(target, url) {
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    document.querySelector(target).appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animeNumbers() {
    const animarNumeros = new AnimeNumbers(
      "[data-numero]",
      ".numeros",
      "anime"
    );
    animarNumeros.init();
  }

  // Puxa os aniamis através de um arquivo JSON
  // E cria cada animal na função createAnimal
  async function createAnimals() {
    try {
      // Fetch e aguarda a resposta e transforma a resposta em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      console.log(animaisJSON)

      // Após a transformação de JSON, ativa as funções de preencher e animar os números
      animaisJSON.forEach((animal) => fillAnimals(animal));
      animeNumbers();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return createAnimals();
}

// FETCH ANIMALS API Opcao2
// export default function initFetchAnimais() {
//   function listAnimals(animalAttributes){
//     const div = document.createElement("div");
//     div.classList.add("numero-animal");
//     div.innerHTML = `<h3>${animalAttributes.specie}</h3><span data-numero>${0}</span>`;
//     return div;
//   }
//   async function fetchAnimals(url, selector) {
//     const numerosGrid = document.querySelector(".numeros-grid")
//     const arrayAnimals = await (await fetch(url)).json();
//     arrayAnimals.forEach((animalObj) => {
//       const divAnimal = listAnimals(animalObj)
//       numerosGrid.appendChild(divAnimal)
//       createAnimal(animalObj, selector);
//     });
//   }
//   function createAnimal(animal) {
//     const div = document.createElement("div");
//     div.classList.add("numero-animal");
//     div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
//     numerosGrid.appendChild(div);
//     return div;
//   }
//   function createAnimal(species, selector) {
//     animalNumbers(species.specie, species.total, selector);
//   }
//   function animalNumbers(specie, total, selector) {
//     let zero = 0;
//     const increment = total / 100;
//     document.querySelectorAll(selector).forEach((animaisList) => {
//       if (animaisList.innerText === specie) {
//         const timer = setInterval(() => {
//           zero = zero + increment;
//           animaisList.nextElementSibling.innerText = zero.toFixed();
//           if (zero > total) {
//             animaisList.nextElementSibling.innerText = total;
//             clearInterval(timer);
//           }
//         }, 30 * Math.random());
//       }
//     });
//   }
//   function handleMutation(mutation) {
//     if (mutation[0].target.classList.contains("anime")) {
//       observer.disconnect();
//       fetchAnimals("./animaisapi.json", ".numero-animal h3");
//     }
//   }
//   const observerTarget = document.querySelector(".numeros");
//   const observer = new MutationObserver(handleMutation);
//   observer.observe(observerTarget, { attributes: true });
// }
