import db from '../database/sqlite'; 

const tabela2Model = {
    async cadastrar(data: any) {
        return new Promise<void>((resolve, reject) => {
            const sql = 'INSERT INTO tabela2 (coluna1, coluna2) VALUES (?, ?)';
            db.run(sql, [data.coluna1, data.coluna2], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },

    async selecionar() {
        return new Promise<any[]>((resolve, reject) => {
            const sql = 'SELECT * FROM tabela2';
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
};

export default tabela2Model;