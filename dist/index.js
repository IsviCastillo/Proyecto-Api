"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const db_1 = require("./database/db");
const app = (0, express_1.default)();
async function main() {
    const db = db_1.Database.getDataBaseInstance();
    await db.init();
}
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, async () => {
    console.log('Servidor iniciado en el puerto 3000');
    await main();
});
//# sourceMappingURL=index.js.map