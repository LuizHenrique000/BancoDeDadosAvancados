const { deletePokemon } = require("../services/pokemonService");

const del = (req, res) => {
  deletePokemon(req, res)
};

module.exports = del;