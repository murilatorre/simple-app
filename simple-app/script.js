fetch('/api/mensagem')
  .then(res => res.json())
  .then(data => {
    document.getElementById('mensagem').textContent = data.mensagem;
  })
  .catch(err => {
    document.getElementById('mensagem').textContent = 'Erro ao carregar mensagem.';
    console.error(err);
  });
