"use strict";
// src/server.ts
//import app from './app';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
//});
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(express_1.default.static(path_1.default.join(__dirname, 'views')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Configurar EJS como engine de template
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// Rotas principais
app.get('/', (req, res) => {
    try {
        // Tenta renderizar com EJS primeiro
        res.render('index', {
            title: 'Livraria Encanto Paralelo',
            livros: [
                { titulo: 'Dom Casmurro', autor: 'Machado de Assis', preco: 29.90 },
                { titulo: 'O Cortiço', autor: 'Aluísio Azevedo', preco: 24.90 },
                { titulo: 'Iracema', autor: 'José de Alencar', preco: 19.90 }
            ]
        });
    }
    catch (error) {
        // Se não encontrar template EJS, serve HTML estático
        res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
    }
});
app.get('/cadastro', (req, res) => {
    try {
        res.render('cadastro', { title: 'Cadastro - Livraria Encanto Paralelo' });
    }
    catch (error) {
        res.sendFile(path_1.default.join(__dirname, 'views', 'pages', 'cadastro.html'));
    }
});
app.get('/compra', (req, res) => {
    try {
        res.render('compra', { title: 'Comprar Livros' });
    }
    catch (error) {
        res.sendFile(path_1.default.join(__dirname, 'views', 'pages', 'compra.html'));
    }
});
// Rota para processar cadastro
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    // Aqui você pode adicionar validação e salvar no banco
    console.log('Dados de cadastro:', { nome, email });
    res.json({
        sucesso: true,
        mensagem: 'Cadastro realizado com sucesso!',
        dados: { nome, email }
    });
});
// Rota para processar compra
app.post('/api/compra', (req, res) => {
    const { livro, quantidade, cliente } = req.body;
    console.log('Dados de compra:', { livro, quantidade, cliente });
    res.json({
        sucesso: true,
        mensagem: 'Compra processada com sucesso!',
        pedido: { id: Date.now(), livro, quantidade, cliente }
    });
});
// Middleware para tratar erros 404
app.use((req, res) => {
    res.status(404).json({
        erro: 'Página não encontrada',
        url: req.url
    });
});
// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error('Erro:', err.message);
    res.status(500).json({
        erro: 'Erro interno do servidor',
        mensagem: err.message
    });
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📚 Livraria Encanto Paralelo - Sistema Online`);
});
exports.default = app;
//# sourceMappingURL=server.js.map