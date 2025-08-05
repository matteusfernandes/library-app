interface Book {
  id: number;
  titulo: string;
  editora: string;
  anoPublicacao: number;
}

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (id: number) => void;
}

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
        {book.titulo}
      </h3>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <span className="font-medium">Editora:</span> {book.editora}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Ano de Publicação:</span> {book.anoPublicacao}
        </p>
      </div>
      
      {(onEdit || onDelete) && (
        <div className="flex gap-2 pt-4 border-t border-gray-100">
          {onEdit && (
            <button
              onClick={() => onEdit(book)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              Editar
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(book.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
            >
              Excluir
            </button>
          )}
        </div>
      )}
    </div>
  );
}
