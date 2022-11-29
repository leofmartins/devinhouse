const campo = document.getElementById('campo');
const botao = document.getElementById('botao');
const paragrafo = document.getElementById('paragrafo');

botao.innerText = 'Diga olá';

// function insereParagrafo() {
//   paragrafo.innerHTML = campo.value;
// }
//
//
// botao.addEventListener('click', insereParagrafo);

function sayHello() {
  const nome = campo.value;
  paragrafo.innerHTML = `Olá, ${nome}!`
}

botao.addEventListener('click', sayHello);