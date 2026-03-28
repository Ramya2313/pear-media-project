const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example routes
app.post("/enhance", (req, res) => {
  const { text } = req.body;
  // Your enhancement logic here
  res.json({ result: text.toUpperCase() });
});

app.post("/generate-image", (req, res) => {
  const { prompt } = req.body;
  // Your image generation logic here
  res.json({ image: "https://via.placeholder.com/300" });
});

// ← Paste this at the END of server.js
const PORT = process.env.PORT || 5001; // change 5000 to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));