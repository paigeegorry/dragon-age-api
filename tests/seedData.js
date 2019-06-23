const Character = require('../lib/models/Character');

const characters = [];

module.exports = async() => {
  const characterSeed = await characters.map(character => {
    return Character.create(character);
  });
  return characterSeed;
};

