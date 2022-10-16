let numero;
let pares = 0;
let impares = 0;

while (isNaN(numero) || numero < 0) {
  numero = parseInt(prompt("Digite um números para saber quantos pares \
  e ímpares existem de 0 até ele:"), 10);
}

/* forma direta, porém menos eficiente
 / for (let i = 0; i < numero; i++) {
 /   if (i % 2 === 0){
 /     pares++;
 /   } else {
 /     impares++;
 /   }
 / }
 */

 // forma mais eficiente
resto = numero % 2;

 if (resto) {
  pares = (numero - 1) / 2;
  impares = (numero + 1) / 2;  
} else {
  pares = numero / 2;
  impares = numero / 2;
}

alert(`O total de pares e ímpares de de 0 a ${numero} é
Pares: ${pares + 1}\nÍmpares: ${impares}`);