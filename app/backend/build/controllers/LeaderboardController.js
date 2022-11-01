"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LeaderboardController {
    constructor(service) {
        this.getHomeLeaderboard = async (_req, res) => {
            const homeLeaderboard = await this._service.getHomeLeaderboard();
            res.status(200).json(homeLeaderboard);
        };
        this.getAwayLeaderboard = async (_req, res) => {
            const awayLeaderboard = await this._service.getAwayLeaderboard();
            res.status(200).json(awayLeaderboard);
        };
        this.getLeaderboard = async (_req, res) => {
            const leaderboard = await this._service.getLeaderboard();
            res.status(200).json(leaderboard);
        };
        this._service = service;
    }
}
exports.default = LeaderboardController;
//# sourceMappingURL=LeaderboardController.js.map