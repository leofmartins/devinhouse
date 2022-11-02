// function verificaPalindromo(str) {
//   let stringTratada = str.toLowerCase().replace(/\W/g, '');
//   let [...arrauAux] = stringTratada;
//
//   return arrauAux.reverse().join('') === stringTratada;
// }

const verificaPalindromo = (str) => {
  let stringTratada = str.toLowerCase().replace(/\W/g, '');
  let [...arrauAux] = stringTratada;

  return arrauAux.reverse().join('') === stringTratada;
}

console.log(verificaPalindromo('Socorram-me, subi no onibus em Marrocos!'));