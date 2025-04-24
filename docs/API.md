# API Documentation

## Authentication

All API endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Authentication Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

## Credit Cards

### List Credit Cards

```http
GET /api/credit-cards
```

### Create Credit Card

```http
POST /api/credit-cards
Content-Type: application/json

{
  "name": "My Credit Card",
  "balance": 5000.00,
  "apr": 18.99,
  "minimumPayment": 35.00,
  "dueDate": "2024-05-15",
  "lateFee": 35.00
}
```

### Get Credit Card

```http
GET /api/credit-cards/:id
```

### Update Credit Card

```http
PUT /api/credit-cards/:id
Content-Type: application/json

{
  "balance": 4500.00,
  "minimumPayment": 40.00
}
```

### Delete Credit Card

```http
DELETE /api/credit-cards/:id
```

## Payment Strategies

### List Strategies

```http
GET /api/strategies
```

### Create Strategy

```http
POST /api/strategies
Content-Type: application/json

{
  "name": "Debt Snowball",
  "description": "Pay off smallest balances first",
  "monthlyPayment": 500.00
}
```

### Get Strategy

```http
GET /api/strategies/:id
```

### Update Strategy

```http
PUT /api/strategies/:id
Content-Type: application/json

{
  "monthlyPayment": 600.00
}
```

### Delete Strategy

```http
DELETE /api/strategies/:id
```

### Get Monthly Payments

```http
GET /api/strategies/:id/monthly-payments
```

## Extra Payments

### List Extra Payments

```http
GET /api/payments/extra
```

### Create Extra Payment

```http
POST /api/payments/extra
Content-Type: application/json

{
  "creditCardId": "uuid",
  "amount": 100.00,
  "paymentDate": "2024-04-15"
}
```

### Get Extra Payment

```http
GET /api/payments/extra/:id
```

### Delete Extra Payment

```http
DELETE /api/payments/extra/:id
```

## Error Responses

The API uses standard HTTP status codes and returns errors in the following format:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "error": "Bad Request"
}
```

Common status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Rate Limiting

The API implements rate limiting to prevent abuse. Limits are:

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## Pagination

Endpoints that return lists support pagination using query parameters:

```
?page=1&limit=10
```

Response format for paginated endpoints:

```json
{
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```
