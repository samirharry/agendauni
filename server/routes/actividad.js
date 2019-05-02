const express = require('express');
const actividad = express();
const actividadController = require('../controllers/actividad.js');

actividad.post('/actividad',actividadController.crear);

module.exports = actividad;