var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
	// res.render('userLogin');
	res.send('To Admin / Login roi ne !');
});

module.exports = router;
