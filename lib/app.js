const express = require('express');
const app = express();
const cors = require('cors');
const expressGa = require('express-ga-middleware');

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', process.env.ORIGIN],
}));

app.use(expressGa('UA-140698558-2'));
app.use('/api/v1/characters', require('./routes/characters'));

app.use(express.static(__dirname + '/Public'));
app.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/Public/index.html');
  next();
});

module.exports = app;
