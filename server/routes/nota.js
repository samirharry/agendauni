const express = require('express');
const nota = express();
const notaController = require('../controllers/nota.js');

nota.post('/nota',notaController.crear);

module.exports = nota;