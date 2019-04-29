//Importacion de las llaves necesarias para el proceso
const {PORT} = require('');
//Importacion de los modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT,()=>{
	console.log(`Escuchando en el puerto ${PORT}`);
});