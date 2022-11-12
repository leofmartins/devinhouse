const lista = document.getElementById('lista');
const BASE_URL = 'http://localhost:3000/';

async function buscaPosts() {
  const resultado = await fetch(`${BASE_URL}posts`);
  const posts = await resultado.json();
  console.log(posts);
}

window.addEventListener('load', buscaPosts);

