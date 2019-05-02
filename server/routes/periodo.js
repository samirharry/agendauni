const express = require('express');
const periodo = express();
const periodoController = require('../controllers/periodo.js');

periodo.post('/periodo',periodoController.crear);

module.exports = periodo;