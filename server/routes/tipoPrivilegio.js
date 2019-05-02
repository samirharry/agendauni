const express = require('express');
const tipoPrivilegio = express();
const tipoPrivilegioController = require('../controllers/tipoPrivilegio.js');

tipoPrivilegio.post('/tipoPrivilegio',tipoPrivilegioController.crear);

module.exports = tipoPrivilegio;