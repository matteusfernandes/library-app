FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3001

# Wait for database and run migrations/seeds, then start server
CMD ["sh", "-c", "sleep 10 && npm run db:reset && npm start"]
