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

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/', function (req, res) {
	res.send('Got a POST request');
});

app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
