const express = require('express');
const usuario = express();
const userController = require('../controllers/usuario.js');

usuario.post('/usuario',userController.crear);

module.exports = usuario;