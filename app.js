//Importacion de los modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const web = require('./server/routes/index');

// Cargando los modelos
require("./server/models/Usuario");
require("./server/models/TipoProfesor");
require("./server/models/TipoEvaluacion");
require("./server/models/TipoPrivilegio");
require("./server/models/SistemaEvaluacion");
require("./server/models/Seccion");
require("./server/models/Curso");
require("./server/models/Periodo");
require("./server/models/Profesor");
require("./server/models/Alumno");
require("./server/models/Clase");
require("./server/models/Nota");
require("./server/models/Actividad");
require("./server/models/Evaluacion");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',web);

const {
	mongoURI
  } = require('./server/config/keys.js');

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const port = process.env.PORT || 3000;

app.listen(port,()=>{
	console.log(`Escuchando en el puerto ${port}`);
});