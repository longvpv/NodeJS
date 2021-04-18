var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/admin', function (req, res) {
	res.render('admin');
	// res.send('Got a PUT request at /user');
});

router.get('/admin/users', (req, res) => {
	res.send('Hello World!');
});
module.exports = router;
