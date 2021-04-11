const fs = require('fs');
const moment = require('moment');

let productList = [];
fs.readFile('./products.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	if (data) {
		productList = data;
	}
	// console.log(productList);
	console.log('This is date', moment('Mon Jan 01 2018 00:00:00 GMT+0100 (CET)'));
	// if (productList.length >= 1) {
	// 	const result = productList.map((product) => {
	// 		let newDate = moment(product.dateUpdated).format('MM/DD/YYYY');
	// 		return {
	// 			dateUpdated: newDate,
	// 			...product,
	// 		};
	// 	});
	// 	console.log(result);
	// }
});
