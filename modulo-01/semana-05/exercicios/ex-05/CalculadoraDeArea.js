export default class CalculadoraDeArea {
  tipo
  base
  altura

  constructor(tipo, base, altura) {
    this.altura = altura;
    this.tipo = tipo;
    this.base = base;
  }

  calcular() {
    switch (this.tipo) {
      case 'triangulo':
        return (this.base * this.altura) / 2;
        break;
      case 'quadrado':
        return this.base * this.altura;
    }
  }
}