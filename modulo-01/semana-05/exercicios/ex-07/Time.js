export default class Time {
  nome
  sigla
  vitorias = 0
  derrotas = 0
  empates = 0
  golsMarcados = 0
  golsSofridos = 0

  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
  }

  get numeroDeJogos() {
    const numeroDeJogos = this.vitorias + this.derrotas + this.empates;
    return numeroDeJogos;
  }

  get numeroDePontos() {
    const numeroDePontos = this.vitorias * 3 + this.empates * 1;
    return numeroDePontos;
  }

  computarPartida(partida) {
    let golsMarcados = 0;
    let golsSofridos = 0;

    if (partida.siglaTimeA === this.sigla) {
      golsMarcados = partida.golsTimeA;
      golsSofridos = partida.golsTimeB;
    } else if (partida.siglaTimeB === this.sigla) {
      golsMarcados = partida.golsTimeB;
      golsSofridos = partida.golsTimeA;
    } else {
      return;
    }

    if (golsMarcados > golsSofridos) {
      this.vitorias++;
    } else if (golsMarcados < golsSofridos) {
      this.derrotas++
    } else {
      this.empates++
    }

    this.golsMarcados += golsMarcados;
    this.golsSofridos += golsSofridos;
  }

  exibirSituacao() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Sigla: ${this.sigla}`);
    console.log(`Vitórias: ${this.vitorias}`);
    console.log(`Derrotas: ${this.derrotas}`);
    console.log(`Empates ${this.empates}`);
    console.log(`Gols Marcados: ${this.golsMarcados}`);
    console.log(`Gols Sofridos: ${this.golsSofridos}`);
    console.log(`Número de jogos: ${this.numeroDeJogos}`);
    console.log(`Número de pontos: ${this.numeroDePontos}\n`)
  }
}