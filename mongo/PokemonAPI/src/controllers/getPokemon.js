const { getPokemon } = require("../services/pokemonService");

const get = async (req, res) => {
    getPokemon(req, res);
}
  
module.exports = get; 