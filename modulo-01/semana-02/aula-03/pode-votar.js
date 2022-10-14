let idade = parseInt(prompt("Digite sua idade para saber se pode votar:"));

console.log(idade);

while (isNaN(idade) || idade < 0) {
  idade = parseInt(prompt("Digite uma idade válida para saber se pode votar:"));
}

if (idade < 16) {
  alert("Não pode votar");
} else if (idade < 18 || idade >= 70) {
  alert("Voto facultativo");
} else {
  alert("Voto obrigatório");
}