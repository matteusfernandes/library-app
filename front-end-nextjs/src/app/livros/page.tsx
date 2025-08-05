'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BookCard from '../../components/BookCard';
import api from '../../lib/api';

interface Book {
  id: number;
  titulo: string;
  editora: string;
  anoPublicacao: number;
}

export default function LivrosPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/livros');
      setBooks(response.data);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar livros:', err);
      setError('Erro ao carregar livros. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este livro?')) return;
    
    try {
      await api.delete(`/livros/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (err) {
      console.error('Erro ao deletar livro:', err);
      setError('Erro ao deletar livro. Tente novamente.');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-parchment-50 via-warm-50 to-sage-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Meus Livros
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore sua coleção de livros e descubra novos mundos através da leitura.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-6 flex items-center shadow-sm">
            <span className="text-xl mr-3">⚠️</span>
            <span>{error}</span>
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600"></div>
            <p className="mt-4 text-slate-600">Carregando livros...</p>
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-8xl mb-6">📖</div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">Nenhum livro encontrado</h3>
            <p className="text-slate-600 mb-8">Que tal adicionar o primeiro livro à sua coleção?</p>
            <a
              href="/cadastro"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium text-lg rounded-lg hover:bg-slate-700 transition-colors"
            >
              Cadastrar Primeiro Livro
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onDelete={() => handleDeleteBook(book.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
