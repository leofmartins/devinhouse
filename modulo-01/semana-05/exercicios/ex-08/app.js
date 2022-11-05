import Usuario from "./Usuario.js";

// Falta implementar CSS

const usuario1 = new Usuario('Leonardo', 'leonardo.martins@email.com', '123456');

const user = document.getElementById('user');
const password = document.getElementById('password');
const button = document.getElementById('button');
const div = document.getElementById('div');
const message = document.createElement('p');

function setStatusAuth() {
  const autenticado = usuario1.autenticar(user.value, password.value);
  console.log(user.value);
  console.log(password.value);
  console.log(autenticado);

  if (autenticado) {
    message.innerText = `Olá, ${usuario1.nome}! Você está autenticado.`;
    div.appendChild(message);
    document.getElementById('form').reset();
  } else {
    message.innerText = 'Usuário ou senha inválida.';
    div.appendChild(message);
  }
}

button.addEventListener('click', setStatusAuth);

console.log(user);
console.log(password);