"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Team extends sequelize_1.Model {
}
Team.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    teamName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'Team',
    tableName: 'teams',
    timestamps: false,
    underscored: true,
});
exports.default = Team;
//# sourceMappingURL=Team.js.map