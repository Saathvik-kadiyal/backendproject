require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public folder (images and db.json)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve db.json directly
app.get("/api/pets", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "db.json"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
