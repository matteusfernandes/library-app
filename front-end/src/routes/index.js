import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Livros from '../pages/Livros';
import Pesquisa from '../pages/Pesquisa';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/livros" element={ <Livros /> } />
      <Route path="/pesquisa" element={ <Pesquisa /> } />
      {/* <Route path="/" element={ <Navigate replace to="/livros" /> } /> */}
    </Routes>
  );
}
