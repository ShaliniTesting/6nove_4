// Import the Express.js framework
const express = require('express');

// Create an Express application instance
const app = express();

// Configure the server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Define the root endpoint that returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define the evening endpoint that returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Try visiting: http://localhost:${PORT}/`);
  console.log(`Try visiting: http://localhost:${PORT}/evening`);
});
