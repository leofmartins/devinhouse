const entrada = document.getElementById(`entrada`);
const saida = document.getElementById('resultado');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  new Promise((resolve, reject) => {
    saida.textContent = 'Processando...';
    if (entrada.value % 2 === 0) {
      setTimeout(resolve, 2000, 'PAR');
    }
      setTimeout(resolve, 2000, 'IMPAR');
  })
    .then((result) => {
      saida.textContent = `O número digitado é ${result}. `;
    }).catch((result) => {
      throw new Error('Não foi posssível verificar o número');
  }).finally(() => {
    setTimeout(() => saida.textContent += `Processado com sucesso.`, 1000);
  })
})