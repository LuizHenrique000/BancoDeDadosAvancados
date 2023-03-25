const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const pokemon = require('./pokemon');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pokemons', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/pokemons', (req, res) => {
  const poke = new pokemon({
    name: req.body.name,
    type: req.body.type,
  });

  poke
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao salvar o Pokemon.',
      });
    });
});

app.get('/pokemons', (req, res) => {
  pokemon.find()
    .then((pokemons) => {
      res.send(pokemons);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao buscar os Pokemons.',
      });
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
