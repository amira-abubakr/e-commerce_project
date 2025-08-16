import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignupSection from "./pages/SignUp";

import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<ProductList />} />
        {/* Add more routes as needed */}
      </Routes>
      
    </div>
  );
}

export default App;
