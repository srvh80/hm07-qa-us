# Sprint 7 project
Task 1: Tests for GET requests

Path: \hm07-qa-us\tests\getHandlers.test.js

Run command: npx jest getHandlers.test.js

For the first task, we need to select one endpoint from the Urban Grocers documentation and write tests:

Test 1:
Check the response status code for /api/v1/kits/1
Parse the response body contains the expected data for /api/v1/kits/1

Test 2:
Check the response status code for /api/v1/couriers
Parse the response body contains the expected data for /api/v1/couriers

Test 3:
Check the response status code for api/v1/warehouses
Parse the response body contains the expected data for api/v1/warehouses

****************************************************************************************************************

Task 2: Tests for POST requests

Path: \hm07-qa-us\tests\postHandlers.test.js

Run command: npx jest postHandlers.test.js

Test 1:
Check the response status code for api/v1/warehouses/amount
Parse the response body contains the expected data for api/v1/warehouses/amount

Test 2:
Check the response status code for /api/v1/couriers/check
Parse the response body contains the expected data for /api/v1/couriers/check
****************************************************************************************************************

Task 3: Tests for PUT requests
In the third task, we need to choose one endpoint from the Urban Grocers documentation and write at least two tests:

Path: \hm07-qa-us\tests\putHandlers.test.js

Run command: npx jest putHandlers.test.js

Test 1:
Check the response status code for /api/v1/products/77
Parse the response body contains the expected data for /api/v1/products/77

Test 2:
Check the response status code for /api/v1/orders/2/complete
Parse the response body contains the expected data for /api/v1/orders/2/complete
****************************************************************************************************************

Task 4: Tests for DELETE requests
In the fourth task, we need to choose one handler from the Urban Grocers documentation and write at least two tests:

Path: \hm07-qa-us\tests\deleteHandlers.test.js

Run command: npx jest deleteHandlers.test.js

Test 1:
Check the response status code for /api/v1/kits/4
Parse the response body contains the expected data for /api/v1/kits/4

Test 2:
Check the response status code for /api/v1/kits/400
Parse the response body contains the expected data for /api/v1/kits/400
