// eslint-disable-next-line no-undef
const config = require('../config');

test('Response status to DELETE existing kit', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	actualStatusCode = response.status;
	expect(actualStatusCode).toBe(200);
});

test('Response status to DELETE non-existent kit', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/99`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	actualStatusCode = response.status;
	expect(actualStatusCode).toBe(404);
});