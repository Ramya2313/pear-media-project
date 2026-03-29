import React, { useState } from "react";

const EnhancePage = () => {
  const [text, setText] = useState("");
  const [enhanced, setEnhanced] = useState("");

  const handleEnhance = async () => {
    if (!text) return;
    const res = await fetch("http://localhost:5001/enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setEnhanced(data.result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enhance Text</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleEnhance}>Enhance</button>
      <p>Result: {enhanced}</p>
    </div>
  );
};

export default EnhancePage;