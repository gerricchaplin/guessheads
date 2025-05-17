# Use Node.js LTS version with Alpine for a smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for development)
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the backend server port
EXPOSE 8080

# Set environment variables
ENV NODE_ENV=development
ENV PORT=8080

# Start the development server
CMD ["npm", "run", "dev"]
