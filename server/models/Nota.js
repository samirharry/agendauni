const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const NotaSchema = new Schema({
	alumno:{
		type: Schema.Types.ObjectId,
		ref: "alumno"
	},
	evaluacion:{
		type: Schema.Types.ObjectId,
		ref: "evaluacion"
	},
	nota: Number,
	notaReclamo: Number,
	notaFinal: Number
});

module.exports = mongoose.model('nota',NotaSchema);
