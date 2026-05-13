import 'dotenv/config';
import express, { Request, Response } from "express";
import 'reflect-metadata';

import { Database } from "./database/db";
import userRouter from "./routes/user.routes";

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Rutas de usuarios
app.use("/api", userRouter);

async function main(): Promise<void> {

  const db: Database = Database.getDataBaseInstance();

  await db.init();
}

// Ruta principal
app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.send('Hello World!')
);

app.listen(3000, async () => {

  console.log('Servidor iniciado en el puerto 3000');

  await main();
});

app.use(express.json());
app.use("/api", userRouter);
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
}
);