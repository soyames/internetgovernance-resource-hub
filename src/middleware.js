// Express middleware for the application

/**
 * Request logging middleware
 */
export function requestLogger(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const statusColor = res.statusCode < 400 ? '✓' : '✗';
        console.log(
            `${statusColor} ${req.method.padEnd(6)} ${req.path.padEnd(30)} - ${res.statusCode} (${duration}ms)`
        );
    });
    next();
}

/**
 * Middleware to serve cache headers
 */
export function cacheControl(req, res, next) {
    // Cache static assets for 1 week
    if (req.path.match(/\.(jpg|jpeg|png|gif|ico|css|js|pdf|zip|woff|woff2|ttf|svg)$/)) {
        res.set('Cache-Control', 'public, max-age=604800');
    } else {
        // Don't cache HTML pages
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
    }
    next();
}

/**
 * Middleware to add security headers
 */
export function securityHeaders(req, res, next) {
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('X-Frame-Options', 'SAMEORIGIN');
    res.set('X-XSS-Protection', '1; mode=block');
    res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
}

/**
 * Middleware to handle 404 errors
 */
export function notFound(req, res) {
    res.status(404).send(
        '<h1>404 - Page Not Found</h1>' +
        '<p>The page you are looking for does not exist.</p>' +
        '<p><a href="/">Return to home</a></p>'
    );
}

/**
 * Error handling middleware
 */
export function errorHandler(err, req, res, next) {
    console.error(`${new Date().toISOString()} - Error:`, err);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
}

export default {
    requestLogger,
    cacheControl,
    securityHeaders,
    notFound,
    errorHandler
};
