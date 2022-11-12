const retornoEmpresa1 = new Promise( (resolve, reject) =>
  setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) =>
  setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

Promise.race([retornoEmpresa1, retornoEmpresa2])
  .then(function (value) {
    console.log(`O frete será pela ${value}`);
  }, function (reason) {
    console.log(`O frete será pela ${reason}`);
  })

// Não implementado para o caso de rejeitar alguma das promises.