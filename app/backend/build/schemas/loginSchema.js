"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const RESPONSE = 'All fields must be filled';
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': RESPONSE,
        'string.empty': RESPONSE,
    }),
    password: Joi.string().required().messages({
        'any.required': RESPONSE,
        'string.empty': RESPONSE,
    }),
});
exports.default = loginSchema;
//# sourceMappingURL=loginSchema.js.map