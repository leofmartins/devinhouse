export default class Partida {
  siglaTimeA
  siglaTimeB
  golsTimeA
  golsTimeB

  constructor(siglaTimeA, golsTimeA, siglaTimeB, golsTimeB) {
    this.siglaTimeA = siglaTimeA;
    this.siglaTimeB = siglaTimeB;
    this.golsTimeA = golsTimeA;
    this.golsTimeB = golsTimeB;
  }
}