# :rocket: Repositório do desafio prático para vaga de Desenvolvedor da Empresa Micks - Library App!

## Contexto

O desafio proposto era a construção de uma **API** para uma livraria que faça as principais operações **C.R.U.D** e uma interface web para consumir todas as rotas da **API**.

## Protótipo e Diagrama de ER

## Instruções
1. Clone o repositório
- `git clone git@github.com:matteusfernandes/library-app.git`
- Entre na pasta do repositório que você acabou de clonar:
    - `cd library-app`

2. Instale as dependências e inicialize o projeto
- ⚠️ IMPORTANTE ⚠️: Para testar o Projeto localmente, é fundamental configurar o arquivo de variáveis de ambiente `.env` (de `environment`) dentro da pasta `./back-end`, conforme exemplo em `.env.example`, na mesma pasta, e o `.env` na pasta raiz do projeto para ultilizar o `docker-compose`. Esse arquivo servirá de referência para o projeto e caso não exista, será utilizado valores `default` pro processo (O que pode estourar erro no teste local, caso suas configurações não sejam as mesmas).

- ⚠️ IMPORTANTE ⚠️: Esse projeto está pré-configurado para o uso do docker, rodando assim **3** containers: **Front-End**, **Back-End** e **Database**.

  ### **Utilizando Docker**

  #### Caso não possua o Docker e Docker Compose em sua máquina:

    - O primeiro passo para utilizar o Docker é realizar a sua instalação. Isso nos dará acesso à sua interface de linha de comando (CLI). Caso você já possua alguma versão de Docker instalada na sua máquina e queira refazer o processo de instalação para atualizar ou para corrigir algum problema, primeiro você deve remover os pacotes da versão que está na sua máquina. Para isso, utilize o seguinte comando no terminal:

    `sudo apt-get remove docker* containerd runc`

    Caso nenhum dos pacotes esteja instalado, esse comando retornará o erro `E: Impossível encontrar o <nome-do-pacote>`. Nesse caso, é só prosseguir com a instalação.

    `sudo apt-get install docker-ce docker-ce-cli containerd.io`

    - Instalando as dependências iniciais

      `sudo apt-get install \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg \
      lsb-release`

    - Adicionando a chave pública do repositório Docker em nossa máquina

      `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
    
    - Adicionando o repositório remoto na lista do apt

      `echo \
        "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
        | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`

    - Instalando o Docker

      `sudo apt-get update`
      `sudo apt-get install docker-ce docker-ce-cli containerd.io`

    - Adicionando seu usuário ao grupo de usuários Docker

      `sudo groupadd docker`
      `sudo usermod -aG docker $USER`
      `newgrp docker`
    
    - Inicie o Daemon do Docker

      `sudo systemctl start docker`

    - Valide a instalação

      `docker run hello-world`

    - Instale o Docker Compose

      `sudo apt install docker-compose`

  #### Caso possua o Docker e Docker Compose em sua máquina:

    - Na pasta raiz do projeto execute o comando abaixo para inicilizar o construção das imagens e inicilização dos containers:

      `docker-compose up -d`

    - Após a conclusão do build e inicialização dos containers, ultilize o seguinte comando para listar os containers ativos:
      
      `docker ps`
    
    - Acesse o container do **Back-End** através do comando:

      `docker exec -it <numero_do_container> bash`

    - Execute o seguinte comando para criar e povoar o Banco de Dados:

      `npm run db:reset`
    
    - Abra seu navegador e acesse:

      `http://localhost:3000`

  ### **Sem Ultilizar Docker**

  - Na pasta raiz do projeto execute o comando:

    `npm run prestart`

    Este comando irá instalar as dependencias tanto do **back-end** quanto do **front-end**

  - Navegue até a pasta do **back-end**:

    `cd back-end`

  - Inicialize o **banco de dados**:

    `npm run db:reset`

  - Inicialize o **back-end**:

    `npm start`

  - Retorne a pasta raiz:

    `cd ..`

  - Navegue até a pasta do **front-end**:

    `cd front-end`

  - Inicialize o **front-end**:

    `npm start`

  - Abra seu navegador e acesse:

    `http://localhost:3000`

## Testes Automatizados

  Durante o desenvolvimento do projeto foram criados diversos testes para garantir o funcionamento da API, para executar os testes basta navegar até o diretório do **front-end** `cd front-end` ou do **back-end** `cd back-end` e ultilizar o comando `npm test`;

## Desenvolvimento
  Para construção da API foi ultilizado o método TDD - Test Driven Development, onde primeiro foram escritos testes para então ser implementadas soluções que garantissem o sucesso daquele teste. Logo após, o código passava por uma refatoração e então novos testes eram escritos.

  No **back-end** foram testadas tanto a integração da API, quanto para os services da rota e para o model do banco de dados.

  No **front-end** foram escritos apenas testes do contexto geral do App.

  Para o banco de dados, a solução escolhida foi ultilizar ORM `Object-Relational Mapping` com o **sequelize** ultilizando `MySql`

## Linter

Foi usado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `library-app/back-end/package.json`
- `library-app/front-end/package.json`

Para poder rodar os `ESLint` basta executar o comando `npm install` dentro do projeto de forma individual, ou seja, precisa-se executar esse comando dentro da pasta `back-end` e também na pasta `front-end` e depois `npm run lint` dentro de cada uma dessas pastas, assim você verifica as particularidades individualmente. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Devido ao fato de as configurações das regras do `ESLint` dos projetos de front e back **serem diferentes**, **é preciso executar o `ESLint` em cada projeto**.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
  - **Dica**: Abra separadamente cada pasta do projeto (`back-end` e `front-end` em `VSCode`s separados, para tirar proveito do `ESLint` individual de cada projeto).

#### 💻 **Desenvolvido por** [@matteusfernandes](https://github.com/matteusfernandes) • 2022 🔗 [LinkedIn](https://www.linkedin.com/in/matteusfernandes/)
