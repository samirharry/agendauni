const mongoose = require("mongoose");

const Usuario = mongoose.model("usuario");

module.exports.crear = (req, res) => {
	let data = req.body;
	Usuario
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

module.exports.iniciarSesion = (req,res)=>{
	let body = req.body;
	console.log(body);
	return res.status(200).json({
		ok: true,
		mensaje: "Huariputo se cree cagon"
	})
}