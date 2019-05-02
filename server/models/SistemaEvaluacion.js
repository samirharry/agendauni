const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const SistemaEvaluacionSchema = new Schema({
	nombre: String,
	descripcion: String
});

module.exports = mongoose.model('sistemaEvaluacion',SistemaEvaluacionSchema);
