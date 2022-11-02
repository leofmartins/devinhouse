export class Rectangle {
  // atributo privado utiliza-se no início
  static blah = 'lololol'
  constructor(heigth, width) {
    // this é o objeto resultante uma nova instância
    this.heigth = heigth;
    this.width = width;
  }
  // método da instância
  calcArea() {
    return this.heigth * this.width;
  }

  //  métido de classe
  static isRectangle(rect) {
    return rect instanceof Rectangle;
  }
}