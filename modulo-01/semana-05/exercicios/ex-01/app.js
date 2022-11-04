import {Funcionario} from "./Funcionario.js";

const funcionario1 = new Funcionario('123.456.789-00', 'Leonardo da Fonseca Martins', 2500);

console.log(funcionario1.salario);

funcionario1.promover(10);

console.log(funcionario1.salario)

// Falta implementar extra 02