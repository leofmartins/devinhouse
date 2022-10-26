// Código não está funcionando como o esperado. Corrigir

const mensagemOla = () => {
    message.innerHTML = `Olá, ${nome}!`;
}

const field = document.getElementById('field');
const button = document.getElementById('button');
const message = document.getElementById('message');

const name = field.value;

button.addEventListener('click', mensagemOla);