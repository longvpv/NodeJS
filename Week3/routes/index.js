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
	fs.readFile('./product.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		total.products = JSON.parse(data).pagination.total;
	});
	fs.readFile('./categories.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		total.categories = JSON.parse(data).pagination.total;
	});
	fs.readFile('./users.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		total.users = JSON.parse(data).pagination.total;
	});
	res.render('admin', { total: total });
	// res.send('Got a PUT request at /user');
});

router.get('/products', (req, res) => {
	fs.readFile('./product.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const result = JSON.parse(data).body;
		res.render('tableProduct', { products: result });
	});
});

router.get('/userlist', (req, res) => {
	fs.readFile('./users.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const result = JSON.parse(data).body.map((element) => {
			let date = format(new Date(element.dob), 'MM/dd/yyyy');
			return {
				...element,
				dob: date,
			};
		});
		res.render('tableUsers', { users: result });
	});
});

router.get('/categories', (req, res) => {
	fs.readFile('./categories.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const result = JSON.parse(data).body;
		res.render('tableCategory', { categories: result });
	});
});

router.get('/table', (req, res) => {
	res.render('table');
});

router.get('/login', (req, res) => {
	res.render('userLogin');
});

router.get('/product/:id', (req, res) => {
	fs.readFile('./product.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const result = JSON.parse(data).body.filter((item) => item._id === req.params.id);
		res.send(result);
	});
});

module.exports = router;
