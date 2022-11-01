"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenGenerate_1 = require("../helpers/tokenGenerate");
function tokenMiddleware(req, res, next) {
    const { authorization } = req.headers;
    (0, tokenGenerate_1.decodeToken)(authorization);
    next();
}
exports.default = tokenMiddleware;
//# sourceMappingURL=middlewareToken.js.map