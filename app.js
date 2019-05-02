//Importacion de los modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// Cargando los modelos
require("./server/models/Usuario.js");
require("./server/models/TipoProfesor.js");
require("./server/models/TipoEvaluacion.js");
require("./server/models/TipoPrivilegio.js");
require("./server/models/SistemaEvaluacion.js");
require("./server/models/Seccion.js");
require("./server/models/Curso.js");
require("./server/models/Periodo.js");
require("./server/models/Profesor.js");
require("./server/models/Alumno.js");
require("./server/models/Clase.js");
require("./server/models/Nota.js");
require("./server/models/Actividad.js");
require("./server/models/Evaluacion.js");

const app = express();
const web = require('./server/routes/index');
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