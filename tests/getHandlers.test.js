// eslint-disable-next-line no-undef
const config = require('../config');

test('Expected to return 200 status code....', async () => {
	let actualStatusCode;
	
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
		
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
	
});

test('Expected response body contains....', async () => {
	
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody.name).toBe("For picnic");
	console.log("Actual Response Body:");
	console.log(actualResponseBody);
	
});

test('Expected to return 200 status code....', async () => {
	let actualResponseBody;
	let actualStatusCode;
	
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualResponseBody = await response.json();
		actualStatusCode = response.status;
		
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
	
	console.log("Actual return Status for GET Courier services:", actualStatusCode);
	console.log("Actual Response Body for GET Courier services:", actualResponseBody);
	
});

test('Expected to return 200 status code....', async () => {
	let actualResponseBody;
	let actualStatusCode;
	
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
	console.log("Actual return Status for GET list of warehouses:", actualStatusCode);
	console.log("Actual Response Body for GET list of warehouse:", actualResponseBody);
	
});