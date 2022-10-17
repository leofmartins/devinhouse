let valorInicial;

while(!valorInicial) {
  valorInicial = parseInt(prompt("Digite o valor inicial:"));
}


let raiz;

while(!raiz || raiz <= 0) {
  raiz = parseInt(prompt("Digite a raíz (inteiro maior que 0):"));
}

let elemento = valorInicial;

let mensagem = `Prograssão Aritmética:
Início: ${valorInicial}
Raíz: ${raiz}\n`;

for (let i = 0; i < 10; i++) {
  if (i < 10 - 1) {
    mensagem += `${elemento}, `
    elemento += raiz;
  } else {
    mensagem += `${elemento}.`
  }
}

alert(mensagem);