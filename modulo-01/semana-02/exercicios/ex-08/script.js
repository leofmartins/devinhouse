let ePrimo = true;
let qtdPrimos = 0;

for (let i = 2; i <= 1000; i++) {
  ePrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) ePrimo = false; 
  }

  if (ePrimo) {
    console.log(i);
    qtdPrimos++;
  }
}

console.log(`Quantidade de primos de 0 a 1000: ${qtdPrimos}`);