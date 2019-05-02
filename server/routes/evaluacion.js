const express = require('express');
const evaluacion = express();
const evaluacionController = require('../controllers/evaluacion.js');

evaluacion.post('/evaluacion',evaluacionController.crear);

module.exports = evaluacion;