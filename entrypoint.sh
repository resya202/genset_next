#!/bin/bash

# Pull the latest Prisma database schemas
echo "Pulling Prisma database schemas..."
npm run coredb:pull
npm run transdb:pull

# Pull the latest Prisma database schemas
echo "Generating Prisma database schemas..."
npm run coredb:generate
npm run transdb:generate