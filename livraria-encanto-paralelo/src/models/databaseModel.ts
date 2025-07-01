import sqlite3 from 'sqlite3';
import path from 'path';
import fs from 'fs';

// Criação do modelo base da tabela no banco de dados SQLite para a livraria
export class Database {
  private db: sqlite3.Database | null = null;
  private dbPath: string;

  constructor() {
    // Garantir que o diretório database existe
    const dbDir = path.join(__dirname, '../../database');
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }
    this.dbPath = path.join(dbDir, 'livraria.db');
  }

  public async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('🗄️  Conectado ao banco SQLite');
        this.createTables()
          .then(resolve)
          .catch(reject);
      });
    });
  }

  // Apenas a tabela de usuários
  private async createTables(): Promise<void> {
    const queries = [
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
    ];

    for (const query of queries) {
      await this.run(query);
    }
  }

  public async run(query: string, params: any[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public async get(query: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }
      this.db.get(query, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  public async all(query: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }
      this.db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public close(): void {
    if (this.db) {
      this.db.close((err) => {
        if (err) {
          console.error('Erro ao fechar banco:', err);
        } else {
          console.log('🔒 Conexão com banco fechada');
        }
      });
    }
  }
}