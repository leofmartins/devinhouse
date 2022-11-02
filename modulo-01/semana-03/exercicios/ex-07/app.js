const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

// function mensagem(objeto) {
//   const { nome, idade, profissao } = objeto;
//   return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
// }

// Extra 1:

// function mensagem({ nome, idade, profissao }) {
//   return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
// }

// Extra 2

const mensagem = ({ nome, idade, profissao }) => `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;

//
//
console.log(mensagem(pessoa));