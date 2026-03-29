import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EnhancePage from "./EnhancePage";
import GenerateImagePage from "./GenerateImagePage";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enhance" element={<EnhancePage />} />
        <Route path="/generate-image" element={<GenerateImagePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;