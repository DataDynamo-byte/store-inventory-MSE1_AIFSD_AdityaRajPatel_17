# Store Inventory Management API

A RESTful API for managing store inventory built with **Node.js**, **Express.js**, and **MongoDB**.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Environment:** dotenv

## Setup & Installation

```bash
git clone https://github.com/DataDynamo-byte/store-inventory-MSE1_AIFSD_AdityaRajPatel_17.git
cd store-inventory-MSE1_AIFSD_AdityaRajPatel_17
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the server:

```bash
npm start
```

## Product Schema

| Field | Type | Validation |
|-------|------|------------|
| productName | String | Required |
| productCode | String | Required, Unique |
| category | String | Electronics, Clothing, Food, Furniture, Other |
| supplierName | String | Required |
| quantityInStock | Number | Min: 0 |
| reorderLevel | Number | Min: 1 |
| unitPrice | Number | Min: 0 |
| manufactureDate | Date | - |
| productType | String | Perishable / Non-Perishable |
| status | String | Available / Out of Stock (Default: Available) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/products` | Add a new product |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| PUT | `/api/products/:id` | Update product details |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/search?name=xyz` | Search product by name |
| GET | `/api/products/category?cat=xyz` | Filter by category |

## HTTP Status Codes

- `200` — Success
- `201` — Created
- `400` — Bad Request
- `404` — Not Found
- `500` — Server Error

## Deployment

- **GitHub:** [Repository Link](https://github.com/DataDynamo-byte/store-inventory-MSE1_AIFSD_AdityaRajPatel_17)
- **Render:** https://store-inventory-api-j9v2.onrender.com/

## Author

**Aditya Raj Patel**
B.Tech 4th Semester — AI308B, AI Driven Full Stack Development (MSE-1)
