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
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-5xl sm:text-6xl mb-4">📚</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Meus Livros
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Explore sua coleção de livros e descubra novos mundos através da leitura.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 sm:px-6 py-3 sm:py-4 rounded-lg mb-4 sm:mb-6 flex items-center shadow-sm mx-2 sm:mx-0">
            <span className="text-lg sm:text-xl mr-2 sm:mr-3">⚠️</span>
            <span className="text-sm sm:text-base">{error}</span>
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-slate-600"></div>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base">Carregando livros...</p>
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-8 sm:py-12 px-4">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">📖</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-3 sm:mb-4">Nenhum livro encontrado</h3>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">Que tal adicionar o primeiro livro à sua coleção?</p>
            <a
              href="/cadastro"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-white font-medium text-base sm:text-lg rounded-lg hover:bg-slate-700 transition-colors"
            >
              Cadastrar Primeiro Livro
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
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
