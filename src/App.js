import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import Receitas from './pages/receitas';
import Sobre from './pages/sobre';
import Contato from './pages/contato';

function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
