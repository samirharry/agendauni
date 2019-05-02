const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const ClaseSchema = new Schema({
	periodo:{
		type: Schema.Types.ObjectId,
		ref: "periodo"
	},
	curso:{
		type: Schema.Types.ObjectId,
		ref: "curso"
	},
	seccion: {
		type: Schema.Types.ObjectId,
		ref: "seccion"
	},
	cantidadMatriculados: Number,
	miembros:[{
		usuario: {
			type: Schema.Types.ObjectId,
			ref: "usuario"
		},
		tipoPrivilegio:{
			type: Schema.Types.ObjectId,
			ref: "tipoPrivilegio"	
		}
	}],
	actividades:[{
		type: Schema.Types.ObjectId,
		ref: "actividad"
	}],
	evaluaciones:[{
		type: Schema.Types.ObjectId,
		ref: "evaluacion"
	}]
});

module.exports = mongoose.model('clase',ClaseSchema);
