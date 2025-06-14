"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabela1Model = void 0;
class Tabela1Model {
    constructor(db) {
        this.db = db;
    }
    create(data) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO tabela1 (coluna1, coluna2) VALUES (?, ?)';
            this.db.run(sql, [data.coluna1, data.coluna2], function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
    findAll() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM tabela1';
            this.db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
}
exports.Tabela1Model = Tabela1Model;
exports.default = Tabela1Model;
