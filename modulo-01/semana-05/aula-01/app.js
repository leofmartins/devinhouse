// class Rectangle {
//   constructor(b, a) {
//     this.base = b;
//     this.height = a;
//   }
// }
//
// console.log(Rectangle);
//
// const ret = new Rectangle(3, 4);
//
// console.log(ret);
//
// const array = new Array(1, 2, 3);
//
// console.log(array);

// class Rectangle {
//   constructor() {
//     console.log('New rectangle created');
//   }
// }

// class Rectangle {
// }

// class Rectangle {
//   heigth = 3;
//   width = 5;
// }

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// class Rectangle {
//   blah = 5
//   constructor(params) {
//     this.heigth = params.height;
//     this.width = params.width;
//   }
// }

class Rectangle {
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

const rect1 = new Rectangle(3, 6);
const rect2 = new Rectangle(2, 7);

console.log(rect1);
console.log(rect2);

console.log(rect1.calcArea());
console.log(rect2.calcArea());

console.log(Math);
console.log(Rectangle);

console.log(Math.PI);

console.log({Array});

console.log(Rectangle.isRectangle(rect1));

class Square extends Rectangle {
  constructor(base) {
    super(base, base);
  }

  static isSquare(square) {
    return square instanceof Square;
  }
}


const squareA = new Square(2);

console.log(squareA);
console.log(squareA.calcArea());

console.log(Rectangle.isRectangle(squareA));
console.log(Square.isSquare(rect1));

class Line extends Square {
  constructor() {
    super(raio);
  }
  calcArea() {
    return super.calcArea();
  }
}

console.log(squareA.calcArea());


// Pessoa = {
//   nome: 'Leonardo',
//   idade: 38
// }

// console.log(rect1.#blah) -> Private field '#blah' must be declared in an enclosing class



// const vetor = new Array(3, 4, 'Leonardo');
//
// console.log(vetor);
// console.log(Array.isArray(vetor));