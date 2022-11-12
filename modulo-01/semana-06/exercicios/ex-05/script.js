async function obterClienteNoBancoDeDados(idCliente) {
  return { nome: 'bruce wayne', id: idCliente };
  }

function processar() {
  obterClienteNoBancoDeDados(7)
    .then(cliente => console.log(cliente));
}

processar();