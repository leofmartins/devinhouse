export class Funcionario {
  cpf
  nomeCompleto
  salario

  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    this.salario *= (1 + percentual / 100);
  }
}