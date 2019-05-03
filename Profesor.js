const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const ProfesorSchema = new Schema({
	usuario: {
		type : Schema.Types.ObjectId,
		ref: "usuario"
	},
	cursosAsociados: Number,
	tipoProfesor: {
		type : Schema.Types.ObjectId,
		ref: "tipoProfesor"
	},
	aniosServicio: Number
});

module.exports = mongoose.model('profesor',ProfesorSchema);
