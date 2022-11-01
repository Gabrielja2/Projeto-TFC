"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeamService_1 = require("../services/TeamService");
const TeamController_1 = require("../controllers/TeamController");
const teamsRouter = (0, express_1.Router)();
const teamService = new TeamService_1.default();
const teamController = new TeamController_1.default(teamService);
teamsRouter.get('/', teamController.getTeams);
teamsRouter.get('/:id', teamController.getTeamById);
exports.default = teamsRouter;
//# sourceMappingURL=teams.js.map