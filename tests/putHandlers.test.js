// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 
{
	"price": 33
}

test('Response status and body for PUT price:', async () => {
	let actualResponseBody;
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/77`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
	expect(actualResponseBody).toBeTruthy();

	console.log("Response status for PUT on product price on id =77:",actualStatusCode);
	console.log("Response body for PUT on product price on id =77:",actualResponseBody);
});

test('Response status and body for PUT an order:', async () => {
	let actualResponseBody;
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2/complete`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(401);
	expect(actualResponseBody).toBeTruthy();

	console.log("Response status for PUT on product price on id =2:",actualStatusCode);
	console.log("Response body for PUT on product price on id =2:",actualResponseBody);
});