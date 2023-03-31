const { postPokemons } = require("../services/pokemonService");

const post = async (req, res) => {
  postPokemons(req, res);
}

module.exports = post;
