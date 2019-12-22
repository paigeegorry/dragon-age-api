require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../lib/app');
const { seedData, characters } = require('../seedData');

const BASE_URL = '/api/v1/characters';

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
      .get(BASE_URL)
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });
  it('can get a random character', () => {
    return request(app)
      .get(`${BASE_URL}/random`)
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
  it('can get a character by its id', () => {
    return request(app)
      .get(`${BASE_URL}/${characters[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...characters[0], __v: 0 });
      });
  });
  describe('queries', () => {
    it('can get a character by name', () => {
      return request(app)
        .get(`${BASE_URL}?name=Cassandra`)
        .then(res => {
          expect(res.body).toEqual([characters[0]]);
        });
    });
    
    it('can get a character by appearance', () => {
      return request(app)
        .get(`${BASE_URL}?appearances=Inquisition`)
        .then(res => {
          expect(res.body).toHaveLength(4);
        });
    });

    it('can get a character by quest', () => {
      return request(app)
        .get(`${BASE_URL}?quests=${characters[0].quests[0]}`)
        .then(res => {
          expect(res.body).toEqual([characters[0]]);
        });
    });
  });

});
