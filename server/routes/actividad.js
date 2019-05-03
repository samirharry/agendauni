const express = require('express');
const actividad = express();
const actividadController = require('../controllers/actividad.js');

actividad.post('/actividad',actividadController.crear);
actividad.post('/actividadesPorUsuario',actividadController.verActividadesUsuario);
actividad.post('/actividadesPorCurso',actividadController.verActividadesCurso);

module.exports = actividad;