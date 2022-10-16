let operador = prompt("Digite o operador (+, -, * ou /):");
let operando1;
let operando2;

while ((operador != "+") && (operador != "-") && (operador != "*") && (operador != "/")) {
  operador = prompt("Operador inválido. Digite um operador (+, -, * ou /):");
}

while (isNaN(operando1)) {
  operando1 = parseFloat(prompt("Digite o 1º operando:"));
}

while (isNaN(operando2)) {
  operando2 = parseFloat(prompt("Digite o 2º operando:"));
}

let resultado = 0;

switch (operador) {
  case "+":
    resultado = operando1 + operando2;
    break;
  case "-":
    resultado = operando1 - operando2;
    break;
  case "*":
    resultado = operando1 * operando2;
    break;
  case "/":
    resultado = operando1 / operando2;
    break;
}

alert(`O resultado da operação é ${resultado}`);