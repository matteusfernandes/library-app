import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/livros">Livros</Link>
      <Link to="/pesquisa">Pesquisar</Link>
    </nav>
  </header>;
}

export default Header;
