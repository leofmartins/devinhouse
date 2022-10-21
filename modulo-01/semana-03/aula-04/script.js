// Rest

// function sumParameters(item1, ...numbers) {
//     console.log({numbers});
//
//     let accumulator = 0;
//
//     numbers.forEach(value => accumulator += value);
//
//     return accumulator;
// }
//
// console.log(sumParameters(1, 2, 3, 4, 5));


// Spread

// const arrayA = [1, 2, 3, 4];
// const arrayB = [55, 66, 77, 88, ...arrayA];
// const arrayC = [...arrayA,...arrayB];
//
// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayC);

// Spread Objects

// const objectA = {a: 1, b: 2, c: 3};
// const objectB = {a: 55, b: 66, c: 77};
// const objectC = {...objectA, ...objectB};
//
// console.log(objectC);

// Destructuring Vetor

// function sumDestructuringArray(array) {
//     const [a, b] = array1;
//
//     console.log({array1});
//
//     let accumulator = 0;
//
//     array.forEach(value => accumulator += value);
//
//     return accumulator;
// }
//
// console.log(sumDestructuringArray([1, 2, 3, 4]));


// function procuraTermo(params) {
//   const { texto, termo, ...resto} = params;
//
//   return texto.includes(params);
// }
//
// console.log(
//   procuraTermo('O rato roeu a roupa do rei de Roma.', )
// )

// Optional chaining

// const object = {a: 1};
//
// console.log(object.a);
// console.log(object?.b);
// console.log(object.b?.a);

// Brincando com destructuring e um pouco de classes e objetos

class Person {
  constructor(name, age, married) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
};

const person1 = new Person();

person1.name = 'Leonardo';
person1.age = 38;
person1.married = true;

const person2 = new Person();

person2.name = 'Rosa';
person2.age = 72;
person2.married = false;


// const person1 = { name: 'Leonardo', age: 38, married: true };
// const person2 = { name: 'Sandra', age: 69, married: true };
// const person3 = { name: }

const {name: personName, ...rest} = person2;

const demaisDados = {...rest};

let married;

demaisDados.married ? married = 'sim' : married = 'não';


console.log(`O nome da pessoa é ${personName}. Seus demais dados são:\nIdade: ${demaisDados.age}\nCasado: ${married}`);

// console.log(`O cliente é ${personName}`);

// console.log(`O cliente ${personName} tem ${personAge} anos.`);

// const cars = ['fusca', 'corcel', 'opala'];
//
// const [,,car3] = cars;
//
// console.log(car3);
