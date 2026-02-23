# JavaScript Project Structure & Guide

This project has been converted to JavaScript/Node.js with Express.js as the web framework.

## 📁 Project Structure

```
internetgovernance-resource-hub/
├── config/
│   └── config.js                 # Application configuration
├── src/
│   ├── middleware.js             # Express middleware
│   ├── routes.js                 # Route definitions
│   └── utils.js                  # Utility functions
├── conferences-events/
│   ├── conferences-events.html   # Conferences & Events page
│   └── README.md
├── fellowships-scholarships/
│   ├── fellowships-scholarships.html
│   └── README.md
├── funding/
│   ├── funding.html
│   └── README.md
├── jobs-internships/
│   ├── jobs-internships.html
│   └── README.md
├── .gitignore                    # Git ignore file
├── package.json                  # NPM dependencies & scripts
├── server.js                     # Main Express server
├── serve.sh                      # Unix/Linux startup script
├── serve.bat                     # Windows startup script
├── index.html                    # Main homepage
├── README.md                     # Original project documentation
└── CONTRIBUTING.md               # Contribution guidelines
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   **On Windows:**

   ```bash
   serve.bat
   ```

   **On macOS/Linux:**

   ```bash
   ./serve.sh
   ```

   **Or use npm:**

   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8000`

## 📦 NPM Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm start`     | Start the development server on port 8000  |
| `npm run dev`   | Start development server (alias for start) |
| `npm run serve` | Start server (alias for start)             |

## 🔧 Configuration

Application configuration is managed in [config/config.js](config/config.js):

```javascript
{
    appName: 'Internet Governance Resource Hub',
    version: '1.0.0',
    port: 8000,
    environment: 'development',
    colors: { /* theme colors */ },
    routes: [ /* route definitions */ ]
}
```

## 📡 API Endpoints

The application provides the following API endpoints:

### Configuration APIs

- **GET `/api/config`** - Get application configuration
- **GET `/api/colors`** - Get theme color scheme
- **GET `/api/health`** - Health check endpoint
- **GET `/api/docs`** - API documentation

### Example Request

```bash
curl http://localhost:8000/api/config
```

## 🛠️ Modules

### Middleware (`src/middleware.js`)

- `requestLogger` - Logs all HTTP requests
- `cacheControl` - Sets appropriate cache headers
- `securityHeaders` - Adds security headers
- `notFound` - Handles 404 errors
- `errorHandler` - Global error handler

### Routes (`src/routes.js`)

Manages all application routes:

- Root pages
- API endpoints
- Static asset serving

### Utilities (`src/utils.js`)

Helper functions for common tasks:

- `formatDate()` - Format dates consistently
- `createSlug()` - Convert text to URL-friendly slugs
- `truncateText()` - Trim text with suffix
- `escapeHtml()` - Escape HTML special characters
- `highlightText()` - Highlight search terms in text
- `generateId()` - Generate unique IDs
- `isEmpty()` - Check if object is empty
- `deepClone()` - Deep clone objects

## 📝 Environment Variables

Create a `.env` file in the root directory to override defaults:

```env
PORT=8000
NODE_ENV=development
```

## 🔒 Security Features

- **Helmet.js** - HTTP headers security middleware
- **Compression** - Response compression for better performance
- **Cache Control** - Smart caching for static vs dynamic content
- **XSS Protection** - Security headers including X-XSS-Protection

## 📊 Development

### Adding New Routes

Edit [src/routes.js](src/routes.js):

```javascript
app.get("/new-section", (req, res) => {
  res.sendFile(join(projectRoot, "new-section", "index.html"));
});
```

### Adding New Utils

Edit [src/utils.js](src/utils.js) and export new functions:

```javascript
export function newUtil(params) {
  // implementation
}
```

### Adding Middleware

Edit [src/middleware.js](src/middleware.js) and apply in [server.js](server.js):

```javascript
app.use(newMiddleware);
```

## 📦 Dependencies

| Package     | Version | Purpose                     |
| ----------- | ------- | --------------------------- |
| express     | ^4.18.2 | Web framework               |
| compression | ^1.7.4  | Response compression        |
| helmet      | ^7.1.0  | Security headers            |
| nodemon     | ^3.0.2  | Auto-reload on file changes |

## 🐛 Troubleshooting

### Port Already in Use

If port 8000 is already in use, you can specify a different port:

```bash
PORT=3000 npm start
```

### Node Modules Issues

Clear and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found

Ensure you're in the project root directory and have run `npm install`:

```bash
cd c:\Users\Kojo Shaddy\Desktop\Shaddy\Web\internetgovernance-resource-hub
npm install
npm start
```

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [JavaScript Standard Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 🤝 Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## 📄 License

See [LICENSE](LICENSE) file for details.

---

**Last Updated:** February 6, 2026  
**JavaScript Version:** 1.0.0
