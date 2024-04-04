// Import required modules
import express from 'express';

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

