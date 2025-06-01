const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const paginas = [
  { id: 1, titulo: 'Tela 1', texto: 'Texto da tela 1.' },
  { id: 2, titulo: 'Tela 2', texto: 'Texto da tela 2.' },
];

app.get('/paginas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pagina = paginas.find(p => p.id === id);
  if (pagina) {
    res.json(pagina);
  } else {
    res.status(404).json({ erro: 'Página não encontrada' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
