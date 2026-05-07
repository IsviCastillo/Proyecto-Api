"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const service = new user_service_1.UserService();
class UserController {
    async getUsers(req, res) {
        const data = await service.getAll();
        res.json({ status: 200, data });
    }
    async getProfile(req, res) {
        const data = await service.getById(req.params.id);
        res.json({ status: 200, data });
    }
    async createUser(req, res) {
        try {
            const data = await service.create(req.body);
            res.json({ status: 200, data });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async updateUser(req, res) {
        try {
            const data = await service.update(req.params.id, req.body);
            res.json({ status: 200, data });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async deleteUser(req, res) {
        try {
            await service.delete(req.params.id);
            res.json({ status: 200, message: "Eliminado" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map