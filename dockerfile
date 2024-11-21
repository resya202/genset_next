# Use the official Node.js 20 image as the base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

COPY entrypoint.sh /app/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]

# Build the Next.js app
RUN npm run build

# Expose the application port (default for Next.js is 3000)
EXPOSE 3990

# Start the application
CMD ["npm", "run", "start"]