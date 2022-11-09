const mostraHoraAtual = document.getElementById('hora-atual');

setInterval(() => {
    mostraHoraAtual.textContent = new Date().toLocaleTimeString('pt-BR', { hour12: false });
  }, 2000);
