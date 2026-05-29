import 'dotenv/config';
import express, { Request, Response } from "express";
import 'reflect-metadata';
import cors from "cors";
import { Database } from "./database/db";
import userRouter from "./routes/user.routes";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/product.routes";
import orderRouter from "./routes/order.routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", orderRouter);

// Ruta principal
app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.send('Hello World!')
);

async function main(): Promise<void> {

  const db: Database = Database.getDataBaseInstance();

  await db.init();

  app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
  });

}

main();