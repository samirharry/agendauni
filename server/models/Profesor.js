const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const ProfesorSchema = new Schema({
	usuario:{
		type: Schema.Types.ObjectId,
		ref: "usuario"
	},
	cursosAsociados: {
		type: Number,
		default: 0
	},
	tipoProfesor: {
		type: Schema.Types.ObjectId,
		ref: "tipoProfesor"
	},
	aniosServicio: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('profesor',ProfesorSchema);
