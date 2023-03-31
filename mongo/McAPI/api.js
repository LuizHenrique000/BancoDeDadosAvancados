const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const pedido = require('./pedido');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pokemons', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/pedidos', (req, res) => {
  const pedidoResponse = new pedido({
    item: req.body.item,
    numero: req.body.numero,
    valor: req.body.valor
  });

  pedidoResponse.save()
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao salvar o Pedido.',
      });
    });
});

app.get('/pedidos', (req, res) => {
  pedido.find()
    .then((pokemons) => {
      res.send(pokemons);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao buscar os Pedidos.',
      });
    });
});

app.delete('/pedidos/:id', (req, res) => {
    pedido.findByIdAndRemove(req.params.id)
        .then((pedido) => {
            if (!pedido) {
                return res.status(404).send({
                    message: 'Pedido não encontrado com o id ' + req.params.id
                });
            }
            res.send({ message: 'Pedido excluído com sucesso!' });
        }).catch((err) => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Pedido não encontrado com o id ' + req.params.id
                });
            }
            return res.status(500).send({
                message: 'Não foi possível excluir o pedido com o id ' + req.params.id
            });
        });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});