import { Database } from 'sqlite3';
export declare class Tabela1Model {
    private db;
    constructor(db: Database);
    create(data: any): Promise<void>;
    findAll(): Promise<any[]>;
}
export default Tabela1Model;
//# sourceMappingURL=tabela1Model.d.ts.map