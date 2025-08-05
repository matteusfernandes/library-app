'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../lib/api';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    titulo: '',
    editora: '',
    anoPublicacao: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpar mensagens ao alterar campos
    setError(null);
    setSuccessMessage(null);
  };

  const validateForm = () => {
    if (!formData.titulo.trim()) {
      setError('Título é obrigatório');
      return false;
    }
    if (!formData.editora.trim()) {
      setError('Editora é obrigatória');
      return false;
    }
    if (!formData.anoPublicacao.trim()) {
      setError('Ano de publicação é obrigatório');
      return false;
    }
    
    const ano = parseInt(formData.anoPublicacao);
    if (isNaN(ano) || ano < 1000 || ano > new Date().getFullYear()) {
      setError('Ano de publicação deve ser um número válido');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setLoading(true);
      setError(null);
      
      const data = {
        ...formData,
        anoPublicacao: parseInt(formData.anoPublicacao),
      };

      await api.post('/livros', data);
      
      setSuccessMessage('Livro cadastrado com sucesso!');
      setFormData({
        titulo: '',
        editora: '',
        anoPublicacao: '',
      });
    } catch (err) {
      console.error('Erro ao cadastrar livro:', err);
      setError('Erro ao cadastrar livro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-parchment-50 via-warm-50 to-sage-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✍️</div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Cadastrar Novo Livro
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expanda sua biblioteca digital adicionando um novo livro à sua coleção.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-book border border-warm-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                label="📚 Título do Livro"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Digite o título do livro"
                required
              />
              
              <Input
                type="text"
                label="🏢 Editora"
                name="editora"
                value={formData.editora}
                onChange={handleChange}
                placeholder="Digite o nome da editora"
                required
              />
              
              <Input
                type="number"
                label="📅 Ano de Publicação"
                name="anoPublicacao"
                value={formData.anoPublicacao}
                onChange={handleChange}
                placeholder="Digite o ano de publicação"
                min="1000"
                max={new Date().getFullYear()}
                required
              />
              
              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Cadastrando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">📖</span>
                    Cadastrar Livro
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {error && (
            <div className="mt-6 bg-gradient-to-r from-accent-100 to-accent-200 border border-accent-400 text-accent-700 px-6 py-4 rounded-lg flex items-center shadow-sm">
              <span className="text-xl mr-3">⚠️</span>
              <span>{error}</span>
            </div>
          )}
          
          {successMessage && (
            <div className="mt-6 bg-gradient-to-r from-sage-100 to-sage-200 border border-sage-400 text-sage-700 px-6 py-4 rounded-lg flex items-center shadow-sm animate-fade-in">
              <span className="text-xl mr-3">✅</span>
              <span>Livro cadastrado com sucesso! Sua biblioteca foi atualizada.</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
