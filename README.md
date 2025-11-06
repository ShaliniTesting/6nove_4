# Node.js Express Tutorial Server

A simple tutorial project demonstrating how to create a Node.js HTTP server using the Express.js framework with two basic GET endpoints.

## Description

This is an educational Node.js project that showcases:
- Setting up an Express.js web server
- Creating HTTP GET endpoints
- Handling basic HTTP requests and responses
- Configuring server ports with environment variables

The server implements two endpoints:
- A root endpoint (`/`) that returns "Hello world"
- An evening greeting endpoint (`/evening`) that returns "Good evening"

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0.0 or higher)
- **npm** (Node Package Manager, comes with Node.js)
- Basic knowledge of command line operations

To check your Node.js and npm versions:
```bash
node --version
npm --version
```

## Installation

Follow these steps to set up the project:

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd nodejs-express-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install Express.js and all required dependencies listed in `package.json`.

3. **Verify installation**
   Check that the `node_modules` directory has been created and contains the Express.js package.

## Usage

To start the server:

```bash
npm start
```

You should see output indicating the server is running:
```
Server running on port 3000
Try visiting: http://localhost:3000/
Try visiting: http://localhost:3000/evening
```

The server will continue running until you stop it with `Ctrl+C`.

## API Endpoints

### GET /
Returns a simple greeting message.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
```
Hello world
```

**Browser:** Navigate to http://localhost:3000/

---

### GET /evening
Returns an evening greeting message.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

**Browser:** Navigate to http://localhost:3000/evening

## Environment Variables

The server can be configured using the following environment variables:

- **PORT**: The port number on which the server will run (default: 3000)

Example:
```bash
PORT=8080 npm start
```

## Project Structure

```
.
├── server.js          # Main application entry point
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Locked dependency versions
├── .gitignore        # Git ignore patterns
├── README.md         # This file
└── node_modules/     # Installed dependencies (not in version control)
```

## Next Steps

This tutorial provides a foundation for learning Express.js. Consider extending it with:

- Additional endpoints (POST, PUT, DELETE)
- Request parameters and query strings
- Middleware for logging and error handling
- JSON responses instead of plain text
- Database integration
- Authentication and authorization
- Unit tests with Jest or Mocha
- API documentation with Swagger/OpenAPI

## License

MIT