import React from "react";
import Home from "./Features/Home/Container";
import Product from "./Features/Product/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/" element={<Home />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
