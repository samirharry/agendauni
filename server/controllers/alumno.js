const mongoose = require("mongoose");

const Alumno = mongoose.model("alumno");

module.exports.crear = (req, res) => {
	let data = req.body;
	Alumno
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