#!/usr/bin/env node
/**
 * Quick Setup Script for Internet Governance Resource Hub
 * 
 * This script helps you quickly set up the JavaScript/Node.js environment
 * Usage: node setup.js
 */

import { execSync, spawnSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('\n🌐 Internet Governance Resource Hub - Setup');
console.log('═'.repeat(50));

// Check Node.js version
const nodeVersion = process.version;
console.log(`✓ Node.js ${nodeVersion}`);

// Check npm installation
try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`✓ npm ${npmVersion}`);
} catch (error) {
    console.error('✗ npm not found. Please install Node.js with npm.');
    process.exit(1);
}

// Check if node_modules exists
console.log('\n📦 Checking dependencies...');
const nodeModulesPath = resolve(__dirname, 'node_modules');

if (existsSync(nodeModulesPath)) {
    console.log('✓ Dependencies already installed');
} else {
    console.log('Installing npm packages...');
    try {
        execSync('npm install', { 
            stdio: 'pipe',
            cwd: __dirname 
        });
        console.log('✓ Dependencies installed successfully');
    } catch (error) {
        console.error('✗ Failed to install dependencies');
        console.error(error.message);
        process.exit(1);
    }
}

// Create .env if it doesn't exist
console.log('\n⚙️ Checking configuration...');
const envPath = resolve(__dirname, '.env');
const envExamplePath = resolve(__dirname, '.env.example');

if (!existsSync(envPath) && existsSync(envExamplePath)) {
    try {
        const fs = await import('fs/promises');
        // This part would copy .env.example to .env
        console.log('📝 .env file not found. Using defaults.');
        console.log('   Tip: Create .env file to customize settings');
    } catch (error) {
        // Silent fail - not critical
    }
}

// Display next steps
console.log('\n✅ Setup Complete!');
console.log('═'.repeat(50));
console.log('\n🚀 Next Steps:\n');
console.log('1. Start the server:');
console.log('   npm start\n');
console.log('2. Open your browser:');
console.log('   http://localhost:8000\n');
console.log('3. For development with auto-reload:');
console.log('   npm install -g nodemon');
console.log('   npm run dev\n');
console.log('📚 For more information, see:');
console.log('   - JAVASCRIPT_SETUP.md');
console.log('   - DEVELOPMENT.md\n');
