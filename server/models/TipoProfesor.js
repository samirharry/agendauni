const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const TipoProfesorSchema = new Schema({
	descripcion: String
});

module.exports = mongoose.model('tipoProfesor',TipoProfesorSchema);
