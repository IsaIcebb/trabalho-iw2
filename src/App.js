import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Receitas from "./pages/Receitas";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <nav style={{
        backgroundColor: "#9F7AEA",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-around"
      }}>
        <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>Home</Link>
        <Link to="/receitas" style={{ color: "#fff", fontWeight: "bold" }}>Receitas</Link>
        <Link to="/favoritos" style={{ color: "#fff", fontWeight: "bold" }}>Favoritos</Link>
        <Link to="/sobre" style={{ color: "#fff", fontWeight: "bold" }}>Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;