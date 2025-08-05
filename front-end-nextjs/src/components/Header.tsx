import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
              📚 Library App
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/livros" 
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Livros
            </Link>
            <Link 
              href="/cadastro" 
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cadastrar
            </Link>
            <Link 
              href="/pesquisa" 
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Pesquisar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
