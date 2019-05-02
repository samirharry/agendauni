const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const PeriodoSchema = new Schema({
	fechaInicio: Date,
	fechaFinal: Date,
	descripcion: String
});

module.exports = mongoose.model('periodo',PeriodoSchema);
