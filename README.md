# Pay It Down API

Backend API for the Pay It Down application, built with NestJS and PostgreSQL.

## Prerequisites

- Node.js (v16 or later)
- PostgreSQL (v12 or later)
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd pay-it-down-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a PostgreSQL database:

```sql
CREATE DATABASE pay_it_down;
```

4. Configure environment variables:
   Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

5. Update the `.env` file with your configuration:
   - Database credentials
   - JWT secret and expiration
   - CORS origin
   - API prefix
   - Port number

## Running the Application

### Development

```bash
# Start in development mode with hot reload
npm run start:dev
```

### Production

```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

## API Endpoints

### Credit Cards

- `GET /api/credit-cards` - Get all credit cards
- `POST /api/credit-cards` - Create a new credit card
- `GET /api/credit-cards/:id` - Get a specific credit card
- `PUT /api/credit-cards/:id` - Update a credit card
- `DELETE /api/credit-cards/:id` - Delete a credit card

## Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```
