import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignupSection from "./pages/SignUp";

import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupSection />} />
      </Routes>
    </div>
  );
}

export default App;
