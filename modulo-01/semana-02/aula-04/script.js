/* 
const numero = parseInt(prompt("Digite um número maior que 0 para aomar todos os iteiros até esse número:"));

let soma = 0;

while (numero <= 0) {
  numero = parseInt(prompt("Digite um número maior que 0"));
}

for (let i = 1; i <= numero; i++) {
  soma += i;
}

console.log(numero);
console.log(soma);

alert(`A soma de todos os inteiros até ${numero} é igual a: ${soma}`);
*/

// option 2

function somaInteirosAteLimite() {

  let soma = 0;

  let limite = parseInt(prompt("Digite um número inteiro maior que 0 para somar os inteiros de 0 até esse número:"));

  if (limite > 0 ) {
    for (let i = 0; i <= limite; i++) {
      soma += i;
    }
  } else {
    somaInteirosAteLimite();
  }

  alert("A soma é " + soma);
}

somaInteirosAteLimite();