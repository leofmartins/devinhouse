export class Animal {
  #nome

  constructor(nome) {
    this.#nome = nome;
  }

  imprime() {
    console.log(`Nome: ${this.#nome}.`);
  }

  falar() {
    console.log('Animal genérico');
  }

  get getNome() {
    return this.#nome;
  }
}