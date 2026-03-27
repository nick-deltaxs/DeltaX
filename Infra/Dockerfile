# Development Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY ../Codebase/package*.json ./
COPY ../Codebase/tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY ../Codebase/ ./

# Expose port
EXPOSE 3000

# Set environment
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=development

# Start development server
CMD ["npm", "run", "dev"]
