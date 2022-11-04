import {Funcionario} from "./Funcionario.js";

const ada = new Funcionario('123.456.789-00', 'Leonardo da Fonseca Martins', 2500);

console.log(ada.salario);

ada.promover(10);

console.log(ada.salario)

// Falta implementar extra 02