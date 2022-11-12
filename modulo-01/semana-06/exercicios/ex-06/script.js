fetch('https://api.agify.io/?country_id=BR&name=leonardo')
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    return response.json();
  })
  .then( result => {
    console.log(`Nome: ${result.name.toUpperCase()}\nIdade: ${result.age}`)
  }).catch(erro => {
    throw new Error(`Erro: ${erro}`)
  })
  .finally(() => {
    console.log('Fim');
  });