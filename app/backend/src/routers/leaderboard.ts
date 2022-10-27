import { Router } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRouter.get('/home', leaderboardController.getHomeLeaderboard);

export default leaderboardRouter;
