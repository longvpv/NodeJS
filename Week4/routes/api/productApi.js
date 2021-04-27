var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.post('/editProduct', (req, res) => {
	// let result = JSON.parse(req.body);
	res.send(req.body);
});

module.exports = router;
