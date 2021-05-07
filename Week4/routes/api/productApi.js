var express = require('express');
var router = express.Router();
const fs = require('fs');
const Category = require('../models/category');
const Product = require('../models/product');
const User = require('../models/user');
var mongoose = require('mongoose');
/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.post('/editProduct', async (req, res) => {
	const id = req.body._id;
	const checkExist = await Product.findById(id);
	if (req.body._id === null || req.body._id === undefined || checkExist === null) {
		res.send({
			statusCode: 404,
			data: 'Product do not exist',
		});
		return;
	}
	delete req.body._id;
	await Product.updateOne({ _id: id }, req.body);
	res.json({
		statusCode: 200,
		data: 'Update successfully',
	});
});
router.post('/createProduct', async (req, res) => {
	try {
		await Product.validate({ ...req.body });
	} catch (err) {
		res.send({
			statusCode: 404,
			data: `Validate fail, check form ${Object.keys(err.errors)} !`,
		});
	}
	let newId = new mongoose.Types.ObjectId().toHexString();
	await Product.create({ _id: newId, ...req.body });
	res.redirect(`/product/${newId}`);
});

router.post('/seedDatabase', async (req, res) => {
	const usersResult = JSON.parse(fs.readFileSync('./users.json', 'utf8')).body;
	await User.insertMany(usersResult);
	const categoryResult = JSON.parse(fs.readFileSync('./categories.json', 'utf8')).body;
	await Category.insertMany(categoryResult);
	const productResult = JSON.parse(fs.readFileSync('./product.json', 'utf8')).body;
	await Product.insertMany(productResult);
	res.send({
		statusCode: 200,
		data: 'Seed successfully',
	});
});

router.delete('/clearDatabase', async (req, res) => {
	await User.remove({});
	await Category.remove({});
	await Product.remove({});
	res.send({
		statusCode: 200,
		data: 'Clean Database successfully',
	});
});

router.post('/users', async (req, res) => {
	res.json(req.params);
});

module.exports = router;
