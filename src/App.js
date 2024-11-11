import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import Home from "./components/Home";
import ImageCarousel from './components/ImageCarousel';
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path='/carousel' element={<ImageCarousel />} />
        </Routes>
      </Router>
    </>
  );
}