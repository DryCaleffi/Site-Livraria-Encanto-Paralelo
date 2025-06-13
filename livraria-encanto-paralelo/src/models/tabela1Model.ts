import { Database } from 'sqlite3';

export class Tabela1Model {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public create(data: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO tabela1 (coluna1, coluna2) VALUES (?, ?)';
            this.db.run(sql, [data.coluna1, data.coluna2], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    public findAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM tabela1';
            this.db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}