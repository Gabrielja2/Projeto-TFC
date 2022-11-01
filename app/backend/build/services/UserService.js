"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("../helpers/customError");
const User_1 = require("../database/models/User");
const tokenGenerate_1 = require("../helpers/tokenGenerate");
class UserService {
    constructor() {
        this.login = async ({ email }) => {
            const user = await User_1.default.findOne(({ where: { email } }));
            if (user === null)
                throw new customError_1.default(401, 'Incorrect email or password');
            return user;
        };
        this.getRole = async (token) => {
            const { payload } = (0, tokenGenerate_1.decodeToken)(token);
            return payload.role;
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map