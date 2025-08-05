export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-slate-900 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-white text-xl font-bold">BiblioTech</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Biblioteca Digital
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Sistema de gerenciamento de livros funcionando!
          </p>
          <div className="space-x-4">
            <a
              href="/livros"
              className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Ver Livros
            </a>
            <a
              href="/cadastro"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cadastrar Livro
            </a>
            <a
              href="/pesquisa"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Pesquisar
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
