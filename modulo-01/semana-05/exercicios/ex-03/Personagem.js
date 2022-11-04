export default class Personagem {
  nome
  percentualVida

  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }

  sofreuDano(percentualDano) {
    this.percentualVida -= percentualDano;
    return this.percentualVida;
  }

  usouKitMedico() {
    if (this.percentualVida <= 100) {
      this.percentualVida += 10;
    }
  }
}