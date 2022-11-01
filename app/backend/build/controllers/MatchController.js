"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MatchController {
    constructor(service) {
        this.getMatches = async (req, res) => {
            const { inProgress } = req.query;
            const state = inProgress === 'true';
            const matches = await this._service.getMatches();
            if (inProgress) {
                const matchesInProgress = await this._service.getMatchesInProgress(state);
                return res.status(200).json(matchesInProgress);
            }
            return res.status(200).json(matches);
        };
        this.createMatch = async (req, res) => {
            const newMatch = await this._service.createMatch(req.body);
            res.status(201).json(newMatch);
        };
        this.updateMatch = async (req, res) => {
            const { id } = req.params;
            const updatedMatch = await this._service.updateMatch(id, req.body);
            res.status(200).json(updatedMatch);
        };
        this.finishMatch = async (req, res) => {
            await this._service.finishMatch(req.params.id);
            res.status(200).json({ message: 'Finished' });
        };
        this._service = service;
    }
}
exports.default = MatchController;
//# sourceMappingURL=MatchController.js.map