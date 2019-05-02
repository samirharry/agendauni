const express = require('express');
const curso = express();
const cursoController = require('../controllers/curso.js');

curso.post('/curso',cursoController.crear);

module.exports = curso;