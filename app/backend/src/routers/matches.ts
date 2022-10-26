import { Router } from 'express';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';

const matchesRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchesRouter.get('/', matchController.getMatches);
matchesRouter.post('/', matchController.createMatches);

export default matchesRouter;
