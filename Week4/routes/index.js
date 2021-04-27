var express = require('express');
var router = express.Router();
const fs = require('fs');
const { format } = require('date-fns');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/admin', function (req, res) {
	let total = {
		products: 100,
		users: 10,
		categories: 4,
	};
	total.products = JSON.parse(fs.readFileSync('./product.json', 'utf8')).pagination.total;
	total.categories = JSON.parse(fs.readFileSync('./categories.json', 'utf8')).pagination.total;
	total.users = JSON.parse(fs.readFileSync('./users.json', 'utf8')).pagination.total;
	res.render('admin', { total: total });
});

router.get('/products', (req, res) => {
	const result = JSON.parse(fs.readFileSync('./product.json', 'utf8')).body;
	res.render('tableProduct', { products: result });
});

router.get('/userlist', (req, res) => {
	const result = JSON.parse(fs.readFileSync('./users.json', 'utf8')).body.map((element) => {
		let date = format(new Date(element.dob), 'MM/dd/yyyy');
		return {
			...element,
			dob: date,
		};
	});
	res.render('tableUsers', { users: result });
});

router.get('/categories', (req, res) => {
	const result = JSON.parse(fs.readFileSync('./categories.json', 'utf8')).body;
	res.render('tableCategory', { categories: result });
});

router.get('/table', (req, res) => {
	res.render('table');
});

router.get('/login', (req, res) => {
	res.render('userLogin');
});

router.get('/product/:id', (req, res) => {
	const product = JSON.parse(fs.readFileSync('./product.json', 'utf8')).body.filter(
		(item) => item._id === req.params.id
	)[0];
	// res.send(product);
	res.render('productDetails', { product: product });
});

module.exports = router;
