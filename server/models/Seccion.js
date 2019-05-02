const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const SeccionSchema = new Schema({
	nombre: String,
	descripcion: String
});

module.exports = mongoose.model('seccion',SeccionSchema);
