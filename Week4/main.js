const mongoose = require('mongoose');
const fs = require('fs');
mongoose
	.connect('mongodb://admin:Abcd1234@localhost:27017/Long-database?authSource=admin', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		// connect success
		console.log('Connected');
	})
	.catch((err) => console.log(err));
