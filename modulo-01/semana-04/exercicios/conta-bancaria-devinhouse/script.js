const contas = [];

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const formulario = document.getElementById("form");

function salvarConta(event) {
  event.preventDefault();

  let lenghtConta = contas.length;

  contas.push({
    nome: nome.value,
    cpf: cpf.value,
    celular: celular.value,
    senha: senha.value,
    conta: Math.floor(1000 + Math.random() * 90000),
    saldo: 0
  });
 
  if(contas.length > lenghtConta) {
    alert(`Conta ${contas[contas.length - 1].conta} criada com sucesso!`);
  }
}

formulario.addEventListener("submit", salvarConta);