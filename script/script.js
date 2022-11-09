"use strict";
// var string = 'String';
// var idadeString = '24';
// var idade = 24;
// var nome = 'Matheus';
// var sobreNome = 'Mello';
// var time = "It's time"

// const nomeCompleto = `${nome} ${sobreNome}`;
// console.log(typeof nome);
//

// var total = 10 + 5 * 2 / 2 + 20;
// console.log(Boolean(35 === total))
//

// var nan = +'12 Ovos ' + 5;
// console.log(nan)
//

// var nan2 = '16 patos' - 15;
// console.log(nan2)
//

// var somar = +'200' + 50;
// console.log(somar)
//

// var incremento = 5;
// console.log(++incremento)
//

// var incremento2 = 5;
// var incrementoplus = ++incremento2;
// console.log(incrementoplus)
//

// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade;
// var pesoPorDois = peso / 2;
// var pesoPorDoisCerto = `${+numero / 2} ${unidade}`;
// console.log(pesoPorDoisCerto);
//

// var initial = 0;
// let num = document.querySelector(".num");
// const button = document.getElementById("btn");

// function acress() {
//   initial++;
//   initial = initial++;
//   num.innerHTML = initial;
// }
// btn.addEventListener("click", acress);
//

// var minhaIdade = 24;
// var idadeIrmao = 29;
// if (minhaIdade > idadeIrmao) {
//   console.log("É maior");
// } else if (minhaIdade === idadeIrmao) {
//   console.log("É igual");
// } else {
//   console.log("É menor");
// }
//

// var idade = 24;
// switch (idade) {
//   case 24:
//     console.log("Eu");
//     break;
//   case 29:
//     console.log("Irmao");
//     break;
//   case 22:
//     console.log("Primo");
//     break;
//   default:
//     console.log("Pessoa desconhecida");
// }
//

// var expressao = 5 - 2 && 5 - " " && 5 - 2;
// console.log(expressao);
//

// var nome = "Andre";
// var Idade = 28;
// var possuiDoutorado = false;
// var empregoFuturo;
// var dinheiroNaConta = 0;
// console.log(!!nome, !!Idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
//

// var brasil = 207;
// var china = 1340;
// var pais = 207;
// switch (pais) {
//   case 1340:
//     console.log("China");
//     break;
//   case 207:
//     console.log("Brasil");
//     break;
//   default:
//     console.log("Not found");
// }
//

// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }
// Falso
//

// if ("Gato" === "gato" || 5 > 2) {
//   console.log("Gato" && "Cão");
// } else {
//   console.log("Falso");
// }
// "Cão"
//

//

// function imc(peso, altura) {
//   var imc = peso / altura ** 2;
//   return imc;
// }
// console.log(imc(80, 1.8));
// //

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Eu  gosto do céu";
//   } else if (cor === "verde") {
//     return "Eu gosto de mato";
//   } else {
//     return "Cor não registrada";
//   }
// }
// console.log(corFavorita("verde"));
//

// addEventListener('click', function(){
// console.log('Clicou')
// });

// function clicou(){
//   console.log('Clicou especial')
// }
// addEventListener('click', clicou);

// addEventListener('click', () => {
//   console.log('Clicou super especial')
//   });
//

// function imc2(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(+imc.toFixed());
// }
// imc2(84, 1.74)
//

// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "Preencha um número";
//   } else if (idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(terceiraIdade(60));
//

// function faltarVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} países`;
// }
// console.log(faltarVisitar(50));
//

// var profissao = "Desingner";
// function dados() {
//   var nome = "André";
//   var idade = 28;
//   function outrosDados(){
//     var endereco = 'Rio de Janeiro';
//     var idade = 29;
//     return `${nome} ${idade} ${endereco} ${profissao}`;
//   }
//   return outrosDados();
// }
// console.log(dados());
//

// function verificarTruthy(valor) {
//   console.log(`${!!+valor}`);
//   // console.log(!!+valor);
// }
// verificarTruthy(1);

// function isTruthy(dado){
//   return !!dado;
// }
// console.log(isTruthy(0))
// //

// function perimetroQuadrado(perimetro) {
//   const perimetro4 = perimetro * 4;
//   return `${perimetro4} ${"cm"}`;
// }
// console.log(perimetroQuadrado(8));

// function perimetroQuadradoR(lado) {
//   return `${lado * 4} ${"cm"}`;
// }
// console.log(perimetroQuadradoR(3));

// //

// function nomeCompleto(nome, sobrenome) {
//   var nome = "Matheus";
//   var sobrenome = "Mello";
//   return `${nome} ${sobrenome}`;
// }
// console.log(nomeCompleto());

// function nomeCompletoR(nome, midname, sobrenome) {
//   return `${nome} ${midname} de ${sobrenome}`;
// }
// console.log(nomeCompletoR("Matheus", "Rodrigues", "Mello"));
// //

// function parNumber(number) {
//   var verificacao = (number / 2) % 1;
//   if (verificacao > 0) {
//     console.log("Impar");
//   } else {
//     console.log("Par");
//   }
// }
// parNumber(7);

// function isEven(numero) {
//   var modulo = numero % 2;
//   if (modulo !== 0) {
//     return console.log(false, numero, 'Não é par');
//   } else {
//     return console.log(true, numero, 'É par');
//   }
// }
// isEven(3928318);
// //

// function tipoArgumento(tipo) {
//   console.log(typeof tipo);
// }
// tipoArgumento("2");

// function tipoDeDado(dado){
//   return console.log(typeof dado);
// }
// tipoDeDado(+'99')
// //

// function nomeCompleto2() {
//   var nome = "Matheus";
//   var sobrenome = "Mello";
//   console.log(nome + " " + sobrenome);
// }
// window.addEventListener("scroll", nomeCompleto2);
// window.addEventListener("click", ()=>{console.log('Mello Matheus')});
// //

// function precisoVisitar(paiseisVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paiseisVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados, totalPaises) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }

// console.log(precisoVisitar(1));
// console.log(jaVisitei(20, 193));

// //
// var totalPaises2 = 193;
// function precisoVisitar2(paiseisVisitados2) {
//   return `Ainda faltam ${totalPaises2 - paiseisVisitados2} países para visitar`;
// }
// function jaVisitei2(paisesVisitados2) {
//   return `Já visitei ${paisesVisitados2} do total de ${totalPaises2} países`;
// }

// console.log(precisoVisitar2(10));
// console.log(jaVisitei2(203));
// //

// OBJETOOOOOOOOOOOOOOOOOO

// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function(lado){
//     return this.lados * lado;
//   }
// };
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));
//

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado){
//     return this.lados * lado;
//   }
// };
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));
// //

// var tabela = {
//   nome: "Mello",
//   idade: 23,
//   cor: "Branco",
//   dotagem: `${20} cm`,
//   circunferencia(){
//     return this.dotagem * Math.PI;
//   },
// };
// console.table(tabela);
// //

// var pessoal = {
//   idade: 24,
//   nome: "Matheus",
//   sobrenome: "Mello",
//   cor: "Branco",
//   formacao: "Engineer",
// };

// pessoal.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`;
// };
// console.log(pessoal.nomeCompleto());
// //

// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };
// carro.preco = 3000;
// console.log(carro.preco);
// //

// var labrador = {
//   raca: "Labrador",
//   cor: "Preto",
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa === "homem") {
//       return "Latir";
//     } else {
//       return "Nada";
//     }
//   },
// };
// console.log(labrador);
// //

// var string = 'String'
// console.log(string.length);
// console.log(string.repeat(2));
// console.log(string.search());
//

// LOOP
// var videoGames = ['Switch', 'PS5', 'XBOX'];
// var ultimoItem = videoGames.pop();
// console.log(ultimoItem);
// //

// for (let numero = 1; numero <= 10; numero++){
//   console.log(numero);
// }

// var i = 0;
// while(i < 100){
//   console.log(i);
//   i = i + 5;
// }

// var videoGames = ['Switch', 'PS5', 'XBOX', '3DS'];
// for(var i = 0; i < videoGames.length; i++){
//   console.log(videoGames[i]);
//   if(videoGames[i] === 'PS5'){
//     break;
//   }
// }
//

// let numero = 0;
// let maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }
//

// var brasilCopa = [1959, 1962, 1970, 1994, 2002];
// for (var i = 0; i < brasilCopa.length; i++) {
//   console.log(`O Brasil ganhou a copa de ${brasilCopa[i]}`);
// }

// var frutas = ["Banana", "Maçã", "Pera", "Uva", 'Melancia'];
// for (var i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
//   if (frutas[i] === "Pera") {
//     break;
//   }
// }
// console.log(frutas[frutas.length - 1]);
//

// var numero = 20;
// numero += 5;
// console.log(numero);
// //

// var idade = 20;
// var naoPossuiDiabetes = true;

// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'sim' : 'nao';
// console.log(podeBeber);

// if (podeBeber === 'sim') {
//   console.log("Pode beber sim!");
// } else {
//   console.log("Não pode beber!");
// }
// //

// var idade = 15;
// var naoPossuiDiabetes = true;
// var podeBeber;
// podeBeber = (idade >= 18 && naoPossuiDiabetes) ? console.log('Pode beber sim') : console.log('Não pode beber!');
//

// var possuiFaculdade = true;
// if (possuiFaculdade) console.log("Possui faculdade");
// else console.log("Não possui faculdade");
//

// var scroll = 1000;
// scroll += 500;
// console.log(scroll);
// //

// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito = (possuiCarro && possuiCasa);
// console.log(darCredito);
//

// // DOM
// const href = location.href;
// console.log(href);

// const url = document.baseURI;
// console.log(url);

// const ativo = document.querySelector(".ativo");
// console.log(ativo);

// const linguagem = navigator.language;
// console.log(linguagem);

// const altura = innerHeight;
// console.log(altura);

// const largura = innerWidth;
// console.log(largura);

// const allImgs = document.querySelectorAll('img');
// console.log(allImgs);

// const allImgsPalavra = document.querySelectorAll('img[src^="./img/imagem"]');
// console.log(allImgsPalavra);

// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// const primeiroh2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroh2);

// // const ultimoP = document.querySelector('.copy p:last-child');
// // console.log(ultimoP);

// const ultimoParagrafo = document.querySelectorAll('p');
// console.log(ultimoParagrafo[--ultimoParagrafo.length])
//

// const imgs = document.querySelectorAll("img");
// let i = 0;
// imgs.forEach(function () {
//   console.log(i++);
// });
// //
// imgs.forEach(() => console.log(i++));
// //
// imgs.forEach((item) => console.log(item));
// //

// const paragrafos = document.querySelectorAll("p");
// paragrafos.forEach((item) => console.log(item.innerText));
// //

// const imgs = document.querySelectorAll("img");
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });
// //

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// })
// //

// imgs.forEach(() => i++);
// console.log(i);
// //
//

// const addAtivo = document.querySelectorAll(".menu a");
// addAtivo.forEach((item) => {
//   item.classList.add("ativo");
// });

// addAtivo.forEach((item) => {
//   item.classList.remove("ativo");
// });

// addAtivo[0].classList.add('ativo');

// const addRemove = document.querySelectorAll(".menu li:first-child a");
// addRemove.forEach((item) => {
//   item.classList.remove("ativo");
//   item.removeAttribute('class');
// });

// const verificarAlt = document.querySelectorAll('img');
// verificarAlt.forEach((item) => {
//   if(item.hasAttribute('alt')){
//     console.log('Possuem alt', item, item.alt)
//   } else{
//     console.log('Não possuem alt', item, item.alt)
//   }
// });

// const linkExterno = document.querySelector('a[href^="https"]');
// console.log(linkExterno);
// linkExterno.setAttribute('href', 'https://github.com');
// //

// const firstImg = document.querySelector('img').offsetTop;
// console.log(firstImg)

//
// function somaImagens() {
//   const allImgs = document.querySelectorAll("img");
//   let soma = 0;
//   allImgs.forEach((item) => {
//     soma += item.offsetWidth;
//   });
//   console.log(soma);
// }
// window.onload = function () {
//   somaImagens();
// };

// const linksPag = document.querySelectorAll("a");
// linksPag.forEach((item) => {
//   const verWidth = item.offsetWidth;
//   const verHeight = item.offsetHeight;
//   if (verWidth >= 48 && verHeight >= 48) {
//     console.log(item, "Links com o minimo recomendado para telas mobile");
//   } else {
//     console.log(item, "Links sem o minimo recomendado para telas mobile");
//   }
// });

// if (matchMedia("(max-width: 720px)").matches) {
//   document.querySelector(".menu").classList.add("menu-mobile");
// }

// EVENTSSS

// //
// const linksInternos = document.querySelectorAll('a[href^="#"]');
// linksInternos.forEach((link) => {
//   link.addEventListener("click", toogleAtivo);
// });

// function toogleAtivo(event) {
//   event.preventDefault();
//   linksInternos.forEach((classe) => {
//     classe.classList.remove("ativo");
//   });
//   this.classList.add("ativo");
// }
// //

// // 
// const allElements = document.querySelectorAll("*");

// function mostrar(event){
//   console.log(this);
//   event.target.remove();
// }

// function zoom(event){
// if(event.key === 't'){
//   document.documentElement.classList.toggle('font-plus');
// }
// }

// allElements.forEach((event) => {
//   event.addEventListener('click', mostrar);
//   this.addEventListener('keydown', zoom);
// });
// // 

// TRANSVERSINGGG

// const lista = document.querySelector('.animais-lista');
// Array.from(lista.children).forEach((item)=>{console.log(item)})

// 
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');
// const menuCopy = menu.cloneNode(true);
// copy.appendChild(menuCopy);
// // 

// // 
// const primeiroDt = document.querySelector('dt:first-child');
// console.log("primeiroDt", primeiroDt)
// console.log("primeiraDd", document.querySelector('dt').nextElementSibling);
// // 
// const dds = document.querySelectorAll('dt');
// dds.forEach((item)=>{console.log(item.nextElementSibling)});
// // 

// const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');
// faq.innerHTML = animais.innerHTML;


