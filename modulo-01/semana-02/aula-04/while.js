let valor = 0;
let soma = 0;
let qtdValores = 0;

valor = parseFloat(prompt("Digite uma nota para compor a média"));

while (valor != -1 && !isNaN(valor)) {
  qtdValores++;
  console.log(`Valor ${qtdValores} = ${valor}`);
  soma += valor;
  console.log(`Soma + ${soma}`);
  valor = parseFloat(prompt("Digite uma nota para compor a média"));
}

console.log(`qtdValores = ${qtdValores}`);

alert(`A média é ${soma / qtdValores}`);