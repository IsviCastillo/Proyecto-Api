"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const host = process.env.DB_HOST || 'localhost';
const port = Number(process.env.DB_PORT) || 5432;
const username = process.env.DB_USERNAME || 'postgres';
const password = process.env.DB_PASSWORD || 'postgres';
const database = process.env.DB_DATABASE || 'db_ecommerce';
class Database {
    constructor(host, port, username, password, database) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.database = database;
        this.typeormDataSource = new typeorm_1.DataSource({
            type: 'postgres',
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            database: this.database,
            entities: [user_entity_1.User],
            synchronize: true
        });
    }
    static getDataBaseInstance() {
        if (!Database.instance) {
            Database.instance = new Database(host, port, username, password, database);
        }
        return Database.instance;
    }
    getDataSource() {
        return this.typeormDataSource;
    }
    async init() {
        try {
            await this.typeormDataSource.initialize();
            await this.typeormDataSource.query('SELECT 1');
            console.log('Base de datos conectada exitosamente');
        }
        catch (error) {
            console.error('Error al conectar con la base de datos:', error);
            process.exit(1);
        }
    }
}
exports.Database = Database;
//# sourceMappingURL=db.js.map