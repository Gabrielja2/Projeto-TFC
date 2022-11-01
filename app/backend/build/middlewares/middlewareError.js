"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, _next) => {
    res.status(err.status || 500).json({ message: err.message });
};
exports.default = errorHandler;
//# sourceMappingURL=middlewareError.js.map