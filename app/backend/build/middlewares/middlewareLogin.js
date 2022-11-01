"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("../helpers/customError");
const loginSchema_1 = require("../schemas/loginSchema");
function loginMiddleware(req, res, next) {
    const { email, password } = req.body;
    const { error } = loginSchema_1.default.validate({ email, password });
    if (error)
        throw new customError_1.default(400, error.message);
    next();
}
exports.default = loginMiddleware;
//# sourceMappingURL=middlewareLogin.js.map