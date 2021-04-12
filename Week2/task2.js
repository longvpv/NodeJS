const fs = require('fs');
const { formatDistanceToNow, subDays } = require('date-fns');
const vi = require('date-fns/locale/vi');
let productList = [];
fs.readFile('./products.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	if (data) {
		jsonData = JSON.parse(data);
		productList = jsonData.map((item) => {
			let date = new Date(item.dateUpdated);
			return {
				...item,
				dateUpdated: date,
			};
		});
		console.log('Total product:', productList.length);
		productList.forEach((product) => {
			let priceFormatted = new Intl.NumberFormat().format(product.price);
			let fromDay = formatDistanceToNow(subDays(product.dateUpdated, 3), { locale: vi });
			console.log(`${product.id} - ${product.name} - ${priceFormatted} VNĐ - Cập nhật cách đây ${fromDay}`);
		});
	}
});
