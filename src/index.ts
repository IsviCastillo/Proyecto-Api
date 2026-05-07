import 'dotenv/config'
import express, {Request, Response} from "express"
import 'reflect-metadata'
import { Database } from "./database/db"
const app = express()

async function main(): Promise<void> {
  const db: Database = Database.getDataBaseInstance();
  await db.init();
}

app.get('/', (req: Request, res: Response): Response<any, Record<string, any>> => res.send('Hello World!'))

app.listen(3000, async () => {
  console.log('Servidor iniciado en el puerto 3000');
  await main();
})