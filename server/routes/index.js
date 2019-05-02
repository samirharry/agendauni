const express = require("express")
const app = express();

app.use( require('./actividad') );
app.use( require('./alumno') );
app.use( require('./clase') );
app.use( require('./curso') );
app.use( require('./evaluacion') );
app.use( require('./nota') );
app.use( require('./periodo') );
app.use( require('./profesor') );
app.use( require('./seccion') );
app.use( require('./sistemaEvaluacion') );
app.use( require('./tipoEvaluacion') );
app.use( require('./tipoPrivilegio') );
app.use( require('./tipoProfesor') );
app.use( require('./usuario') );


module.exports = app;