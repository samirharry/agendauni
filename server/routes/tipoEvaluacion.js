const express = require('express');
const tipoEvaluacion = express();
const tipoEvaluacionController = require('../controllers/tipoEvaluacion.js');

tipoEvaluacion.post('/tipoEvaluacion',tipoEvaluacionController.crear);

module.exports = tipoEvaluacion;