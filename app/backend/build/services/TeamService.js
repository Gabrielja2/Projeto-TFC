"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../database/models/Team");
class TeamService {
    constructor() {
        this.getTeams = async () => {
            const teams = await Team_1.default.findAll();
            return teams;
        };
        this.getTeam = async (id) => {
            const [team] = await Team_1.default.findAll({ where: { id } });
            return team;
        };
    }
}
exports.default = TeamService;
//# sourceMappingURL=TeamService.js.map