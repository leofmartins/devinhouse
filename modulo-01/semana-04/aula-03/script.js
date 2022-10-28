// const titulo = document.getElementById("titulo");
//
// titulo.innerText = "Hello, World";
//
// const paragrafo = document.createElement('p');
//
// paragrafo.innerText = "Lorem ipsum";
//
// document.body.appendChild(paragrafo);
//
// const button = document.createElement('button');
//
// button.innerText = 'Enviar';
//
// paragrafo.parentNode.insertBefore(button, paragrafo);
//
// document.body.removeChild(paragrafo);

// Exercídio lista de pessoas e frases

// const lista = document.getElementById('lista');
//
// function preencheLista(nome, texto, lista) {
//     const elemento = document.createElement('li');
//     // elemento.innerText = `${nome}\n${texto}`;
//     elemento.innerHTML = `<h2>${nome}</h2><p>${texto}</p>`
//     lista.appendChild(elemento);
// }
//
// // preencheLista('Leonardo', 'Deus é bom', lista);
//
// const listaNomesETextos = [{nome: 'Leonardo', texto: 'Deus é bom'}, {nome: 'Sandra', texto: 'Só o Senhor é Deus'}];
//
// listaNomesETextos.forEach(item => preencheLista(item.nome, item.texto, lista));
// function testfn() {
//     alert('hello');
// };
//
// const button = document.getElementById('button');
// const input = document.getElementById('input');
//
// input.onblur = () => console.log('teste');
//
// button.onclick(testfn);

// const form = document.getElementById('form');

// form.onsubmit = (event) => {
//     event.preventDefault();
//     console.log('teste');
// }

// localStorage.setItem('nome', 'leonardo');
// console.log(JSON.parse(localStorage.getItem('nome')));

const firstName = 'Leonardo';
console.log(typeof firstName);