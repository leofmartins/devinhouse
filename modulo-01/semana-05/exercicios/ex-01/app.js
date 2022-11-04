import Funcionario from "./Funcionario.js";

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario);

ada.promover(50);

console.log(ada.salario)

// Falta implementar extra 02