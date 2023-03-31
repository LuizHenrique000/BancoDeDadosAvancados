const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    name: String,
    type: String,
    level: Number,
    attacks: [String]
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
