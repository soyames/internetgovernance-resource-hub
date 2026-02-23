#!/bin/bash
# Internet Governance Resource Hub - Development Server
# This script starts the Node.js server on port 8000

echo "🌐 Starting Internet Governance Resource Hub..."
echo "Installing dependencies (if needed)..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    npm install
fi

echo "Starting development server..."
npm start
