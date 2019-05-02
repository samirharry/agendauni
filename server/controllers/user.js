
module.exports.welcomeSystem = (req, res) => {
	let body = req.body;
	return res.status(200).json({
		ok: true,
		message: "Bienvenido al sistema"
	});
}

module.exports.register = (req,res) =>{
	let body = req.body;
	console.log(body);
	return res.status(200).json({
		ok: true,
		message: "HUARISEXO"
	})
}