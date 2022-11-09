const json =
  {
    "name": "Leonardo",
    "age": 38,
    "married": true
  };

// console.log(JSON.stringify(json));

const jasonParseado = JSON.parse(JSON.stringify(json));

// console.log(jasonParseado);
//
// console.log(json.name);

localStorage.clear();
localStorage.setItem('teste', 'hello, world');
localStorage.setItem('test', JSON.stringify(json));
localStorage.setItem('numero', 123);
localStorage.setItem('boolean', 'false');
localStorage.setItem('array', JSON.stringify([1, 2, 3]));

const teste = localStorage.getItem('teste')
const test = localStorage.getItem('test')
const numero = localStorage.getItem('numero')
const boolean = localStorage.getItem('boolean')
const array = localStorage.getItem('array')

console.log(teste, typeof teste);
console.log(test, typeof test, JSON.parse(test));
console.log(numero, typeof numero, Number(numero));
console.log(boolean, typeof boolean, Boolean(boolean));
console.log(array, typeof array, Array(array));

localStorage.removeItem('array');