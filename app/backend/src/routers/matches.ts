import { Router } from 'express';
import matchMiddleware from '../middlewares/middlewareMatch';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';
import tokenMiddleware from '../middlewares/middlewareToken';

const matchesRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchesRouter.get('/', matchController.getMatches);
matchesRouter.post('/', tokenMiddleware, matchMiddleware, matchController.createMatch);
matchesRouter.patch('/:id', matchController.updateMatch);
matchesRouter.patch('/:id/finish', matchController.finishMatch);

export default matchesRouter;
