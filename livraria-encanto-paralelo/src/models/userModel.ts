import db from '../database/sqlite';
export interface User {
    id?: number;
    username: string;
    password?: string; // A senha não deve ser exposta em todas as operações
}

// Função para buscar usuário por username e password
export async function findUser(username: string, password: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
        db.get(sql, [username, password], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row ? (row as User) : null);
            }
        });
    });
}