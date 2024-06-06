// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 
{
	"price": [33]
}

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/77`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});
