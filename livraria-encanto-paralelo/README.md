# Livraria Encanto Paralelo

Este projeto é uma aplicação web desenvolvida em **Node.js** com **TypeScript**, utilizando o padrão **MVC (Model-View-Controller)**. O sistema permite cadastro e autenticação de usuários, além de manipulação de dados em tabelas do banco de dados **SQLite**. A interface utiliza **EJS** para renderização dinâmica e reaproveitamento de componentes.

## Estrutura do Projeto

- **src/**
  - **controllers/**: Lógica de negócio e controle das rotas.
    - `authController.ts`: Autenticação de usuários (login/cadastro).
    - Outros controllers para tabelas adicionais, se necessário.
  - **models/**: Modelos de dados e acesso ao banco.
    - `userModel.ts`: Modelo e funções para usuários.
    - Outros models para tabelas adicionais, se necessário.
    - `databaseModel.ts`: Configuração e conexão com o SQLite.
  - **routes/**: Definição das rotas da aplicação.
    - `authRoutes.ts`: Rotas de autenticação.
    - Outras rotas para tabelas adicionais, se necessário.
  - **middlewares/**: Middlewares para autenticação e outras funções.
    - `authMiddleware.ts`: Verifica se o usuário está autenticado.
  - **views/**: Templates EJS para renderização das páginas.
    - **partials/**: Componentes reutilizáveis (ex: navbar, footer).
    - **auth/**: Telas de login e cadastro.
    - **pages/**: Outras páginas do sistema.
  - **public/**: Arquivos estáticos (CSS, JS, imagens).
    - **css/**: Estilos.
    - **js/**: Scripts.
- **app.ts**: Configuração principal do Express.
- **server.ts**: Inicialização do servidor.
- **package.json**: Dependências e scripts do projeto.
- **tsconfig.json**: Configuração do TypeScript.
- **src/types/**: Tipos personalizados para o projeto.

## Funcionalidades

- Cadastro e login de usuários (com validação).
- Autenticação obrigatória para acessar áreas restritas.
- Manipulação de dados em tabelas do banco SQLite.
- Interface web dinâmica com EJS e componentes reutilizáveis.
- Estrutura organizada em MVC.

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/DryCaleffi/Livraria_Encanto_Paralelo.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd Livraria_Encanto_Paralelo
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```
5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Observações

- Todo o backend está em TypeScript.
- O banco de dados utilizado é SQLite.
- O padrão MVC é seguido em toda a estrutura.
- O EJS é utilizado para todas as views, com includes para componentes repetitivos.
- Para produção, recomenda-se utilizar hash de senha (ex: bcrypt).

---