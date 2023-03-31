const { putPokemon } = require("../services/pokemonService");

const put = async (req, res) => {
  putPokemon(req, res);
};

module.exports = put;
