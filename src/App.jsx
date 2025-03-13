import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Foot from "./components/fotter";
import Main from "./mainpage";
import Login from "./Login";
import About from "./about";
import Book from "./booking";
import SignUp from "./signup";
import Home from "./Home";  

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
       
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
