# 📚 Livraria Encanto Paralelo

Este projeto é uma aplicação web desenvolvida em **Node.js** com **TypeScript**, utilizando o padrão **MVC (Model-View-Controller)**. O sistema permite cadastro e autenticação de usuários, além de manipulação de dados em tabelas do banco de dados **SQLite**. A interface utiliza **EJS** para renderização dinâmica e reaproveitamento de componentes.

---

## 👥 Desenvolvedoras

Projeto acadêmico desenvolvido por:  
- **Adryelle Calefi**  
- **Tabata Etiéle**

---
## Telas do Projeto 
Tela de incio
![image](https://github.com/user-attachments/assets/fa3a5b0e-fa2c-40e1-8f7b-5384cf2a0529)

Tela de cadastro 
![image](https://github.com/user-attachments/assets/c458bbb0-6d07-426d-bc42-1007354f57cd)

Tela de Quem somos 
![image](https://github.com/user-attachments/assets/3e06125c-8e92-4827-b5b5-ebd36fc3d9d6)

Responsividade ✅

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **SQLite**
- **EJS**
- **MVC Pattern**

---
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
- Manipulação de dados em tabelas do banco SQLite.
- Interface web dinâmica com EJS e componentes reutilizáveis.
- Estrutura organizada em MVC.

---

## ✅ Pré-requisitos

Para que o projeto funcione corretamente, é necessário ter instalado em sua máquina:

1. **SQLite** — banco de dados relacional leve utilizado pelo projeto.  
   - [Baixar SQLite](https://www.sqlite.org/download.html)
2. **Node.js** — ambiente de execução para JavaScript/TypeScript no servidor.  
   - [Baixar Node.js](https://nodejs.org/)
3. **Express** — framework web para Node.js.  
   - Para instalar, rode:
     ```bash
     npm install express
     ```

> 💡 Dica: ao rodar `npm install` após clonar o projeto, todas as dependências listadas no `package.json` serão instaladas automaticamente, incluindo o **Express**.
--- 

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

## Guia de Usuário 
## Melhorias Futuras
- Implementar hash de senhas com bcrypt
- Adicionar CRUD completo para gerenciamento de livros
- Melhorar layout com framework CSS (ex: Bootstrap)
- Implementar testes unitários
- Deploy em servidor para acesso online

## Observações

- Todo o backend está em TypeScript.
- O banco de dados utilizado é SQLite.
- O padrão MVC é seguido em toda a estrutura.
- O EJS é utilizado para todas as views, com includes para componentes repetitivos.
- Para produção, recomenda-se utilizar hash de senha (ex: bcrypt).

---
# 📜 Licença

Este projeto é de uso acadêmico, desenvolvido para fins didáticos. Sinta-se livre para estudar, adaptar e contribuir.

---

📬 Contato

📧 Adryelle Calefi — https://github.com/DryCaleffi

📧 Tabata Etiéle — https://github.com/tabataetiele
