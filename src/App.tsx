import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignupSection from "./pages/SignUp";

import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/LogIn.tsx";

//Hager-part
import ProductDetails from "./HagerPart/pages/product-Details/product-Details.jsx"
import Cart from "./HagerPart/pages/cart/cart.jsx"
import ContactPerson from "./HagerPart/pages/contactPerson/contactPerson.jsx"
import Layout from "./pages/Layout.tsx";
import Checkout from "./HagerPart/common/checkout/checkout.jsx";

function App() {
  return (
    <div>
      <Routes>

                        {/*Hager's edits  */}
        <Route  element={<Layout/>} >

             <Route path="/" element={<Home/>} />

                {/*Hager part */}
             <Route path="productDetails" element={<ProductDetails/>} />
             <Route path="cart" element={<Cart/>} />
  
       </Route>

           <Route path="/checkout" element={<Checkout/>}>
      <Route path=""  element={<ContactPerson/>} />
           </Route>


       
       
       {/*Amira part*/}
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}




      </Routes>
      
    </div>
  );
}

export default App;
