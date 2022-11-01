"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = require("../helpers/customError");
const Matche_1 = require("../database/models/Matche");
const Team_1 = require("../database/models/Team");
class MatchService {
    constructor() {
        this.getMatches = async () => {
            const matches = await Matche_1.default.findAll({ include: [
                    { model: Team_1.default, as: 'teamHome', attributes: { exclude: ['id'] } },
                    { model: Team_1.default, as: 'teamAway', attributes: { exclude: ['id'] } },
                ],
            });
            return matches;
        };
        this.getMatchesInProgress = async (inProgress) => {
            const matchesInProgress = await Matche_1.default.findAll({
                where: { inProgress },
                include: [
                    { model: Team_1.default, as: 'teamHome', attributes: { exclude: ['id'] } },
                    { model: Team_1.default, as: 'teamAway', attributes: { exclude: ['id'] } },
                ],
            });
            return matchesInProgress;
        };
        this.createMatch = async (body) => {
            const newMatch = await Matche_1.default.create({ ...body, inProgress: true });
            const matchByAwayTeamId = await Matche_1.default.findByPk(body.awayTeam);
            const matchByHomeTeamId = await Matche_1.default.findByPk(body.homeTeam);
            if (!matchByAwayTeamId || !matchByHomeTeamId) {
                throw new customError_1.default(404, 'There is no team with such id!');
            }
            if (body.homeTeam === body.awayTeam) {
                throw new customError_1.default(422, 'It is not possible to create a match with two equal teams');
            }
            return newMatch;
        };
        this.updateMatch = async (id, body) => {
            const { homeTeamGoals, awayTeamGoals } = body;
            await Matche_1.default.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
            const updated = await Matche_1.default.findOne({ where: { id } });
            return updated;
        };
        this.finishMatch = async (id) => {
            const matchToUpdate = await Matche_1.default.update({ inProgress: false }, { where: { id } });
            return matchToUpdate;
        };
    }
}
exports.default = MatchService;
//# sourceMappingURL=MatchService.js.map