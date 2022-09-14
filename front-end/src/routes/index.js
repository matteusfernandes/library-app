import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Livros from '../pages/Livros';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/livros" element={ <Livros /> } />
      {/* <Route path="/" element={ <Navigate replace to="/livros" /> } /> */}
    </Routes>
  );
}
