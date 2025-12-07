import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const loc = useLocation();
  return (
    <nav className="nav">
      <div className="nav-brand">Receitas da Aluna 🍰</div>
      <div className="nav-links">
        <Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={loc.pathname === '/receitas' ? 'active' : ''} to="/receitas">Receitas</Link>
        <Link className={loc.pathname === '/sobre' ? 'active' : ''} to="/sobre">Sobre</Link>
        <Link className={loc.pathname === '/contato' ? 'active' : ''} to="/contato">Contato</Link>
      </div>
    </nav>
  );
}
