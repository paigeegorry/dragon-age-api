const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/random', (req, res, next) => {
    const { count = 1 } = req.query;
    Character
      .getRandom(count)
      .then(character => res.send(character))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Character
      .findById(req.params.id)
      .then(character => res.send(character))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 50, ...search } = req.query;

    const query = Object.entries(search)
      .reduce((query, [key, value]) => {
        query[key] = new RegExp(value, 'gmi');
        return query;
      }, {});

    Character
      .find(query)
      .skip(+perPage * (+page - 1))
      .limit(+perPage)
      .select('name photo _id appearances quests')
      .then(characters => res.send(characters))
      .catch(next);
  });
