// function concatenaArrays(array1, array2) {
//   const arrayConcatenada = [...array1, ...array2];
//   console.log(arrayConcatenada);
// }

// com arrow function

const concatenaArrays = (array1, array2) => console.log([...array1, ...array2]);

concatenaArrays([1, 2, 3], [4, 5, 6]);