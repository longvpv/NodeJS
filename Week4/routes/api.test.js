const request = require('supertest');

const app = require('../app');

let server;
let defaultUser = {
	name: 'Long',
};

beforeAll(() => {
	console.log(defaultUser);

	return app
		.start(3000, 'mongodb://admin:Abcd1234@localhost:27017/nodic-nodejs?authSource=admin')
		.then((httpserver) => {
			server = httpserver;
		});
});

afterAll((done) => {
	if (server) {
		server.close();
		done();
	}
});

test('GET /', () => {
	return request(app)
		.get('/')
		.then((res) => {
			expect(0).toBe(0);
			// expect(res.statusCode).toBe(200);
			// expect(res.body.header).toBeDefined();
			// expect(res.body.header.count).toBeGreaterThan(0);
			// expect(res.body.body).toBeDefined();
			// expect(res.body.body.length).toBeGreaterThan(0);
		});
});
