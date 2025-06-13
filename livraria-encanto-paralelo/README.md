# Livraria Encanto Paralelo

Este projeto é uma aplicação web desenvolvida em Node.js utilizando TypeScript, seguindo o padrão MVC (Model-View-Controller). A aplicação permite o cadastro e seleção de dados em duas tabelas, com login obrigatório para acesso a funcionalidades restritas.

## Estrutura do Projeto

- **src/**: Contém todo o código-fonte da aplicação.
  - **controllers/**: Controladores que gerenciam a lógica de negócios.
    - `authController.ts`: Gerencia a autenticação de usuários.
    - `tabela1Controller.ts`: Gerencia operações da tabela1.
    - `tabela2Controller.ts`: Gerencia operações da tabela2.
  - **models/**: Modelos que definem a estrutura dos dados e interações com o banco de dados.
    - `userModel.ts`: Define a estrutura do usuário.
    - `tabela1Model.ts`: Define a estrutura da tabela1.
    - `tabela2Model.ts`: Define a estrutura da tabela2.
  - **routes/**: Define as rotas da aplicação.
    - `authRoutes.ts`: Rotas relacionadas à autenticação.
    - `tabela1Routes.ts`: Rotas para a tabela1.
    - `tabela2Routes.ts`: Rotas para a tabela2.
  - **middlewares/**: Middlewares que interceptam requisições.
    - `authMiddleware.ts`: Verifica se o usuário está autenticado.
  - **database/**: Configuração e conexão com o banco de dados SQLite.
    - `sqlite.ts`: Contém funções para executar consultas no banco de dados.
  - **views/**: Contém as views da aplicação.
    - **layouts/**: Layouts utilizados pelas views.
      - `main.ejs`: Layout principal.
    - **auth/**: Views relacionadas à autenticação.
      - `login.ejs`: Formulário de login.
    - **tabela1/**: Views relacionadas à tabela1.
      - `index.ejs`: Lista de registros da tabela1.
      - `cadastro.ejs`: Formulário para cadastrar novos registros na tabela1.
    - **tabela2/**: Views relacionadas à tabela2.
      - `index.ejs`: Lista de registros da tabela2.
      - `cadastro.ejs`: Formulário para cadastrar novos registros na tabela2.
  - **public/**: Arquivos estáticos da aplicação.
    - **css/**: Estilos CSS.
      - `style.css`: Estilos utilizados nas páginas.
    - **js/**: Scripts JavaScript.
      - `script.js`: Scripts utilizados nas páginas.
    - `index.html`: Página inicial do projeto.
  - `app.ts`: Ponto de entrada da aplicação.
- `package.json`: Configuração do npm, listando dependências e scripts.
- `tsconfig.json`: Configuração do TypeScript.
- `src/types/index.d.ts`: Definições de tipos personalizados para o projeto.

## Funcionalidades

- Cadastro e seleção de dados em duas tabelas.
- Autenticação de usuários com login obrigatório.
- Interface web com formulários e listas de registros.

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/DryCaleffi/Livraria_Encanto_Paralelo.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd Livraria_Encanto_Paralelo
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor:
   ```
   npm start
   ```

Acesse a aplicação em `http://localhost:3000`.