const fs = require('fs');
const { format } = require('date-fns');
const XLSX = require('xlsx');
let productList = [];

fs.readFile('./products.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	if (data) {
		jsonData = JSON.parse(data);
		productList = jsonData.map((item) => {
			let date = format(new Date(item.dateUpdated), 'MM/dd/yyyy');
			delete item.dateUpdated;
			return {
				...item,
				update: date,
			};
		});
		const ws = XLSX.utils.json_to_sheet(productList);
		ws['!cols'] = [{ width: 10 }, { width: 25 }, { width: 20 }, { width: 20 }, { width: 20 }];

		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Products');
		XLSX.writeFile(wb, 'Product-New.xlsx');

		// const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
		// fs.writeFile('Products.xlsx', buf, (err) => {
		// 	if (err) {
		// 		console.error(err);
		// 		return;
		// 	}
		// 	console.log('success');
		// });
	}
});
