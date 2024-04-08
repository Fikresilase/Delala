// Import required modules
import express from "express";


// Create an Express application
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Define a route
app.get("/test", (req, res) => {
  res.send("thrill!");
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.send("success");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
