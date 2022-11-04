// class Pessoa {
//   static #ultimaId = 0
//   #id
//
//   constructor(nome, email) {
//     this.#id = Pessoa.#ultimaId++;
//     this.nome = nome;
//     this.email = email;
//   }
//
//   caminha() {
//     console.log("caminhou", this.#id);
//   }
//
//   static isPessoa(item) {
//     return item instanceof Pessoa;
//   }
// }

// const instancia = {
//   identificacao: 432928347,
//   get idTransformado() {
//     return `Id: ${this.identificacao}`
//   }
// }
//
// console.log(instancia.identificacao);
// console.log(instancia.idTransformado);

// class Animal {
//   #nome
//
//   constructor(nome, som) {
//     this.#nome = nome;
//     this.som = som;
//   }
//
//   getMetodoComum() {
//     return `Id: ${this.#nome}`;
//   }
//
//   get getMetodoGetter() {
//     return `Id: ${this.#nome}`;
//   }
//
//   get nome() {
//     return this.#nome;
//   }
//
//   set setMetodoSetter(value) {
//     this.#nome = value;
//   }
// }
//
// const instancia = new Animal('Preguiça');
//
// // console.log(instancia.#nome); atributo privado
// console.log(instancia.nome); // atributo não existe pois o correto é #nome
// console.log(instancia.getMetodoComum());
// console.log(instancia.getMetodoGetter);
//
// instancia.setMetodoSetter = 'Hello';
//
// console.log(instancia.getMetodoGetter);

// Encapsulamento

// function deFora() {
//   const variavelDeDentro = 'Hello';
//
//   return () => console.log(variavelDeDentro);
// }
//
// const f = deFora();
//
// console.log(f);
//
// f();


// Exemplo do MDN closure para simular métodos privados
// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//
//   return {
//     increment() {
//       changeBy(1);
//     },
//
//     decrement() {
//       changeBy(-1);
//     },
//
//     value() {
//       return privateCounter;
//     },
//   };
// })();
//
// console.log(counter.value()); // 0.
//
// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.
//
// counter.decrement();
// console.log(counter.value()); // 1.
//
// function transformaTexto(texto, operacao) {
//   let funcao
//
//   switch (operacao) {
//     case 'maiuscula':
//       funcao = t => t.toUpperCase();
//       break;
//
//     case 'minuscula':
//       funcao = t => t.toLowerCase();
//       break;
//
//     default:
//       funcao = t => t;
//   }
//
//   return  funcao(texto);
// }
//
// console.log(transformaTexto('blah', 'maiuscula'));

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome, 'Au');
//   }
//   // sobreescreve propriedade nome da classe super
//   get nome() {
//     return `Nome: ${super.nome} faz ${this.som}`;
//   }
//
//   // o poliformismo mantem os métodos da classe super
//   // permitindo a chamada de ambos em certas circustâncias
//   teste() {
//     console.log(super.nome);
//     console.log(this.nome);
//   }
// }
//
// const doguinho = new Cachorro('Viralata');
//
// console.log(doguinho.nome);
// console.log(doguinho.som);
// doguinho.teste();

// Exercitando criar classes

import {Animal} from "./Animal.js";

class Ave extends Animal {
  constructor(nome) {
    super(nome);
  }

  falar() {
    console.log('Rá-ra');
  }

  voar() {
    console.log('Flap-flap');
  }
}

const passarinho1 = new Ave('Bem-Te-Vi');

console.log(`O nome deste passarinho é ${passarinho1.getNome}.`);
passarinho1.imprime();
passarinho1.falar();
passarinho1.voar();

class Papagaio extends Ave {
  #vocabulario

  constructor(nome) {
    super(nome);
  }

  set setVocabulario(vocabulario) {
    this.#vocabulario = vocabulario;
  }

  falar() {
    console.log(`Rá-rá, ${this.#vocabulario}.`);
  }
}

const passarinho2 = new Papagaio('Alfredo');

console.log(passarinho2.getNome);
passarinho2.imprime();
passarinho2.setVocabulario = 'Estepô!';
passarinho2.falar();
passarinho2.voar();