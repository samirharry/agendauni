const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const CursoSchema = new Schema({
	codigoCurso: String,
	nombreCurso: String,
	descripcion: String,
	sistemaEvaluacion: {
		type: Schema.Types.ObjectId,
		ref: "sistemaEvaluacion"
	}
});

module.exports = mongoose.model('curso',CursoSchema);
