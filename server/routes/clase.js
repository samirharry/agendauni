const express = require('express');
const clase = express();
const claseController = require('../controllers/clase.js');

clase.post('/clase',claseController.crear);

module.exports = clase;