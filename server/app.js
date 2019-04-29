//Importacion de las llaves necesarias para el proceso
const { } = require('c')

//Importacion de los modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
