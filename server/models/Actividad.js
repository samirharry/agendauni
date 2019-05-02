const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
	clase: {
		type: Schema.Types.ObjectId,
		ref: "clase",
	},
	fechaInicio: Date,
	fechaFin: Date,
	descripcion: String
});

module.exports = mongoose.model('actividad', ActividadSchema);
