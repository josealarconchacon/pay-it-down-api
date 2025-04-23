# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with memory optimization and increased memory limit
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm install --no-audit --no-fund --prefer-offline --no-optional

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

# Set NODE_OPTIONS to enable crypto and limit memory
ENV NODE_OPTIONS="--experimental-crypto-policy=legacy --max-old-space-size=1024"
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install production dependencies only with memory optimization
RUN npm install --only=production --no-audit --no-fund --prefer-offline --no-optional

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"] 