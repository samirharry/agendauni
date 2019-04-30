//Importacion de las llaves necesarias para el proceso
const {PORT} = require('./server/config/keys');
//Importacion de los modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const web = require('./server/routes/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',web);

app.listen(PORT,()=>{
	console.log(`Escuchando en el puerto ${PORT}`);
});