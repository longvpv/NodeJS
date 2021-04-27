var express = require('express');
const { render } = require('../app');
var router = express.Router();
const Product = require('./models/product');
/* GET users listing. */
router.get('/login', function (req, res, next) {
	res.render('userLogin');
});

router.get('/getProduct', async (req, res, next) => {
	const result = await Product.find({})
		.populate('categoryId', ['description', 'name'])
		.limit(5)
		.then((results) => {
			console.log('Results');
			console.log(results);
		});
	res.send(result);
});

module.exports = router;
