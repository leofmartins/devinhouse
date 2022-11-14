const clientes = [];

const name = document.getElementById('name');
const cpf = document.getElementById('cpf');
const cellphone = document.getElementById('cellphone');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-button');
const newClientForm = document.getElementById('new-client');

function setNewClient() {

  let countNumber = Math.floor(1000 + Math.random() * 90000);

  clientes.push(
    {
      nome: name.value,
      cpf: Number(cpf.value),
      celular: Number(cellphone.value),
      senha: password.value,
      conta: countNumber,
      saldo: 0
    }
  );

  newClientForm.reset();
}

submitButton.addEventListener('click', setNewClient);