"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Database {
    constructor() {
        this.db = null;
        // Garantir que o diretório database existe
        const dbDir = path_1.default.join(__dirname, '../../database');
        if (!fs_1.default.existsSync(dbDir)) {
            fs_1.default.mkdirSync(dbDir, { recursive: true });
        }
        this.dbPath = path_1.default.join(dbDir, 'livraria.db');
    }
    async init() {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3_1.default.Database(this.dbPath, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                console.log('🗄️  Conectado ao banco SQLite');
                this.createTables()
                    .then(() => this.seedInitialData())
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    async createTables() {
        const queries = [
            // Tabela de usuários
            `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(255) NOT NULL,
        telefone VARCHAR(20),
        endereco TEXT,
        data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
        ativo BOOLEAN DEFAULT 1
      )`,
            // Tabela de categorias
            `CREATE TABLE IF NOT EXISTS categorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50) NOT NULL UNIQUE,
        descricao TEXT,
        ativo BOOLEAN DEFAULT 1
      )`,
            // Tabela de livros
            `CREATE TABLE IF NOT EXISTS livros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(200) NOT NULL,
        autor VARCHAR(150) NOT NULL,
        isbn VARCHAR(20) UNIQUE,
        categoria_id INTEGER,
        preco DECIMAL(10,2) NOT NULL,
        descricao TEXT,
        imagem_url VARCHAR(255),
        estoque INTEGER DEFAULT 0,
        disponivel BOOLEAN DEFAULT 1,
        data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (categoria_id) REFERENCES categorias (id)
      )`,
            // Tabela de favoritos
            `CREATE TABLE IF NOT EXISTS favoritos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        livro_id INTEGER NOT NULL,
        data_adicao DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (livro_id) REFERENCES livros (id),
        UNIQUE(user_id, livro_id)
      )`
        ];
        for (const query of queries) {
            await this.run(query);
        }
    }
    async seedInitialData() {
        // Verificar se já existem dados
        const categoryCount = await this.get('SELECT COUNT(*) as count FROM categorias');
        if (categoryCount.count > 0)
            return;
        // Inserir categorias iniciais
        const categorias = [
            { nome: 'Ficção', descricao: 'Romances e histórias ficcionais' },
            { nome: 'Fantasia', descricao: 'Livros de fantasia e mundos imaginários' },
            { nome: 'Mistério', descricao: 'Suspense e histórias de mistério' },
            { nome: 'Romance', descricao: 'Histórias românticas' },
            { nome: 'Aventura', descricao: 'Livros de aventura e ação' },
            { nome: 'Clássicos', descricao: 'Literatura clássica mundial' }
        ];
        for (const categoria of categorias) {
            await this.run('INSERT INTO categorias (nome, descricao) VALUES (?, ?)', [categoria.nome, categoria.descricao]);
        }
        // Inserir livros iniciais
        const livros = [
            {
                titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
                autor: 'J.R.R. Tolkien',
                isbn: '9788533613379',
                categoria_id: 2,
                preco: 45.90,
                descricao: 'Primeira parte da épica trilogia de fantasia de Tolkien.',
                imagem_url: '/images/books/senhor-aneis-1.jpg',
                estoque: 15
            },
            {
                titulo: 'Dom Casmurro',
                autor: 'Machado de Assis',
                isbn: '9788594318602',
                categoria_id: 6,
                preco: 29.90,
                descricao: 'Um dos maiores clássicos da literatura brasileira.',
                imagem_url: '/images/books/dom-casmurro.jpg',
                estoque: 20
            },
            {
                titulo: 'Assassinato no Expresso do Oriente',
                autor: 'Agatha Christie',
                isbn: '9788525432622',
                categoria_id: 3,
                preco: 34.90,
                descricao: 'Clássico do mistério com Hercule Poirot.',
                imagem_url: '/images/books/expresso-oriente.jpg',
                estoque: 12
            },
            {
                titulo: 'Orgulho e Preconceito',
                autor: 'Jane Austen',
                isbn: '9788544001677',
                categoria_id: 4,
                preco: 32.90,
                descricao: 'Romance clássico inglês sobre Elizabeth Bennet.',
                imagem_url: '/images/books/orgulho-preconceito.jpg',
                estoque: 18
            }
        ];
        for (const livro of livros) {
            await this.run(`INSERT INTO livros (titulo, autor, isbn, categoria_id, preco, descricao, imagem_url, estoque) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [livro.titulo, livro.autor, livro.isbn, livro.categoria_id,
                livro.preco, livro.descricao, livro.imagem_url, livro.estoque]);
        }
        console.log('🌱 Dados iniciais inseridos no banco!');
    }
    async run(query, params = []) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }
            this.db.run(query, params, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
    async get(query, params = []) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }
            this.db.get(query, params, (err, row) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(row);
                }
            });
        });
    }
    async all(query, params = []) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
    close() {
        if (this.db) {
            this.db.close((err) => {
                if (err) {
                    console.error('Erro ao fechar banco:', err);
                }
                else {
                    console.log('🔒 Conexão com banco fechada');
                }
            });
        }
    }
}
exports.Database = Database;
//# sourceMappingURL=databaseModel.js.map