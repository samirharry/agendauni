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

const port = process.env.PORT || 3000;

app.listen(port,()=>{
	console.log(`Escuchando en el puerto ${port}`);
});