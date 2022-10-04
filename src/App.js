import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/trvl" exact element={<Home />} />
          <Route path="/trvl/products" exact element={<Products />} />
          <Route path="trvl/services" exact element={<Services />} />
          <Route path="trvl/sign-up" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
