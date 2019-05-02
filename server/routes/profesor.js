const express = require('express');
const profesor = express();
const profesorController = require('../controllers/profesor.js');

profesor.post('/profesor',profesorController.crear);

module.exports = profesor;