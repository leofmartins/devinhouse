let dataAtual = new Date();

let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1;

if (dia > 21) mes++;

if (mes > 12) mes = 1;

console.log(mes);

if (mes < 4) {
  alert("Verão");
} else if (mes < 7) {
  alert("Outono");
} else if (mes < 10) {
  alert("Inverno");
} else {
  alert("Primavera");
}