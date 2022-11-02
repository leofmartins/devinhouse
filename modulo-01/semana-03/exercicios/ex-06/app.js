function verificaPalindromo(str) {
  const [...array1] = str.toLowerCase().replace(' ', '').replace('-', '').replace('.', '').replace('!','');
  const array2 = array1;
  array1.reverse();
  array2.every((element, index) => array1[index] === element);
}

console.log(verificaPalindromo('Julia'));