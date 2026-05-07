"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_1 = require("../database/db");
const user_entity_1 = require("../entities/user.entity");
class UserService {
    constructor() {
        this.repo = db_1.Database.getDataBaseInstance().getDataSource().getRepository(user_entity_1.User);
    }
    async getAll() {
        return await this.repo.find();
    }
    async getById(id) {
        return await this.repo.findOneBy({ id });
    }
    async create(data) {
        if (!data.nombre)
            throw new Error("Nombre requerido");
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Email inválido");
        }
        const user = this.repo.create(data);
        return await this.repo.save(user);
    }
    async update(id, data) {
        const user = await this.getById(id);
        if (!user)
            throw new Error("Usuario no encontrado");
        Object.assign(user, data);
        return await this.repo.save(user);
    }
    async delete(id) {
        const user = await this.getById(id);
        if (!user)
            throw new Error("Usuario no encontrado");
        return await this.repo.remove(user);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map