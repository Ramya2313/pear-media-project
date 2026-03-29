import React, { useState } from "react";

const GenerateImagePage = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;
    const res = await fetch("http://localhost:5001/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImage(data.image);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Generate Image</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter image prompt"
      />
      <button onClick={handleGenerate}>Generate</button>
      {image && <img src={image} alt="Generated" style={{ marginTop: "10px" }} />}
    </div>
  );
};

export default GenerateImagePage;