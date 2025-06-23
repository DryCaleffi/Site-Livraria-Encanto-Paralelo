"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = __importDefault(require("../database/sqlite"));
const tabela2Model = {
    async cadastrar(data) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO tabela2 (coluna1, coluna2) VALUES (?, ?)';
            sqlite_1.default.run(sql, [data.coluna1, data.coluna2], function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    },
    async selecionar() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM tabela2';
            sqlite_1.default.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
};
exports.default = tabela2Model;
//# sourceMappingURL=tabela2Model.js.map