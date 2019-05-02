const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
	clase: {
		type: Schema.Types.ObjectId,
		ref: "clase"
	},
	tipoEvaluacion:{
		type: Schema.Types.ObjectId,
		ref: "tipoEvaluacion"
	},
	fechaEvaluacion: Date,
	fechaCalificacion: Date
});

module.exports = mongoose.model('evaluacion', EvaluacionSchema);
