@echo off
REM Internet Governance Resource Hub - Development Server
REM This script starts the Node.js server on port 8000

echo.
echo 🌐 Starting Internet Governance Resource Hub...
echo Installing dependencies (if needed)...

REM Check if node_modules exists
if not exist "node_modules\" (
    call npm install
)

echo Starting development server...
call npm start

pause
