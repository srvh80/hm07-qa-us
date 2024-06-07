// eslint-disable-next-line no-undef
const config = require('../config');

test('Response status to DELETE existing kit', async () => {
	let actualStatusCode;
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	console.log("Response status for DELETE on product id =4:",actualStatusCode);
	console.log("Response body for DELETE on product id =4:", actualResponseBody);
	expect(actualStatusCode).toBe(200);
	expect(actualResponseBody).toBeTruthy();

});

test('Response status to DELETE non-existent kit', async () => {
	let actualStatusCode;
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/400`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	console.log("Response status for DELETE on non-existent kit:",actualStatusCode);
	console.log("Response body for DELETE on product id =400:", actualResponseBody);
	expect(actualStatusCode).toBe(200);
	expect(actualResponseBody).toBeTruthy();

});