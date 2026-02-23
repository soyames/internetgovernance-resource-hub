// Routes for the Internet Governance Resource Hub
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

/**
 * Setup routes for the application
 * @param {Express.Application} app - Express application instance
 * @param {object} config - Application configuration
 */
export function setupRoutes(app, config) {
    // Main routes for each section
    app.get('/', (req, res) => {
        res.sendFile(join(projectRoot, 'index.html'));
    });

    app.get('/conferences-events', (req, res) => {
        res.sendFile(join(projectRoot, 'conferences-events', 'conferences-events.html'));
    });

    app.get('/fellowships-scholarships', (req, res) => {
        res.sendFile(join(projectRoot, 'fellowships-scholarships', 'fellowships-scholarships.html'));
    });

    app.get('/funding', (req, res) => {
        res.sendFile(join(projectRoot, 'funding', 'funding.html'));
    });

    app.get('/jobs-internships', (req, res) => {
        res.sendFile(join(projectRoot, 'jobs-internships', 'jobs-internships.html'));
    });

    // API endpoints for configuration
    app.get('/api/config', (req, res) => {
        res.json({
            appName: config.appName,
            version: config.version,
            description: config.description,
            routes: config.routes
        });
    });

    // API endpoint for colors
    app.get('/api/colors', (req, res) => {
        res.json(config.colors);
    });

    // Health check endpoint
    app.get('/api/health', (req, res) => {
        res.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    });

    // Documentation endpoint
    app.get('/api/docs', (req, res) => {
        res.json({
            message: 'Internet Governance Resource Hub API',
            version: config.version,
            endpoints: [
                {
                    path: '/api/config',
                    method: 'GET',
                    description: 'Get application configuration'
                },
                {
                    path: '/api/colors',
                    method: 'GET',
                    description: 'Get theme colors'
                },
                {
                    path: '/api/health',
                    method: 'GET',
                    description: 'Get server health status'
                },
                {
                    path: '/api/docs',
                    method: 'GET',
                    description: 'Get API documentation'
                }
            ]
        });
    });
}

export default setupRoutes;
