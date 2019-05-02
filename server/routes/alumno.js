const express = require('express');
const alumno = express();
const alumnoController = require('../controllers/alumno.js');

alumno.post('/alumno',alumnoController.crear);

module.exports = alumno;