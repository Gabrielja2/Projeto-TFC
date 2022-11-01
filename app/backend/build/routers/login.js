"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserService_1 = require("../services/UserService");
const UserController_1 = require("../controllers/UserController");
const middlewareLogin_1 = require("../middlewares/middlewareLogin");
const loginRouter = (0, express_1.Router)();
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
loginRouter.post('/', middlewareLogin_1.default, userController.login);
loginRouter.get('/validate', userController.validate);
exports.default = loginRouter;
//# sourceMappingURL=login.js.map