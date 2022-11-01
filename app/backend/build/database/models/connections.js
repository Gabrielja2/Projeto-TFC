"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const promise_1 = require("mysql2/promise");
dotenv_1.default.config();
const connection = promise_1.default.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});
exports.default = connection;
//# sourceMappingURL=connections.js.map