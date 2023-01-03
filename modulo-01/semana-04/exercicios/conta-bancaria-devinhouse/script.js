const contas = [];

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const formAbrirConta = document.getElementById("form-abrir-conta");

const tipo = document.querySelectorAll("input[type='radio']");
const conta = document.getElementById("conta");
const valor = document.getElementById("valor");
const formMovimentarConta = document.getElementById("form-movimentar-conta");
const opcaoConsultaSaldo = document.getElementById("consulta-saldo");

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

function movimentarConta(event) {
  event.preventDefault();

  // implementar movimentação de conta
}

formAbrirConta.addEventListener("submit", salvarConta);
formMovimentarConta.addEventListener("submit", movimentarConta);

tipo.forEach(element => {
  element.onclick = () => {
    valor.disabled = opcaoConsultaSaldo.checked;
  }
})