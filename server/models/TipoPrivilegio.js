const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const TipoPrivilegioSchema = new Schema({
	descripcion: String
});

module.exports = mongoose.model('tipoPrivilegio',TipoPrivilegioSchema);
