const pokemon = require("../models/pokemon");

const getPokemon = async (req, res) => {
  await pokemon
    .find()
    .then((pokemons) => {
      res.status(200).send(pokemons);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao buscar os pokemons.",
      });
    });
};

const postPokemons = async (req, res) => {
  const pokemonResponse = new pokemon({
    name: req.body.name,
    type: req.body.type,
    level: req.body.level,
    attacks: req.body.attacks,
  });

  pokemonResponse
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao salvar o Pedido.",
      });
    });
};

const deletePokemon = async (req, res) => {
  const { id } = req.body.id;

  await pokemon
    .deleteOne(id)
    .then(() => {
      res.status(202).send({ message: "Pokemon deletado com sucesso!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao deletar o Pokemon.",
      });
    });
};

const putPokemon = async (req, res) => {
  const { id } = req.body.id;
  await pokemon
    .findOne(id)
    .then((pokemon) => {
      pokemon.level = req.body.level;
      pokemon.save().then(() => {
        res.status(200).send({ message: "Pokemon atualizado com sucesso!" });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao atualizar o Pokemon.",
      });
    });
};

module.exports = {
  getPokemon,
  postPokemons,
  deletePokemon,
  putPokemon,
};
