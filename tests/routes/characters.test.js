require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../lib/app');
const seedData = require('../seedData');

describe('characters routes', () => {
  beforeAll(() => {
    return mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
      .then(() => seedData());
  });

  afterAll(() => {
    return mongoose.connection.dropDatabase()
      .then(() => mongoose.connection.close());
  });

  it('can get all characters', () => {
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength();
      });
  });
});
