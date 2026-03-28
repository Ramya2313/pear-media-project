const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Add your API key here
const openai = new OpenAI({
  apiKey: "YOUR_API_KEY_HERE",
});

// TEXT ENHANCEMENT
app.post("/enhance", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Improve this prompt professionally: ${text}`,
        },
      ],
    });

    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error generating text" });
  }
});

// IMAGE GENERATION
app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt || "A beautiful futuristic city",
      size: "1024x1024",
    });

    res.json({ image: response.data[0].url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error generating image" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});