// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 
{
 	"ids": [ 1,	4, 44]
}

test('Response body for goods in warehouses:', async () => {
	let actualResponseBody;
	let actualStatusCode;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, 
		{
			method: 'POST',
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
	
	console.log("Response body for POST to Check the quantity of goods in warehouses:",actualResponseBody);
	console.log("Response Status code for POST:",actualStatusCode);

});

const requestBody2 = {
  
		"products": [
			{
				"id": 1,
				"quantity": 3
			},
			{
				"id": 4,
				"quantity": 1
			},
			{
				"id": 9,
				"quantity": 3
			}
		],
		"deliveryTime": 7
	
}

test('Response body for courier check:', async () => {
    let actualResponseBody;
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, 
		{
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		actualResponseBody = await response.json();
		actualStatusCode = response.status;

	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatusCode).toBe(200);
	expect(actualResponseBody).toBeTruthy();

	console.log("Response body for courier check:", actualResponseBody);
	console.log("Response Status code for POST:",actualStatusCode);
});