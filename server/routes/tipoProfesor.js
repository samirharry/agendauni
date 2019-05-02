const express = require('express');
const tipoProfesor = express();
const tipoProfesorController = require('../controllers/tipoProfesor.js');

tipoProfesor.post('/tipoProfesor',tipoProfesorController.crear);

module.exports = tipoProfesor;