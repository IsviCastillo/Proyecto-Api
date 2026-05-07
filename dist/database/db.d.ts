import { DataSource } from 'typeorm';
export declare class Database {
    private static instance;
    private readonly typeormDataSource;
    private readonly host;
    private readonly port;
    private readonly username;
    private readonly password;
    private readonly database;
    private constructor();
    static getDataBaseInstance(): Database;
    getDataSource(): DataSource;
    init(): Promise<void>;
}
//# sourceMappingURL=db.d.ts.map