module.exports = {
	getOne(req, res) {
		const db = req.app.get("db");
		db.read_product([id]).then(response => res.status(200).send(response))
	},
	getAll(req, res) {
		const db = req.app.get("db");
		db.read_products().then(response => res.status(200).send(response))
	}
}