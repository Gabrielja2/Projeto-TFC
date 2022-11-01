"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const customError_1 = require("../helpers/customError");
const tokenGenerate_1 = require("../helpers/tokenGenerate");
class UserController {
    constructor(service) {
        this.login = async (req, res) => {
            const user = await this._service.login(req.body);
            const validatePassword = await bcrypt.compare(req.body.password, user.password);
            if (!validatePassword)
                throw new customError_1.default(401, 'Incorrect email or password');
            const token = await (0, tokenGenerate_1.default)(user);
            res.status(200).json({ token });
        };
        this.validate = async (req, res) => {
            const { authorization } = req.headers;
            const role = await this._service.getRole(authorization);
            res.status(200).json({ role });
        };
        this._service = service;
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map