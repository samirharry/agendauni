module.exports.welcomeSystem = (req, res) => {
	let body = req.body;
	return res.status(200).json({
		ok: true,
		message: "Bienvenido al sistema"
	});
}