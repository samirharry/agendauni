const express = require('express');
const sistemaEvaluacion = express();
const sistemaEvaluacionController = require('../controllers/sistemaEvaluacion.js');

sistemaEvaluacion.post('/sistemaEvaluacion',sistemaEvaluacionController.crear);

module.exports = sistemaEvaluacion;