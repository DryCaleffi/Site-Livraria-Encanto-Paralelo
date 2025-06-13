// import { Database } from 'sqlite3';

// export class UserModel {
//     private db: Database;

//     constructor(db: Database) {
//         this.db = db;
//     }

//     public createUser(username: string, password: string): Promise<void> {
//         return new Promise((resolve, reject) => {
//             const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
//             this.db.run(sql, [username, password], function (err) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve();
//                 }
//             });
//         });
//     }

//     public getUserByUsername(username: string): Promise<any> {
//         return new Promise((resolve, reject) => {
//             const sql = 'SELECT * FROM users WHERE username = ?';
//             this.db.get(sql, [username], (err, row) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(row);
//                 }
//             });
//         });
//     }
// }
// src/models/User.ts
export interface User {
    id?: number;
    username: string;
    password?: string; // A senha não deve ser exposta em todas as operações
}