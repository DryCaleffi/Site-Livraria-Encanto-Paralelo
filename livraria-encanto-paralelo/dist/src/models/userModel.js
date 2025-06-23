"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = findUser;
const sqlite_1 = __importDefault(require("../database/sqlite"));
// Função para buscar usuário por username e password
async function findUser(username, password) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
        sqlite_1.default.get(sql, [username, password], (err, row) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(row ? row : null);
            }
        });
    });
}
//# sourceMappingURL=userModel.js.map