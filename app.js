const express = require('express');
const app = express();

app.use(express.json());

// Rota básica do e-commerce
app.get('/', (req, res) => {
  res.status(200).json({ status: 'DevFlow API online', versao: '1.0.0' });
});

module.exports = app;
