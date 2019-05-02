const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoEvaluacionSchema = new Schema({
	nombre:String,
	descripcion: String
});

module.exports = mongoose.model('tipoEvaluacion', TipoEvaluacionSchema);
