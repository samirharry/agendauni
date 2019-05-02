const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const AlumnoSchema = new Schema({
	usuario:{
		type: Schema.Types.ObjectId,
		ref: "usuario"
	},
	cursosAprobados: {
		type: Number,
		default: 0
	},
	promedioAcumulado: {
		type: Number,
		default: 0
	},
	creditosAprobados: {
		type: Number,
		default: 0
	},
	creditosLlevados: {
		type: Number,
		default: 0
	},
	promedioPonderado: {
		type: Number,
		default: 0
	},
	cicloRelativo: {
		type: Number,
		default: 0
	},
	notas:[{
		type: Schema.Types.ObjectId,
		ref: "nota"
	}]
});

module.exports = mongoose.model('alumno',AlumnoSchema);
