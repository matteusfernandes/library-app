'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import BookCard from '../../components/BookCard';
import api from '../../lib/api';

interface Book {
  id: number;
  titulo: string;
  editora: string;
  anoPublicacao: number;
}

export default function Pesquisa() {
  const [idToSearch, setIdToSearch] = useState('');
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdToSearch(e.target.value);
    setError(null);
  };

  const searchBook = async () => {
    if (!idToSearch.trim()) {
      setError('Por favor, digite um ID para pesquisar.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setBook(null);
      
      const response = await api.get(`/livros/${idToSearch}`);
      setBook(response.data);
    } catch (err) {
      console.error('Erro ao pesquisar livro:', err);
      setError('Livro não encontrado!');
      setBook(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchBook();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-parchment-50 via-warm-50 to-sage-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Pesquisar Livros
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encontre exatamente o que você está procurando em nossa coleção.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-book mb-8 border border-warm-300">
            <div className="space-y-4">
              <Input
                type="text"
                label="🔢 ID do Livro"
                placeholder="Digite o ID do livro (ex: 1, 2, 3...)"
                value={idToSearch}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <Button
                onClick={searchBook}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Pesquisando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🔍</span>
                    Pesquisar
                  </span>
                )}
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-gradient-to-r from-accent-100 to-accent-200 border border-accent-400 text-accent-700 px-6 py-4 rounded-lg mb-6 flex items-center shadow-sm">
              <span className="text-xl mr-3">❌</span>
              <span>{error}</span>
            </div>
          )}
          
          {book && (
            <div className="animate-fade-in">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">✨</div>
                <h2 className="text-xl font-serif font-semibold text-secondary-700">
                  Livro Encontrado!
                </h2>
              </div>
              <BookCard book={book} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
