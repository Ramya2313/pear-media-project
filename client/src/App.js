import React, {useState} from "react";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    if (text.trim() === "") {
      setResult("Please enter some text");
      return;
    }

    // Simple PR-style formatted output
    const generatedText = `🚀 Press Release:

"${text}"

📢 This announcement highlights key updates and important information for the audience.

Thank you!`;

    setResult(generatedText);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PR Media Generator</h1>

      <textarea
        style={styles.textarea}
        placeholder="Enter your content here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button style={styles.button} onClick={handleGenerate}>
        Generate
      </button>

      {result && (
        <div style={styles.resultBox}>
          <h3>Generated Output:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  heading: {
    marginBottom: "20px",
  },
  textarea: {
    width: "300px",
    height: "100px",
    padding: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    width: "320px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default App;