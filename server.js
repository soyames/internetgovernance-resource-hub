import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import config from './config/config.js';
import { requestLogger, cacheControl, securityHeaders, errorHandler, notFound } from './src/middleware.js';
import setupRoutes from './src/routes.js';

const app = express();
const PORT = config.port;

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Security and compression middleware
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));
app.use(compression());

// Custom middleware
app.use(requestLogger);
app.use(cacheControl);
app.use(securityHeaders);

// Serve static files from root directory
app.use(express.static(__dirname));

// Setup routes
setupRoutes(app, config);

// 404 handler
app.use(notFound);

// Error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log('');
    console.log(`🌐 ${config.appName}`);
    console.log(`📍 Running on http://localhost:${PORT}`);
    console.log(`🔧 Environment: ${config.environment}`);
    console.log(`📦 Version: ${config.version}`);
    console.log('');
    console.log('Press Ctrl+C to stop the server');
    console.log('');
});
