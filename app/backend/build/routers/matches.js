"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import matchMiddleware from '../middlewares/middlewareMatch';
const MatchService_1 = require("../services/MatchService");
const MatchController_1 = require("../controllers/MatchController");
const middlewareToken_1 = require("../middlewares/middlewareToken");
const matchesRouter = (0, express_1.Router)();
const matchService = new MatchService_1.default();
const matchController = new MatchController_1.default(matchService);
matchesRouter.get('/', matchController.getMatches);
matchesRouter.post('/', middlewareToken_1.default, matchController.createMatch);
matchesRouter.patch('/:id', matchController.updateMatch);
matchesRouter.patch('/:id/finish', matchController.finishMatch);
exports.default = matchesRouter;
//# sourceMappingURL=matches.js.map