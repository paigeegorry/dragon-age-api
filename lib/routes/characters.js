const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    Character
      .findById(req.params.id)
      .then(character => res.send(character))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Character
      .find()
      .select('name photo _id appearances quests')
      .then(characters => res.send(characters))
      .catch(next);
  });
