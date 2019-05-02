const mongoose = require("mongoose");

const Clase = mongoose.model("clase");

module.exports.crear = (req, res) => {
	let data = req.body;
	Clase
		.create(data)
		.then(() => {
			return res.status(200).json({
				ok: true,
				message : "registro creado"
			})
		})
		.catch(err=>{
			console.log(err);
			return res.status(500).json({
				ok: false
			})
		})
}