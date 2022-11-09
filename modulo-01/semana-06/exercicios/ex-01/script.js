function sleep (valor) {
  return new Promise ( (res) => {
    setTimeout(() => {
      res(valor);
    }, 3000);
  })
    .then((result) => console.log(result))
    .catch((erro) => console.log(erro));
}

sleep(5);