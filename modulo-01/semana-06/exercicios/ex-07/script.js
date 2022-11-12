fetch('https://api.coincap.io/v2/assets/bitcoin')
  .then(response => {
    return response.json();
  }).then(result => {
      console.log(result);
      console.log(`O preço do Bitcoin - ${result.data.symbol} em dólares hoje é $ ${result.data.priceUsd}`);
    }
  );