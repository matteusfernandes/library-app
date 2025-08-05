'use client';

import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-parchment-50 via-warm-50 to-sage-50">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-5xl sm:text-6xl mb-4">📚</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Biblioteca Digital
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Bem-vindo ao seu sistema de gerenciamento de livros! Organize, cadastre e explore sua coleção pessoal de forma simples e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Card Ver Livros */}
          <Link href="/livros" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-book border border-warm-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">📖</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 text-center">
                Meus Livros
              </h3>
              <p className="text-sm sm:text-base text-slate-600 text-center mb-3 sm:mb-4">
                Visualize todos os livros da sua coleção pessoal
              </p>
              <div className="text-center">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-slate-800 text-white rounded-md group-hover:bg-slate-700 transition-colors text-sm sm:text-base">
                  Ver Coleção →
                </span>
              </div>
            </div>
          </Link>

          {/* Card Cadastrar */}
          <Link href="/cadastro" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-book border border-warm-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">✍️</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 text-center">
                Cadastrar Livro
              </h3>
              <p className="text-sm sm:text-base text-slate-600 text-center mb-3 sm:mb-4">
                Adicione novos livros à sua biblioteca digital
              </p>
              <div className="text-center">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md group-hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Adicionar →
                </span>
              </div>
            </div>
          </Link>

          {/* Card Pesquisar */}
          <Link href="/pesquisa" className="group sm:col-span-2 lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-book border border-warm-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 text-center">
                Pesquisar
              </h3>
              <p className="text-sm sm:text-base text-slate-600 text-center mb-3 sm:mb-4">
                Encontre rapidamente qualquer livro na sua coleção
              </p>
              <div className="text-center">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-md group-hover:bg-green-700 transition-colors text-sm sm:text-base">
                  Buscar →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Seção de Estatísticas */}
        <div className="mt-12 sm:mt-16 text-center px-2">
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-book border border-warm-300">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
              🎯 Sua Jornada Literária
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
              Organize sua biblioteca, acompanhe suas leituras e descubra novos horizontes através dos livros.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-800">∞</div>
                <div className="text-xs sm:text-sm text-slate-600">Possibilidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-800">📚</div>
                <div className="text-xs sm:text-sm text-slate-600">Organização</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-800">✨</div>
                <div className="text-xs sm:text-sm text-slate-600">Descobertas</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
