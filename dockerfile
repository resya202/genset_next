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

# Copy only the built app and necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Expose the application port (default for Next.js is 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
