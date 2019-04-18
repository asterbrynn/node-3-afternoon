module.exports = {
	allProducts(req, res) {
		const db = req.app.get("db");
		db.read_products().then(response => res.status(200).send(response))
	}
}