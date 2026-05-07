"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
const controller = new user_controller_1.UserController();
router.get("/user", controller.getUsers);
router.get("/user/profile/:id", controller.getProfile);
router.post("/user", controller.createUser);
router.put("/user/:id", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map