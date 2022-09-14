import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <nav>
        <Link className="link-text" to="/">Home</Link>
        <Link className="link-text" to="/livros">Livros</Link>
        <Link className="link-text" to="/pesquisa">Pesquisar</Link>
      </nav>
    </header>
  );
}

export default Header;
