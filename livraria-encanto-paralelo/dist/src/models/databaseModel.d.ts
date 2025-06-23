export declare class Database {
    private db;
    private dbPath;
    constructor();
    init(): Promise<void>;
    private createTables;
    private seedInitialData;
    run(query: string, params?: any[]): Promise<void>;
    get(query: string, params?: any[]): Promise<any>;
    all(query: string, params?: any[]): Promise<any[]>;
    close(): void;
}
//# sourceMappingURL=databaseModel.d.ts.map