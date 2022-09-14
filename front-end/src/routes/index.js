import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Livros from '../pages/livros';

export default function Router() {
  return (
    <Routes>
      <Route path="/livros" element={ <Livros /> } />
      <Route path="/" element={ <Navigate replace to="/livros" /> } />
    </Routes>
  );
}
