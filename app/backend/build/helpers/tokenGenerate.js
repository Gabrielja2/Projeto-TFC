"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = require("dotenv");
const customError_1 = require("./customError");
dotenv.config();
const generateToken = async (payload) => {
    const jwtconfig = {
        expiresIn: '15d',
    };
    const token = (0, jsonwebtoken_1.sign)({ payload }, 'jwt_secret', jwtconfig);
    return token;
};
const decodeToken = (token) => {
    try {
        const decodedtoken = (0, jsonwebtoken_1.verify)(token, 'jwt_secret');
        return decodedtoken;
    }
    catch (error) {
        throw new customError_1.default(401, 'Token must be a valid token');
    }
};
exports.decodeToken = decodeToken;
exports.default = generateToken;
//# sourceMappingURL=tokenGenerate.js.map