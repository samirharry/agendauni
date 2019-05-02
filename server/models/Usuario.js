const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const UsuarioSchema = new Schema({
	dni: {
		type: String
	},
	correoElectronico: String,
	contrasenia:String,
	apellidos: String,
	nombres: String,
	telefono: String,
	direcccion: String,
	fechaNacimiento: Date,
	fechaRegistro: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('usuario',UsuarioSchema);
