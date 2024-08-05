import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/HomePage";
import Layout from "./Components/Layout";
import ScrollToTop from './Components/ScrollToTop';
import Resource from "./Pages/Resource";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
function App() {
  return (
    
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Resource" element={<Resource />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Contact" element={<Contact />} />
    </Route>
    <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
