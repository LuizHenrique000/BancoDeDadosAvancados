const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
  item: String,
  numero: Number,
  valor: Number
});

const pedido = mongoose.model('pedido', pedidoSchema);

module.exports = pedido;