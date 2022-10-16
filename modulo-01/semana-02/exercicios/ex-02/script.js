let idade;

while (isNaN(idade) || idade < 0) {
  idade = parseInt(prompt("Digite sua idade: "), 10);
}

const limiteFaixa1 = 16;
const mensagemFaixa1 = "Você é jovem";
const limiteFaixa2 = 65;
const mensagemFaixa2 = "Você é adulto";
const mensagemFaixa3 = "Você é idoso";

if (idade < limiteFaixa1) {
  alert(mensagemFaixa1);
} else if (idade < limiteFaixa2) {
  alert(mensagemFaixa2);
} else {
  alert(mensagemFaixa3);
}