// function somaTudo(...rest) {
//   let soma = 0;
//   rest.forEach(element => soma += element);
//   return soma;
// }

// com arrow function

const somaTudo = (...rest) => {
  let soma = 0;
  rest.forEach(element => soma += element);
  return soma;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);