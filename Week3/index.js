// const https = require('https');
// const options = {
// 	hostname: 'vnexpress.net',
// 	port: 443,
// 	path: '',
// 	method: 'GET',
// };
// const req = https.request(options, (res) => {
// 	console.log(`statusCode: ${res.statusCode}`);
// 	// console.log(res);
// 	res.on('data', (d) => {
// 		console.log('PART', d.toString('utf8'));
// 	});
// });
// req.on('error', (error) => {
// 	console.error(error);
// });
// ==============================================================

const request = require('request');
request(
	{
		url: 'https://tuoitre.vn',
		gzip: true,
	},
	(error, response, body) => {
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);
	}
);
