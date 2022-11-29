// function greeting(name = 'Fulano') {
//   console.log(`Hello, ${name}!`);
//   return 'processado';
// }
//
// greeting('Leonardo');
// greeting();
//
// console.log(typeof greeting);
// console.log(greeting());

const numeros = [1, 2, 3];

function multiplicaVetor(vetor, multiplicador = 1) {
  if (!Array.isArray(vetor)) {
    console.error('Nenhum vetor informado');
    return [];
  }

  const novoVetor = [];

  for (let i = 0; i < vetor.length; i++) {
    novoVetor.push(vetor[i] * multiplicador);
  }

  return novoVetor;
}

console.log(multiplicaVetor());
console.log(multiplicaVetor(numeros));
console.log(multiplicaVetor(numeros, 4));
console.log(multiplicaVetor('olá'));
