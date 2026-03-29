const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Enhance text
app.post("/enhance", (req, res) => {
  const { text } = req.body;
  res.json({ result: text ? text.toUpperCase() : "" });
});

// Generate image
app.post("/generate-image", (req, res) => {
  const { prompt } = req.body;
  res.json({ image: "https://via.placeholder.com/300?text=" + encodeURIComponent(prompt || "No Prompt") });
});

// Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));