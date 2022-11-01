const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

function mensagem(objeto) {
  const { nome, idade, profissao } = objeto;
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

// Extra 1:

// function mensagem(objeto) {
//
// }
//
//
console.log(mensagem(pessoa));