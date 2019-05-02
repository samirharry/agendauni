const express = require('express');
const user = express();
const userController = require('../controllers/user.js');

user.get('/',userController.welcomeSystem);
user.post('/registro',userController.register);

module.exports = user;