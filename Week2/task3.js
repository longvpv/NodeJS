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
			// let date = format(new Date(item.dateUpdated), 'MM/dd/yyyy');
			// return {
			// 	...item,
			// 	dateUpdated: date,
			// };
			delete item.dateUpdated;
			return item;
		});
		// console.log(productList);
		const ws = XLSX.utils.json_to_sheet(productList);
		ws['!cols'] = [{ width: 10 }, { width: 25 }, { width: 20 }, { width: 20 }, { width: 20 }];
		// console.log(ws);

		// create 'workbook' object (which contains multiple sheet)
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Products');

		// convert to Microsoft EXCEL workbook and write to a Buffer object
		const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
		fs.writeFile('Products.xlsx', buf, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('success');
		});
	}
});
