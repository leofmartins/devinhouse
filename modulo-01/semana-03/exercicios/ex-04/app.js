// function mesclaObjetos(objeto1, objeto2) {
//   const novoObjeto = {...objeto1, ...objeto2};
//   return novoObjeto;
// }

// com arrow function

const mesclaObjetos = (objeto1, objeto2) => ({...objeto1, ...objeto2});

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);