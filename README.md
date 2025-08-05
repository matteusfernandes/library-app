# 📚 Library App - Sistema de Gerenciamento de Biblioteca

> **Desafio prático para vaga de Desenvolvedor Full Stack** - Uma aplicação completa para gerenciamento de livros com interface moderna e API robusta.

## 🎯 Visão Geral

A **Library App** é um sistema completo de gerenciamento de biblioteca que permite:

- ✅ **CRUD completo** de livros (Create, Read, Update, Delete)
- 🌐 **Interface web moderna** construída com Next.js 15 + TypeScript
- 🚀 **API RESTful** desenvolvida em Node.js + Express
- 📊 **Banco de dados MySQL** com Sequelize ORM
- 🐳 **Containerização completa** com Docker e Docker Compose
- 🎨 **Design responsivo** com Tailwind CSS

## 🚀 Início Rápido (Docker - Recomendado)

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### Executar o projeto

1. **Clone o repositório**:
```bash
git clone https://github.com/matteusfernandes/library-app.git
cd library-app
```

2. **Configure as variáveis de ambiente**:
```bash
cp .env.example .env
```

3. **Execute com Docker**:
```bash
docker compose up -d
```

4. **Acesse a aplicação**:
- 🌐 **Frontend**: http://localhost:3000
- 🔌 **API**: http://localhost:3001/livros
- 📊 **MySQL**: localhost:3307

### ✅ Verificar se está funcionando
```bash
# Verificar containers
docker compose ps

# Testar a API
curl http://localhost:3001/livros

# Ver logs
docker compose logs
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - Gerenciamento de estado

### Backend
- **Node.js 18** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **MySQL 8.0** - Banco de dados relacional

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **ESLint** - Análise estática de código

## 📁 Estrutura do Projeto

```
library-app/
├── 📂 back-end/           # API REST em Node.js + Express
│   ├── src/
│   │   ├── api/           # Configuração do servidor
│   │   ├── books/         # Controllers e Services dos livros
│   │   ├── database/      # Modelos, migrações e seeders
│   │   ├── middlewares/   # Middlewares personalizados
│   │   └── routes/        # Definição das rotas
│   └── Dockerfile
├── 📂 front-end/          # Interface em Next.js + TypeScript
│   ├── src/
│   │   ├── app/           # App Router do Next.js 15
│   │   ├── components/    # Componentes reutilizáveis
│   │   └── api/           # Cliente HTTP
│   └── Dockerfile
├── 📂 scripts/            # Scripts de configuração
├── docker-compose.yml     # Orquestração dos containers
├── .env.example          # Template de variáveis de ambiente
└── DOCKER.md             # Documentação completa do Docker
```

## 🔧 Desenvolvimento Local (Sem Docker)

### Backend

1. **Navegue para o diretório do backend**:
```bash
cd back-end
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure o banco de dados**:
```bash
# Configure suas variáveis de ambiente no .env
npm run db:reset
```

4. **Execute o backend**:
```bash
npm start
# Disponível em: http://localhost:3001
```

### Frontend

1. **Navegue para o diretório do frontend**:
```bash
cd front-end
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o frontend**:
```bash
npm run dev
# Disponível em: http://localhost:3000
```

## 🧪 Testes Automatizados

O projeto utiliza **TDD (Test Driven Development)** com cobertura completa:

### Backend
```bash
cd back-end
npm test
```
- ✅ Testes de integração da API
- ✅ Testes dos services  
- ✅ Testes dos models

### Frontend  
```bash
cd front-end
npm test
```
- ✅ Testes de componentes
- ✅ Testes de integração

## 📋 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Busca livro por ID |
| `POST` | `/livros` | Cria novo livro |
| `PUT` | `/livros/:id` | Atualiza livro |
| `DELETE` | `/livros/:id` | Remove livro |

### Exemplo de uso da API:
```bash
# Listar livros
curl http://localhost:3001/livros

# Criar livro
curl -X POST http://localhost:3001/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Novo Livro","editora":"Editora","anoPublicacao":2025}'
```

## 🔍 Linter e Qualidade de Código

O projeto utiliza **ESLint** para análise estática de código:

```bash
# Backend
cd back-end
npm run lint

# Frontend  
cd front-end
npm run lint
```

**Dica**: Instale a [extensão ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VS Code para análise em tempo real.

## 📖 Funcionalidades

### Interface Web
- 📋 **Lista de livros** com visualização em cards
- ➕ **Cadastro de novos livros** com validação
- ✏️ **Edição de livros existentes**
- 🗑️ **Exclusão de livros**
- 🔍 **Pesquisa e filtros**
- 📱 **Design responsivo**

### API REST
- 🔌 **Endpoints RESTful** completos
- ✅ **Validação de dados**
- 🛡️ **Middleware de erro personalizado**
- 📊 **Healthchecks** para containers
- 🔄 **Relacionamentos com Sequelize**

## 🐳 Docker

Para documentação completa sobre Docker, consulte: **[DOCKER.md](./DOCKER.md)**

### Comandos úteis:
```bash
# Iniciar aplicação
docker compose up -d

# Parar aplicação  
docker compose down

# Ver logs
docker compose logs

# Rebuild containers
docker compose build --no-cache

# Status dos containers
docker compose ps
```

## 🚀 Evolução do Projeto

### ✅ Migração para Next.js 15
- Migração completa de React para **Next.js 15**
- Implementação do **App Router**
- Adição de **TypeScript** para tipagem
- **Tailwind CSS** para design system
- Componentes reutilizáveis e organizados

### 🔄 Melhorias Implementadas  
- Interface moderna e responsiva
- Estados de loading e feedback visual
- Validação robusta client/server-side
- Containerização otimizada
- Documentação completa

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📝 Licença

Este projeto foi desenvolvido como desafio técnico para vaga de desenvolvedor.

---

### 💻 **Desenvolvido por** 

**[Matteus Fernandes](https://github.com/matteusfernandes)** 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matteusfernandes/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/matteusfernandes)

**2022-2025** | Atualizado em Agosto de 2025
