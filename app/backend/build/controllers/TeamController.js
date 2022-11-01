"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamController {
    constructor(service) {
        this.getTeams = async (_req, res) => {
            const users = await this._service.getTeams();
            res.status(200).json(users);
        };
        this.getTeamById = async (req, res) => {
            const { id } = req.params;
            const user = await this._service.getTeam(id);
            res.status(200).json(user);
        };
        this._service = service;
    }
}
exports.default = TeamController;
//# sourceMappingURL=TeamController.js.map