const mongoose = require("mongoose");

const Actividad = mongoose.model("actividad");
const Usuario = mongoose.model("usuario");
const Clase = mongoose.model("clase");
// Crear Registro
module.exports.crear = (req, res) => {
	let data = req.body;
	Actividad
		.create(data)
		.then(() => {
			return res.status(200).json({
				ok: true,
				message: "registro creado"
			})
		})
		.catch(err => {
			console.log(err);
			return res.status(500).json({
				ok: false
			})
		})
}

// Mostrar las actividades que tiene un alumno recibiendo como datos su correoElectronico
module.exports.verActividadesUsuario = (req, res) => {
	let body = req.body;
	Clase.find()
		.populate('actividades')
		.then(clases => {
			Usuario.findOne({ correoElectronico: body.correoElectronico })
				.then(usuariodb => {
					let clasesUsuario = clases.filter(clase => {
						let indexAux = clase.miembros.findIndex(usuario => {
							return (String(usuario.usuario) == String(usuariodb._id));
						});
						return (indexAux > -1);
					});
					let actividadesDelUsuario = [];
					clasesUsuario.forEach(clase => {
						clase.actividades.forEach(actividad => {
							actividadesDelUsuario.push(actividad);
						});
					});
					return res.status(200).json({
						actividadesDelUsuario
					});
				})
				.catch(err => {
					console.log(err);
					return res.status(500).json({ ok: false })
				})
		})
		.catch(err => {
			console.log(err);
			return res.status(500).json({ ok: false })
		})
}

// Mostrar las actividades que tiene una clase mediante su id
module.exports.verActividadesCurso = (req, res) => {
	let body = req.body;
	Clase.findById(body.claseId)
		.populate('actividades')
		.then(clase => {
			return res.status(200).json({
				actividades: clase.actividades
			});
		})
		.catch(err => {
			console.log(err);
			return res.status(500).json({ ok: false })
		})
}