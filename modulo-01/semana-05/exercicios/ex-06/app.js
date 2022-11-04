import Juros from "./Juros.js";

const aplicacao1 = new Juros(10000, 0.07, 24);

console.log(`Juros Simples: ${aplicacao1.calcularJurosSimples()}
Juros Compostos: ${aplicacao1.calcularJurosCompostos()}\n`);

const aplicacao2 = new Juros(10000, 0.15, 10);

console.log(`Juros Simples: ${aplicacao2.calcularJurosSimples()}
Juros Compostos: ${aplicacao2.calcularJurosCompostos()}\n`);