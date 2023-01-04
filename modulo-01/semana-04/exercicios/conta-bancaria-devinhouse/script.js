const contas = [];

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const formAbrirConta = document.getElementById("form-abrir-conta");

const tipo = document.querySelectorAll("input[type='radio']");
const conta = document.getElementById("conta");
const valor = document.getElementById("valor");
const senhaMovimentar = document.getElementById("senha-movimentar");
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

  formAbrirConta.reset();
}

function encontraConta(numeroConta) {
  return contas.find(element => element.conta === numeroConta)
}

function verificaSeContaExiste(numeroConta) {
  return !!encontraConta(numeroConta);
}

function verificaSenha(numeroConta, senha) {
  if (verificaSeContaExiste(numeroConta)) {
    return encontraConta(numeroConta).senha === senha;
  }
  return false;
}

function verificaOperacao() {
  let opcaoEscolhida = "";
  tipo.forEach(element => {
    if (element.checked) {
      opcaoEscolhida = element.id;
    }
  });
  return opcaoEscolhida;
}

function verificacaoGeral(numeroConta, senha) {
  if (verificaSenha(numeroConta, senha)) {
    return verificaOperacao()
  }
  alert("Senha ou conta inválida. Tente novamente.");
}

function realizaOperacao(event) {
  event.preventDefault();

  const contaEmMovimentacao = encontraConta(Number(conta.value));
  const valorDaMovimentacao = Number(valor.value);

  switch (verificacaoGeral(Number(conta.value), senhaMovimentar.value)) {
    case "saque":
      if (contaEmMovimentacao.saldo >= valorDaMovimentacao) {
        contaEmMovimentacao.saldo -= valorDaMovimentacao;
        alert(`Saque efetuado com sucesso. Novo saldo: R$ ${contaEmMovimentacao.saldo}`);
      } else {
       alert("Saldo insuficiente.")
      }
      break;
    case "deposito":
      contaEmMovimentacao.saldo += valorDaMovimentacao;
      alert(`Depósito efetuado com sucesso. Novo saldo: R$ ${contaEmMovimentacao.saldo}`);
      break;
    case "consulta-saldo":
      alert(`O saldo da conta é R$ ${contaEmMovimentacao.saldo}`);
      break;
    default:
      alert("Escolha uma opção de movimentação.");
  }

  formMovimentarConta.reset();
}

formAbrirConta.addEventListener("submit", salvarConta);
formMovimentarConta.addEventListener("submit", realizaOperacao);


tipo.forEach(element => {
  element.onclick = () => {
    valor.disabled = opcaoConsultaSaldo.checked;
  }
})