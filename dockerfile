# Use the official Node.js 20 image as the build stage
FROM node:20 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema and generate Prisma client
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Use the official Node.js 20 image as the runtime stage
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Expose the application port (default for Next.js is 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
