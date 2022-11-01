"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Team_1 = require("./Team");
class Matche extends sequelize_1.Model {
}
Matche.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    homeTeam: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    homeTeamGoals: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    awayTeam: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    awayTeamGoals: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    inProgress: {
        type: sequelize_1.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'Matche',
    tableName: 'matches',
    timestamps: false,
    underscored: true,
});
Matche.belongsTo(Team_1.default, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Team_1.default, { foreignKey: 'awayTeam', as: 'teamAway' });
exports.default = Matche;
//# sourceMappingURL=Matche.js.map