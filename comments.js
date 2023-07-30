// Create web server

// Import express
const express = require('express');
const bodyParser = require('body-parser');

// Create the server
const app = express();

// Add middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add a route
app.get('/api/comments', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});