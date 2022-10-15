let maiorIdade;
let menorIdade = 0;
let mediaDasIdades = 0;
let idadeDigitada = 0;

do {
  idadeDigitada = parseInt("Digite uma idade: ");

  if (!maiorIdade) {
    maiorIdade = idadeDigitada;
  } else {
    if (idadeDigitada < menorIdade) {
      menorIdade = idadeDigitada;
    }
  }

} while (idadeDigitada > 0 || !isNaN(idadeDigitada));