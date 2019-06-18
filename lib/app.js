const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/v1/characters', require('./routes/characters'));

app.use(express.static(__dirname + '/Public'));

module.exports = app;
