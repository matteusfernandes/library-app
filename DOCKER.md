# Configuração Docker - Library App

## Como Executar o Projeto com Docker

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Passos para execução

1. **Clone o repositório e navegue até a pasta**:
```bash
git clone <repository-url>
cd desafio-micks
```

2. **Configure as variáveis de ambiente**:
```bash
cp .env.example .env
```

3. **Execute o projeto**:
```bash
docker compose up -d
```

4. **Acesse a aplicação**:
### 4. Verificar se a aplicação está funcionando

Acesse:
- **Frontend**: http://localhost:3000 (Interface do usuário da biblioteca)
- **Backend API**: http://localhost:3001/livros (API JSON para gerenciar livros)
- **Banco de dados MySQL**: localhost:3307 (Conexão direta ao banco)

Para testar a API via comando:
```bash
# Listar todos os livros
curl http://localhost:3001/livros

# Testar se frontend está carregando
curl http://localhost:3000
```

## Status do Docker ✅ FUNCIONAL

A aplicação está totalmente configurada para funcionar com Docker e Docker Compose.

## Portas Configuradas

- **Frontend (Next.js)**: http://localhost:3000
- **Backend (Express)**: http://localhost:3001
- **Database (MySQL)**: localhost:3306

## Comandos Docker

### Iniciar todos os serviços
```bash
docker compose up -d
```

### Parar todos os serviços
```bash
docker compose down
```

### Ver logs dos serviços
```bash
# Todos os logs
docker compose logs

# Logs específicos
docker compose logs backend
docker compose logs frontend
docker compose logs db
```

### Status dos containers
```bash
docker compose ps
```

## Arquitetura

### docker-compose.yml
- **MySQL 8.0**: Banco de dados com healthcheck configurado
- **Backend**: Node.js 18 com API Express
- **Frontend**: Next.js 15 com build otimizado

### Variáveis de Ambiente (.env)
```
# BACKEND
API_PORT=3001

# FRONTEND
PORT=3000

# DATABASE
MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=123456
MYSQL_DB_NAME=library-app
MYSQL_DATABASE=library-app
MYSQL_USER=root
MYSQL_PASSWORD=123456
```

## Dockerfiles

### Backend
- Base: Node.js 18 Alpine
- Porta interna: 3001 (mapeada para 3001 externa)
- Modo: Production
- Cache otimizado com layers separadas

### Frontend
- Base: Node.js 18 Alpine
- Porta interna: 3000 (mapeada para 3000 externa)
- Build: Next.js otimizado
- Assets estáticos servidos pelo próprio Next.js

## Dependências entre Serviços

1. **Database** inicia primeiro
2. **Backend** aguarda database estar healthy
3. **Frontend** aguarda backend estar rodando

## Volumes

- `mysql_data`: Persistência dos dados do MySQL
- `mysql_config`: Configurações do MySQL
- Bind mounts para desenvolvimento (hot reload)

## Healthchecks

- **MySQL**: `mysqladmin ping` com 10 tentativas
- **Backend/Frontend**: Dependências configuradas no docker-compose

## Rede

Todos os serviços comunicam através da rede interna `desafio-micks_default` criada automaticamente pelo Docker Compose.

## Troubleshooting

### Porta em uso
Se alguma porta estiver em uso, edite o arquivo `.env` e mude as portas:
- `API_PORT` para o backend (padrão: 3001)
- `PORT` para o frontend (padrão: 3000)
- Para MySQL, edite o docker-compose.yml (padrão: 3306)

### Logs com erro
```bash
docker compose logs [service-name]
```

### Rebuild completo
```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

**Configuração finalizada em**: 05/01/2025
**Status**: ✅ FUNCIONAL - Todos os containers rodando corretamente
