let numero;
let resultadoTabuada = "Tabuada do ";

while (isNaN(numero)) {
  numero = parseInt(prompt("Digite um número interio par ver sua tabuada:"), 10);
}

resultadoTabuada += numero + ":";

for (let i = 0; i <= 10; i++) {
  resultadoTabuada += `\n${numero} x ${i} = ${numero * i}`;
}

alert(resultadoTabuada);