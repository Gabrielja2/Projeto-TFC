"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeaderboardService_1 = require("../services/LeaderboardService");
const LeaderboardController_1 = require("../controllers/LeaderboardController");
const leaderboardRouter = (0, express_1.Router)();
const leaderboardService = new LeaderboardService_1.default();
const leaderboardController = new LeaderboardController_1.default(leaderboardService);
leaderboardRouter.get('/home', leaderboardController.getHomeLeaderboard);
leaderboardRouter.get('/away', leaderboardController.getAwayLeaderboard);
leaderboardRouter.get('/', leaderboardController.getLeaderboard);
exports.default = leaderboardRouter;
//# sourceMappingURL=leaderboard.js.map