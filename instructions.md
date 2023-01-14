You need to write a backend server which should implement below mentioned endpoints.

Products Schema
{
name: string,
description: string,
productImage:string,
date:string,
brand: string,
cost: number
}
Create the following API endpoints

GET
/api/v1/products
Return all products with status code 200.

Sample Response Body Format:

{
"products": [
{
"id": 6392c245a42bc6aea15bc49b,
"name": "Samsung s22 ultra",
"description": "S22 ultra",
"productImage":"https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
"date":"2022-12-09T05:03:47.000Z"
"brand": "SAMSUNG",
"cost": 130000
}
]
{
/api/v1/products/:id
Return a product with matching ID and status 200 if not found return status 404

Sample Response Body Format:

{
"id": 6392c245a42bc6aea15bc49b,
"name": "Samsung s22 ultra",
"description": "S22 ultra",
"productImage":"https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
"date":"2022-12-09T05:03:47.000Z"
"brand": "SAMSUNG",
"cost": 130000
}

POST
/api/v1/products/add
Create a product and return it with status code 201. Server should generate a unique ID for the product.

If name, description , productImage , date, brand, cost is missing, return status code 400.

Sample Request schema:

{
name: required,
description: required,
productImage:required,
date:required,
brand: required,
cost: required
}
Sample Response Body Format:

{

    "name": "samsung s22 ultra",
    "description": "S22 ultra",

"productImage":"https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
"date":"2022-12-09T05:03:47.000Z"
"brand": "SAMSUNG",
"cost": 130000
}

PUT
/api/v1/products/:id
Update name, description , productImage , date , brand, cost of a product using ID

Return the updated product with status code 200

Return a status code 404 if product does not exists

Sample Response Body Format:

{
"name": "samsung s22 ultra",
"description": "S22 ultra",
"productImage":"https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
"date":"2022-12-09T05:03:47.000Z"
"brand": "SAMSUNG",
"cost": 130000
}

DELETE
/api/v1/products/:id
Delete a product using ID

Return status code 200 if product exists else return 404
