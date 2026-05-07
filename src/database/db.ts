import {DataSource } from 'typeorm';
import {User} from '../entities/user.entity';

const host = process.env.DB_HOST || 'localhost';
const port: number = Number (process.env.DB_PORT) || 5432;
const username: string = process.env.DB_USERNAME || 'postgres';
const password: string = process.env.DB_PASSWORD || 'postgres';
const database: string = process.env.DB_DATABASE || 'db_ecommerce';

console.log(`DB config: host=${host} port=${port} user=${username} database=${database}`);

export class Database {
    private static instance: Database;
    private readonly typeormDataSource: DataSource;
  private initializingPromise: Promise<void> | null = null;
    private readonly host: string;
    private readonly port: number;
    private readonly username: string;
    private readonly password: string;
    private readonly database: string;

    private constructor(host: string, port: number, username: string, password: string, database: string) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.database = database;
        this.typeormDataSource = new DataSource({
            type: 'postgres',
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            database: this.database,
            entities: [User],
            // Evitar sincronización automática en tiempo de ejecución para prevenir
            // queries paralelos sobre el mismo cliente (y el DeprecationWarning de pg).
            // Habilitar migraciones en su lugar en entornos reales.
            synchronize: false
        });
    }

    public static getDataBaseInstance(): Database {
      if (!Database.instance) {
        Database.instance = new Database(host, port, username, password, database);
      }
      return Database.instance;
    }

    public getDataSource(): DataSource {
        return this.typeormDataSource;
    }

    public async init(): Promise<void> {
      if (this.typeormDataSource.isInitialized) return;
      if (this.initializingPromise) return this.initializingPromise;

      this.initializingPromise = (async () => {
        try {
          await this.typeormDataSource.initialize();
          console.log('Base de datos conectada exitosamente');
        } catch (error) {
          console.error('Error al conectar con la base de datos:', error);
          process.exit(1);
        } finally {
          this.initializingPromise = null;
        }
      })();

      return this.initializingPromise;
  }  
}