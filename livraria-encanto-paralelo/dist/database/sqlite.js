"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/database/db.ts
const sqlite3_1 = __importDefault(require("sqlite3"));
const DBSOURCE = "src/database/database.sqlite";
const db = new sqlite3_1.default.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Conectado ao banco de dados SQLite.');
        db.run(`
            CREATE TABLE IF NOT EXISTS login (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT
            )
        `);
        // Você pode criar sua segunda tabela aqui também
    }
});
exports.default = db;
