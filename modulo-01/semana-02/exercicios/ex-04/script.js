let numeroDigitado;
let soma = 0;

while (isNaN(numeroDigitado) || numeroDigitado !== -1) {
  numeroDigitado = parseFloat(prompt("Digite um número para somar"));
  
  if (!isNaN(numeroDigitado)) {
    soma += numeroDigitado;
  }

  console.log(`numeroDigitado = ${numeroDigitado}`);
  console.log(`soma = ${soma}`);

}

alert(`A soma dos números digitados é ${soma}.`);