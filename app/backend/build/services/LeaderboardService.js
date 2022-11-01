"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awayLeaderboardQuery_1 = require("../helpers/awayLeaderboardQuery");
const leaderboardHomeQuery_1 = require("../helpers/leaderboardHomeQuery");
const leaderboardQuery_1 = require("../helpers/leaderboardQuery");
const index_1 = require("../database/models/index");
class LeaderboardService {
    constructor(_model = index_1.default) {
        this._model = _model;
        this.getHomeLeaderboard = async () => {
            const [homeLeaderboard] = await this._model.query(leaderboardHomeQuery_1.default);
            return homeLeaderboard;
        };
        this.getAwayLeaderboard = async () => {
            const [awayLeaderboard] = await this._model.query(awayLeaderboardQuery_1.default);
            return awayLeaderboard;
        };
        this.getLeaderboard = async () => {
            const [leaderboard] = await this._model.query(leaderboardQuery_1.default);
            return leaderboard;
        };
    }
}
exports.default = LeaderboardService;
//# sourceMappingURL=LeaderboardService.js.map