const express = require('express');
const seccion = express();
const seccionController = require('../controllers/seccion.js');

seccion.post('/seccion',seccionController.crear);

module.exports = seccion;