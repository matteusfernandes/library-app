# Migração do Front-end para Next.js

## Resumo
Esta migração converte o front-end de React puro para Next.js 15, mantendo toda a funcionalidade existente.

## Principais Alterações

### Estrutura do Projeto
- **Antes**: `front-end/` com Create React App
- **Depois**: `front-end-nextjs/` com Next.js 15

### Tecnologias Utilizadas
- Next.js 15.4.5
- TypeScript
- Tailwind CSS
- Axios para comunicação com a API

### Estrutura de Arquivos
```
front-end-nextjs/
├── src/
│   ├── app/                 # App Router do Next.js
│   │   ├── page.tsx        # Página inicial (Home)
│   │   ├── livros/
│   │   │   └── page.tsx    # Página de listagem de livros
│   │   ├── pesquisa/
│   │   │   └── page.tsx    # Página de pesquisa
│   │   ├── cadastro/
│   │   │   └── page.tsx    # Página de cadastro
│   │   ├── layout.tsx      # Layout raiz
│   │   └── globals.css     # Estilos globais
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── BookCard.tsx
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── lib/
│   │   └── api.ts          # Configuração do Axios
│   └── types/
│       └── book.ts         # Tipos TypeScript
├── .env.local              # Variáveis de ambiente
├── Dockerfile              # Container Docker
└── package.json
```

### Funcionalidades Implementadas

#### 1. **Página Inicial (Home)**
- Layout responsivo com Tailwind CSS
- Mesma estrutura e conteúdo da versão React

#### 2. **Listagem de Livros (/livros)**
- Carregamento assíncrono de dados
- Estados de loading e error
- Cards responsivos
- Funcionalidade de excluir livros

#### 3. **Pesquisa de Livros (/pesquisa)**
- Pesquisa por ID do livro
- Validação de entrada
- Feedback visual para estados de loading/error
- Suporte a Enter para pesquisar

#### 4. **Cadastro de Livros (/cadastro)**
- Formulário com validação
- Campos: título, editora, ano de publicação
- Validação de ano de publicação
- Feedback de sucesso/erro

### Componentes Reutilizáveis

#### Header
- Navegação entre páginas
- Design responsivo com Tailwind CSS
- Links com hover effects

#### BookCard
- Exibição das informações do livro
- Botão opcional de exclusão
- Design consistente com shadow e hover effects

#### Button
- Variantes: primary, secondary, danger
- Tamanhos: sm, md, lg
- Estados de disabled e loading

#### Input
- Suporte a labels e mensagens de erro
- Validação visual
- Refs para formulários controlados

### Melhorias Implementadas

1. **TypeScript**: Tipagem completa para melhor desenvolvimento
2. **Tailwind CSS**: Design system consistente e responsivo
3. **Error Boundaries**: Melhor tratamento de erros
4. **Loading States**: Feedback visual durante carregamentos
5. **Validação de Formulários**: Validação client-side robusta
6. **Performance**: Otimizações do Next.js (SSR, otimização de imagens, etc.)

### Configuração Docker

O `docker-compose.yml` foi atualizado para:
- Usar o novo diretório `front-end-nextjs`
- Expor a porta 3000 (padrão do Next.js)
- Configurar variáveis de ambiente adequadas

### Variáveis de Ambiente
- `NEXT_PUBLIC_API_URL`: URL da API do backend (padrão: http://localhost:3001)

### Como Executar

#### Desenvolvimento
```bash
cd front-end-nextjs
npm install
npm run dev
```

#### Produção com Docker
```bash
docker-compose up --build
```

### Próximos Passos

1. **Testes**: Implementar testes unitários e de integração
2. **PWA**: Configurar como Progressive Web App
3. **SEO**: Implementar metadata dinâmica
4. **Performance**: Adicionar lazy loading e otimizações
5. **Acessibilidade**: Melhorar suporte a screen readers

### Compatibilidade

- Mantém 100% de compatibilidade com a API existente
- Interface e funcionalidades idênticas à versão React
- Melhoria na experiência do usuário com estados de loading
- Design mais moderno e responsivo
